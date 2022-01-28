import { useState } from "react";

export default function Card({ text }) {

    const [responsiveClass, setResponsiveClass] = useState('');

    const onDragStartEvent = () => {
        console.log('start');
        setResponsiveClass('dragging');
    }

    const onDragEndEvent = () => {
        console.log('end');
        setResponsiveClass('');
    }

    return (
        <div draggable onDragStart={onDragStartEvent} onDragEnd={onDragEndEvent} className={'kanban-card ' + responsiveClass}>
            {text}
        </div>
    );
}
