const menu_bar = document.getElementById("menu");
const sidebar = document.getElementById("sidebar");
const My_container = document.querySelector(".container");
const vois = document.querySelector(".fa-microphone");
const video = document.querySelector(".fa-video")
const incun_search = document.querySelector(".fa-search");
const input_earch = document.querySelector(".input");

menu_bar.onclick = function () {

    sidebar.classList.toggle("small");

    My_container.classList.toggle("lg-container");

}

vois.onclick = function () {
    this.classList.toggle("start")
}

video.onclick = function () {
    this.classList.toggle("start")
}

incun_search.onclick = function () {
    input_earch.focus();

}
