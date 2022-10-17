import Block from '../../utils/Block';
import template from './validationErrors.pug';
import './validationErrors.scss';

interface ValidationErrorsProps {
  errors: string[];
}

export class ValidationErrors extends Block<ValidationErrorsProps> {
  constructor(props: ValidationErrorsProps) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}