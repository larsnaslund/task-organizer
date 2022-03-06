import React from 'react'

export default function MenuGroup(props) {

    {/*TODO router */ }
    return <div className="navigation-group">
        <div className='title'>{props.title}</div>
        <ul>
            {props.items.map((val, index) =>
                <li key={index}><a href="#">{val}</a></li>
            )}
        </ul>
    </div>;
}
