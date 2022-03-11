import React, { createRef, useRef } from 'react'
import { IoClose } from "react-icons/io5";

// outsideClickCloses = whether to close the modal if an outside click happens
export default function Modal(props) {

    const onClose = (e) => props.closeCallback && props.closeCallback(e);

    const modalBoxRef = createRef();

    // Handles any clicking related to the modal
    // If the click is outside the actual modal box (where the content is) and on the overlay area, the close function is called
    // Note: it relies on the modal background overlapping everything. Any click inside this area will trigger a check.
    // Another approach could be registering a global click event listener
    const handleClick = (e) => {
        // If outside clicks to close are enabled and an outside click happened
        if (props.outsideClickCloses && modalBoxRef.current && !modalBoxRef.current.contains(e.target)) {
            onClose(e);
        }
    }

    return (
        <div className='modal' onClick={(e) => handleClick(e)}>
            <div ref={modalBoxRef} className='modal-box'>

                <div className='modal-header'>
                    <h1 className='modal-title'>{props.title}</h1>
                    <IoClose className='modal-close' onClick={(e) => onClose(e)} />
                </div>

                <div className='modal-body'>
                    {props.children}
                </div>

            </div>
        </div >
    )
}
