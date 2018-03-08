const width = 1500;
let i = 0;
const interval = window.setInterval(() => {
  scrollTo(0, i);
  i += 2;
  if (i > width) clearInterval(interval);
}, 1);
