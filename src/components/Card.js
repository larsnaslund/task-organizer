import { useState } from "react";

export default function Card({ text }) {

    // TODO better name
    const [onDragClass, setOnDragClass] = useState('');

    const onDragEvent = () => {
        console.log('start');
        setOnDragClass('kanban-item-drag');
    }

    const onDragEnd = () => {
        console.log('end');
        setOnDragClass('');
    }

    return (
        <div draggable onDragStart={onDragEvent} onDragEnd={onDragEnd} className={'card ' + onDragClass}>
            {text}
        </div>
    );
}
