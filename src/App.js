import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Error from "./components/Error/Error";
import TasksForm from "./components/TaskForm/TaskForm";
import {useState, useEffect} from "react";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Important from "./components/Important/Important";
import Calendar from "./components/Calendar/Calendar";
import AddTask from "./components/AddTask/AddTask";
import axios, {isCancel, AxiosError} from 'axios';
import error from "./components/Error/Error";

const initialTasks = [
    {
        id: 1,
        date: new Date(2023, 5, 12),
        description: "勉強する",
        amount: 'Lorem ipsum dolor.'
    },
    {
        id: 2,
        date: new Date(2023, 5, 12),
        description: "勉強する",
        amount: 'Lorem ipsum dolor.'
    },
];

const apiInfo = {
    host: 'http://todo.loc',
    apiHost: 'http://todo.loc/api',
}


function App() {
    const [csrfToken, setCsrfToken] = useState('')

    useEffect(() => {
        fetchCsrfToken();
    }, []);

    const fetchCsrfToken = async () => {
        try {
            const response = await axios.get(apiInfo.host + '/sanctum/csrf-cookie');
            console.log(response.data)
            setCsrfToken(response.data);
        } catch (error) {
            console.error('Getting csrf token error:', error);
        }
    }

    const axiosWithToken = axios.create({
        baseURL: apiInfo.apiHost,
        headers: {
            'X-CSRF-TOKEN': csrfToken,
            'Content-Type': 'application/json',
        },
        withCredentials: true
    })

    const [tasks, setTask] = useState(initialTasks);

    const addTaskHandler = (task) => {
        setTask(prevTasks => {
            return [task, ...prevTasks]
        });
    };

    return (
        <div className="container">

            <Router>
                <Header></Header>

                <Routes>
                    <Route exact path="/" element={<Main onAddTask={addTaskHandler} tasks={tasks}/>}></Route>
                    <Route exact path="/taskform" element={<TasksForm onAddTask={addTaskHandler}/>}></Route>
                    <Route exact path="/login" element={<Login/>}></Route>
                    <Route exact path="/register"
                           element={<Register apiInfo={apiInfo} axios={axiosWithToken}/>}></Route>
                    <Route exact path="/important"
                           element={<Important onAddTask={addTaskHandler} tasks={tasks}/>}></Route>
                    <Route exact path="/calendar" element={<Calendar/>}></Route>
                    <Route path="*" element={<Error/>}></Route>
                </Routes>

            </Router>

        </div>
    );
}

export default App;

