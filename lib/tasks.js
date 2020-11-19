import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json()).catch((err) => console.log(err.json()));

const getTasksData = (id=0) => {
    const {tasks, error} = useSWR(`/api/tasks/${id}`, fetcher, {data: []});

    return {
        tasks: tasks,
        isLoading: !error && !tasks,
        isError: error,
    };
}

export default getTasksData;