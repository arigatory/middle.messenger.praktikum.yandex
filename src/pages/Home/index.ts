import Block from '../../utils/Block';
import template from './home.pug';
import { Button } from '../../components/Button';

interface HomePageProps {
  title: string;
}

export class HomePage extends Block<HomePageProps> {
  constructor(props: HomePageProps) {
    super(props);
  }

  init() {
    this.children.button = new Button({
      label: 'Click me',
      events: {
        click: () => console.log('clicked'),
      },
    });

    setTimeout(() => {
      this.children.button.setProps({ label: 'Hoho button' });
    }, 500);
  }


  
  render() {
    return this.compile(template, this.props);
  }
}