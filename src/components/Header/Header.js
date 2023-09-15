import {NavLink} from 'react-router-dom';
import './Header.css';

const Header = (props) => {


    const sideBar = () => {
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

    return (
        <div className="wrapper">
            <div className="title">
                <h2>To Do List</h2>
            </div>
            <div className="cotegories">
                <ul>
                    <li><NavLink to="/">
                        <span className="material-symbols-outlined icons">
                            light_mode
                        </span>
                    </NavLink></li>


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
                    {/* <li><NavLink to="/tasks">
                <span className="material-symbols-outlined icons">
                    library_add
                </span>
                </NavLink></li> */}
                </ul>
            </div>
            <nav id="sidebar">
                <div id="dismiss" onClick={disMiss}>
                <span className="material-symbols-outlined close">
                     close
                </span>
                </div>

                <ul className="list-unstyled components">
                    {!props.logUser ?
                        <li className="activess">
                            <NavLink onClick={disMiss} to="/login">サインイン</NavLink>
                        </li>
                        : ''}
                    <li>
                        <NavLink onClick={disMiss} to="/taskform">タスクの追加</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={disMiss} to="/category">カテゴリー</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={disMiss} to="/important">重要</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={disMiss} to="/all">全てのタスク</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={disMiss} to="/done">完了したタスク</NavLink>
                    </li>
                    {props.logUser ?
                        <li>
                            <NavLink onClick={disMiss} to="/logout">ログアウト</NavLink>
                        </li>
                        : ''}
                </ul>
            </nav>

            <div className="overlay"></div>

            <div id="navbar">
                <button type="button" id="sidebarCollapse" onClick={sideBar} className="btn btn-info">
                <span className="icon">
                    <svg viewBox="0 0 175 80" width="40" height="40">
                        <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                        <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                        <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                    </svg>
                </span>
                    <span className="text">メニュー</span>
                </button>
            </div>
        </div>
    );

}

export default Header;