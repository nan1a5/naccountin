import React from 'react';
import Confirm from '../components/Confirm/Confirm'

export const useConfirm = (initTitle: string = 'initTitle', initContent: string | React.ReactElement = 'initContent') => {
    const [title, setTitle] = React.useState(initTitle);
    const [content, setContent] = React.useState(initContent);
    const [visible, setVisible] = React.useState(false);
    
    const CustConfirm = () => {
        return (
            <Confirm
                title={title}
                content={content}
                visible={visible}
                onClose={onClose}
            />
        );
    }


    const open = (data: {
        title: string,
        content: string | React.ReactElement,
    },cb?: Function) => {
        cb&&cb();
        setTitle(data.title);
        setContent(data.content);
        setVisible(true);
    };
    const close = (confirm_cb?: Function, cancel_cb?: Function) => {
        return (state: string) => {
            if (state === "ok") {
                confirm_cb&&confirm_cb();
            } else {
                cancel_cb&&cancel_cb();
            }
            setVisible(false);
        }
    };
    const onClose = (state: string) => {
        close()(state);
    };
    
    return {CustConfirm, open, close};
}