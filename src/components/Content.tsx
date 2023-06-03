import React from "react";
import './components.scss'

import WishList from "./Views/WishList";

const Content: React.FC = () => {
    return (
        <div className="Content">
            <WishList />
        </div>
    );
}

export default Content;