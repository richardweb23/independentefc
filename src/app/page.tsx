import Image from "next/image";
import { NavBar } from "./components/nav-bar";

export default function Home() {
  return (
    <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-full w-full px-10 shadow-lg bg-black">
      <NavBar />
    </div>
  );
}
