import React from "react";
import './components.scss';
import { useConfirm } from "../hooks/useConfirm";
import { useModal } from "../hooks/useModal";

const SideBar: React.FC = () => {
    const nav_list = [
        {
            name: "我的账本",
            link: "/",
            icon: ""
        },
        {
            name: "统计",
            link: "/",
            icon: ""
        },
        {
            name: "愿望单",
            link: "/",
            icon: ""
        },
        {
            name: "记事本",
            link: "/",
            icon: ""
        }
    ];

    // const { CustModal, open: openModal, close: closeModal } = useModal();
    const { CustModal: ThemeModal, open: openThemeModal, close: closeThemeModal } = useModal('主题', '暂无主题');
    const { CustModal: AboutModal, open: openAboutModal, close: closeAboutModal } = useModal('关于', '暂无关于');

    const handleClick = (type: 'theme' | 'about') => {
        if (type === 'theme') {
            openThemeModal({
                title: '主题',
                content: '暂无主题'
            }, () => {
                console.log('openThemeConfirm');
            });
        } else if (type === 'about') {
            openAboutModal({
                title: '关于',
                content: '暂无关于'
            }, () => {
                console.log('openAboutConfirm');
            });
        }
    }

    return (
        <div className="SideBar">
            <div className="nav_list">
                {
                    nav_list.map((item, index) => {
                        return (
                            <div className="nav_item" key={index}>
                                <img className="icon" src={item.icon} alt="" />
                                <a href={item.link}>{item.name}</a>
                            </div>
                        );
                    })
                }
            </div>
            <div className="info_list">
                <div className="info_item" onClick={() => {handleClick('theme')}}>
                    theme
                </div>
                <div className="info_item" onClick={() => {handleClick('about')}}>
                    about
                </div>
            </div>
            <ThemeModal />
            <AboutModal />
        </div>
    );
}

export default SideBar;