import "../styles/globals.css";
import Head from "next/head";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                
            </Head>
            <NavBar />
            <Component {...pageProps} />
            <Footer/>
        </>
    );
}

export default MyApp;
