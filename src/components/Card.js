import { useState } from "react";

export default function Card({ title, text, priority }) {

    const [responsiveClass, setResponsiveClass] = useState('');

    const onDragStartEvent = () => {
        console.log('drag start');
        setTimeout(() =>
            setResponsiveClass('dragging'), 0
        );
    }

    const onDragEndEvent = () => {
        console.log('drag end');
        setResponsiveClass('');
    }

    const getPriorityStyling = (priority) => {
        return !priority ? '' : 'priority-' + priority.split(' ').join('-');
    }

    return (
        <div draggable onDragStart={onDragStartEvent} onDragEnd={onDragEndEvent} className={'kanban-card ' + responsiveClass}>
            <div className={'wrapper ' + getPriorityStyling(priority)}>
                <div className="header">{title}</div>
                <div className="body">{text}</div>
            </div>
        </div>
    );
}
