import React,{useState} from 'react'

function Newgoal(props) {
    let [text, changeText] = useState("")
    //event is sended auto
    const addGoalHandler = e => {
        e.preventDefault();
        let dummyGoal = { id: Math.random().toString(), text: text }
        console.log(dummyGoal)
        props.addGoal(dummyGoal);
        changeText("")
    }


    return (
        <form className="new-Goal" onSubmit={addGoalHandler}>
            <input type="password" value={text} onChange={e => changeText(e.target.value)}/>
            <button type="submit">Add goal</button>
        </form>
    )
}

export default Newgoal
