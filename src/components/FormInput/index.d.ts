import Block from '../../utils/Block';
import './formInput.scss';
interface FormInputProps {
    label: string;
    type: string;
    name: string;
    placeholder?: string;
    validate: (arg: string) => string[];
    updateButton?: () => void;
}
export declare class FormInput extends Block<FormInputProps> {
    init(): void;
    getName(): string;
    getValue(): string;
    countErrors(): number;
    render(): DocumentFragment;
}
export {};
