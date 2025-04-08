import React from "react";
import styles from "../../../styles/AlluviumRedesign2025/startup/StartupPackage.module.scss";

const StartupPackage = () => {
  const data = [
    { product: "Jira", tier: "Premium", package: "50 seats", rrp: "$8,000" },
    {
      product: "Confluence",
      tier: "Premium",
      package: "50 seats",
      rrp: "$5,775",
    },
    {
      product: "Compass",
      tier: "Standard",
      package: "50 full user seat and unlimited basic user seat",
      rrp: "$3,500",
    },
    {
      product: "Bitbucket",
      tier: "Standard",
      package: "50 seats",
      rrp: "$3,600",
    },
    {
      product: "Loom",
      tier: "Premium",
      package:
        "50 creator seats with unlimited recording plus unlimited creator life seat (Can record up to 5 min)",
      rrp: "$7,500",
    },
    {
      product: "Jira product discovery",
      tier: "Business",
      package: "Up to 10 creator seat and unlimited contributor seat",
      rrp: "$1,000",
    },
    {
      product: "Jira service management",
      tier: "Standard",
      package: "50 seats",
      rrp: "$1,600",
    },
  ];

  return (
    <div className={styles.startupPackage}>
      <div className={styles.heading}>
        <h2>Startup Package</h2>
        <p>For zero dollars</p>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ width: "27%" }}>Product</th>
            <th style={{ width: "27%" }}>Tier</th>
            <th style={{ width: "27%" }}>Package</th>
            <th style={{ width: "18%" }}>RRP</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.product}</td>
              <td>{item.tier}</td>
              <td>{item.package}</td>
              <td>{item.rrp}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.hours}>
        <p>
          20 hours support for any implementation, integrations, automations,
          AI, or any pain point.
        </p>
      </div>
      <div className={styles.total}>
        <div className={styles.figures}>
          <p>Total:</p>{" "}
          <p>
            <span className={styles.strikethrough}>$31,600 </span>
            <span className={styles.dollar}>$0.00</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartupPackage;
