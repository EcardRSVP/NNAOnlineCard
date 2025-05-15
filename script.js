
document.getElementById("openBtn").addEventListener("click", function() {
  document.getElementById("front").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
  document.getElementById("bgMusic").play();
});

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function markReserved(button, key) {
  if (localStorage.getItem(key) === "reserved") return;
  button.textContent = "Sudah Ditempah";
  button.disabled = true;
  button.style.background = "#aaa";
  localStorage.setItem(key, "reserved");
}

function addWish(event) {
  event.preventDefault();
  const name = document.getElementById("guestName").value;
  const message = document.getElementById("wish").value;
  const container = document.getElementById("wishList");
  const div = document.createElement("div");
  div.innerHTML = `<strong>${name}</strong><p>${message}</p><hr>`;
  container.prepend(div);
  event.target.reset();
}

window.onload = () => {
  ['item1','item2','item3'].forEach((key, idx) => {
    if (localStorage.getItem(key) === 'reserved') {
      const btn = document.querySelectorAll('#wishlist-items button')[idx];
      btn.textContent = "Sudah Ditempah";
      btn.disabled = true;
      btn.style.background = '#aaa';
    }
  });
};
