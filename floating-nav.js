(() => {
  const nav = document.querySelector('nav.top .nav-links');
  if (!nav) return;

  const hero = document.querySelector('.hero-section');
  let scheduled = false;
  let lastY = window.scrollY;
  let centered = lastY > 40;
  let directionTravel = 0;
  let blurTimer;

  const update = () => {
    scheduled = false;
    const y = window.scrollY;
    const wasCentered = centered;
    const delta = y - lastY;
    if (y <= 40) {
      centered = false;
      directionTravel = 0;
    } else if (delta !== 0) {
      if (Math.sign(delta) !== Math.sign(directionTravel)) directionTravel = 0;
      directionTravel += delta;
      if (directionTravel > 4) {
        centered = true;
        directionTravel = 0;
      } else if (directionTravel < -4) {
        centered = false;
        directionTravel = 0;
      }
    }
    document.body.classList.toggle('nav-scrolled', centered);
    if (centered !== wasCentered) {
      nav.classList.remove('nav-moving');
      void nav.offsetWidth;
      nav.classList.add('nav-moving');
      window.clearTimeout(blurTimer);
      blurTimer = window.setTimeout(() => nav.classList.remove('nav-moving'), 200);
    }
    if (document.body.classList.contains('photo-hero')) {
      document.body.classList.toggle('nav-on-light', !hero || hero.getBoundingClientRect().bottom <= 85);
    }
    lastY = y;
  };

  const scheduleUpdate = () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(update);
  };

  update();
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
})();
