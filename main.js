const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
btnNo.addEventListener("mouseover", moveButton);
btnNo.addEventListener("touchstart", moveButton); // Handles mobile devices

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moveButton() {
    const containerHeight = container.getBoundingClientRect().height;
    const containerWidth = container.getBoundingClientRect().width;
    const btnHeight = btnNo.getBoundingClientRect().height;
    const btnWidth = btnNo.getBoundingClientRect().width;

    let newTop = getRandomNumber(0, containerHeight - btnHeight);
    let newLeft = getRandomNumber(0, containerWidth - btnWidth);

    btnNo.style.top = `${newTop}px`;
    btnNo.style.left = `${newLeft}px`;
}

btnYes.addEventListener("click", (e) => {
    btnNo.classList.add("hide");
    imageOne.classList.add("hide");
    imageTwo.classList.remove("hide");
});
