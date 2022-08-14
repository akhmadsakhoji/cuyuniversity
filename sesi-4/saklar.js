let lampu1 = document.getElementById("lampu1")
let lampu2 = document.getElementById("lampu2")
let toggle1 = document.getElementById("toggle1")
let toggle2 = document.getElementById("toggle2")

function saklar1() {
    if (toggle1.checked == true) {
        lampu1.src = "assets/images/on.gif"
    } else if (toggle1.checked == false) {
        lampu1.src = "assets/images/off.gif"
    }
}
function saklar2() {
    if (toggle2.checked == true) {
        lampu2.src = "assets/images/on.gif"
    } else if (toggle2.checked == false) {
        lampu2.src = "assets/images/off.gif"
    }
}