import { Setter } from "solid-js";

export const socket = (setMessages: Setter<string[]>) => {
  const wsSession = new WebSocket("ws://localhost:8080/chat");

  wsSession.onopen = function () {
    console.log("[open] Connection established");
  };

  wsSession.onmessage = function (e) {
    console.log(`[message] Data received from server: ${e.data}`);
    setMessages((previousMessages) => [...previousMessages, ...e.data]);
  };

  wsSession.onclose = function (e) {
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

  wsSession.onerror = function () {
    // console.log(`[error]`);
  };

  return wsSession;
};
