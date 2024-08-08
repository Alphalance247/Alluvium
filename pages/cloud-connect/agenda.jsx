import Head from "next/head";
import Layout from "../../components/cloud-connect-2/Layout";
import SectionHeader from "../../components/cloud-connect-2/SectionHeader";

export default function Agenda() {
  return (
    <Layout>
      <Head>
        <title>Agenda | Cloud Connect 2024</title>
      </Head>
      <section className="py-[96px] max-w-[1320px] mx-auto">
        <SectionHeader heading="Cloud Connect Agenda" />
      </section>
      <section className="py-[96px] bg-white">
        <div className="max-w-[1320px] mx-auto">
          <div>
            <p className="mb-4 text-[#262626] font-medium text-[32px] leading-[30px] tracking-[-0.5px]">
              Tuesday, November 12
            </p>
            <p className="text-[#595959] text-base leading-[20px]">
              All times are in WAT (Nigeria time)
            </p>
          </div>
          <div>{/* timeline component */}</div>
        </div>
      </section>
    </Layout>
  );
}
