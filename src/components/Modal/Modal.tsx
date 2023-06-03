import React from 'react';
import './Modal.scss'

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
                    <span className="close icon-cross" onClick={() => {onClose()}}></span>
                </div>
                <div className="modal_content">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default Modal;