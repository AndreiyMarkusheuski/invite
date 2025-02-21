class ParallaxBackground {
  constructor(selector = '.parallax-bg') {
    this.element = document.querySelector(selector);
    this.scrollPos = 0;
    this.mousePos = { x: 0, y: 0 };
    this.raf = null;
    
    if (this.element && !this.shouldReduceMotion()) {
      this.init();
    }
  }

  init() {
    this.setupEventListeners();
    this.update();
  }

  setupEventListeners() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    window.addEventListener('mousemove', this.handleMouseMove.bind(this));
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  handleScroll() {
    this.scrollPos = window.pageYOffset;
  }

  handleMouseMove(e) {
    if (this.isTouchDevice()) return;
    this.mousePos = {
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20
    };
  }

  handleResize() {
    this.element.style.transform = '';
  }

  update() {
    if (!this.shouldReduceMotion()) {
      const scrollOffset = this.scrollPos * 0.3;
      const translateX = this.mousePos.x + scrollOffset;
      const translateY = this.mousePos.y + scrollOffset;
      
      this.element.style.transform = `
        translate3d(${translateX}px, ${translateY}px, 0)
        scale(1.1)
      `;
    }
    
    this.raf = requestAnimationFrame(this.update.bind(this));
  }

  shouldReduceMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  destroy() {
    cancelAnimationFrame(this.raf);
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('resize', this.handleResize);
  }
}

export default ParallaxBackground; 