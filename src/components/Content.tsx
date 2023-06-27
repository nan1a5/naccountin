import React from "react";
import './components.scss'

// import WishList from "./Views/WishList/WishList";
import AccountBook from "./Views/AccountBook/AccountBook";
interface Props {
    children?: React.ReactNode;
}

const Content: React.FC<Props> = ({children}) => {
    return (
        <section className="Content">
            {
                children
            }
        </section>
    );
}

export default Content;