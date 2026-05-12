function order(product, btn) {
  let card = btn.parentElement;
  let qty = card.querySelector(".qty").value;

  let message = `Bonjour, je veux commander ${qty} ${product}(s).`;

  let url = "https://wa.me/22961473565?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}