import React, { useState, useEffect, createContext, useContext } from 'react';
import { db } from './db';

const TaskContext = createContext();

export function useTaskManager() {
    return useContext(TaskContext);
}

export const TaskProvider = (props) => {

    const [categories, setCategories] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState();

    /* Props and functions accessible from the hook */
    const value = {

    };

    // On mount
    useEffect(() => {
    }, []);


    // On item change
    useEffect(() => {
        // TODO catch and do stuff
    }, [tasks]);


    return (
        <TaskContext.Provider value={value}>
            {props.children}
        </TaskContext.Provider>
    )
}