import type { Component } from "solid-js";

type ChatOptionProp = {
  chatDetails: {
    message: string;
    timestamp: string;
  };
};
const ChatOption: Component<ChatOptionProp> = (props) => {
  return (
    <div class="flex bg-indigo-500 p-2">
      <span class="m-0 flex h-8 w-8  items-center justify-center rounded-full border-2 border-solid border-black">
        S V
      </span>
      <div class="ml-2 flex">
        <div class="rounded border-2 border-solid border-red-700 bg-amber-100 px-2">
          {props.chatDetails.message}
        </div>
        <div class="rounded border-2 border-solid border-red-700 bg-gray-200 px-2">
          {props.chatDetails.timestamp}
        </div>
      </div>
    </div>
  );
};

export default ChatOption;
