import "../styles/globals.css";
import "../styles/mystyles.css"
import Header from "../components/Header";
import { MoralisProvider } from "react-moralis";
import Head from "next/head";
import { NotificationProvider } from "web3uikit";

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>Credit Bucket</title>
                <link rel="icon" href="/st.svg" />
            </Head>
            <MoralisProvider initializeOnMount={false}>
                <div className="grid grid-cols-4">
                <NotificationProvider>
                    <Header />
                    <Component {...pageProps} />
                </NotificationProvider>
                </div>
            </MoralisProvider>
        </div>
    );
}

export default MyApp;
