import Image from "next/image";
import Link from "next/link";

export default function AboutLayout({children}) {
  return (
    <>

        <nav className="bg-black p-4">
          <ul className="flex space-x-6 text-white">
            <li>
              <Link href="/about/mission" className="hover:text-purple-600">Mission</Link>
            </li>
            <li>
              <Link href="/about/vission" className="hover:text-purple-600">Vission</Link>
            </li>
          </ul>
        </nav>        <hr/>   
        {children}
    </>
  );
}
