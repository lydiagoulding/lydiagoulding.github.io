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

                    </ul>
                    <li>Hooks</li>
                    <li>Context</li>
                    <li>Utilities</li>
                </ul>
            </ul>
        </div>
    )
}