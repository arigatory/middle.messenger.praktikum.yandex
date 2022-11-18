import Block from '../../utils/Block';
import './messageInput.scss';
export interface MessageInputProps {
    label: string;
    type: string;
    name: string;
    placeholder?: string;
}
export declare class MessageInput extends Block<MessageInputProps> {
    getName(): string;
    getValue(): string;
    render(): DocumentFragment;
}
