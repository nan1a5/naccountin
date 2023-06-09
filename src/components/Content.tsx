import React from "react";
import './components.scss'

// import WishList from "./Views/WishList/WishList";
import AccountBook from "./Views/AccountBook/AccountBook";

const Content: React.FC = () => {
    return (
        <div className="Content">
            <AccountBook />
        </div>
    );
}

export default Content;