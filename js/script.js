document.addEventListener("DOMContentLoaded", function() {
    const sidebarItems = document.querySelectorAll(".sidebar-list ul li");
    const contentBlocks = document.querySelectorAll(".content-info-block");
  
    // Скрываем все блоки, кроме первого
    for (let i = 1; i < contentBlocks.length; i++) {
      contentBlocks[i].style.display = "none";
    }
  
    sidebarItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        // Удаляем активный класс у всех пунктов боковой панели
        sidebarItems.forEach((item) => {
          item.classList.remove("sidebar-active-bg-color");
        });
  
        // Добавляем активный класс только текущему пункту боковой панели
        item.classList.add("sidebar-active-bg-color");
  
        // Скрываем все блоки с текстом контента
        contentBlocks.forEach((block) => {
          block.style.display = "none";
        });
  
        // Показываем только блок с текстом, который соответствует кликнутому пункту боковой панели
        contentBlocks[index].style.display = "block";
      });
    });
});
  