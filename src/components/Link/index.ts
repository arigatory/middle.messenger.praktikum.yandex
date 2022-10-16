import Block from '../../utils/Block';
import { PropsWithRouter, withRouter } from '../../hocs/withRouter';
import template from './link.pug';
import './link.scss';

interface LinkProps extends PropsWithRouter {
  to?: string;
  label: string;
  events?: {
    click: () => void;
  };
  isDanger: boolean;
}

class BaseLink extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super({
      ...props,
      events:
        props.events === undefined
          ? {
              click: () => this.navigate(),
            }
          : props.events,
    });
  }

  navigate() {
    if (this.props.to) this.props.router.go(this.props.to);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export const Link = withRouter(BaseLink);
