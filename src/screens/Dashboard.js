import React, { useEffect, useState } from 'react';
import Column from '../components/Column';
import Sidemenu from '../components/Sidemenu';
import { useTaskManager } from '../TaskContext';
import ControlledInput from '../components/ControlledInput';
import CardPreview from '../components/CardPreview';
import { db } from '../db';
import { useLiveQuery } from "dexie-react-hooks";
import Modal from '../components/Modal';
import Button from '../components/common ui/Button';

export default function Dashboard() {

    const { getTask } = useTaskManager();


    const [modal, setModal] = useState();

    useEffect(() => {
        document.title = "Dashboard";
    }, []);

    const categories = useLiveQuery(() => db.categories.toArray());

    const tasks = useLiveQuery(() => db.tasks.toArray());

    const selectAll = () => {
        console.log('selecting all items');
    }

    const openTask = (taskId) => {

        getTask(taskId).then(
            (task) =>
                setModal(
                    <Modal
                        title={'Viewing task'}
                        closeCallback={(e) => setModal(null)}
                    >
                        <ul className='modal-keyvalues'>
                            {Object.keys(task).map(key =>
                                <li key={key}><strong>{key}</strong> <span>{task[key]}</span></li>
                            )}
                            <li>todo more...</li>
                        </ul>

                        <div className='button-group'>
                            <Button className='button bgGreen textWhite'>Green</Button>
                            <Button className='button bgRed textWhite'>Red</Button>
                            <Button className='button bgBlue textWhite'>Blue</Button>
                            <Button className='button bgOrange textWhite'>Orange</Button>
                            <Button className='button bgGreen textWhite'>Green</Button>
                            <Button className='button bgRed textWhite'>Red</Button>
                            <Button className='button bgBlue textWhite'>Blue</Button>
                            <Button className='button bgOrange textWhite'>Orange</Button>
                        </div>
                    </Modal>
                )
        );

    }

    return <>
        <div id="main-wrapper">

            <div id="row">

                <Sidemenu />

                <div className="content-wrapper">

                    {modal}

                    <ControlledInput
                        possibleArguments={['title', 'description', 'category', 'priority']}
                        PreviewComponent={(props) => <CardPreview {...props} />}
                    />

                    <div id='kanban-board'>
                        {categories?.map(category => {
                            return (
                                <Column
                                    key={category.id}
                                    category={{ ...category, index: category.id }}
                                />)
                        })}

                    </div>

                    <table className='tasks' style={{ marginTop: 10 }} >

                        <thead>
                            <tr>
                                {/*<td className='checkColumn'><input onClick={(e) => selectAll(e)} type="checkbox" /></td>*/}
                                <td>Id</td>
                                <td>Title</td>
                                <td>Description</td>
                                <td>Category</td>
                            </tr>
                        </thead>

                        <tbody>
                            {tasks?.map(task => {
                                return (
                                    <tr key={task.id} onClick={(e) =>
                                        // Ignores if the clicked element has a type. In this case we want to avoid a checkbox change to trigger the onClick
                                        // as the checkbox will have its own event handler
                                        !e.target.type && openTask(task.id)
                                    }>

                                        {/*<td><input type="checkbox" /></td>*/}
                                        <td>{task.id}</td>
                                        <td>{task.title}</td>
                                        <td>{task.description}</td>
                                        <td>categoryId: {task.categoryId}</td>
                                    </tr>);
                            })}
                        </tbody>
                    </table>

                    {/* TODO move to own component */}
                    <div id="kanban-to-sort">

                    </div>
                </div>
            </div>
        </div>
    </>;
}
