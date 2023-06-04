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
    <div class="border-2 border-red-700 border-opacity-50 bg-indigo-500">
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
  );
};

export default ChatOption;
