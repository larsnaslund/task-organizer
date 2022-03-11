import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
import { db } from './db';
import { useLiveQuery } from "dexie-react-hooks";
import { liveQuery } from 'dexie';

const TaskContext = createContext();

export function useTaskManager() {
    return useContext(TaskContext);
}

export const TaskProvider = (props) => {

    const [categories, setCategories] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState();

    /**
     *  Interactive events
     */
    const [taskDraggingActive, setTaskDraggingActive] = useState(false);
    //{'group':0, 'task':0}
    const currentTaskDragged = useRef();


    //TODO remove
    const currentTaskDraggedProcessIndex = useRef(null);
    const currentTaskDraggedTaskIndex = useRef(null);


    const currentTaskDraggedDOM = useRef(null);
    // 

    const currentTaskProcessTarget = useRef(null);
    const currentTaskProcessTargetDOM = useRef(null);

    //TODO redo. Not very flexible at the moment
    const priorities = [
        'normal priority',
        'expedite',
        'not critical',
        'low priority'
    ];

    const defaultPriority = priorities[0];

    /* Props and functions accessible from the hook */
    const value = {
        getTask,






        tasks,
        setTasks,
        categories,


        getTasksBelongingTo,
        taskDraggingActive,
        setTaskDraggingActive,
        currentTaskDragged,
        currentTaskDraggedDOM,
        currentTaskProcessTarget,
        currentTaskProcessTargetDOM,

        // NEW STUFF
        currentTaskDraggedProcessIndex,
        currentTaskDraggedTaskIndex
    };


    /** NEW */
    function getTask(id) {
        return db.tasks.where('id').equals(id).first();
    }


    /** END NEW */

    /**
     * 
     * @param {*} title 
     * @param {*} description 
     * @param {*} priority 
     * @param {*} category 
     * @param {*} label 
     * @param {*} status 
     */
    function newTask(title, description, priority, category, label, status) {
        // Insert task into database
    }



    /*
     * TODO remove
     */
    function getTasksBelongingTo(processId) {
        return tasks.filter(task => task.process == processId);
    }

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