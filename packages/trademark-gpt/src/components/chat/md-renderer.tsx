import { MarkdownToken } from "../../markdown/types";

export function MarkdownRenderer({ tokens }: { tokens?: MarkdownToken[] }) {
  if (!tokens) return null;

  return (
    <div className="wrap-break-words text-sm h-[90px] leading-relaxed">
      {tokens.map((t, i) => {
        switch (t.type) {
          case "bold":
            return (
              <strong key={i} className="font-semibold">
                {t.value}
              </strong>
            );
          case "code":
            return (
              <pre
                key={i}
                className="my-2 overflow-x-auto rounded bg-indigo-950 p-2 text-xs text-zinc-100"
              >
                <code>{t.value}</code>
              </pre>
            );
          default:
            return <span key={i}>{t.value}</span>;
        }
      })}
    </div>
  );
}
