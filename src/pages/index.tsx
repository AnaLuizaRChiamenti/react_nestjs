import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>
        <Link href='/about'>Sobre</Link>
      </p>
      <p>
        <Link href='/products'>Produtos</Link>
      </p>
    </>

  );
}
