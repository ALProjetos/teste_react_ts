declare module 'socket.io-client' {
import { ManagerOptions, SocketOptions } from 'socket.io-client';

interface Socket extends NodeJS.EventEmitter {
    connect(): this;
    open(): this;
    disconnect(): this;
    close(): this;
    send(...args: any[]): this;
    emit(event: string, ...args: any[]): this;
    on(event: string, listener: (...args: any[]) => void): this;
    once(event: string, listener: (...args: any[]) => void): this;
    off(event: string, listener?: (...args: any[]) => void): this;
    removeListener(event: string, listener?: (...args: any[]) => void): this;
    removeAllListeners(event?: string): this;
    broadcast: this;
    volatile: this;
}

function io(
    uri: string,
    opts?: Partial<ManagerOptions & SocketOptions>
): Socket;

export = io;
}
      