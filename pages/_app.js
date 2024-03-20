import { useEffect } from "react";
import { useRouter } from "next/router";
import * as ga from "../lib/ga";
// import Layout from '../components/layout';
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastProvider } from "react-toast-notifications";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ToastProvider placement="top-center">
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
    </ToastProvider>
  );
}

export default MyApp;
