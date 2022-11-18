import Block from '../../utils/Block';
import './message.scss';
interface MessageProps {
    content: string;
    isMine: boolean;
}
export declare class Message extends Block<MessageProps> {
    constructor(props: MessageProps);
    protected render(): DocumentFragment;
}
export {};
