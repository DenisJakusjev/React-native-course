import React from 'react'

export default function goallist(props) {
    return (
        <div>
            <ul className="goal-list">
                {props.goalList.length !== 0 &&
                props.goalList.map((goal) => {
                    return <li key={goal.id}>{goal.text}</li>
                })}
            </ul>
        </div>
    )
}
