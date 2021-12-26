const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power2.out" } });
const home = document.querySelector(".home");

gsap.set(".feather", { scale: 0, transformOrigin: "center" });
home.addEventListener("click", () => {
  gsap.fromTo(".home-svg", { scale: 1 }, { scale: 0.9, yoyo: true, repeat: 1 });
  gsap.fromTo(
    ".feather",
    { scale: 0, y: -5 },
    { scale: 1.5, y: 20, duration: 1, stagger: 0.2 }
  );
  gsap.fromTo(".right-feather", { x: 0 }, { x: -5 });
  gsap.fromTo(".left-feather", { x: 0 }, { x: 5 });
});
