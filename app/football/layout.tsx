import React, { ReactNode } from "react";
import SideBar from "./components/SideBar";
import News from "./components/News";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <main className="grid grid-cols-5 h-screen">
      <SideBar />
      <div className="col-span-5 lg:col-span-3 overflow-y-auto notscroll select-none">
        {children}
      </div>
      <News />
    </main>
  );
}
