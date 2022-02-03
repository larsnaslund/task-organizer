import React from 'react';
import { useState } from 'react/cjs/react.development';
import Button from './common ui/Button';
import Input from './common ui/Input';

export default function Header() {


    const [hintText, setHintText] = useState('');

    const onFocus = (e) => {
        handleChange(e);
    }

    const onBlur = () => {
        setHintText();
    }

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


    const handleKeyPress = (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            e.target.value += ';';
            handleChange(e);
        }
    }


    return <div id="header" className="content-wrapper">

        <div style={{ position: 'relative' }}>
            <Input
                placeholder='Quick add task'
                onChange={(e) => handleChange(e)}
                onFocus={(e) => onFocus(e)}
                onBlur={onBlur}
                onKeyDown={(e) => handleKeyPress(e)}
            />
            {hintText &&
                <div id="tooltip" style={{ background: '#FFF', color: '#000', position: 'absolute', top: 44, padding: 10, left: 16, width: 'inherit' }}>
                    {hintText}
                </div>
            }
        </div>


        {/*<Button onClick={() => console.log('click')}>Add process</Button>*/}
    </div>;
}
