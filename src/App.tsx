import type { Component } from "solid-js";
import ChatOption from "./components/ChatOption";

const App: Component = () => {
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
      <main class="grow bg-green-300"> main section</main>
    </div>
  );
};

export default App;
