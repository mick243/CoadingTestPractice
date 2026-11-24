function solution(signals) {
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const lcm = (a, b) => (a * b) / gcd(a, b);

  let max = 1;
  for (const [g, y, r] of signals) {
    max = lcm(max, g + y + r);
  }

  for (let t = 1; t <= max; t++) {
    const ok = signals.every(([g, y, r]) => {
      const cur = ((t - 1) % (g + y + r)) + 1;
      return cur > g && cur <= g + y;
    });

    if (ok) return t;
  }

  return -1;
}
