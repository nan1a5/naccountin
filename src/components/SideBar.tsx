import React from "react";
import './components.scss';
import { useConfirm } from "../hooks/useConfirm";
import { useModal } from "../hooks/useModal";
import IconArrowLeft from '../images/arrow-left.svg';
import IconArrowRight from '../images/arrow-right.svg';

const SideBar: React.FC = () => {
    const nav_list = [
        {
            name: "我的账本",
            link: "/accountBook",
            icon: ""
        },
        {
            name: "统计",
            link: "/statistics",
            icon: ""
        },
        {
            name: "愿望单",
            link: "/wishList",
            icon: ""
        },
        {
            name: "记事本",
            link: "/todo",
            icon: ""
        }
    ];

    // const { CustModal, open: openModal, close: closeModal } = useModal();
    const { CustModal: ThemeModal, open: openThemeModal, close: closeThemeModal } = useModal('主题', '暂无主题');
    const { CustModal: AboutModal, open: openAboutModal, close: closeAboutModal } = useModal('关于', '暂无关于');

    const [isopen, setIsopen] = React.useState(true);

    const handleInfoBtnClick = (type: 'theme' | 'about') => {
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
    const handleShowBtnClick = () => {
        setIsopen(!isopen);
    }

    return (
        <>
            <section className={`SideBar ${isopen?' ':'show'}`}>
                <div className='wrapper'>
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
                        <div className="info_item" onClick={() => {handleInfoBtnClick('theme')}}>
                            theme
                        </div>
                        <div className="info_item" onClick={() => {handleInfoBtnClick('about')}}>
                            about
                        </div>
                    </div>
                </div>
                <div className={`btn_show ${isopen?' ':'actived'}`} onClick={handleShowBtnClick}>
                    <img src={isopen?IconArrowRight:IconArrowLeft} alt="" />
                </div>
            </section>
            <ThemeModal />
            <AboutModal />
        </>
    );
}

export default SideBar;