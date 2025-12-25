import Image from "next/image";
import Link from "next/link";
import { MdOutlineFileDownload } from "react-icons/md";
import Button from "components/atlassian-service-reuse/Button";
import styles from "../../../styles/AlluviumRedesign2025/whitepaper/whitepaper.module.scss";
import HeadingText from "./heading";
import AuthorIntroSection from "./authorIntroSection";
import AuthorBio from "./authorBio";

const ContentSection = () => {
  const WHITEPAPER_BANNER_IMAGE =
    "/assets/redesign-2025/whitepaper/pdf-cover.png"; // TODO: swap with the provided banner asset
  const WHITEPAPER_DOWNLOAD_LINK = "/files/white-paper-pdf.pdf"; // TODO: replace with actual whitepaper link

  return (
    <section className={styles.content__section}>
      <AuthorIntroSection downloadLink={WHITEPAPER_DOWNLOAD_LINK} />

      <div className={styles.sub__topic}>
        <p className={styles.unified__p}>
          The Unified Service Nexus: Achieving CBN Compliance, Customer Delight,
          and Competitive Velocity in Nigerian Financial Institutions
        </p>

        <hr className={styles.hr} />
      </div>

      <div className={styles.content__body}>
        <div className={styles?.executive__summary}>
          <div className={styles?.content__encap}>
            <div>
              <p className={styles.summary}>Executive Summary:</p>
              <div className={styles?.Atlassian_Alluvium}>
                <HeadingText
                  text1={"I. The Atlassian-Alluvium Compliance Blueprint"}
                  heading={true}
                />
              </div>

              <HeadingText
                text2={"The Mandate: Compliance as a Service Delivery Metric"}
                subhead={true}
              />
              <div>
                <p className={`${styles.ptag} `}>
                  The Central Bank of Nigeria (CBN) has established a stringent
                  regulatory environment for Financial Institutions (FIs)
                  through the Consumer Protection Regulations (2019), which
                  mandate that complaint redress mechanisms must be{" "}
                  <span className={`${styles.psubtag}`}>
                    "free, fair, timely, transparent, accessible and
                    independent".
                  </span>
                </p>

                <HeadingText
                  text3={`For Nigerian FIs, operational excellence is now defined by
              demonstrable adherence to these rules, turning Service Level
              Agreements (SLAs) into high-stakes regulatory mandates. Failure to
              comply with the 7-day ATM refund period or the 14-day general
              complaint resolution window results in financial penalties and
              regulatory escalation.`}
                  paragraph={true}
                />
                <HeadingText
                  text3={`This whitepaper details how the strategic implementation of the
              Atlassian Service Collection, guided by the deep, global financial
              services expertise of Alluvium Solutions, transforms this
              regulatory burden into a source of competitive advantage.`}
                  paragraph={true}
                />
              </div>
            </div>

            <div>
              <HeadingText
                text2={
                  "The Alluvium Advantage: Implementing Verified Compliance at Scale"
                }
                subhead={true}
              />

              <div className={styles.sub__text}>
                <p className={styles?.ptag}>
                  As a leading Atlassian Solution Partner,{" "}
                  <span className={styles?.psubtag}> Alluvium Solutions </span>{" "}
                  brings over
                  <span className={styles?.psubtag}>
                    {" "}
                    10,000 hours of implementation expertise annually
                  </span>{" "}
                  to the Nigerian financial sector, including specialized
                  experience deploying solutions for banks, insurance companies,
                  and brokerage firms globally. Our implementation approach
                  focuses on achieving the following measurable outcomes
                </p>

                <div>
                  <ol className={styles.under} type="1">
                    <li className={styles.list__disc}>
                      <span className={styles.psubtag}>
                        Regulatory Certainty:
                      </span>{" "}
                      The platform ensures{" "}
                      <span className={styles.psubtag}>
                        immutable correspondence linkage
                      </span>{" "}
                      through the JSM Audit Log, satisfying the CBN's
                      requirement for a "durable" and verifiable record.
                    </li>
                    <li className={styles.list__disc}>
                      <span className={styles.psubtag}>
                        Competitive Velocity:
                      </span>{" "}
                      It eliminates the organizational chasm between customer
                      support and Dev/Ops, resulting in an AI-driven
                      acceleration of service delivery. Case studies confirm a
                      reduction in ticket resolution time from 8 days to just 9
                      minutes.
                    </li>
                    <li className={styles.list__disc}>
                      <span className={styles.psubtag}>
                        Sustainable Customer Delight:
                      </span>{" "}
                      By unifying internal and external service management, the
                      platform elevates the Employee Experience (EX), which is
                      proven to drive superior CX, leading to sustained customer
                      loyalty and increased profitability.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className={styles.summary}>
              The Nigerian Regulatory Imperative:
            </p>
            <div
              style={{
                width: "80%",
                marginTop: "14px",
                marginBottom: "1.5rem",
              }}
            >
              <HeadingText
                text1={"II. Closing the Compliance Gap"}
                heading={true}
              />
            </div>

            <HeadingText
              text2={"A. The Structural Challenge of CBN Mandates"}
              subhead={true}
            />
            <div>
              <HeadingText
                text3={`The Nigerian financial service sector is characterized by high transaction volumes and rapid digital transformation, which often outstrips internal operational efficiency. This operational fragmentation poses a direct challenge to the CBN’s core principles of fair treatment, transparency, and timely redress.`}
                paragraph={true}
              />
              <HeadingText
                text3={`A compliant service model must adhere to the following CBN mandates:`}
                paragraph={true}
              />
              <div className={`${styles.tableContainer}`}>
                <table className={`${styles.table}`}>
                  <thead className={`${styles.tableHead}`}>
                    <tr>
                      <th className={`${styles.tableHeader} `}>CBN Mandate</th>
                      <th className={`${styles.tableHeader} `}>
                        Required Action
                      </th>
                      <th className={`${styles.tableHeader} `}>
                        Regulatory Consequence of Failure
                      </th>
                    </tr>
                  </thead>
                  <tbody className={`${styles.tableBody}`}>
                    <tr>
                      <td
                        className={`${styles.tableCell} ${styles.tablecellhead}`}
                      >
                        ATM Refund SLA
                      </td>
                      <td className={`${styles.tableCell}`}>
                        <span className={`${styles.tableBadge}`}>
                          Clear backlog within{" "}
                          <span className={`${styles.tablecellhead}`}>
                            one (1) week (7 days)
                          </span>
                        </span>
                      </td>
                      <td className={`${styles.tableCell}`}>
                        Financial penalties{" "}
                      </td>
                    </tr>
                    <tr>
                      <td
                        className={`${styles.tableCell} ${styles.tablecellhead}`}
                      >
                        General Complaint Redress{" "}
                      </td>
                      <td className={`${styles.tableCell}`}>
                        <span className={`${styles.tableBadge}`}>
                          Resolve complaint internally within
                          <span className={`${styles.tablecellhead}`}>
                            two (2) weeks (14 days)
                          </span>
                        </span>
                      </td>
                      <td className={`${styles.tableCell}`}>
                        Mandatory escalation to the CBN Consumer Protection
                        Department (CPD)
                      </td>
                    </tr>

                    <tr>
                      <td
                        className={`${styles.tableCell} ${styles.tablecellhead}`}
                      >
                        Correspondence Linkage
                      </td>
                      <td className={`${styles.tableCell}`}>
                        <span className={`${styles.tableBadge}`}>
                          Documents must be in a
                          <span className={`${styles.tablecellhead}`}>
                            "durable form for ease of future reference"
                          </span>
                        </span>
                      </td>
                      <td className={`${styles.tableCell}`}>
                        Non-compliance with auditable governance principles
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-5">
              <HeadingText
                text2={
                  "B. Defining the Atlassian Service Collection for Governance"
                }
                subhead={true}
              />

              <div
                className="text-center mx-auto"
                style={{ marginTop: "2rem", marginBottom: "2rem" }}
              >
                <Image
                  width={502}
                  height={327}
                  src="/assets/redesign-2025/whitepaper/Illustration.png"
                  alt="white paper illustration"
                  className="mx-auto text-center d-block"
                />
              </div>
              <HeadingText
                text3={
                  "The Service Collection, unveiled as generally available in 2025, is the standard Atlassian offering that integrates:"
                }
                paragraph={true}
              />
              <div>
                <ul className={styles.under}>
                  <li className={styles.list__disc}>
                    <span className={styles.psubtag}>
                      Jira Service Management (JSM):
                    </span>{" "}
                    The foundation for IT and Enterprise Service Management.
                  </li>
                  <li className={styles.list__disc}>
                    <span className={styles.psubtag}>
                      Customer Service Management (CSM):
                    </span>{" "}
                    Specialized tools for external customer support.
                  </li>
                  <li className={styles.list__disc}>
                    <span className={styles.psubtag}>Assets:</span> The
                    Configuration Management Database (CMDB).
                  </li>
                  <li className={styles.list__disc}>
                    <span className={styles.psubtag}>Rovo AI Agents:</span>{" "}
                    AI-powered deflection and resolution capabilities.
                  </li>
                </ul>
              </div>

              <HeadingText
                text3={`Crucially, existing JSM users gain CSM, Assets, and Rovo AI agents without altering their license cost. This lowers the Total Cost of Ownership (TCO) for comprehensive, AI-enhanced service management, directly challenging competitor platforms that often charge for these capabilities as costly add-ons.`}
                paragraph={true}
              />
            </div>
          </div>

          <div>
            <p className={styles.summary}>Regulatory Certainty:</p>
            <div
              style={{
                width: "80%",
                marginTop: "14px",
                marginBottom: "1.5rem",
              }}
            >
              <HeadingText
                text1={"III. CBN Compliance and Auditable Governance"}
                heading={true}
              />
            </div>

            <HeadingText
              text2={"A. Enforcing Mandated SLAs with Precision"}
              subhead={true}
            />

            <div className="d-flex flex-column flex-lg-row">
              <div className="" style={{ flex: "0 0 60%" }}>
                <HeadingText
                  text3={`JSM is deployed by banks and financial institutions globally to ensure scalable governance and compliance. To meet the CBN's strict deadlines, Alluvium Solutions configures JSM's native SLA engine to the exact regulatory thresholds:`}
                  paragraph={true}
                />

                <div>
                  <ol className={styles.under} type="1">
                    <li className={styles.list__disc_new}>
                      <span className={styles.psubtag}>
                        7-Day ATM Refund Threshold:
                      </span>{" "}
                      The platform ensures JSM's SLA clock is configured to
                      initiate automated notifications and prioritized queues
                      the moment an ATM refund ticket is logged. This ensures
                      that operational teams prioritize risk mitigation above
                      general workload, providing FIs with{" "}
                      <span className={styles.psubtag}>defensible metrics</span>{" "}
                      that prove compliance.
                    </li>
                    <li className={styles.list__disc_new}>
                      <span className={styles.psubtag}>
                        14-Day Internal Resolution:
                      </span>{" "}
                      For all other complaints, JSM enforces the 14-day internal
                      resolution period. If the clock nears a breach, automated
                      workflows trigger mandatory supervisory review, minimizing
                      the risk of case escalation to the CBN's CPD.
                    </li>
                  </ol>
                </div>
              </div>

              <div>
                <Image
                  width={444}
                  height={300}
                  src="/assets/redesign-2025/whitepaper/Vector.png"
                  alt="white paper vector"
                  className="mx-auto text-center d-block"
                />
              </div>
            </div>
          </div>

          <div className="">
            <HeadingText
              text2={
                "B. The Immutable Correspondence Mandate: The JSM Audit Log"
              }
              subhead={true}
            />

            <HeadingText
              text3={
                "The most stringent CBN mandate requires FIs to maintain non-repudiable documentation demonstrating the integrity of the redress process. This transforms the service desk into a legally recognized System of Record."
              }
              paragraph={true}
            />
            <div>
              <ul className={styles.under}>
                <li className={styles.list__disc}>
                  <span className={styles.psubtag}>
                    JSM Audit Log as Evidence:
                  </span>{" "}
                  The JSM Audit Log tracks every key activity, recording it in a
                  secure, immutable log. Every action-from ticket creation to
                  agent commentary, SLA changes, and final communication-is
                  logged, guaranteeing immutability.
                </li>
                <li className={styles.list__disc}>
                  <span className={styles.psubtag}>
                    Forensic Detail for Auditors:
                  </span>{" "}
                  The log captures granular event information, including the
                  user source, time stamps, and whether the action was initiated
                  by a user ("Browser") or an automated system process
                  ("System"). This proves the integrity of automated regulatory
                  actions and provides the forensic detail required to prove due
                  diligence in an external regulatory audit.
                </li>

                <li className={styles.list__disc}>
                  <span className={styles.psubtag}>ITGC Compliance: </span> By
                  restricting audit log access to system administrators, the FI
                  ensures the non-repudiation of evidence, satisfying a critical
                  requirement of IT General Controls (ITGC).
                </li>
              </ul>
            </div>
          </div>

          <div className="">
            <HeadingText
              text2={"C. Foundational Trust and Data Sovereignty"}
              subhead={true}
            />

            <HeadingText
              text3={
                "Atlassian’s foundational compliance assures FIs that their data is handled securely:"
              }
              paragraph={true}
            />
            <div>
              <ul className={styles.under}>
                <li className={styles.list__disc}>
                  <span className={styles.psubtag}>
                    Global Security Standards:
                  </span>{" "}
                  Atlassian Cloud maintains certifications like{" "}
                  <span className={styles.psubtag}>
                    ISO/IEC 27001 and SOC 2 Type II,
                  </span>{" "}
                  providing continuous evidence of security and control
                  effectiveness.
                </li>
                <li className={styles.list__disc}>
                  <span className={styles.psubtag}>Data Residency: </span> For
                  FIs with strict data localization needs, JSM offers
                  <span className={styles.psubtag}> Data Residency, </span>
                  allowing in-scope application data to be pinned to defined
                  geographic locations, including regions like Europe
                  (Frankfurt/Dublin), the US, India (Mumbai), and Singapore.
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.whitepaperBanner}>
            <div className={styles.whitepaperBannerInner}>
              <div className={styles.bannerImageWrap}>
                <Image
                  src={WHITEPAPER_BANNER_IMAGE}
                  alt="Whitepaper download cover"
                  width={220}
                  height={260}
                />
              </div>
              <div className={styles.bannerCopy}>
                <h3 className={styles.bannerTitle}>
                  Whitepaper: Regulatory Supremacy and Competitive Edge
                </h3>
                <p className={styles.bannerSubtitle}>
                  The Central Bank of Nigeria (CBN) has established a stringent
                  regulatory environment for Financial Institutions (FIs)
                </p>
                <div className={styles.bannerCta}>
                  <Link href={WHITEPAPER_DOWNLOAD_LINK} target="__blank">
                    <Button
                      size="mediumL"
                      withIcon={true}
                      icon={<MdOutlineFileDownload size={20} />}
                    >
                      Download Full Report
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                marginBottom: "1.5rem",
              }}
            >
              <HeadingText
                text1={"IV. Competitive Velocity and Customer Delight"}
                heading={true}
              />
            </div>

            <HeadingText
              text2={"A. High-Velocity Service: Unifying Dev and Support"}
              subhead={true}
            />

            <div
              className="text-center mx-auto"
              style={{ marginTop: "2rem", marginBottom: "2rem" }}
            >
              <Image
                width={579}
                height={327}
                src="/assets/redesign-2025/whitepaper/velocity.png"
                alt="white paper velocity image"
                className="mx-auto text-center d-block"
              />
            </div>
            <HeadingText
              text3={
                "The core competitive advantage of the Service Collection lies in its ability to natively connect customer service (CSM) to the technical teams (Dev/Ops) that deliver the product."
              }
              paragraph={true}
            />
            <div>
              <ul className={styles.under}>
                <li className={styles.list__disc}>
                  <span className={styles.psubtag}>Quantifiable Speed:</span> By
                  using the Service Collection's AI agent (Rovo), FIs can
                  accelerate resolution times dramatically. Case studies
                  demonstrate a reduction in ticket resolution time from
                  <span className={styles.psubtag}> 8 days to 9 minutes.</span>
                </li>
                <li className={styles.list__disc}>
                  <span className={styles.psubtag}>The Teamwork Graph: </span>{" "}
                  This underlying architecture aggregates customer context,
                  development pipelines, and operational metrics, ensuring that
                  customer-reported issues are instantly linked to development
                  tickets in Jira Software, allowing for rapid action and fix
                  implementation.
                </li>
                <li className={styles.list__disc}>
                  <span className={styles.psubtag}>CX Results: </span>
                  This speed and transparency directly correlate with superior
                  customer experience, evidenced by users reporting a 6-point
                  increase in their CSAT scores.
                </li>
                <li className={styles.list__disc}>
                  <span className={styles.psubtag}>Rovo AI Agents:</span>{" "}
                  AI-powered deflection and resolution capabilities.
                </li>
              </ul>
            </div>

            <div className=" mt-5">
              <HeadingText
                text2={"B. The Employee Experience (EX) Multiplier"}
                subhead={true}
              />

              <div className="d-flex flex-column flex-lg-row mt-4">
                <div className="" style={{ flex: "0 0 60%" }}>
                  <HeadingText
                    text3={`The quality of external customer service is a direct function of internal employee support. Alluvium leverages JSM’s ESM capabilities to address internal friction through HRSM:`}
                    paragraph={true}
                  />

                  <div>
                    <ul className={styles.under}>
                      <li className={styles.list__disc_new}>
                        <span className={styles.psubtag}>
                          Streamlined Internal Service:
                        </span>{" "}
                        JSM provides templates and automated workflows
                        purpose-built for HR, Legal, and Finance teams. This
                        allows employees to access support via a single,
                        intuitive portal, reducing internal bureaucracy and
                        friction.
                      </li>
                      <li className={styles.list__disc_new}>
                        <span className={styles.psubtag}>
                          Retention and Profitability:
                        </span>{" "}
                        Research confirms that companies with high EX and CX
                        scores grow almost{" "}
                        <span className={styles.psubtag}>twice as fast</span>{" "}
                        and are{" "}
                        <span className={styles.psubtag}>
                          four times more profitable
                        </span>{" "}
                        . By ensuring that support agents have quick, efficient
                        access to internal help (HRSM), FIs retain knowledgeable
                        staff, leading to consistent, high-quality, compliant
                        service.
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <Image
                    width={442}
                    height={222}
                    src="/assets/redesign-2025/whitepaper/exp.png"
                    alt="white paper vector"
                    className="mx-auto text-center d-block"
                  />
                </div>
              </div>

              <div className=" mt-5">
                <HeadingText
                  text2={"C. Governing AI for Regulatory Confidence (Rovo AI)"}
                  subhead={true}
                />

                <HeadingText
                  text3={
                    "Rovo AI allows FIs to maintain 24/7 service availability while mitigating regulatory risk:"
                  }
                  paragraph={true}
                />

                <ul className={styles.under}>
                  <li className={styles.list__disc}>
                    <span className={styles.psubtag}> Responsible AI:</span>{" "}
                    Rovo is built on the Atlassian Cloud Platform, with an
                    explicit guarantee that inputs and outputs are not{" "}
                    <span className={styles.psubtag}>
                      {" "}
                      used to train, fine-tune, or improve any third-party LLM
                      models or services.
                    </span>{" "}
                    This commitment is essential for protecting sensitive
                    consumer correspondence from data leakage.
                  </li>
                  <li className={styles.list__disc}>
                    <span className={styles.psubtag}>Auditability: </span>{" "}
                    Rovo’s activities (e.g., chat started, agent created) are
                    logged in the central, immutable JSM Audit Log, ensuring
                    that AI deployment does not introduce a governance gap and
                    is fully auditable.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                marginBottom: "1.5rem",
              }}
            >
              <HeadingText
                text1={
                  "V. Operational Risk Mitigation-Assets and Change Control"
                }
                heading={true}
              />
            </div>

            <HeadingText
              text2={
                "A. Assets CMDB: Linking Complaints to Infrastructure Risk"
              }
              subhead={true}
            />

            <div className=" mt-5">
              <HeadingText
                text3={
                  "The Assets CMDB provides a strategic GRC repository, crucial for tracing service failure back to auditable infrastructure."
                }
                paragraph={true}
              />

              <ul className={styles.under}>
                <li className={styles.list__disc}>
                  <span className={styles.psubtag}>
                    {" "}
                    Auditing Configuration Items (CIs):
                  </span>
                  Assets tracks regulated IT components-core banking
                  applications, payment processors, and system configurations
                  -to aid in{" "}
                  <span className={styles.psubtag}>
                    {" "}
                    legal compliance, audits, and compliance activities.
                  </span>
                </li>
                <li className={styles.list__disc}>
                  <span className={styles.psubtag}>
                    {" "}
                    Impact Analysis and DORA Alignment:{" "}
                  </span>{" "}
                  Rovo’s Assets maps the relationships between CIs, ensuring
                  that teams can{" "}
                  <span className={styles.psubtag}>
                    {" "}
                    "minimize risk by understanding the downstream impact of
                    changes"
                  </span>{" "}
                  . This capability is essential for aligning with operational
                  resilience frameworks like DORA.
                </li>
                <li className={styles.list__disc}>
                  <span className={styles.psubtag}>
                    {" "}
                    Proactive Compliance:{" "}
                  </span>{" "}
                  FIs can run queries on Assets data to{" "}
                  <span className={styles.psubtag}>
                    {" "}
                    “detect compliance gaps and security risks”
                  </span>{" "}
                  -such as unauthorized software or missing patches-enabling a
                  preemptive approach to compliance risk management.
                </li>
              </ul>

              <div
                className="text-center mx-auto"
                style={{ marginTop: "2rem", marginBottom: "2rem" }}
              >
                <Image
                  width={614}
                  height={327}
                  src="/assets/redesign-2025/whitepaper/experience.png"
                  alt="white paper illustration"
                  className="mx-auto text-center d-block"
                />
              </div>
            </div>

            <div className=" mt-5">
              <HeadingText
                text2={"B. Governing Change: ITGC and SOX Compliance"}
                subhead={true}
              />
              <HeadingText
                text3={
                  "JSM's formalized change management process ensures that system changes are governed, which is foundational for ITGC and financial compliance."
                }
                paragraph={true}
              />

              <ul className={styles.under}>
                <li className={styles.list__disc}>
                  <span className={styles.psubtag}> Controlled Changes:</span>
                  JSM provides the necessary workflow to record, assess,
                  approve, and implement change requests in a controlled manner.
                </li>

                <li className={styles.list__disc}>
                  <span className={styles.psubtag}>
                    {" "}
                    Segregation of Duties (SoD):
                  </span>{" "}
                  JSM workflows can be configured to enforce strict SoD by
                  mandating sequential sign-offs from separate functional roles
                  for critical changes, providing indisputable evidence that
                  internal controls over financial systems were executed, which
                  is vital for SOX compliance attestation.
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.rounding}>
            <div
              style={{
                marginBottom: "1.5rem",
              }}
            >
              <HeadingText
                text1={
                  "VI. Conclusion: Strategic Partnership for Regulatory Supremacy"
                }
                heading={true}
              />
            </div>

            <div className="d-flex flex-column flex-lg-row">
              <div className="" style={{ flex: "0 0 60%" }}>
                <HeadingText
                  text3={`The Atlassian Service Collection, anchored by CSM and its AI capabilities, fundamentally redefines service delivery for Nigerian financial institutions. It enables FIs to achieve the competitive advantage of high velocity while ensuring verifiable compliance with stringent mandates set by the CBN.`}
                  paragraph={true}
                />
              </div>

              <Image
                width={441}
                height={165}
                src="/assets/redesign-2025/whitepaper/nill.png"
                alt="white paper vector"
                className="mx-auto text-center d-block"
              />
            </div>
            <p className={`${styles.ptag} `}>
              The{" "}
              <span className={`${styles.psubtag}`}>Alluvium Solutions</span>{" "}
              approach ensures that FIs rapidly realize this value. Our deep
              experience, including over 10,000 hours of annual implementation
              globally and specialized knowledge of financial sector
              requirements [29], allows us to configure and deploy the platform
              to meet the prescriptive CBN SLAs and immutable audit mandates
              immediately.
            </p>
            <p className={`${styles.ptag} `}>
              By partnering with{" "}
              <span className={`${styles.psubtag}`}>Alluvium Solutions</span>{" "}
              and adopting the Atlassian Service Collection, Nigerian FIs
              transform service management from a reactive cost center into a
              high-velocity, auditable, and strategically secure platform. This
              proactive risk mitigation strategy is essential for protecting the
              institution's operational health, reputation, and long-term
              viability in a regulated market.
            </p>
          </div>

          <AuthorBio />
        </div>

        <div>
          <Image
            width={191}
            height={251}
            src="/assets/redesign-2025/whitepaper/Download.png"
            alt="white paper dowload"
          />
          <p className={styles?.white__download__text}>
            Whitepaper: Regulatory Supremacy and Competitive Edge
          </p>
          <Link href={WHITEPAPER_DOWNLOAD_LINK} target="__blank">
            <div
              className="d-flex gap-2 align-items-center"
              style={{ cursor: "pointer" }}
            >
              <MdOutlineFileDownload size={20} fill="#E37915" />
              <span className={styles?.white__text}>
                {" "}
                Download Full Report{" "}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
