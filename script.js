function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function addWish(event) {
  event.preventDefault();
  const name = document.getElementById("guestName").value;
  const message = document.getElementById("wish").value;
  const container = document.getElementById("wishList");

  const div = document.createElement("div");
  div.innerHTML = `<strong>${name}</strong><p>${message}</p><hr>`;
  container.prepend(div);

  document.getElementById("guestName").value = "";
  document.getElementById("wish").value = "";
}
