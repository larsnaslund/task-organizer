import React, { useEffect } from 'react';
import Column from '../components/Column';
import Sidemenu from '../components/Sidemenu';
import { useTaskManager } from '../TaskContext';
import ControlledInput from '../components/ControlledInput';

export default function Dashboard() {

    const { tasks } = useTaskManager();

    useEffect(() => {
        document.title = "Dashboard";
    }, []);

    return <>
        <div id="main-wrapper">

            <div id="row">
                <Sidemenu />
                <div className="content-wrapper">
                    <ControlledInput />
                    <div id='kanban-board'>
                        {tasks.map((process, index) =>
                            <Column
                                key={'c' + index}
                                process={{ ...process, index: index }}
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
