const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // toogle nav
        nav.classList.toggle('nav-active');
        
        // animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        // burger animation
        burger.classList.toggle('toggle');
    })
}

navSlide();

const pass_kolom = document.querySelector('.password');
const perlihatkan_btn = document.querySelector('.perlihatkan');
perlihatkan_btn.addEventListener('click', function (){
    if (pass_kolom.type === "password"){
        pass_kolom.type = "text";
        perlihatkan_btn.style.color = "rgb(13, 155, 202)";
        perlihatkan_btn.textContent = "TUTUP";
    }else{
        pass_kolom.type = "password";
        perlihatkan_btn.style.color = "#222";
        perlihatkan_btn.textContent = "LIHAT";
        }
});
    

function check() {
    var checkBox = document.getElementById("checbox");
    var text1 = document.getElementsByClassName("text1");
    var text2 = document.getElementsByClassName("text2");
    for (var i = 0; i < text1.length; i++) {
        if (checkBox.checked == true) {
            text1[i].style.display = "block";
            text2[i].style.display = "none";
        } else if (checkBox.checked == false) {
            text1[i].style.display = "none";
            text2[i].style.display = "block";
        }
    }
}
check();