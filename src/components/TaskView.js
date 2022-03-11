import React from 'react'
import Button from './common ui/Button';

export default function TaskView({ task }) {

    return (
        <>
            <ul className='modal-keyvalues'>
                {Object.keys(task).map(key =>
                    <li key={key}><strong>{key}</strong> <span>{task[key]}</span></li>
                )}
                <li>todo more...</li>
            </ul>

            <div className='button-group'>
                {/* Temporary test how they look */}
                <Button className='button bgGreen textWhite'>Green</Button>
                <Button className='button bgRed textWhite'>Red</Button>
                <Button className='button bgBlue textWhite'>Blue</Button>
                <Button className='button bgOrange textWhite'>Orange</Button>
            </div>
        </>
    );
}
