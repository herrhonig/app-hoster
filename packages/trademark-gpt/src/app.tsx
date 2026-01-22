import { Chat } from "./components/chat/chat";

export default function App() {
  return (
    <>
      {/* <FpsComponent /> */}
      <div className="bg-amber-800 flex flex-col w-full items-center min-h-screen p-12">
        <div>
          <h1 className="text-2xl text-center font-bold">Trademark Gpt</h1>
        </div>{" "}
        <Chat />
      </div>
    </>
  );
}
