import '@testing-library/jest-dom';

globalThis.IntersectionObserver = class IntersectionObserver {
  constructor() { }
  observe() { return null; }
  unobserve() { return null; }
  disconnect() { return null; }
};

globalThis.matchMedia = globalThis.matchMedia || function matchMedia(query) {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: () => { },
    removeListener: () => { },
    addEventListener: () => { },
    removeEventListener: () => { },
    dispatchEvent: () => false,
  };
};
