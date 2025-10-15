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
import { eventTicket } from "data";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    var $zoho = { ...window?.$zoho } || {};
    $zoho.salesiq = $zoho.salesiq || {
      widgetcode:
        "siqd802d9d0f485dfaac340ddc20306f3d11ecdc5f9d155bc34c062992d6745a323",
      values: {},
      ready: function () {},
    };
    window.$zoho = { ...window?.$zoho, ...$zoho };
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  const router = useRouter();
  const [ticketNumbers, setTicketNumbers] = useState(eventTicket.map(() => 0));

  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     ga.pageview(url);
  //   };
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);

  return (
    <ToastProvider placement="top-center">
      {/* <Layout> */}
      <Component
        {...pageProps}
        ticketNumbers={ticketNumbers}
        setTicketNumbers={setTicketNumbers}
      />
      {/* </Layout> */}
    </ToastProvider>
  );
}

export default MyApp;
