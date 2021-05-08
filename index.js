const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener("mouseenter", e => {
    const img = e.target.children[0].children[0];
    const title = e.target.children[1].children[0];
    img.style.transform = `translateX(${e.target.clientWidth / 2 - 64}px) scale(1.5)`;
  })
})

cards.forEach(card => {
  card.addEventListener("mouseleave", e => {
    const img = e.target.children[0].children[0];
    const title = e.target.children[1].children[0];
    img.style.transform = "translateX(0px) scale(1)";
  })
})