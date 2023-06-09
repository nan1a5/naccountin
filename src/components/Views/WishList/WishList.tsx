import React, { useState } from "react";
import './WishList.scss'
import { useModal } from "../../../hooks/useModal";
import Progress from "../../Progress/Progress";

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
                    <div className="box_1">
                        <span className="title">愿望金库</span>
                        <span className="saved_money">￥0</span>
                        <Progress percent={40} width="80%"/>
                        <div>
                            <span className="save_times">已存0笔</span>
                            <span className="left_money">剩余: ￥0</span>
                        </div>
                    </div>
                    {/* <div className='box_2'>

                    </div> */}
                </div>
                <div className="wish_list">
                    <div className="wish_list_header">
                        {/* <span>全部</span> */}
                        <span className="tab actived">努力中</span>
                        <span className="tab">已完成</span>

                    </div>
                    <div className={`wish_list_main ${displayMode}`}>
                        <div className="wish_list_item">
                            <div className="subscript"><span>25%</span></div>
                            <div className="icon_bx">
                                <div className="icon" />
                                <div className="title">旅游计划</div>
                            </div>
                            <Progress percent={40} width="90%" height=".5rem" />
                            <div className="info_bx">
                                <div className="last_money">￥200/5000</div>
                                <div className="last_time">已进行:150天</div>
                            </div>
                        </div>
                        <div className="wish_list_item">
                        <div className="subscript"><span>25%</span></div>
                            <div className="icon_bx">
                                <div className="icon" />
                                <div className="title">攒钱计划</div>
                            </div>
                            <Progress percent={40} width="90%" height=".5rem" />
                            <div className="info_bx">
                                <div className="last_money">￥5000/20000</div>
                                <div className="last_time">已进行:150天</div>
                            </div>
                        </div>
                        <div className="wish_list_item completed">
                        <div className="subscript"><span>100%</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <WishListModal />
        </div>
    );
}

export default WishList;