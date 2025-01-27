import * as React from 'react';

type MessageSeverityType = 'success' | 'info' | 'warn' | 'error';

type MessageContentType = React.ReactNode | ((props: MessageProps) => React.ReactNode);

type MessageTextType = React.ReactNode | ((props: MessageProps) => React.ReactNode);

export interface MessageProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> {
    text?: MessageTextType;
    severity?: MessageSeverityType;
    content?: MessageContentType;
    children?: React.ReactNode;
}

export declare class Message extends React.Component<MessageProps, any> {
    public getElement(): HTMLDivElement;
}
