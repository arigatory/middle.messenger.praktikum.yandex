import Block from '../../utils/Block';
import template from './input.pug';
import './input.scss';

export interface InputProps {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  value?: string;
  events?: {
    input: () => void;
  }
}

export class Input extends Block<InputProps> {
  public setValue(value: string) {
    (this.element as HTMLInputElement).value = value;
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
