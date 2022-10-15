import { EventBus } from './EventBus';

export enum WSTransportEvents {
  Connected = 'connected',
  Error = 'error',
  Message = 'message',
  Close = 'close',
}

export default class WSTransport extends EventBus {
  private _socket: WebSocket | null = null;

  constructor(private url: string) {
    super();
  }

  public send(data: unknown) {
    if (!this._socket) {
      throw new Error('Socket is null');
    }

    this._socket.send(JSON.stringify(data));
  }

  public connect(): Promise<void> {
    this._socket = new WebSocket(this.url);

    this.subscribe(this._socket);

    this.setupPing();

    return new Promise((resolve) => {
      this.on(WSTransportEvents.Connected, () => {
        resolve();
      });
    });
  }

  public close() {
    this._socket?.close();
  }

  private setupPing() {
    setInterval(() => {
      this.send({ type: 'ping' });
    }, 5000);
  }

  private subscribe(socket: WebSocket) {
    socket.addEventListener('open', () => {
      this.emit(WSTransportEvents.Connected);
    });

    socket.addEventListener('close', () => {
      this.emit(WSTransportEvents.Close);
    });

    socket.addEventListener('error', (e) => {
      this.emit(WSTransportEvents.Error, e);
    });

    socket.addEventListener('message', (message) => {
      const data = JSON.parse(message.data);

      if (data.type && data.type === 'pong') {
        return;
      }

      this.emit(WSTransportEvents.Message, data);
    });
  }
}
