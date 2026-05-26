export const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag("config", MEASUREMENT_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const dateFormat = (date) => {
  const m = new Date(date);
  var dateString =
    m.getUTCFullYear() +
    "/" +
    ("0" + (m.getUTCMonth() + 1)).slice(-2) +
    "/" +
    ("0" + m.getUTCDate()).slice(-2) +
    " " +
    ("0" + m.getUTCHours()).slice(-2) +
    ":" +
    ("0" + m.getUTCMinutes()).slice(-2) +
    ":" +
    ("0" + m.getUTCSeconds()).slice(-2);
  return dateString;
};

export const isWorkEmail = (email) => {
  const value = (email || "").trim().toLowerCase();
  if (!value) return false;
  const atIndex = value.lastIndexOf("@");
  if (atIndex <= 0) return false;

  const domain = value.slice(atIndex + 1);
  if (!domain || domain.includes(" ")) return false;

  const personalDomains = new Set([
    "gmail.com",
    "googlemail.com",
    "yahoo.com",
    "yahoo.co.uk",
    "yahoo.ca",
    "outlook.com",
    "hotmail.com",
    "live.com",
    "msn.com",
    "aol.com",
    "icloud.com",
    "me.com",
    "mac.com",
    "protonmail.com",
    "proton.me",
    "pm.me",
    "gmx.com",
    "gmx.net",
    "yandex.com",
    "yandex.ru",
    "mail.com",
    "fastmail.com",
    "hey.com",
    "zoho.com",
  ]);

  return !personalDomains.has(domain);
};
