import Block from '../../utils/Block';
import { Input } from '../Input';
import { ValidationErrors } from '../ValidationErrors';
import template from './formInput.pug';
import './formInput.scss';

interface FormInputProps {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  validate: (arg: string) => string[];
}

export class FormInput extends Block<FormInputProps> {
  constructor(props: FormInputProps) {
    super(props);
  }

  init() {
    this.children.input = new Input({
      name: this.props.name,
      type: this.props.type,
      label: this.props.label,
      events: {
        input: () => {
          console.log(this.children.validationErrors);
          (this.children.validationErrors as Block).setProps({
            errors: this.props.validate(this.getValue()),
          });
        },
      },
    });

    this.children.validationErrors = new ValidationErrors({
      errors: this.props.validate(this.getValue()),
    });
  }

  public getName() {
    return (this.children.input as Input).getName();
  }

  public getValue() {
    return (this.children.input as Input).getValue();
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
