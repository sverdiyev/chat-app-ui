import type { Component } from "solid-js";
import ChatOption from "./components/ChatOption";
import ChatMessage from "./components/ChatMessage";
import MessageBox from "./components/MessageBox";
import { socket } from "./api/api";
import { createSignal, For } from "solid-js";
import { ChatMessageType } from "./models/ChatMessage";

const App: Component = () => {
  const [messages, setMessages] = createSignal<Array<ChatMessageType>>([]);

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
        <For each={messages()}>
          {(msg) => (
            <ChatMessage
              chatDetails={{
                message: msg.messageContent,
                timestamp: "doesnt matter",
              }}
            />
          )}
        </For>
        <MessageBox socketInstance={socketInstance} />
      </main>
    </div>
  );
};

export default App;
