import React from 'react'


export default function Modal(props) {

    const onClose = (e) => {
        // If there's a callback function call it
        props.closeCallback && props.closeCallback(e);
    }

    return (
        <div className='modal'>
            <div className='modal-box'>

                <div className='modal-header'>
                    <h1 className='modal-title'>{props.title}</h1>
                    <div className='modal-close' onClick={(e) => onClose(e)}>Close</div>
                </div>

                <div className='modal-body'>
                    {props.children}
                </div>

            </div>
        </div >
    )
}
