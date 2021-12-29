import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__grid">
                <div>
                    <div className="footer__columnHeader">lydiagoulding.github.io</div>
                    <div className="footer__columnItem">
                        <a href="https://github.com/lydiagoulding/lydiagoulding.github.io">
                            <FontAwesomeIcon fixedWidth icon={faGithub} />
                            <span className="footer__columnItemText">Github</span>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="footer__columnHeader">react-nmi-collectjs</div>
                    <div className="footer__columnItem">
                        <a href="https://github.com/lydiagoulding/react-nmi-collectjs">
                            <FontAwesomeIcon fixedWidth icon={faGithub} />
                            <span className="footer__columnItemText">Github</span>
                        </a>
                    </div>
                    <div className="footer__columnItem">
                        <a href="https://www.npmjs.com/package/@lydiagoulding/react-nmi-collectjs">
                            <FontAwesomeIcon fixedWidth icon={faNpm} />
                            <span className="footer__columnItemText">npm</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}