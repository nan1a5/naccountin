import React from "react";
import './Book.scss';

interface BookProps {
    name?: string;
    id?: string;
}

const Book: React.FC<BookProps> = ({ name, id }) => {
    return (
        <div className="Book">
            <div className="cover">
                {/* <img className="cover" src={props?.cover} alt="" /> */}
                <div className="name">{name || 'book'}</div>
            </div>
            <div className="first_page">
                content
            </div>
            <div className="last_page">
                content
            </div>
        </div>
    )
}

export const BookCreator: React.FC = () => {
    return (
        <div className="BookCreator">
            <div className="cover">
                <div className="name">创建账本<span className="icon-plus"></span></div>
            </div>
        </div>
    )
}

export default Book;