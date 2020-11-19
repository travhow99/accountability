import React, {useState, useEffect} from 'react';
import Spinner from './utilities/Spinner';

const TaskContainer = (props) => {
    let tasks = props.data ? props.data.tasks : [];
    // Loading state
    console.log(props, tasks)
    if (!tasks) return <Spinner />;

    console.log(tasks);
    return (
        <div>
            {tasks.length ? 
            (tasks.map((task) => (
                <div>
                    {task.name}
                </div>
            )))
            : 
            (
                <div>No Tasks Available</div>
            )}
        </div>
    )
}

export default TaskContainer;