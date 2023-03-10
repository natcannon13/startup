function login() {
    const nameEl = document.getElementById("name");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "play.html";
  }