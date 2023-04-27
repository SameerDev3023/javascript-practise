let tabButtons = document.querySelectorAll(".tab-buttons");
for (var i = 0; i < tabButtons.length; i++) {
  tabButtons[i].addEventListener("click", function (e) {
    var tabName = this.dataset.tab;
    var tabContent = document.getElementById(tabName);
    var alltabContent = document.querySelectorAll(".tab-content");

    for (var j = 0; j < alltabContent.length; j++) {
      alltabContent[j].style.display = "none";
    }
    for (var k = 0; k < tabButtons.length; k++) {
      tabButtons[k].classList.remove("active");
    }
    this.classList.add("active");
    tabContent.style.display = "block";
  });
}
