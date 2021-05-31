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