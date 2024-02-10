import { ReactNode } from "react";

export type TSidebarItem = {
  key?: string;
  label: ReactNode;
  children?: TSidebarItem[];
} | undefined;

export type TUserPath = {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};
