import redditFont from "@/fonts/reddit-mono";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full flex justify-center pt-6">
      <div
        className={`flex flex-row justify-between items-center py-4 px-6 ${redditFont.className} rounded-3xl bg-white bg-opacity-80 text-purple-900 w-10/12`}
      >
        <div>
          <span className="text-colorful text-2xl font-bold">
            DAI Assistente Inteligente
          </span>
        </div>

        <div className="w-2/5">
          <nav className="flex flex-row justify-evenly text-base font-normal">
            <div>
              <Link className="hover:text-purple-700 duration-300" href={{ pathname: "/dashboard" }}>Home</Link>
            </div>
            <div>
              <Link className="hover:text-purple-700 duration-300" href={{ pathname: "/dai" }}>Personalizar DAI</Link>
            </div>
            <div>
              <Link className="hover:text-purple-700 duration-300" href={{ pathname: "/payment" }}>Pagamento</Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
