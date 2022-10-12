import Block from './Block';
import { EventBus } from './EventBus';
import { set } from './helpers';

export enum StoreEvents {
  Updated = 'updated',
}

export class Store extends EventBus {
  private state: any = {
    user: {
      login: 'ivan',
      email: 'ivan@gmail.com',
    },
  };

  public set(keypath: string, data: unknown) {
    set(this.state, keypath, data);

    this.emit(StoreEvents.Updated, this.getState());
  }

  public getState() {
    return this.state;
  }
}
const store = new Store();

export function withStore(mapStateToProps: (state: any) => any) {
  return function (Component: typeof Block) {
    return class WithStore extends Component {
      constructor(props: any) {
        const stateProps = mapStateToProps(store.getState());
        super({ ...props, ...stateProps });

        store.on(StoreEvents.Updated, () => {
          const stateProps = mapStateToProps(store.getState());

          this.setProps({ ...stateProps });
        });
      }
    };
  };
}
export default store;
