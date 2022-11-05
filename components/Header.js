import { ConnectButton } from "web3uikit";
import Link from "next/link";

export default function Header() {
    return (
    <div>
    <div className="fixed h-screen">
    <div class="rounded-r bg-gray-900 xl:hidden flex justify-between w-full p-6 items-center ">
        <div class="flex justify-between  items-center space-x-3">
        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sidebar2-svg1.svg" alt="logo" />
            <p class="text-2xl leading-6 text-white">Credit Bucket</p>    
        </div>
        <div  aria-label="toggler" class="flex justify-center items-center">
            <button aria-label="open" id="open" onclick="showNav(true)"  class="hidden focus:outline-none focus:ring-2" >
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sidebar2-svg2.svg" alt="menu" />
            </button>
            <button aria-label="close" id="close" onclick="showNav(true)" class=" focus:outline-none focus:ring-2" >
               <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sidebar2-svg3.svg" alt="close" />
                    </button>                           
        </div>
    </div>
    <div id="Main"  class="xl:rounded-r transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-full  w-full sm:w-64 bg-gray-900 flex-col">
        <div class="hidden xl:flex justify-start p-6 items-center space-x-3">
           <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sidebar2-svg1.svg" alt="logo" />
                <p class="text-2xl leading-6 text-white">Credit Bucket</p>                
        </div>
        <div class="mt-6 flex gap-20 flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
            <button class="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-white rounded ">
                <img class="fill-stroke " src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sidebar2-svg4.svg" alt="dashboard" />
                    <p class="text-base leading-4 ">Home</p>                    
            </button>
            <button class="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-white focus:text-indigo-400   rounded ">
                <img class="fill-stroke" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sidebar2-svg5.svg" alt="users" />    
                    <p class="text-base leading-4 ">Guaranty</p>                    
            </button>
            <button class="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-white focus:text-indigo-400   rounded ">
                <img class="fill-stroke" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sidebar2-svg5.svg" alt="users" />    
                    <p class="text-base leading-4 ">Chat</p>                    
            </button>
        </div>
        <div className="absolute bottom-0">
            <ConnectButton moralisAuth={false} />
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
