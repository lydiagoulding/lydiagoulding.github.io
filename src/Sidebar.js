import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

export default function Sidebar() {
    const [reactNmiCollectJSCollapsed, setReactNmiCollectJSCollapsed] = useState(false);
    const [componentsCollapsed, setComponentsCollapsed] = useState(true);
    const [hooksCollapsed, setHooksCollapsed] = useState(true);
    const [contextCollapsed, setContextCollapsed] = useState(true);
    const [utilitiesCollapsed, setUtilitiesCollapsed] = useState(true);

    return (
        <div className="sidebar">
            <ul className={`sidebar__level1 collapsable ${!reactNmiCollectJSCollapsed && 'collapsable--open'}`}>
                <li className="sidebar__h1" onClick={() => setReactNmiCollectJSCollapsed(!reactNmiCollectJSCollapsed)}>
                    <div>
                        <FontAwesomeIcon icon={faReact} size="lg"/>
                    </div>
                    <div className="sidebar__h1-content">
                        react-nmi-collectjs
                    </div>
                </li>
                <ul className="collapsable__content sidebar__level2">
                    <li>Example</li>
                    <li onClick={() => setComponentsCollapsed(!componentsCollapsed)}>Components</li>
                    <ul className={`sidebar__level3 collapsable ${!componentsCollapsed && 'collapsable--open'}`}>
                        <div className="collapsable__content">
                            <li>CardCVVInput</li>
                            <li>CardExpirationInput</li>
                            <li>CardNumberInput</li>
                            <li>CheckAccountInput</li>
                            <li>CheckRoutingNumberInput</li>
                            <li>CheckNameInput</li>
                            <li>ValidationContainer</li>
                        </div>

                    </ul>
                    <li onClick={() => setHooksCollapsed(!hooksCollapsed)}>Hooks</li>
                    <ul className={`sidebar__level3 collapsable ${!hooksCollapsed && 'collapsable--open'}`}>
                        <div className="collapsable__content">
                            <li>useCollect</li>
                        </div>
                    </ul>
                    <li onClick={() => setContextCollapsed(!contextCollapsed)}>Context</li>
                    <ul className={`sidebar__level3 collapsable ${!contextCollapsed && 'collapsable--open'}`}>
                        <div className="collapsable__content">
                            <li>CollectJSProvider</li>
                        </div>
                    </ul>
                    <li onClick={() => setUtilitiesCollapsed(!utilitiesCollapsed)}>Utilities</li>
                    <ul  className={`sidebar__level3 collapsable ${!utilitiesCollapsed && 'collapsable--open'}`}>
                        <div className="collapsable__content">
                            <li>injectCollectJS</li>
                        </div>
                    </ul>
                </ul>
            </ul>
        </div>
    )
}