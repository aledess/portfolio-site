export function smoothScrollToId(id: string, duration = 1400) {
  const element = document.getElementById(id);
  if (!element) return;

  const startY = window.scrollY;
  const endY = element.getBoundingClientRect().top + startY;
  const diff = endY - startY;

  let startTime: number | null = null;

  const easeInOutExpo = (t: number) => {
    if (t === 0) return 0;
    if (t === 1) return 1;
    return t < 0.5
      ? Math.pow(2, 20 * t - 10) / 2
      : (2 - Math.pow(2, -20 * t + 10)) / 2;
  };

  function step(currentTime: number) {
    if (!startTime) startTime = currentTime;
    const time = currentTime - startTime;
    const percent = Math.min(time / duration, 1);
    const eased = easeInOutExpo(percent);

    window.scrollTo(0, startY + diff * eased);

    if (time < duration) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}
