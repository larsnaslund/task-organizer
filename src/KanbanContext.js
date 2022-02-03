/**
 * 
 */
import React, { useState, useEffect, createContext, useContext, useRef } from 'react';

const KanbanContext = createContext();
export function useKanbanData() {
    return useContext(KanbanContext);
}

export const KanbanProvider = (props) => {
    /*
        Visual illustration of kanban of terminology, a picture says a 1000 words.

        Process Todo    Process Doing       Process Done
        task            task                task 
        task            task                task 
    */
    const [processes, setProcesses] = useState([]);
    const [tasks, setTasks] = useState([]);

    // Tracking whether something is being dragged
    const [taskDraggingActive, setTaskDraggingActive] = useState(false);

    //
    const currentTaskDragged = useRef(null);
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
        tasks,
        setTasks,
        processes,
        getTasksBelongingTo,
        taskDraggingActive,
        setTaskDraggingActive,
        currentTaskDragged,
        currentTaskDraggedDOM,
        currentTaskProcessTarget,
        currentTaskProcessTargetDOM
    };


    /**
     * 
     * @param {*} id
     * @param {*} title 
     * @param {*} description 
     * @param {*} priority 
     * @param {*} processId current process task belongs to
     * @returns
     */
    function newTask(id, title, description, priority, processId) {
        return {
            'id': id,
            'title': title,
            'description': description,
            'priority': !priority ? defaultPriority : priority,
            'process': !processId ? null : processId
        }
    }


    /**
     * Create a new id
     * TODO change once basic functionality is done as this id depends on the task count and is not properly unique and would introduce problems with persistence
     */
    const getNewId = () => tasks.length + 1;

    /**
     * TODO should be changed once the rest is better structured. Better to just save in a format like so:
    [
        {
            process: 'todo',
            order: 1, // order in the displayed list
            items: // list of tasks belonging to this process
                [
                    {
                        id: 1,
                        title: 'task title',
                        description: 'describing the task',
                        priority: 'expedite'
                    },
                    {
                        id: 2,
                        title: 'another task title',
                        description: 'describing another task',
                        priority: 'normal priority'
                    }
                ]
        }
    ]
     * ]
     * @param {*} processId 
     * @returns 
     */
    function getTasksBelongingTo(processId) {
        return tasks.filter(task => task.process == processId);
    }


    useEffect(() => {

        // TODO properly fetch tasks

        const dummyTaskCount = 12;

        // Generate dummy processes
        let dummyProcesses = [
            { 'id': 1, 'title': 'To Do' },
            { 'id': 2, 'title': 'In Progress' },
            { 'id': 3, 'title': 'Testing' },
            { 'id': 4, 'title': 'Done' },
            { 'id': 5, 'title': 'Another one' }
        ];

        let i = 0;
        let dummyTaskPerProcess = dummyTaskCount / dummyProcesses.length;
        let process = 1;

        // Generate dummy tasks
        let dummyTasks = new Array(dummyTaskCount).fill().map((element, index) => {

            if (i >= dummyTaskPerProcess) {
                process++;
                i = 0;
            }
            i++;

            // Generate random priority
            let r = Math.floor(Math.random() * priorities.length);
            let randomPriority = priorities[r];

            return newTask(
                index + 1, // id
                `Task ${index + 1}`, // title
                `This is a dummy task`,  // description
                randomPriority, // let it assign a default
                process  // process 
            )
        });

        setProcesses(dummyProcesses);
        setTasks(dummyTasks);

    }, []);

    // On item change
    useEffect(() => {
        // TODO catch and do stuff
    }, [tasks]);


    return (

        <KanbanContext.Provider value={value}>
            {props.children}
        </KanbanContext.Provider>
    )
}