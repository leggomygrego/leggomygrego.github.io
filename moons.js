const moonEmojis = {
  0: "🌑",
  1: "🌒",
  2: "🌒",
  3: "🌒",
  4: "🌒",
  5: "🌒",
  6: "🌓",
  7: "🌓",
  8: "🌓",
  9: "🌓",
  10: "🌔",
  11: "🌔",
  12: "🌔",
  13: "🌔",
  14: "🌕",
  15: "🌕",
  16: "🌕",
  17: "🌖",
  18: "🌖",
  19: "🌖",
  20: "🌖",
  21: "🌗",
  22: "🌗",
  23: "🌗",
  24: "🌘",
  25: "🌘",
  26: "🌘",
  28: "🌘",
  29: "🌑"
};

const MOON_ORBIT_IN_DAYS = 29.53;

function getMoonPercent(){
  const PAST_FULL_MOON = new Date('2000-01-06T12:24:01');
  const seconds = 1000
  const minutes = 60 * seconds
  const hours = 60 * minutes
  const oneDay = 24 * hours
  const daysSinceFullMoon = (Date.now() - PAST_FULL_MOON) / oneDay
  const moonOrbits = daysSinceFullMoon / MOON_ORBIT_IN_DAYS;
  const moonOrbitsFloatingPoint = "0." + moonOrbits.toString().split(".")[1]
  return Math.parseFloat(moonOrbitsFloatingPoint);
}

function getMoonAgeInDays(){
  const moonAgeInDays = getMoonPercent() * MOON_ORBIT_IN_DAYS
  return moonAgeInDays;
}

function getMoonEmoji(){

  const moonAgeInDays = getMoonPercent() * MOON_ORBIT_IN_DAYS
  return moonEmojis[Math.floor(moonAgeInDays)];
}

const dynamicFavicon = (favicon) => {
  const link = document.createElement("link");
  link.rel = "shortcut icon";
  link.type = "image/svg+xml";
  link.href =
    "data:image/svg+xml,
    <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
    <text y=%22.9em%22 font-size=%2290%22>" +
    favicon +
    "</text></svg>";
  document.head.appendChild(link);
};
dynamicFavicon(getMoonEmoji());
