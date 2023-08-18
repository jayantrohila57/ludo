import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="md:h-screen flex flex-col md:flex-row sm:flex-col">
      <div className="md:w-[100vh] sm:w-[100vw] w-[100vw] md:h-screen sm:h-[100vw] h-[100vw]  bg-blue-500 ">square</div>
      <div className="flex-1 bg-gray-300"></div>
    </div>
  );
}
