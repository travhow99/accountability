import useSWR from 'swr';

export function getTasksData(id) {
    const {tasks, error} = useSWR(`/api/tasks/${id}`, fetcher);

    return {
        tasks: tasks,
        isLoading: !error && !tasks,
        isError: error,
    };
}

const fetcher = (...args) => fetch(...args).then((res) => res.json());