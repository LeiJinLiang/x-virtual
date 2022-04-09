export const bounceOut = (t: number) => {
  if (t < 1 / 2.75) {
    return 7.5625 * t * t;
  } else if (t < 2 / 2.75) {
    return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
  } else if (t < 2.5 / 2.75) {
    return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
  } else {
    return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  }
};

export const smoothScroll = (opt: {
  h: number;
  ele: React.MutableRefObject<any> | any;
}) => {
  const { h, ele = window } = opt;
  let start: number, previousTimeStamp: number;
  let requestAnimationFrameId: number;
  function step(timestamp: number) {
    if (start === undefined) {
      start = timestamp;
    }
    const elapsed = timestamp - start;

    if (previousTimeStamp !== timestamp) {
      // Math.min() is used here to make sure the element stops at exactly 200px
      const y = Math.min(5 * elapsed, h);
      ele.scrollTo(0, y);
      if (y >= h) {
        window.cancelAnimationFrame(requestAnimationFrameId);
      } else {
        requestAnimationFrameId = window.requestAnimationFrame(step);
      }
    }
  }
  requestAnimationFrameId = window.requestAnimationFrame(step);
};
