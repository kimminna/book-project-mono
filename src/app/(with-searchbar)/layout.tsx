import SearchBar from "@/components/SearchBar";
import { ReactNode } from "react";

export default function SearchLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  );
}
