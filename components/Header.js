import { ConnectButton } from "web3uikit";
import Link from "next/link";

export default function Header() {
    return (
        <nav className="p-3 border-b-2 flex flex-row">
            <h1 className="px-5 font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                Credit Bucket
            </h1>
            <div className="flex flex-row justify-between absolute top-0 right-10 items-center">
                <Link href="/">
                    <a className="mr-3 p-6">Home</a>
                </Link>
                <Link href="/guaranty">
                    <a className="mr-3 p-6">Guaranty</a>
                </Link>
                <Link href="/chat">
                    <a className="mr-3 p-6">Chat</a>
                </Link>
                <Link href="/faucet">
                    <a className="mr-3 p-6">Faucet</a>
                </Link>
                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    );
}
