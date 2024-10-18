import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <section>
      <div className=" text-center " style={{ padding: "8rem 8rem" }}>
        <Image src="/assets/tools/404.png" alt="404" width={280} height={159} />
        <p
          style={{
            fontSize: "48px",
            color: "#132132",
            fontFamily: "Lalezar",
          }}
        >
          page not found
        </p>
        <Link href="/">
          <button
            className=""
            style={{
              fontSize: "1rem",
              fontWeight: "600",
              color: "#BBB8B8",
              background: "#132132",
              borderRadius: "7px",
              padding: "1rem 2rem",
              border: "none",
            }}
          >
            Go Home
          </button>
        </Link>
      </div>
    </section>
  );
}
