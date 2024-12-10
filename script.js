let username = prompt("Qual é o seu nome?");
document.getElementById("welcomeMessage").innerText = `Bem-vindo, ${username}!`;

let currentPage = 1;
const totalPages = 2;

function comprarCarro(carro) {
    const carItem = event.target.closest(".car-item");
    carItem.classList.add("buy-animation");
    setTimeout(() => {
        alert(`${username}, você comprou o ${carro}!`);
        carItem.classList.remove("buy-animation");
    }, 1000);
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        updatePage();
    }
}

function updatePage() {
    const allCarItems = document.querySelectorAll(".car-item");
    const startIndex = (currentPage - 1) * 10;
    const endIndex = currentPage * 10;

    allCarItems.forEach((item, index) => {
        if (index >= startIndex && index < endIndex) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

updatePage();
