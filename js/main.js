document.querySelector(".fa-bars").onclick = function () {

    document.querySelector(".sidebar").classList.toggle("small");

    document.querySelector(".container").classList.toggle("lg-container");

}

document.querySelector(".fa-microphone").onclick = function () {
    this.classList.toggle("start")
}

document.querySelector(".fa-video").onclick = function () {
    this.classList.toggle("start")
}

document.querySelector(".fa-search").onclick = function () {
    document.querySelector(".input").focus();

}
