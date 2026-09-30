import Content from "./content";

export const metadata = {
  title: "Compound Intelligence - The Book Series | Get Early Access",
  description:
    "Nine plain-English books on getting real work done with Claude and the AI already built into Atlassian, ServiceNow, Microsoft 365, Salesforce, SAP, Workday, Oracle and Google Workspace. Sign up for early access and the launch-week price.",
  alternates: {
    canonical: "https://alluvium.net/book/",
  },
  openGraph: {
    type: "website",
    title: "Compound Intelligence - The Book Series",
    description:
      "Your platform's AI remembers and acts inside the system. Claude reasons across everything. The power is in the loop between them. Nine books. Launching soon.",
    url: "https://alluvium.net/book/",
    images: ["https://alluvium.net/book/og.png"],
  },
  twitter: {
    card: "summary_large_image",
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
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <Content />
    </>
  );
}
