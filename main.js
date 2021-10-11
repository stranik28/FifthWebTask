window.addEventListener("DOMContentLoaded", function (event){});

function calculate() {
    let number = Number(document.getElementById("Guns_Count").value);
    let price = Number(document.getElementById("Guns_Price").value);


    let exp = new RegExp(/^[0-9]+$/i);
    if (
        !(
            exp.test(number) && exp.test(price)
        )
    ) {
        alert("You should input positive integers");
    } else if (number == "") {
        alert("You are not input number of guns");
    } else if (price == "") {
        alert("You are not input price of guns");
    } else {
        const cost = number * price;
        document.getElementById("cost").innerHTML =
            "Final price is: " + cost;
    }
}