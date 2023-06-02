import React from "react";
import './components.scss';

const Header: React.FC = () => {
    return (
        <div className="Header">
            <div className="left_bx">
                logo
            </div>
            <div className="middle_bx">
                <div className="search_bx">
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="right_bx">
                <div className="user_bx">
                    <div className="user_avatar"></div>
                    <span className="user_name">user</span>
                </div>
            </div>
        </div>
    );
}

export default Header;