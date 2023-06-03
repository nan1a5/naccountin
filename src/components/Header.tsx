import React from "react";
import './components.scss';

const Header: React.FC = () => {
    return (
        <div className="Header">
            <div className="left_bx">
                <span className="title">Na<span style={{color: '#99CC33',fontWeight: 700}}>C</span>o-拿<span style={{color: '#99CC33',fontWeight: 700}}>可</span></span>
            </div>
            <div className="middle_bx">
                <form className="search_bx">
                    <div className="search_input">
                        <input type="text" placeholder="Search" />
                    </div>
                    <button type="submit" className="search_icon"><span className="icon-search" />Search</button>
                </form>
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