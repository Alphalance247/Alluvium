import Container from "components/Alluvium-Redesign-2026/common/container";

const CREDS = ["Atlassian Gold Solution Partner", "Claude Partner Network - Select Partner", "alluvium.net"];

export default function Author() {
  return (
    <section className="bg-secondary-100">
      <Container className="flex items-center gap-16 max-[900px]:flex-col">
        <img
          src="/book/author.jpg"
          alt="Taiwo Ojo"
          width={288}
          height={288}
          className="h-72 w-72 flex-none rounded-full object-cover outline outline-[5px] -outline-offset-1 outline-default-100"
        />

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="h-0 w-5 border-t-4 border-default-100" />
              <span className="font-sans text-sm font-bold uppercase tracking-wide leading-4 text-grey-900">
                About the author
              </span>
            </div>
            <h2 className="font-serif text-4xl font-bold leading-10 text-grey-900">Taiwo Ojo</h2>
            <p className="max-w-[35rem] font-sans text-lg font-medium leading-7 text-grey-700">
              Taiwo Ojo is the co-founder and CEO of Alluvium, an Atlassian Gold Solution Partner and a Select Partner
              in the Claude Partner Network. He helps teams adopt AI in their workflows without breaking what already
              works. Compound Intelligence is the book he wished his clients could hand to their teams on day one.
            </p>
          </div>

          <div className="flex flex-wrap items-start gap-2">
            {CREDS.map((cred) => (
              <span
                key={cred}
                className="rounded-3xl px-4 py-2 font-sans text-sm font-semibold leading-5 text-grey-500 outline outline-1 -outline-offset-1 outline-tertiary-100"
              >
                {cred}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
