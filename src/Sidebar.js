import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import {Link} from "react-router-dom";

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
                    <Link to="/react-nmi-collectjs/examples"><li>Example</li></Link>
                    <li onClick={() => setComponentsCollapsed(!componentsCollapsed)}>Components</li>
                    <ul className={`sidebar__level3 collapsable ${!componentsCollapsed && 'collapsable--open'}`}>
                        <div className="collapsable__content">
                            <Link to="/react-nmi-collectjs/components#cardCvvInput"><li>CardCVVInput</li></Link>
                            <Link to="/react-nmi-collectjs/components#cardExpirationInput"><li>CardExpirationInput</li></Link>
                            <Link to="/react-nmi-collectjs/components#cardNumberInput"><li>CardNumberInput</li></Link>
                            <Link to="/react-nmi-collectjs/components#checkAccountInput"><li>CheckAccountInput</li></Link>
                            <Link to="/react-nmi-collectjs/components#checkRoutingNumberInput"><li>CheckRoutingNumberInput</li></Link>
                            <Link to="/react-nmi-collectjs/components#checkNameInput"><li>CheckNameInput</li></Link>
                            <Link to="/react-nmi-collectjs/components#validationContainer"><li>ValidationContainer</li></Link>
                        </div>

                    </ul>
                    <li onClick={() => setHooksCollapsed(!hooksCollapsed)}>Hooks</li>
                    <ul className={`sidebar__level3 collapsable ${!hooksCollapsed && 'collapsable--open'}`}>
                        <div className="collapsable__content">
                            <Link to="/react-nmi-collectjs/hooks"><li>useCollect</li></Link>
                        </div>
                    </ul>
                    <li onClick={() => setContextCollapsed(!contextCollapsed)}>Context</li>
                    <ul className={`sidebar__level3 collapsable ${!contextCollapsed && 'collapsable--open'}`}>
                        <div className="collapsable__content">
                            <Link to="/react-nmi-collectjs/contexts"><li>CollectJSProvider</li></Link>
                        </div>
                    </ul>
                    <li onClick={() => setUtilitiesCollapsed(!utilitiesCollapsed)}>Utilities</li>
                    <ul  className={`sidebar__level3 collapsable ${!utilitiesCollapsed && 'collapsable--open'}`}>
                        <div className="collapsable__content">
                            <Link to="/react-nmi-collectjs/utilities"><li>injectCollectJS</li></Link>
                        </div>
                    </ul>
                </ul>
            </ul>
        </div>
    )
}