const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    const pallet1 = document.getElementById("pallet1");
    document.body.style.backgroundColor = randomCode;
    document.getElementById("pallet1").innerHTML = randomCode;

}
document.getElementById("butn").addEventListener(
    "click"
    
)
getColor();