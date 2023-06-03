import React from "react";
import './WishList.scss'

const WishList: React.FC = () => {
    return (
        <div className="WishList">
            {/* <span>暂无计划</span> */}
            <div className="header">
                <div className="title">愿望单</div>
                <div className="add_btn">
                    <span className="icon-plus" />
                </div>
            </div>
            <div className="main">
                <div className="wish_money"></div>
                <div className="wish_list"></div>
            </div>
        </div>
    );
}

export default WishList;