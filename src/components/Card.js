import { useKanbanData } from "../KanbanContext";

export default function Card({ task }) {
    const {
        taskDraggingActive,
        setTaskDraggingActive,
        currentTaskDragged,
        tasks,
        setTasks } = useKanbanData();


    /**
     * Once card starts being dragged, we keep track of the currently dragged task and update the dragging state
     * @param {*} e 
     * @param {*} task 
     */
    const onDragStartEvent = (e, task) => {
        setTaskDraggingActive(true);
        currentTaskDragged.current = task.id
    }


    /**
     * Drag ended
     * @param {*} e 
     */
    const onDragEndEvent = (e) => {
        currentTaskDragged.current = null;
        setTaskDraggingActive(false);
    }

    /**
     * A task is dragged above another task
     * TODO keep track of place in the process/column. Right now the moved task just ends up where it ends up.
     * 
     * @param {*} e 
     * @param {*} task 
     */
    const onDragEnterEvent = (e, task) => {

        // Abort if no task is being dragged
        if (!taskDraggingActive || currentTaskDragged.current === task.id) {
            return null;
        }

        // Find the task that's being dragged
        let oldTask = tasks.find(t => t.id == currentTaskDragged.current);
        // Update its process to the process of the task being hovered
        oldTask.process = task.process;
        // Update the state
        setTasks([...tasks]);
    }

    /**
     * Returns an acceptable styling class for the given priority, with a prepended prefix.
     * Example:
     *          priority = 'very important'
     *          result: priority-very-important
     * @param {*} priority 
     * @returns string
     */
    const getPriorityStyling = (priority) => {
        return !priority ? '' : 'priority-' + priority.split(' ').join('-');
    }


    return (
        <div draggable="true"
            onDragStart={(e) => onDragStartEvent(e, task)}
            onDragEnd={() => onDragEndEvent()}
            onDragEnter={(e) => onDragEnterEvent(e, task)}
            className={'drag-and-drop-item'}
        >
            <div className={'kanban-card '} >
                <div className={'wrapper ' + getPriorityStyling(task.priority)}>
                    <div className="header">{task.title}</div>
                    <div className="body">{task.description}</div>
                </div>
            </div>
        </div>
    );
}
