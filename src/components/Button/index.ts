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
  protected init(): void {
    if (this.props.disabled) {
      this.disable();
    } else {
      this.enable();
    }
  }

  private disable() {
    if (this.element) {
      (this.element as HTMLButtonElement).classList.add('disabled');
      (this.element as HTMLButtonElement).removeEventListener(
        'click',
        this.props.events.click,
      );
    }
  }

  private enable() {
    if (this.element) {
      (this.element as HTMLButtonElement).classList.remove('disabled');
      (this.element as HTMLButtonElement).addEventListener(
        'click',
        this.props.events.click,
      );
    }
  }

  public isDisabled() {
    return this.props.disabled === true;
  }

  render() {
    return this.compile(template, {
      label: this.props.label,
      disabled: this.props.disabled,
    });
  }
}
