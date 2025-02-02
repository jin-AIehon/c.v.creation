/* ハンバーガーメニューの動作 */
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

/* ページ読み込み時の演出（不要なら削除OK） */
window.addEventListener("load", () => {
  document.body.style.opacity = 0;
  let opacity = 0;
  let fadeInterval = setInterval(() => {
    if (opacity < 1) {
      opacity += 0.05;
      document.body.style.opacity = opacity;
    } else {
      clearInterval(fadeInterval);
    }
  }, 50);
});
