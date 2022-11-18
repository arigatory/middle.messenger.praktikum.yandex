import Block from '../../utils/Block';
import './input.scss';
export interface InputProps {
    label: string;
    type: string;
    name: string;
    placeholder?: string;
    value?: string;
    events?: {
        input: () => void;
    };
}
export declare class Input extends Block<InputProps> {
    setValue(value: string): void;
    getName(): string;
    getValue(): string;
    render(): DocumentFragment;
}
