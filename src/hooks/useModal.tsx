import React from 'react';
import Modal from '../components/Modal/Modal';

export const useModal = (initTitle: string = 'initTitle', initContent: string | React.ReactElement = 'initContent') => {
    const [title, setTitle] = React.useState(initTitle);
    const [content, setContent] = React.useState(initContent);
    const [visible, setVisible] = React.useState(false);

    const open = (data?: {
        title?: string;
        content?: string | React.ReactElement;
    },cb?: Function) => {
        cb&&cb();
        setTitle(data?.title || initTitle);
        setContent(data?.content || initContent);
        setVisible(true);
    };

    const close = (cb?: Function) => {
        cb&&cb();
        setVisible(false);
    };
    
    const CustModal = () => {
        return (
            <Modal
                title={title}
                content={content}
                visible={visible}
                onClose={close}
            />
        );
    }

    return {CustModal, open, close};
}