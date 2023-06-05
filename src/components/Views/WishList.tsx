import React, { useState } from "react";
import './WishList.scss'
import { useModal } from "../../hooks/useModal";
import Progress from "../Progress/Progress";

const WishList: React.FC = () => {

    const [ displayMode, setDisplayMode ] = useState<'double' | 'single'>('double');
    const { CustModal: WishListModal, open: openWishListModal, close: closeWishListModal } = useModal();

    const handleWishListClick = () => {
        openWishListModal({
            title: '新建愿望单',
            content: ' '
        }, () => {
            console.log('openWishListConfirm');
        });
    }

    return (
        <div className="WishList">
            {/* <span>暂无计划</span> */}
            <div className="header">
                <button className="add_btn" onClick={() => {
                    handleWishListClick();
                }}>
                    <span>愿望单</span>
                    <span className="icon-plus" />
                </button>
            </div>
            <div className="main">
                <div className="wish_list_title">
                    <div>
                        <span className="title">愿望金库</span>
                        <span className="saved_money">￥0</span>
                        <Progress percent={50} width="80%"/>
                        <div>
                            <span className="save_times">已存0笔</span>
                            <span className="left_money">剩余: ￥0</span>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="wish_list">
                    <div className="wish_list_header">
                        <span>全部</span>
                        <span>努力中</span>
                        <span>已完成</span>

                    </div>
                    <div className={`wish_list_main ${displayMode}`}>
                        <div className="wish_list_item"></div>
                        <div className="wish_list_item"></div>
                    </div>
                </div>
            </div>
            <WishListModal />
        </div>
    );
}

export default WishList;