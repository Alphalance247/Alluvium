import Content from "./content";

export const metadata = {
  title: "Rovo Credits Calculator | Alluvium",
  description:
    "Estimate monthly Atlassian Rovo credit use against your pooled seat allowance, and see what extra usage would cost once overage billing begins 3 December 2026.",
};

export default function Page() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Gelasio:wght@700&display=swap"
        rel="stylesheet"
      />
      <Content />
    </>
  );
}
