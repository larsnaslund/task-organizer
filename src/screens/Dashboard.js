import React, { useEffect } from 'react';
import Column from '../components/Column';
import { useKanbanData } from '../KanbanContext';

export default function Dashboard() {

    const { getTasksBelongingTo, processes } = useKanbanData();

    useEffect(() => {
        document.title = "KanBan thingy - Dashboard";
    }, []);

    return <>
        <div id='kanban-board'>
            {processes.map((process, index) =>
                <Column key={'c' + index} title={process.title} items={getTasksBelongingTo(process.id)} />
            )}
        </div>

        {/* TODO move to own component */}
        <div id="kanban-to-sort">

        </div>
    </>;
}
