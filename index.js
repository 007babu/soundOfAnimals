
for (let i = 0; i < document.querySelectorAll(".sound").length; i++) {
    document.querySelectorAll(".sound")[i].addEventListener("click", function () {
        let key = this.innerHTML;
        playSound(key);
    });
}

function playSound(key) {
    let audio;
    switch (key) {
        case "dog":
            audio = new Audio("sound/dog-sound.wav");
            audio.play();
            break;

        case "cat":
            audio = new Audio("sound/cat-sound.wav");
            audio.play();
            break;

        case "cow":
            audio = new Audio("sound/cow-sound.wav");
            audio.play();
            break;

        case "goat":
            audio = new Audio("sound/goat-sound.mp3");
            audio.play();
            break;

        case "hen":
            audio = new Audio("sound/hen-sound.wav");
            audio.play();
            break;

        default:
            console.log(key);
    }
}