import React, {useState, useEffect} from 'react';
import { getTasksData } from '../lib/tasks';
import Spinner from './utilities/Spinner';

const TaskContainer = () => {
    const [tasks, setTasks] = useState(null);

    useEffect(() => {
        console.log('using efefef')
        getTasksData(1)
            .then((res) => res.json())
            .then((data) => setTasks(data))
            .catch((err) => console.log(err));
    }, []);

    // Loading state
    if (!tasks) return <Spinner />;

    return <div>test</div>;
}

export default TaskContainer;