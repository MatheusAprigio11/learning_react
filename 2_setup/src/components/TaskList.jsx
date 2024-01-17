import React from 'react'

const TaskList = ({ tasks }) => {

    if (tasks.length === 0) {
        return <p>não há tarefas a serem mostradas.</p>;
    }

    return (
        <ul>
        {tasks.map((task) => (
            <li key={task.id}>{task.text}</li>
        ))}
        </ul>
    )
}

export default TaskList