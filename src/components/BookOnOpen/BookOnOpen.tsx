import React from "react";
import './BookOnOpen.scss';

interface BookOnOpenProps {
    title?: string;
    id?: string;
    show: boolean;
    onClose: () => void;
}

const BookOnOpen: React.FC<BookOnOpenProps> = ({ title, id, onClose, show }) => {

    // const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    //     if (e.target === e.currentTarget){
    //         onClose();
    //     }
    //     return
        
    // }

    return (
        <div className={`BookOnOpen ${show?'open':''}`}>
            <div className="content">
                <div className="cover">
                    <div className="first_page">
                        {title}
                    </div>
                </div>
                <div className="last_page">
                    <div className="second_page">
                        {id}
                        <span className="icon-cross" onClick={onClose}></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookOnOpen;