function toggleDetails(id) {
  const element = document.getElementById(id);
  element.classList.toggle("hidden");
}

document.getElementById("year").textContent = new Date().getFullYear();