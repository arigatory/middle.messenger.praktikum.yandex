import Block from '../../utils/Block';
import template from './button.pug';
import './button.scss';

interface ButtonProps {
  label: string;
  events: {
    click: () => void;
  };
  disabled?: boolean;
}

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  protected init(): void {
    if (this.props.disabled) {
      this.disable();
    } else {
      console.log(this);
      this.enable();
    }
  }

  private disable() {
    if (this.element) {
      (this.element as HTMLButtonElement).disabled = true;
      (this.element as HTMLButtonElement).classList.add('disabled');
    }
  }

  private enable() {
    console.log(this.element);
    if (this.element) {
      (this.element as HTMLButtonElement).disabled = false;
      (this.element as HTMLButtonElement).classList.remove('disabled');
    }
  }

  render() {
    return this.compile(template, {
      label: this.props.label,
      disabled: this.props.disabled,
    });
  }
}
