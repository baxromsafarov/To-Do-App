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

const INITIAL_COSTS = [
    {
        id: 'c1',
        date: new Date(2023, 5, 12),
        description: "勉強する",
        amount: 'Lorem ipsum dolor.'
    },
    {
        id: 'c',
        date: new Date(2023, 4, 25),
        description: "試験に合格する",
        amount: 'Lorem ipsum dolor.'
    },
    {
        id: 'c3',
        date: new Date(2023, 1, 11),
        description: "ミーティング",
        amount: 'Lorem ipsum dolor.'
    }
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
            // const response = await axios.get(apiInfo.apiHost + '/csrf-token');
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

    const [costs, setCosts] = useState(INITIAL_COSTS);

    const addCostHandler = (cost) => {
        setCosts(prevCosts => {
            return [cost, ...prevCosts]
        });
    };

    return (
        <div className="container">

            <Router>
                <Header></Header>

                <Routes>
                    <Route exact path="/" element={<Main onAddCost={addCostHandler} costs={costs}/>}></Route>
                    <Route exact path="/taskform" element={<TasksForm onAddCost={addCostHandler}/>}></Route>
                    <Route exact path="/login" element={<Login/>}></Route>
                    <Route exact path="/register"
                           element={<Register apiInfo={apiInfo} axios={axiosWithToken}/>}></Route>
                    <Route exact path="/important"
                           element={<Important onAddCost={addCostHandler} costs={costs}/>}></Route>
                    <Route exact path="/calendar" element={<Calendar/>}></Route>
                    <Route path="*" element={<Error/>}></Route>
                </Routes>

            </Router>

        </div>
    );
}

export default App;

