function checkEvenOdd() {
    let num = document.getElementById("number").value;
    let result = document.getElementById("result");

    if (num === "") {
        result.textContent = "Please enter a number";
        return;
    }

    if (num % 2 === 0) {
        result.textContent = num + " is Even";
    } else {
        result.textContent = num + " is Odd";
    }
}
