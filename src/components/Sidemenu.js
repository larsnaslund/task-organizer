import React from 'react';
import { useState } from 'react/cjs/react.development';
import { useKanbanData } from '../KanbanContext';

export default function Sidemenu() {

    const [activeDeleteDrop, setActiveDeleteDrop] = useState(false);

    const {
        tasks,
        taskDraggingActive,
        setTaskDraggingActive
    } = useKanbanData();

    /**
     * Show some interactivity when a task is dragged onto the drop area
     * @param {*} e 
     */
    const onDragEnter = (e) => {
        if (taskDraggingActive) {
            setActiveDeleteDrop(true);
        }
    }

    const onDragLeave = (e) => {
        setActiveDeleteDrop(false);
    }


    const onDragEnd = (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log('enbded')
    }

    return <div id="sidemenu" className="content-wrapper">

        <div
            className={"drop-area-tool delete-drop " + (activeDeleteDrop ? 'active' : '')}
            onDragEnter={(e) => onDragEnter(e)}
            onDragLeave={(e) => onDragLeave(e)}
        >
            Drop to delete
        </div>

        {/*<div className="drop-area-tool">
            Drop to duplicate
        </div>
*/}
        {/*TODO router */}
        <nav>
            <ul className="nav-list">
                {[...Array(4)].map((val, index) =>
                    <li key={index}>Menu item {index + 1}</li>
                )}
            </ul>
        </nav>
    </div>;
}
