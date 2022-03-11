import React from 'react';
import Logo from './common ui/Logo';
import MenuGroup from './MenuGroup';

export default function Sidemenu() {

    // TODO load child components

    return <div id="sidemenu">

        <Logo />


        {/*TODO router */}
        <MenuGroup
            title={'Navigation'}
            items={['Dashboard', 'Projects', 'About']}
        />

        <MenuGroup
            title={'Todo'}
            items={[
                <><input type="checkbox" /> Fix reorder</>,
                <><input type="checkbox" /> Drop to delete</>,
                <><input type="checkbox" /> Router for navigation links</>,
                <><input type="checkbox" /> Ability to minimize this sidebar</>,
                <><input type="checkbox" /> Responsive layout</>,
            ]}
        />

        <MenuGroup
            title={'Tools'}
            items={['Drawing Board']}
        />

    </div >;
}
