import React from 'react';
import './Modal.scss'
import IconCross from '../../images/cross.svg';

interface ModalProps {
    title: string;
    content: string | React.ReactElement;
    visible: boolean;
    onClose: Function;
}

const Modal: React.FC<ModalProps> = (props) => {
    const { title, content, visible, onClose } = props;

    return (
        <div className="Modal" style={{display: visible ? "flex" : "none"}}>
            <div className="modal_content">
                <div className="modal_header">
                    <span className="title">{title}</span>
                    <img alt='' src={IconCross} className="close icon-cross" onClick={() => {onClose()}} />
                </div>
                <div className="modal_content">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default Modal;