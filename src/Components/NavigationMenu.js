import react from 'react'
import { Link } from 'react-router-dom';

function NavigationMenu(props) {

    return (
        <div>
            <div className="font-bold py-3">
                AppName
            </div>
            <ul>
                <li>
                    <Link onClick={props.closeMenu}
                        to="/"
                        className="text-blue-500 py-3 border-t border-b block"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link onClick={props.closeMenu}
                        to="/about"
                        className="text-blue-500 py-3 border-b block"
                    >
                        About
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu
