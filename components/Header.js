import { ConnectButton } from "web3uikit";
import Link from "next/link";

export default function Header() {
    return (
        <div>
            <div className="fixed h-screen w-1/6">
                <div className="rounded-r bg-gray-900 xl:hidden flex justify-between w-full p-6 items-center ">
                    <div className="flex justify-between  items-center space-x-3">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sidebar2-svg1.svg" alt="logo" />
                        <p className="text-2xl leading-6 text-white">Credit Bucket</p>
                    </div>
                    <div aria-label="toggler" className="flex justify-center items-center">
                        <button aria-label="open" id="open" onclick="showNav(true)" className="hidden focus:outline-none focus:ring-2" >
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sidebar2-svg2.svg" alt="menu" />
                        </button>
                        <button aria-label="close" id="close" onclick="showNav(true)" className=" focus:outline-none focus:ring-2" >
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sidebar2-svg3.svg" alt="close" />
                        </button>
                    </div>
                </div>
                <div id="Main" className="xl:rounded-r transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-full w-full bg-gray-900 flex-col">
                    <div className="hidden xl:flex justify-start p-6 space-x-3">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sidebar2-svg1.svg" alt="logo" />
                        <p className="text-2xl leading-6 text-white">Credit Bucket</p>
                    </div>
                    <hr className="white"/>
                    <div className="mt-6 flex gap-20 flex-col justify-start pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
                        <button className="flex jusitfy-start items-center  w-full  focus:outline-none  focus:text-indigo-400  text-white rounded ">
                            <img className="fill-stroke" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sidebar2-svg4.svg" alt="dashboard" />
                            <Link href="/">
                               <a className="text-base leading-4 ml-2">Home</a>
                           </Link>
                        </button>
                        <button className="flex jusitfy-start items-center w-full focus:outline-none text-white focus:text-indigo-400   rounded ">
                            <img className="fill-stroke" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sidebar2-svg5.svg" alt="users" />
                            <Link href="/guaranty">
                               <a className="text-base leading-4 ml-2">Guaranty</a>
                           </Link>
                        </button>
                        <button className="flex jusitfy-start items-center w-full focus:outline-none text-white focus:text-indigo-400   rounded ">
                            <img className="fill-stroke " src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sidebar2-svg5.svg" alt="users" />
                            <Link href="/chat">
                               <a className="text-base leading-4 ml-2">Chat</a>
                           </Link>
                        </button>
                    </div>
                    <div className="absolute bottom-4">
                        <ConnectButton signingMessage={"Logout"} />
                    </div>
                </div>
            </div>
        </div>



        // <nav className="p-3">
        //     <h1 className="px-5 font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
        //         Credit Bucket
        //     </h1>
        //     <div className="">
        //         <div>
        //         <Link href="/">
        //             <a className="mr-3 p-6">Home</a>
        //         </Link>
        //         </div>
        //         <div>
        //         <Link href="/guaranty">
        //             <a className="mr-3 p-6">Guaranty</a>
        //         </Link>
        //         </div>
        //         <div>
        //         <Link href="/chat">
        //             <a className="mr-3 p-6">Chat</a>
        //         </Link>
        //         </div>
        // <ConnectButton moralisAuth={false} />
        //     </div>
        // </nav>
    );
}
