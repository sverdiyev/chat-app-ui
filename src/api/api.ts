import { Setter } from "solid-js";

export const socket = (setMessages: Setter<string[]>) => {
  // const socket = new WebSocket("wss://ws.coincap.io/trades/binance");
  const socket = new WebSocket("wss://test");

  socket.onopen = function () {
    console.log("[open] Connection established");
  };

  socket.onmessage = function (e) {
    console.log(`[message] Data received from server: ${e.data}`);
    setMessages((previousMessages) => [...previousMessages, ...e.data]);
  };

  socket.onclose = function (e) {
    if (e.wasClean) {
      console.log(
        `[close] Connection closed cleanly, code=${e.code} reason=${e.reason}`
      );
    } else {
      // e.g. server process killed or network down
      // event.code is usually 1006 in this case
      console.log("[close] Connection died");
    }
  };

  socket.onerror = function () {
    console.log(`[error]`);
  };

  return socket;
};
