
export default function TaskCard({ task }) {


    const onDragStartEvent = (e, task) => {
        console.log(`Started dragging task.id: ${task.id} category.id: ${task.categoryId}`);
    }


    const onDragEndEvent = (e) => {
    }


    const onDragEnterEvent = (e, task) => {
    }

    const getPriorityStyling = (priority) => {
        return !priority ? '' : 'priority-' + priority;
    }


    return (
        <div draggable="true"
            onDragStart={(e) => onDragStartEvent(e, task)}
            onDragEnd={() => onDragEndEvent()}
            onDragEnter={(e) => onDragEnterEvent(e, task)}
            className={'drag-and-drop-item'}
        >
            <div className={'task-card '} >
                <div className={'wrapper ' + getPriorityStyling(task.priority)}>
                    <div className="header">{task.title}</div>
                    <div className="body">{task.description}
                        <br />
                        <strong>Label </strong>{task.label}
                    </div>
                </div>
            </div>
        </div>
    );
}
