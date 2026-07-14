export const scrollToId = (id) => {
  const target = document.querySelector(id);
  if (!target) return;

  if (window.lenis) {
    window.lenis.scrollTo(target, { offset: -90 });
  } else {
    target.scrollIntoView({ behavior: "smooth" });
  }
};
