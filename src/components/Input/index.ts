import Block from '../../utils/Block';
import template from './input.pug';
import './input.scss';

export interface InputProps {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
}

export class Input extends Block<InputProps> {
  constructor(props: InputProps) {
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
