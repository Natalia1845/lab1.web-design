// Використання getElementById
const menuContent = document.getElementById("menuContent");
const reviewsContent = document.getElementById("reviewsContent");
const contactsContent = document.getElementById("contactsContent");

// Використання querySelector для вибору посилань у меню
const menuLink = document.querySelector("#menuLink");
const reviewsLink = document.querySelector("#reviewsLink");
const contactsLink = document.querySelector("#contactsLink");

// Функція для показу контенту
function showContent(content) {
    menuContent.classList.add("hidden");
    reviewsContent.classList.add("hidden");
    contactsContent.classList.add("hidden");

    // Показати вибрану секцію
    content.classList.remove("hidden");
}

//обробники подій для навігації
menuLink.addEventListener("click", function() {
    showContent(menuContent);
});
reviewsLink.addEventListener("click", function() {
    showContent(reviewsContent);
});
contactsLink.addEventListener("click", function() {
    showContent(contactsContent);
});

// Використання getElementsByClassName для вибору кнопок меню
const menuButtons = document.getElementsByClassName("menu-buttons")[0].children;
const showMenuButton = menuButtons[0];
const highlightButton = menuButtons[1];
const resetButton = menuButtons[2];

//обробники подій для кнопок меню
showMenuButton.addEventListener("click", function() {
    alert("Меню показано!");
});

highlightButton.addEventListener("click", function() {
    // Підсвітити меню
    const menuItems = menuContent.getElementsByTagName("li"); // Використання getElementsByTagName
    for (let item of menuItems) {
        item.style.color = "#ff5722"; // Змінити колір тексту
        item.style.transition = "color 0.5s"; // Додати плавний перехід
    }
    alert("Меню підсвічено!");
});

resetButton.addEventListener("click", function() {
    // Скинути зміни
    const menuItems = menuContent.querySelectorAll("li"); // Використання querySelectorAll
    menuItems.forEach(item => {
        item.style.color = ""; // Скинути колір тексту
    });
    alert("Зміни скинуто!");
});
