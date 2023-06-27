import React from "react";
import './AccountBook.scss';
import Book, { BookCreator } from "../../Book/Book";
import BookOnOpen from "../../BookOnOpen/BookOnOpen";
import IconArrowUp from '../../../images/arrow-up.svg';
import IconArrowDown from '../../../images/arrow-down.svg';

const AccountBook: React.FC = () => {
    const [LastBooksShow, setLastBooksShow] = React.useState(true);
    const [OwnedBooksShow, setOwnedBooksShow] = React.useState(true);
    const [BookOnOpenShow, setBookOnOpenShow] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [id, setId] = React.useState('');

    const fold = (type: string) => {
        switch (type) {
            case 'last_books':
                setLastBooksShow(!LastBooksShow);
                break;
            case 'owned_books':
                setOwnedBooksShow(!OwnedBooksShow);
                break;
            default:
                break;
        }
    }

    // const openBook = (title: string, id: string) => {
    //     setBookOnOpenShow(true);
    //     setTitle(title);
    //     setId(id);
    // }

    return (
        <div className="AccountBook">
            <BookOnOpen title={title} id={id} show={BookOnOpenShow} onClose={() => {setBookOnOpenShow(false)}}></BookOnOpen>
            <div className="last_books">
                <div className="title" onClick={() => {fold('last_books')}}>最近打开<img alt="" src={LastBooksShow?IconArrowUp:IconArrowDown} height='20px' width='20px'/></div>
                <div className={`last_books_main ${LastBooksShow?'':'folded'}`}>
                    <Book title="计划" id="plan" />
                    <Book title="收藏" id="star" />
                </div>
            </div>
            <div className="owned_books">
                <div className="title"  onClick={() => {fold('owned_books')}}>我的账本<img alt="" src={LastBooksShow?IconArrowUp:IconArrowDown} height='20px' width='20px'/></div>
                <div className={`owned_books_main ${OwnedBooksShow?'':'folded'}`}>
                    <BookCreator />
                    <Book title="全部" id="all" />
                    <Book title="日常" id="daily" />
                    <Book title="水电" id="CoWE" />
                </div>
            </div>
        </div>
    )
}

export default AccountBook;