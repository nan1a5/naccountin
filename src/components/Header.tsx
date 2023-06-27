import React from "react";
import './components.scss';
import AvatarBox from "./AvatarBox/AvatarBox";
import IconSearch from '../images/search.svg';

const Header: React.FC = () => {
    return (
        <section className="Header">
            <div className="left_bx">
                <a href="/" style={{textDecoration: 'none'}}>
                    <span className="title">Na<span style={{color: '#99CC33',fontWeight: 700}}>C</span>o-拿<span style={{color: '#99CC33',fontWeight: 700}}>可</span></span>
                </a>
            </div>
            <div className="middle_bx">
                <form className="search_bx">
                    <div className="search_input">
                        <input type="text" placeholder="Search" />
                    </div>
                    <button type="submit" className="search_icon"><img className="icon-search" src={IconSearch} alt="" /><span className="search_text">Search</span></button>
                </form>
            </div>
            <div className="right_bx">
                <AvatarBox></AvatarBox>
            </div>
        </section>
    );
}

export default Header;