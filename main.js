let acc = document.getElementsByClassName("accordion");
let i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        // Закрываем все аккордионы, кроме текущего
        for (let j = 0; j < acc.length; j++) {
            if (acc[j] !== this) {
                acc[j].classList.remove("active");
                acc[j].nextElementSibling.style.display = "none";
            }
        }
        
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
