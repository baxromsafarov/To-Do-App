import {  NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {


    const sideBar = () =>{
        document.getElementById('sidebar').classList.toggle('activess');

        var dropdowns = document.getElementsByClassName('dropdown-toggle');
        if (dropdowns.length > 0) {
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                openDropdown.classList.toggle('activess');
            }
        }
        document.querySelector('.overlay').classList.toggle('activess');

        document.querySelector('.btn').classList.add('btn-active');
    }
    const disMiss = () => {

        document.getElementById('sidebar').classList.remove('activess');

        document.querySelector('.overlay').classList.remove('activess');

        document.querySelector('.btn').classList.remove('btn-active');
    }

    return(
        <footer className="footer-wrapper">
            <div className="footer-cotegories">
                <ul>
                    <li>
                        <NavLink to="/">
                        <span className="material-symbols-outlined icons">
                            light_mode
                        </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/taskform">
                        <span className="material-symbols-outlined icons">
                            library_add
                        </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/important">
                        <span className="material-symbols-outlined icons">
                            stars
                        </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/calendar">
                        <span className="material-symbols-outlined icons">
                            calendar_month
                        </span>
                        </NavLink>
                    </li>
                </ul>
            </div>


        </footer>
    );

}

export default Footer;