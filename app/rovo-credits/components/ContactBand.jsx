const MAIL_HREF = "mailto:taiwo@alluvium.net?subject=Rovo%20credits%20estimate";

export default function ContactBand() {
  return (
    <section className="band">
      <div>
        <h2>
          Planning your <span className="accent-word-d">Rovo</span> rollout?
        </h2>
        <p>
          Our AI Software team helps Atlassian customers size credits, set admin limits and put Rovo to work on real
          business problems. Write to{" "}
          <a href={MAIL_HREF} style={{ color: "inherit", fontWeight: 600 }}>
            taiwo@alluvium.net
          </a>
          .
        </p>
      </div>
      <a className="btn" href={MAIL_HREF}>
        Contact us
      </a>
    </section>
  );
}
