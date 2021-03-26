import React, { useState } from "react"
import "./App.css"
import GoalList from "./components/GoalFolder/goallist"
import NewGoal from "./components/newGoal/newgoal"
const App = () => {


  let [goalArray, changeGoals] = useState([])

  let addNewGoal = (newGoal) => {
    //Как умею я
    // changeGoals([...goalArray,newGoal]);

    //Лучший вариант
    //Лучший вариант если новый стейт зависит от старой копии
    changeGoals((prevGoalArray) => prevGoalArray.concat(newGoal))
  }
  return (
    <div className="course-goals">
      <h1>CourseGoals</h1>
      <NewGoal addGoal={addNewGoal} />
      <GoalList goalList={goalArray} />
    </div>
  );
}

export default App;
