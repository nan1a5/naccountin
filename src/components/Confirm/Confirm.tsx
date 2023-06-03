import React from "react";
import './Confirm.scss'

interface ConfirmProps {
    title: string;
    content: string |React.ReactElement;
    visible: boolean;
    onClose: Function;
}

const Confirm: React.FC<ConfirmProps> = (props) => {
    const { title, content, visible, onClose } = props;
    return (
        <div className={`confirm ${visible ? "show" : "hide"}`}>
            <div className="confirm_content">
                <div className="confirm_header">
                    <span className="title">{title}</span>
                </div>
                <div className="confirm_body">
                    <p>{content}</p>
                </div>
                <div className="confirm_footer">
                    <button className="btn btn_cancel" onClick={() => {onClose("cancel")}}>取消</button>
                    <button className="btn btn_confirm" onClick={() => {onClose("ok")}}>确定</button>
                </div>
            </div>
        </div>
    );
}

export default Confirm;