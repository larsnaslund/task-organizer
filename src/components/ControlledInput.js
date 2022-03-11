import React, { useState, useRef } from 'react';
import Input from './common ui/Input';

/**
 * TODO refactor properly once further along in overall project
 * TODO flex-wrap chips?
 */
export default function ControlledInput({ possibleArguments, PreviewComponent }) {

    const [hintText, setHintText] = useState('');
    // Input status
    const [inputActive, setInputActive] = useState(false);
    // Current input value
    const [inputValue, setInputValue] = useState('');
    // Stack keeping track of the entered arguments
    const activeArguments = useRef([]);


    /**
     * Events
    */
    const onBlur = (e) => setInputActive(false);

    const onFocus = (e) => {
        setInputActive(true);
        handleChange(e);
    }

    const handleChange = (e) => {

        // The index of the top item of the stack
        const lastIndex = (activeArguments.current.length === 0) ? 0 : activeArguments.current.length - 1;
        // Set the current value of the top item to the value of the input field
        activeArguments.current[lastIndex] = e.target.value;
        // Sync the state with the input value
        setInputValue(activeArguments.current[lastIndex]);

        // Construct a hint by printing all possible arguments and highlighting the currently active argument
        const hint = <>
            {possibleArguments.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        {/* Highlight the item if it's the current active one */}
                        {(index === lastIndex) ? <strong>{item}</strong> : item}
                        {/* Add a separator if iteration not at the end */}
                        {(index !== possibleArguments.length - 1) && <> | </>}
                    </React.Fragment>
                )
            })}
        </>

        setHintText(hint);
    }



    const handleKeyDown = (e) => {

        if (e.key === 'Tab') {
            e.preventDefault();
            // If there's a value in the input field and we aren't at the end of the possible arguments
            if (e.target.value && activeArguments.current.length < possibleArguments.length) {
                activeArguments.current.push(e.target.value)
                e.target.value = '';
            }
        }

        // If the backspace happened on an empty input, then try going back to the earlier argument
        if (e.key === 'Backspace' && (!e.target.value && activeArguments.current.length > 1)) {
            e.preventDefault();
            activeArguments.current.pop();
            e.target.value = activeArguments.current.slice(-1)[0];
        }

        // We need to make sure to call handleChange manually as the default event for the key might have been altered in the code above
        // This way we ensure the latest change is reflected
        handleChange(e);
    }


    const renderPreview = (Component) => {

        let keys = {};

        // Key value pair possible arguments with the current given values
        // For example possible arguments = ['title', 'description']
        // Current values = ['a title', a description]
        // Result: {title: 'a title', description: 'a description'}
        possibleArguments.forEach((element, index) => {
            keys[element] = activeArguments.current[index];
        });
        return <Component {...keys} />
    }


    return <>

        {/* TODO own component */}
        <div className={'smart-input ' + (inputActive ? 'focus' : '')}>
            <div className='input'>
                <Input
                    value={inputValue}
                    placeholder='Quick add task'
                    onChange={(e) => handleChange(e)}
                    onFocus={(e) => onFocus(e)}
                    onBlur={(e) => onBlur(e)}
                    onKeyDown={(e) => handleKeyDown(e)}
                />

                {inputActive &&
                    <div className='suggestion-field'>
                        {hintText}
                        {PreviewComponent &&
                            <div className='preview'>
                                {renderPreview(PreviewComponent)}
                            </div>
                        }
                    </div>}
            </div>

        </div>
    </>
}
