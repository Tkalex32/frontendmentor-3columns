const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener("mouseenter", e => {
    const img = e.target.children[0].children[0];
    const title = e.target.children[1].children[0];
    img.style.transform = `translateX(${e.target.clientWidth / 2 - 64}px) scale(1.5)`;
    title.style.transform = `translateX(${e.target.clientWidth / 2 - 70}px) scale(1.5)`;
    //title.style.transform = `skewX(-20deg)`;
  })
})

cards.forEach(card => {
  card.addEventListener("mouseleave", e => {
    const img = e.target.children[0].children[0];
    const title = e.target.children[1].children[0];
    img.style.transform = "translateX(0px) scale(1)";
    title.style.transform = `translateX(0px) scale(1)`;
    //title.style.transform = `skewX(0deg)`;
  })
})

/*
transform: rotate(1080 deg);

animation: roll 3 s infinite;
transform: rotate(30 deg);
*/