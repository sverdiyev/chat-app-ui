import type { Component } from "solid-js";
import ChatOption from "./components/ChatOption";

const App: Component = () => {
  return (
    <div class="flex">
      <section class="basis-60 bg-amber-100">
        side section
        <ChatOption
          chatDetails={{
            chatLastTimestamp: "long ago",
            chatLastMessage: "last message",
            chatName: "test chat",
          }}
        />
      </section>
      <main class="grow bg-green-300"> main section</main>
    </div>
  );
};

export default App;
