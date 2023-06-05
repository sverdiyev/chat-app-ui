import type { Component } from "solid-js";
import { createSignal, JSX } from "solid-js";

const MessageBox: Component = () => {
  const [message, setMessage] = createSignal("");
  const submitHandler: JSX.EventHandlerUnion<HTMLFormElement, SubmitEvent> = (
    e
  ) => {
    e.preventDefault();
    console.log("-> message", message());
    setMessage("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        name="message"
        type="text"
        class="rounded border-2 border-solid border-black"
        value={message()}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button class="rounded border-2 border-solid border-black"> send </button>
    </form>
  );
};

export default MessageBox;
