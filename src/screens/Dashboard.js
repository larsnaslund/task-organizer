import React, { useEffect, useState } from 'react';
import Column from '../components/Column';
import Sidemenu from '../components/Sidemenu';
import ControlledInput from '../components/ControlledInput';
import CardPreview from '../components/CardPreview';
import { db } from '../db';
import { useLiveQuery } from "dexie-react-hooks";
import Modal from '../components/Modal';
import TaskView from '../components/TaskView';
import TaskNew from '../components/TaskNew';
import Button from '../components/common ui/Button';

export default function Dashboard() {


    const [minimalCardView, setMinimalCardView] = useState(false);

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

        db.tasks.where('id').equals(taskId).first().then(
            (task) =>
                setModal(
                    <Modal
                        outsideClickCloses={true}
                        title={'Viewing task'}
                        closeCallback={(e) => setModal(null)}
                    >
                        <TaskView task={task} />
                    </Modal>
                )
        );

    }

    const newTask = () => {

        //TODO don't let it be closed if there's any input in the fields
        const test = () => {

        }

        setModal(
            <Modal
                outsideClickCloses={true}
                title={'Create new task'}
                closeCallback={(e) => test()}
            >
                <TaskNew />
            </Modal>
        )
    }

    return <>
        <div id="main-wrapper">

            <div id="flex-wrapper">

                <Sidemenu />

                <div id="main-content">

                    {modal}

                    <ControlledInput
                        possibleArguments={['title', 'description', 'category', 'priority']}
                        PreviewComponent={(props) => <CardPreview {...props} />}
                    />
                    <Button className='button bgBlack textWhite' onClick={(e) => setMinimalCardView(!minimalCardView)}>
                        {minimalCardView ? <>Minimal cards view</> : <>Full card view</>}
                    </Button>

                    <div className={'board-view ' + (minimalCardView ? 'minimal' : '')}>

                        {categories?.map(category => {
                            return (
                                <Column
                                    key={category.id}
                                    category={{ ...category, index: category.id }}
                                />)
                        })}

                    </div>

                    <Button className='button bgGreen textWhite' onClick={(e) => newTask(e)}>New task</Button>
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
