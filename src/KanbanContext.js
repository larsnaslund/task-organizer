import React, { useState, useEffect, createContext, useContext } from 'react';

const KanbanContext = createContext();

export function useKanbanData() {
    return useContext(KanbanContext);
}

export const KanbanProvider = (props) => {

    /*
    const priorityLevels = ['expedite', 'normal priority', 'not critical', 'low priority'];
    const task = {
        'id': 1,
        'title': 'Make coffee',
        'description': 'descriptive text',
        'priority': ''
    }*/


    const [items, setItems] = useState([]);

    const value = {
        items
    };

    useEffect(() => {
        // Set up dummy data
        const list = [
            { 'title': 'To Do', items: ['Card 1', 'Card 2', 'Card 3'] },
            { 'title': 'In Progress', items: ['Card 1', 'Card 2', 'Card 3'] },
            { 'title': 'Testing', items: ['Card 1', 'Card 2', 'Card 3'] },
            { 'title': 'Done', items: ['Card 1', 'Card 2', 'Card 3'] }
        ];
        setItems([...list]);

    }, []);

    // On item change
    useEffect(() => {
        // TODO catch and do stufff
    }, [items]);

    return (
        <KanbanContext.Provider value={value}>
            {props.children}
        </KanbanContext.Provider>
    )
}