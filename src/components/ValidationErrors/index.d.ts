import Block from '../../utils/Block';
import './validationErrors.scss';
interface ValidationErrorsProps {
    errors: string[];
}
export declare class ValidationErrors extends Block<ValidationErrorsProps> {
    constructor(props: ValidationErrorsProps);
    count(): number;
    protected render(): DocumentFragment;
}
export {};
