import { ConnectButton } from "web3uikit";
import Link from "next/link";

export default function Header() {
    return (
        <div>
            <div className="fixed h-screen w-1/6">
                <div className="rounded-r bg-gray-900 xl:hidden flex justify-between w-full p-6 items-center ">
                    <div className="flex justify-between  items-center space-x-3">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sidebar2-svg1.svg" alt="logo" />
                        <p className="text-3xl leading-6 text-white">Credit Bucket</p>
                    </div>
                    <div aria-label="toggler" className="flex justify-center items-center">
                        <button aria-label="open" id="open" onclick="showNav(true)" className="hidden focus:outline-none focus:ring-2" >
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sidebar2-svg2.svg" alt="menu" />
                        </button>
                    </div>
                </div>
                <div id="Main" className="xl:rounded-r transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-full w-full bg-gray-900 flex-col">
                    <div className="hidden xl:flex justify-start p-6 space-x-3">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sidebar2-svg1.svg" alt="logo" />
                        <p className="text-3xl leading-6 text-white">Credit Bucket</p>
                    </div>
                    <hr className="white"/>
                    <div className="mt-6 mb-6 flex flex-col justify-start w-full border-gray-600 border-b space-y-3 pb-5 ">
                    <Link href="/">
                        <button className="custom-buttons pl-4 flex jusitfy-start items-center  w-full  focus:outline-none text-white rounded ">
                            <img className="fill-stroke" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sidebar2-svg4.svg" alt="dashboard" />
                               <a className="font-medium text-xl leading-4 ml-2">Home</a>
                        </button>
                        </Link>
                        <Link href="/guaranty">
                        <button className="custom-buttons pl-4 flex jusitfy-start items-center w-full focus:outline-none text-white rounded ">
                            <img className="fill-stroke" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sidebar2-svg7.svg" alt="users" />
                            
                               <a className="font-medium text-xl leading-4 ml-2">Guaranty</a>
                           
                        </button>
                        </Link>
                        <Link href="/chat">
                        <button className="custom-buttons pl-4 flex jusitfy-start items-center w-full focus:outline-none text-white rounded ">
                            <img className="fill-stroke " src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sidebar2-svg5.svg" alt="users" />
                               <a className="font-medium text-xl leading-4 ml-2">Chat</a>
                        </button>
                        </Link>
                    </div>
                    <div className="absolute bottom-10">
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
