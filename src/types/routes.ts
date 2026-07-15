import { type ReactNode } from "react";

export interface RouteTypes {
  path: string;
  component: ReactNode;
  name?: string;
  layout: "auth" | "admin" | "main";
}
