export const savePreferences = (preferences) => {
  localStorage.setItem(
    "cookieConsent",
    JSON.stringify({ necessary: true, ...preferences }),
  );
};
