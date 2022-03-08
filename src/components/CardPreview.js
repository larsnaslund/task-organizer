import React from 'react'

export default function CardPreview(props) {

    return (
        <div className={'kanban-card'}>
            <div className={'wrapper'}>
                <div className="header">{props.title}</div>
                <div className="body">{props.description}</div>
            </div>
        </div>
    )
}
