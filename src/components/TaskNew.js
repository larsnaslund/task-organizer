import React from 'react'
import Button from './common ui/Button';
import Input from './common ui/Input';

export default function TaskNew() {

    return (
        <>
            <Input />
            <Input />
            <Input />
            <Input />
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
