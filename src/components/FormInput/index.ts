import Block from '../../utils/Block';
import { Input } from '../Input';
import template from './formInput.pug';
import './formInput.scss';

interface FormInputProps {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
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
