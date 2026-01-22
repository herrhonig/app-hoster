import { useEffect, useState } from "react";
import { List, useListRef } from "react-window";
import { ChevronDownIcon } from "../../shared/icons/chevron-down-icon";
import { useChatStore } from "../../store";
import { MessageRow } from "./message-row";
const ROW_HEIGHT = 120;

export function ChatView() {
  const messages = useChatStore((state) => state.messages);

  const [autoScroll, setAutoScroll] = useState(true);
  const listRef = useListRef(null);

  useEffect(() => {
    if (!listRef || !autoScroll || messages.length === 0) return;

    listRef.current?.scrollToRow({
      index: messages.length - 1,
      align: "end",
      behavior: "smooth",
    });
  }, [messages.length, autoScroll, listRef]);
  console.log({ autoScroll });

  // 🔼 отключаем автоскролл, если пользователь скроллит вверх
  // const onScroll = () => {
  //   const el = outerRef.current;
  //   if (!el) return;

  //   const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;

  //   setAutoScroll(distanceFromBottom < ROW_HEIGHT);
  // };

  return (
    <div className="relative w-full h-full p-4 bg-amber-500 rounded-sm shadow-amber-100">
      <List
        listRef={listRef}
        style={{ height: window.innerHeight - 140, width: "100%" }}
        rowCount={messages.length}
        rowHeight={ROW_HEIGHT}
        rowProps={{ messages }}
        rowComponent={Row}
      />

      {autoScroll && (
        <button
          className="absolute bottom-8 right-8 flex items-center justify-center w-8 h-8 cursor-pointer opacity-20 hover:opacity-90 transition-opacity px-1 py-1 text-xs rounded-full text-indigo-950 bg-indigo-50"
          onClick={() => setAutoScroll(true)}
        >
          <ChevronDownIcon className="text-white" size={20} />
        </button>
      )}
    </div>
  );
}

function Row(props: any) {
  const { index, style, messages, ...restProps } = props;
  const message = messages[index];

  return (
    <div style={style}>
      <MessageRow message={message} />
    </div>
  );
}
