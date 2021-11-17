window.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById("click").addEventListener("click", calculate)
})


function calculate() {
    let product = Number(document.getElementById("Guns_Price").value);
    let lot = Number(document.getElementById("Guns_Count").value);
    let regExp = new RegExp(/^[0-9]+$/i);
    if (product < 0 || lot < 0) {
        alert("Числа не должны быть отрицательными");
    }
    else if (!(regExp.test(product) && regExp.test(lot))) {
        alert("Нужно писать число!");
    } else if (product === "") {
        alert("Укажите цену товара");
    } else if (lot === "") {
        alert("Укажите количество единиц товара");
    }
    else {
        const cost = product * lot;
        document.getElementById("cost").innerHTML =
            "Стоимость равна: " + cost + " Руб.";
    }
}