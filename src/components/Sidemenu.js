import React from 'react';

export default function Sidemenu() {
    return <div id="sidemenu" className="content-wrapper">

        <div class="drop-area">
            Drop to delete
        </div>

        <div class="drop-area">
            Drop to duplicate
        </div>

        {/*TODO router */}
        <nav>
            <ul class="nav-list">
                {[...Array(4)].map((val, index) =>
                    <li key={index}>Menu item {index + 1}</li>
                )}
            </ul>
        </nav>
    </div>;
}
