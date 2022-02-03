import React, { useEffect } from 'react';
import Column from '../components/Column';
import Header from '../components/Header';
import Sidemenu from '../components/Sidemenu';
import { useKanbanData } from '../KanbanContext';

export default function Dashboard() {

    const { getTasksBelongingTo, processes } = useKanbanData();

    useEffect(() => {
        document.title = "KanBan thingy - Dashboard";
    }, []);

    return <>
        <div id="main-wrapper">
            <Header />
            <div id="row">
                <Sidemenu />
                <div className="content-wrapper">
                    <div id='kanban-board'>
                        {processes.map((process, index) =>
                            <Column
                                key={'c' + index}
                                process={{ ...process, 'items': getTasksBelongingTo(process.id) }}
                            />
                        )}
                    </div>
                    {/* TODO move to own component */}
                    <div id="kanban-to-sort">

                    </div>

                </div>

            </div>
        </div>

    </>;
}
