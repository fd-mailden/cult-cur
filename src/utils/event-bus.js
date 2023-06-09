import EventEmitter from "eventemitter3";

export const DECLARATION_WINDOW = {
  open: "open-declaration-window",
  close: "close-declaration-window",
};

const eventEmitter = new EventEmitter();

const Emitter = {
  on: (event, fn) => eventEmitter.on(event, fn),
  once: (event, fn) => eventEmitter.once(event, fn),
  off: (event, fn) => eventEmitter.off(event, fn),
  emit: (event, payload) => eventEmitter.emit(event, payload),
};

Object.freeze(Emitter);

export { Emitter as EventBus };
