import Block from '../../utils/Block';
import './button.scss';
interface ButtonProps {
    label: string;
    events: {
        click: () => void;
    };
    disabled?: boolean;
}
export declare class Button extends Block<ButtonProps> {
    protected init(): void;
    private disable;
    private enable;
    isDisabled(): boolean;
    render(): DocumentFragment;
}
export {};
