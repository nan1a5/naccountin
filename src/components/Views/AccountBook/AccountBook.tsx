import React from "react";
import './AccountBook.scss';
import Book, { BookCreator } from "../../Book/Book";

const AccountBook: React.FC = () => {

    // 点击折叠兄弟盒子
    const fold = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement;
        const next = target.nextElementSibling as HTMLDivElement;
        // 如果有folded类名，就去掉，否则就加上
        if (!next) return;
        if ( next.classList.contains('folded')) {
            next.classList.remove('folded');
            // next.style.height = 'auto';
        }
        else {
            next.classList.add('folded');
            // next.style.height = '30px';
        }
        
    }

    return (
        <div className="AccountBook">
            <div className="last_books">
                <div className="title" onClick={fold}>最近打开<span className="line-through"></span></div>
                <div className="last_books_main">
                    <Book />
                    <Book />
                    <Book />
                </div>
            </div>
            <div className="owned_books" onClick={fold}>
                <div className="title">我的账本</div>
                <div className="owned_books_main">
                    <BookCreator />
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                </div>
            </div>
        </div>
    )
}

export default AccountBook;