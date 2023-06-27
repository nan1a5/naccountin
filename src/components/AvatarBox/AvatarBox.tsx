import React from 'react';
import './AvatarBox.scss';
import IconArrowRight from '../../images/arrow-right.svg';

interface AvatarBoxProps {
    username?: string;
    id?: string;
    avatar_url?: string;
}

const AvatarBox: React.FC<AvatarBoxProps> = (props) => {
    const { username, id, avatar_url } = props;

    return (
        <div className='AvatarBox'>
            <span className="username">nan1a5</span>
            <div className='avatar'/>

            <div className="info_bx">
                <div className="bx_btn btn-profile">
                    <span>更多设置</span><img src={IconArrowRight} alt="" />
                </div>
                <div className="bx_btn btn-logout">
                    <span>退出登陆</span><img src={IconArrowRight} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AvatarBox;