import React, { useState } from 'react';
import Input from './common ui/Input';


export default function ControlledInput() {

    const [hintText, setHintText] = useState('');

    const onFocus = (e) => handleChange(e);
    const onBlur = () => setHintText();

    const handleChange = (e) => {

        let value = e.target.value;

        let arg = value.split(";").length;

        //TODO once functional, move into kanban hook
        let hints = [
            'title',
            'description',
            'priority',
            'process'
        ];

        let hint;

        if (arg - 1 >= hints.length) {
            return setHintText(null);
        }

        // TODO cleanup once functional
        hint = <>
            {hints.map((item, index) => {
                return <>{
                    index === arg - 1
                        ?
                        <strong>{item}</strong>
                        : item} {index < hints.length - 1 && <> | </>} </>;
            })}
        </>

        setHintText(hint);
    }


    // TODO remove the semicolon. Currently just used for visualization
    const handleKeyPress = (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            e.target.value += ';';
            handleChange(e);
        }
    }


    return <>

        {/* TODO own component */}
        <div className={'smart-input ' + (hintText ? 'focus' : '')}>
            <div className='input'>
                <Input
                    placeholder='Quick add task'
                    onChange={(e) => handleChange(e)}
                    onFocus={(e) => onFocus(e)}
                    onBlur={onBlur}
                    onKeyDown={(e) => handleKeyPress(e)}
                />
                {hintText && <div className='suggestion-field'>
                    {hintText}
                </div>}
            </div>

            {/*hintText &&
                <div className='preview' style={{ background: '#000' }}>
                    ff
                </div>
            */}

        </div>

    </>

    {/*<Button onClick={() => console.log('click')}>Add process</Button>*/ }
}
