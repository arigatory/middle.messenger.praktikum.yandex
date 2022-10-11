import Block from '../../utils/Block';
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

  public getName() {
    return (this.element as HTMLInputElement).name;
  }

  public getValue() {
    return (this.element as HTMLInputElement).value;
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
