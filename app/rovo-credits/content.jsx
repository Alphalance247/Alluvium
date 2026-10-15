"use client";

import { useMemo, useState } from "react";
import "./rovo-credits.css";
import { ACTS, PLANS, PRESETS, n, nf } from "./data";
import Hero from "./components/Hero";
import WebinarBanner from "./components/WebinarBanner";
import WebinarEventCard from "./components/WebinarEventCard";
import PlanAndSeats from "./components/PlanAndSeats";
import MonthlyUsage from "./components/MonthlyUsage";
import Overage from "./components/Overage";
import MonthlyEstimate from "./components/MonthlyEstimate";
import WhereCreditsGo from "./components/WhereCreditsGo";
import SeatsTable from "./components/SeatsTable";
import Notes from "./components/Notes";
import ContactBand from "./components/ContactBand";

const DEFAULT_SEATS = { jira: "60", loom: "0", conf: "60", coll: "0" };
const DEFAULT_RUNS = Object.fromEntries(ACTS.map((a) => [a.id, String(a.runs)]));
const DEFAULT_CREDITS = Object.fromEntries(ACTS.map((a) => [a.id, String(a.cr)]));

export default function Content() {
  const [plan, setPlan] = useState("standard");
  const [seats, setSeats] = useState(DEFAULT_SEATS);
  const [active, setActive] = useState("60");
  const [runs, setRuns] = useState(DEFAULT_RUNS);
  const [credits, setCredits] = useState(DEFAULT_CREDITS);
  const [price, setPrice] = useState("0.01");
  const [cap, setCap] = useState("0");
  const [extra, setExtra] = useState(true);

  function setSeat(key, value) {
    setSeats((prev) => ({ ...prev, [key]: value }));
  }
  function setRun(id, value) {
    setRuns((prev) => ({ ...prev, [id]: value }));
  }
  function setCredit(id, value) {
    setCredits((prev) => ({ ...prev, [id]: value }));
  }
  function applyPreset(key) {
    const preset = PRESETS[key];
    setActive(String(preset.active));
    setRuns((prev) => {
      const next = { ...prev };
      Object.keys(preset.runs).forEach((id) => {
        next[id] = String(preset.runs[id]);
      });
      return next;
    });
  }

  const calc = useMemo(() => {
    const seatVals = {
      jira: n(seats.jira),
      loom: n(seats.loom),
      conf: n(seats.conf),
      coll: n(seats.coll),
    };
    const totalSeats = seatVals.jira + seatVals.loom + seatVals.conf + seatVals.coll;

    const poolFor = (p) =>
      seatVals.jira * PLANS[p].std + seatVals.conf * PLANS[p].std + seatVals.loom * PLANS[p].std + seatVals.coll * PLANS[p].coll;

    const pool = poolFor(plan);
    const activeN = n(active);
    const users = Math.round(
      totalSeats > 0 ? Math.max(seatVals.jira, seatVals.conf, seatVals.loom, seatVals.coll) * (activeN / 100) : 0
    );

    const rows = ACTS.map((a) => ({
      ...a,
      creditsUsed: a.free ? 0 : n(runs[a.id]) * n(credits[a.id]) * users,
    }));
    const used = rows.reduce((s, r) => s + r.creditsUsed, 0);
    const over = Math.max(0, used - pool);
    const priceN = n(price);
    const capN = n(cap);

    let cost = over * priceN;
    let capped = false;
    if (!extra) {
      cost = 0;
    } else if (capN > 0 && cost > capN) {
      cost = capN;
      capped = true;
    }

    const pct = pool > 0 ? (used / pool) * 100 : used > 0 ? 100 : 0;

    let inW, overW;
    if (pct <= 100) {
      inW = pct;
      overW = 0;
    } else {
      inW = (100 / pct) * 100;
      overW = 100 - inW;
    }

    let statusClass, statusText;
    if (pct <= 80) {
      statusClass = "ok";
      statusText = "Within allowance";
    } else if (pct <= 100) {
      statusClass = "warn";
      statusText = "Near the limit (alerts fire at 80%)";
    } else {
      statusClass = "crit";
      statusText = extra ? "Over allowance, extra usage billed" : "Over allowance, credit features pause";
    }

    let msg = `Based on about ${nf.format(users)} active users.`;
    if (over > 0 && !extra) {
      msg +=
        " With extra usage off, credit-consuming requests stop until the pool resets on the 1st of next month. Search and summaries keep working.";
    }
    if (capped) {
      msg += " Your spend limit caps the bill; usage beyond it would pause.";
    }

    const maxCredits = Math.max(...rows.map((r) => r.creditsUsed), 1);
    const bars = rows
      .filter((r) => r.creditsUsed > 0)
      .map((r) => ({
        label: r.name
          .replace("Rovo Chat: ", "")
          .replace("Premium features: ", "")
          .replace(", slides, Jira agents, Self-service Agent", ""),
        credits: r.creditsUsed,
        pct: (r.creditsUsed / maxCredits) * 100,
      }));

    const cmpRows = Object.keys(PLANS).map((key) => {
      const pl = poolFor(key);
      const ok = pl >= used;
      const per = totalSeats > 0 ? Math.round(pl / totalSeats) : 0;
      return {
        key,
        label: PLANS[key].label,
        selected: key === plan,
        per,
        pool: pl,
        ok,
        short: Math.round(used - pl),
      };
    });

    return { pool, used, over, cost, pct, inW, overW, statusClass, statusText, msg, bars, cmpRows };
  }, [plan, seats, active, runs, credits, price, cap, extra]);

  return (
    <div className="rovo-credits-page">
      <div className="wrap">
        <WebinarBanner />
        <Hero />
        <WebinarEventCard />

        <div className="grid">
          <div className="col">
            <PlanAndSeats plan={plan} onPlanChange={setPlan} seats={seats} onSeatChange={setSeat} />
            <MonthlyUsage
              active={active}
              onActiveChange={setActive}
              runs={runs}
              credits={credits}
              onRunChange={setRun}
              onCreditChange={setCredit}
              onPreset={applyPreset}
            />
            <Overage price={price} onPriceChange={setPrice} cap={cap} onCapChange={setCap} extra={extra} onExtraChange={setExtra} />
          </div>

          <div className="col">
            <MonthlyEstimate
              statusClass={calc.statusClass}
              statusText={calc.statusText}
              used={calc.used}
              pool={calc.pool}
              pct={calc.pct}
              inW={calc.inW}
              overW={calc.overW}
              over={calc.over}
              cost={calc.cost}
              msg={calc.msg}
            />
            <WhereCreditsGo bars={calc.bars} />
            <SeatsTable rows={calc.cmpRows} />
          </div>
        </div>

        <Notes />
        <ContactBand />
      </div>
    </div>
  );
}
