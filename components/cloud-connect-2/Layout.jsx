import Header from "components/cloud-connect-2/Header";
import Footer from "components/cloud-connect-2/Footer";
import styles from "../../styles/cloud-connect-2/cloudconnect.module.scss";

export default function Layout({ children }) {
  return (
    <main className={styles.cloudConnectHome}>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
