import Link from "next/link";

export  default function Navbar() {
    return (
        <div className="flex gap-5">
        <div style={{ padding: "5px", color: "black", background: "white" }}>             
            <Link href={'/'}>Home</Link>
        </div>
        <div style={{ padding: "5px", color: "black", background: "white" }}>               
            <Link href={'/about'}>Sobre</Link>
        </div>
        <div style={{ padding: "5px", color: "black", background: "white" }}>                
            <Link href={'/products'}>Produtos</Link>
        </div>
        </div>
    )
}