import type { Component } from "solid-js";
import ChatOption from "./components/ChatOption";
import ChatMessage from "./components/ChatMessage";
import MessageBox from "./components/MessageBox";
import { socket } from "./api/api";
import { createSignal } from "solid-js";

const App: Component = () => {
  const [messages, setMessages] = createSignal([""]);

  const socketInstance = socket(setMessages);

  return (
    <div class="flex">
      <section class="flex basis-60 flex-col gap-y-2 bg-amber-100 p-2">
        <ChatOption
          chatDetails={{
            chatName: "Chat Name",
            chatLastMessage: "last chat message",
            chatLastTimestamp: "long ago",
          }}
        />
      </section>
      <main class="grow bg-green-300">
        <ChatMessage
          chatDetails={{
            message: "message",
            timestamp: "long ago",
          }}
        />
        <MessageBox socketInstance={socketInstance} />
      </main>
    </div>
  );
};

export default App;
