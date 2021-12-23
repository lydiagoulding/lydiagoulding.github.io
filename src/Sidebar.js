import './Sidebar.css';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li className="sidebar__h1">react-nmi-collectjs</li>
                <ul>
                    <li>Examples</li>
                    <li>Components</li>
                    <li>Hooks</li>
                    <li>Context</li>
                    <li>Utilities</li>
                </ul>
            </ul>
        </div>
    )
}