import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Error from "./components/Error/Error";
import TasksForm from "./components/TaskForm/TaskForm";
import { useState } from "react";

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

function App() {
  
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return[cost, ...prevCosts]
    });
};
  return (
    <div className="container">
      
      <Router>
      <Header></Header>
      
        <Routes>
            <Route exact path="/main" element={<Main costs={costs}/>}></Route>
            <Route exact path="/taskform" element={<TasksForm onAddCost={addCostHandler}/>}></Route>
            <Route path="*" element={<Error/>}></Route>
        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;

