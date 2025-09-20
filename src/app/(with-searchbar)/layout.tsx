import { ReactNode } from "react";

export default function SearchLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>서치레이아웃</div>
      {children}
    </div>
  );
}
