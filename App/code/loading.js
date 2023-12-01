const logo = document.createElement("div");
logo.innerHTML = "<img src='/assets/ui/logoAnimation/1.png'><img src='/assets/ui/logoAnimation/3.png'><div class='lineCover'></div><img src='/assets/ui/logoAnimation/2.png'>";
logo.classList.add("loading");
app.appendChild(logo);