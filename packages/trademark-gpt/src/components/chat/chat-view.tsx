import { useEffect, useState } from "react";
import { useListCallbackRef } from "react-window";
import { useChatStore } from "../../store";
import { MessageRow } from "./message-row";

const ROW_HEIGHT = 120;

export function ChatView() {
  const messages = useChatStore((state) => state.messages);
  console.log({ messagesUI: messages });

  const [listRef, setListRef] = useListCallbackRef();
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    if (autoScroll && listRef?.element) {
      listRef.scrollToRow({ index: messages.length - 1 });
    }
  }, [messages.length, autoScroll]);

  const onScroll = ({ scrollOffset }: any) => {
    if (!listRef?.element) return;
    console.log({ scrollOffset });

    const maxOffset =
      messages.length * ROW_HEIGHT - listRef.element?.clientHeight;

    setAutoScroll(maxOffset - scrollOffset < ROW_HEIGHT);
  };

  //   return (
  //     <List
  //       rowProps={{}}
  //       listRef={setListRef}
  //       rowCount={messages.length}
  //       rowHeight={window.innerHeight - 120}
  //       rowComponent={({ index, style }) => (
  //         <div style={style}>
  //           <MessageRow message={messages[index]} />
  //         </div>
  //       )}
  //       onScroll={onScroll}
  //     />
  //   );

  return (
    <div className="h-screen overflow-y-scroll bg-amber-100 rounded-t-2xl min-h-46 max-h-[40%] w-[400px]">
      {messages.map((message) => (
        <div key={message.id}>
          <MessageRow message={message} />
        </div>
      ))}
    </div>
  );
}
