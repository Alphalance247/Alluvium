import Content from "./content";

export const metadata = {
  title: "You are on the list - Compound Intelligence",
  robots: {
    index: false,
  },
  icons: {
    icon: "/book/favicon.svg",
  },
};

export default function Page() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <Content />
    </>
  );
}
