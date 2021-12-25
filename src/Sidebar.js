import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <ul className="sidebar__level1">
                <li className="sidebar__h1">
                    <div>
                        <FontAwesomeIcon icon={faReact} size="lg"/>
                    </div>
                    <div className="sidebar__h1-content">
                        react-nmi-collectjs
                    </div>
                </li>
                <ul className="sidebar__level2">
                    <li>Example</li>
                    <li>Components</li>
                    <ul className="sidebar__level3">
                        <li>CardCVVInput</li>
                        <li>CardExpirationInput</li>
                        <li>CardNumberInput</li>
                        <li>CheckAccountInput</li>
                        <li>CheckRoutingNumberInput</li>
                        <li>CheckNameInput</li>
                        <li>ValidationContainer</li>
                    </ul>
                    <li>Hooks</li>
                    <ul className="sidebar__level3">
                        <li>useCollect</li>
                    </ul>
                    <li>Context</li>
                    <ul className="sidebar__level3">
                        <li>CollectJSProvider</li>
                    </ul>
                    <li>Utilities</li>
                    <ul className="sidebar__level3">
                        <li>injectCollectJS</li>
                    </ul>
                </ul>
            </ul>
        </div>
    )
}