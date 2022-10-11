import Block from '../../utils/Block';
import template from './link.pug';
import './link.scss';

interface LinkProps {
  to: string;
  label: string;
  events?: {
    click: () => void;
  };
}

export class Link extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}