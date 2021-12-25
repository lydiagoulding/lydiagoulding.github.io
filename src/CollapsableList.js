import { useState } from 'react';
import './CollapsableList.css'

export default function CollapsableList() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className={`collapsable ${!collapsed && 'collapsable--open'}`}>
            <div className="collapsable__header" onClick={() => { setCollapsed(!collapsed)}}>CollapsableList</div>
            <ul className="collapsable__content">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
            </ul>
        </div>

    )
}