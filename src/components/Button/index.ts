import Block from '../../utils/Block';
import template from './button.pug';
import './button.scss';

interface ButtonProps {
  label: string;
  events: {
    click: () => void;
  };
}

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return this.compile(template, { label: this.props.label });
  }
}
