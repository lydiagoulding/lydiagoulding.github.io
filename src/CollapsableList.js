import { useState } from 'react';
import './CollapsableList.css'

export default function CollapsableList({header, headerClasses, children}) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className={`collapsable ${!collapsed && 'collapsable--open'}`}>
            <div className={`${headerClasses} collapsable__header`} onClick={() => { setCollapsed(!collapsed)}}>{header}</div>
            <div className="collapsable__content">
                {children}
            </div>
        </div>
    )
}