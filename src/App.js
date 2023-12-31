import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import axios from 'axios';

import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';
import TasksForm from './components/TaskForm/TaskForm';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Important from './components/Important/Important';
import Calendar from './components/Calendar/Calendar';
import TaskId from './components/TaskId/TaskId';
import Done from "./components/Done/Done";
import AllTasks from "./components/AllTasks/AllTasks";
import Logout from "./components/Logout/Logout";
import Category from "./components/Category/Category";
import AddCategory from "./components/AddCategory/AddCategory";
import CategoryId from "./components/CategoryId/CategoryId";


// const apiInfo = {
//     host: 'http://todo.loc',
//     apiHost: 'http://todo.loc/api',
// };

const apiInfo = {
    host: 'http://manabi.uz/todo/public',
    apiHost: 'http://manabi.uz/todo/public/api',
};


function App() {
    const localUser = localStorage.getItem('userToken');
    const [tasks, setTasks] = useState([]);
    const [user, setUser] = useState();
    const [csrfToken, setCsrfToken] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [cats, setCat] = useState([]);

    const addCatHandler = (cat) => {
        setCat(prevCats => {
            return [cat, ...prevCats]
        });
    };

    useEffect(() => {
        setIsLoading(true)
        fetchCsrfToken();
        if (localUser) {
            getUserTasks();
            getUserData();
            getUserCategories();
        } else {
            const localData = getLocalStorage('tasks') || [];
            if (localData) {
                setTasks(localData);
            } else {
                setTasks([]);
            }
            setIsLoading(false);
        }
    }, []);

    // const setLocalStorage = (data, store) => {
    //     localStorage.setItem(store, JSON.stringify(data))
    // }

    const getLocalStorage = (store) => {
        return JSON.parse(localStorage.getItem(store))
    }
    const getUserData = async () => {
        try {
            const response = await loggedAxios.get('/user');
            setUser(response.data);
        } catch (error) {
            console.error('Error getting user data', error);
        }
    };


    const getUserTasks = async () => {
        try {
            const response = await loggedAxios.get('/todos');
            setTasks([...response.data.todo_list]);
            setIsLoading(false);
        } catch (error) {
            console.error('Error getting todos data', error);
        }
    };

    const fetchCsrfToken = async () => {
        try {
            const response = await axios.get(apiInfo.host + '/sanctum/csrf-cookie');
            setCsrfToken(response.data);
        } catch (error) {
            console.error('Getting csrf token error:', error);
        }
    };

    const axiosWithToken = axios.create({
        baseURL: apiInfo.apiHost,
        headers: {
            'X-CSRF-TOKEN': csrfToken,
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    });

    const loggedAxios = axios.create({
        baseURL: apiInfo.apiHost,
        headers: {
            'X-CSRF-TOKEN': csrfToken,
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
        },
        withCredentials: true,
    });

    // const addTaskToLocalStorage = () => {
    //
    // }
    const addTaskHandler = async (task) => {
        try {
            // if (localUser) {
            const response = await loggedAxios.post('/todo', {
                name: task.task_name,
                deadline: formatDate(new Date())
            });
            // } else {
            //
            // }


            getUserTasks()
            getUserCategories()
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const updateTaskHandler = async (task_id, requestData) => {
        try {
            await loggedAxios.post('/todo/' + task_id, requestData);
            window.history.back()
            getUserTasks()
            getUserCategories()
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const updateCategoryHandler = async (id, data) => {
        try {
            await loggedAxios.post('/categories/' + id, data);
            window.history.back()
            getUserTasks()
            getUserCategories()
        } catch (e) {
            console.error('Error update category:', e);
        }

    }

    const addTaskFormHandler = async (task) => {
        try {
            const request = {
                name: task.name,
                deadline: task.deadline,
                priority: task.priority,
                category: task.category
            }

            if (task?.description) request.description = task.description
            const response = await loggedAxios.post('/todo', request);
            if (response) {
                getUserTasks()
            }
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const addCategoryFormHandler = async (cat) => {
        try {
            const request = {
                title: cat.title
            }
            const response = await loggedAxios.post('/categories', request);
            getUserCategories()
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const formatDate = (date) => {
        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    };

    const sendCompleteTask = async (task_id, value) => {
        try {
            await loggedAxios.post('/complete/' + task_id, {
                completed: value
            });
            getUserTasks()
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const sendFavoriteTask = async (task_id, value) => {
        try {
            await loggedAxios.post('/favorite/' + task_id, {
                favorite: value
            });
            getUserTasks()
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const sendDeleteTask = async (task_id, target) => {
        try {
            await loggedAxios.post('/todo-delete/' + task_id);
            target.checked = false
            getUserTasks()
        } catch (error) {
            console.error('Error adding task:', error);
        }
    }

    const sendDeleteCategory = async (category_id) => {
        try {
            await loggedAxios.post('/categories-delete/' + category_id);
            getUserTasks()
            getUserCategories()
        } catch (error) {
            console.error('Error adding task:', error);
        }
    }


    const getUserCategories = async () => {
        setIsLoading(true);
        try {
            const response = await loggedAxios.get('/categories');
            setCat([...response.data]);
            setIsLoading(false);
        } catch (error) {
            console.error('Error getting todos data', error);
            setIsLoading(false);
        }
    };


    return (
        <div className="container">
            <Router>
                <Header logUser={localUser}></Header>
                <Footer></Footer>
                <Routes>
                    <Route exact path="/" element={
                        <Main onAddTask={addTaskHandler}
                              onCompiled={sendCompleteTask}
                              onFavorite={sendFavoriteTask}
                              onDelete={sendDeleteTask}
                              tasks={tasks}
                              cats={cats}/>
                    }></Route>
                    <Route path="/:id" element={isLoading ? (
                        <div className="loading">i読み込み中..</div>
                    ) : (
                        <TaskId formatDate={formatDate} tasks={tasks} cats={cats} onUpdateTask={updateTaskHandler}/>
                    )}/>
                    <Route path="/calendar/:id" element={isLoading ? (
                        <div className="loading">i読み込み中..</div>
                    ) : (
                        <TaskId formatDate={formatDate} tasks={tasks} cats={cats} onUpdateTask={updateTaskHandler}/>
                    )}></Route>
                    <Route path="/important/:id" element={isLoading ? (
                        <div className="loading">i読み込み中..</div>
                    ) : (
                        <TaskId formatDate={formatDate} tasks={tasks} cats={cats} onUpdateTask={updateTaskHandler}/>
                    )}></Route>

                    <Route exact path="/taskform" element={
                        <TasksForm formatDate={formatDate} cats={cats} onAddTask={addTaskFormHandler}/>
                    }></Route>

                    <Route exact path="/login" element={
                        <Login apiInfo={apiInfo} axios={axiosWithToken}/>
                    }></Route>
                    <Route exact path="/register" element={
                        <Register apiInfo={apiInfo} axios={axiosWithToken}/>
                    }></Route>
                    <Route exact path="/logout" element={<Logout></Logout>}></Route>
                    <Route exact path="/important" element={
                        <Important onAddTask={addTaskHandler}
                                   onCompiled={sendCompleteTask}
                                   onFavorite={sendFavoriteTask}
                                   onDelete={sendDeleteTask}
                                   tasks={tasks}
                                   cats={cats}/>
                    }></Route>

                    <Route exact path="/calendar" element={
                        <Calendar allTasks={tasks}
                                  onCompiled={sendCompleteTask}
                                  onFavorite={sendFavoriteTask}
                                  onDelete={sendDeleteTask}
                                  cats={cats}/>
                    }></Route>

                    <Route exact path="/done" element={
                        <Done tasks={tasks}
                              cats={cats}
                              onCompiled={sendCompleteTask}
                              onFavorite={sendFavoriteTask}
                              onDelete={sendDeleteTask}/>
                    }></Route>
                    <Route exact path="/done/:id" element={
                        isLoading ? (
                            <div className="loading">i読み込み中..</div>
                        ) : (
                            <TaskId formatDate={formatDate} tasks={tasks} cats={cats} onUpdateTask={updateTaskHandler}/>
                        )}></Route>
                    <Route exact path="/all"
                           element={
                               <AllTasks onAddTask={addTaskHandler}
                                         onCompiled={sendCompleteTask}
                                         onFavorite={sendFavoriteTask}
                                         onDelete={sendDeleteTask}
                                         cats={cats}
                                         tasks={tasks}/>
                           }></Route>
                    <Route exact path="/all/:id" element={
                        isLoading ? (
                            <div className="loading">i読み込み中..</div>
                        ) : (
                            <TaskId formatDate={formatDate} tasks={tasks} cats={cats} onUpdateTask={updateTaskHandler}/>
                        )}></Route>
                    <Route path="/category/:id" element={
                        <Category onAddTask={addTaskHandler} cats={cats} tasks={tasks} onCompiled={sendCompleteTask}
                                  onFavorite={sendFavoriteTask}
                                  onDelete={sendDeleteTask}/>
                    }></Route>
                    <Route path="/category/:cat_id/:id" element={
                        <TaskId formatDate={formatDate} tasks={tasks} cats={cats} onUpdateTask={updateTaskHandler}/>}
                    ></Route>
                    <Route path="/edit-category/:cat_id" element={
                        isLoading ? (
                            <div className="loading">i読み込み中..</div>
                        ) : (
                            <CategoryId tasks={tasks} cats={cats} onUpdateCategory={updateCategoryHandler}/>
                        )}></Route>
                    <Route exact path="/category" element={
                        isLoading ? (
                            <div className="loading">i読み込み中..</div>
                        ) : (
                            <AddCategory onDelete={sendDeleteCategory} cats={cats} onAddCat={addCategoryFormHandler}/>
                        )}></Route>


                    <Route path="*" element={<Error/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
