import { MarkdownToken } from "../markdown/types";

export type Role = "user" | "agent";

export type Message = {
  id: string;
  role: Role;
  content: string;
  tokens?: MarkdownToken[];
};
