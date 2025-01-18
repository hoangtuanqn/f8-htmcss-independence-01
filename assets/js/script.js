window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 32) {
        header.classList.add("scrolled"); // Thêm class khi cuộn xuống > 32px
    } else {
        header.classList.remove("scrolled"); // Xóa class khi cuộn lên <= 32px
    }
});
