import React, { useEffect } from 'react';
import Column from '../components/Column';
import { useKanbanData } from '../KanbanContext';

export default function Dashboard() {

    const { items } = useKanbanData();

    useEffect(() => {
        document.title = "KanBan thingy - Dashboard";
    }, []);


    return <>
        <div id='kanban-board'>
            {items.map((column, index) =>
                <Column key={'c' + index} title={column.title} items={column.items} />
            )}
        </div>

        {/* TODO move to own component */}
        <div id="kanban-to-sort">

        </div>
    </>;
}
