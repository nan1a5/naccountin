import React from "react";
import './Book.scss';
import { useHistory } from "react-router-dom";

interface BookProps {
    title?: string;
    id?: string;
    open_cb?: (title:string, id:string) => void;
}

const Book: React.FC<BookProps> = ({ title='', id='', open_cb }) => {

    const [open, setOpen] = React.useState(false);
    const history = useHistory();

    const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation();
        // 跳转路由
        setOpen(!open);
        setTimeout(() => {
            history.push(`/bookdetail/${id}/${title}`);
        }, 600);
    }

    React.useEffect(() => {
        if (open) {
            setTimeout(() => {
                setOpen(false);
            }, 1250);
            setTimeout(() => {
                open_cb && open_cb(title, id);
            }, 1200);
        }
    }, [open]);

    return (
        <div className={`Book ${open?'open':''}`} onClick={handleClick}>
            <div className="cover">
                {/* <img className="cover" src={props?.cover} alt="" /> */}
                <div className="name">{title || 'book'}</div>
            </div>
            <div className="first_page" />
            <div className="second_page" />
            <div className="last_page" />
        </div>
    )
}

export const BookCreator: React.FC = () => {
    return (
        <div className="BookCreator">
            <span className="name">创建账本<span className="icon-plus"></span></span>
        </div>
    )
}

export default Book;