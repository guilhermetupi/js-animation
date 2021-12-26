const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power1.out" } });

const button = document.querySelector("button");

button.addEventListener("click", () => {
  tl.to(".cookie-container", { opacity: 0, y: 50, duration: 0.75 });
});

tl.fromTo(
  ".cookie-container",
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, ease: "elastic.out(1, 0.4)", duration: 1.5 }
);
tl.fromTo(
  ".cookie",
  { x: -200, rotation: "-45deg", scale: 0 },
  { x: 0, rotation: "0deg", scale: 1 },
  "<10%"
);
tl.fromTo(
  ".text",
  { x: 50, opacity: 0 },
  { x: 0, opacity: 1, duration: 0.75 },
  "<50%"
);
tl.fromTo(
  ".cookie",
  { y: 10, rotation: "0deg" },
  { y: -10, rotation: "-20deg", yoyo: true, repeat: -1 },
  "<"
);
tl.fromTo(
  "#crumbs",
  { y: 5, rotation: "0deg" },
  { y: -5, rotation: "-5deg", yoyo: true, repeat: -1 },
  "<"
);
