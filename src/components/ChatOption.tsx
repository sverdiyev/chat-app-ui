import type { Component } from "solid-js";

type ChatOptionProp = {
  chatDetails: {
    chatName: string;
    chatLastMessage: string;
    chatLastTimestamp: string;
  };
};
const ChatOption: Component<ChatOptionProp> = (props) => {
  return (
    <div class="flex bg-indigo-500 p-2">
      <span class="m-0 flex h-12 w-12  items-center justify-center rounded-full border-2 border-solid border-black">
        S V
      </span>
      <div>
        <div class="border-2 border-solid border-black">
          {props.chatDetails.chatName}
        </div>
        <div class="border-2 border-solid border-red-700">
          {props.chatDetails.chatLastMessage}
        </div>
        <div class="border-2 border-solid border-red-700">
          {props.chatDetails.chatLastTimestamp}
        </div>
      </div>
    </div>
  );
};

export default ChatOption;
