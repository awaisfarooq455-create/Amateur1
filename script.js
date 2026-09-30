document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const thumbnailList = document.querySelector(".thumbnail-list");

  nextBtn.addEventListener("click", () => {
    thumbnailList.scrollBy({ left: 100, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    thumbnailList.scrollBy({ left: -100, behavior: "smooth" });
  });

  const scrollBtn = document.getElementById("scrollBtn");
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const wishlistBtns = document.querySelectorAll(".wishlist-btn");

  wishlistBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      const icon = btn.querySelector("i");
      
      if (btn.classList.contains("active")) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
      } else {
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
      }
    });
  });

  const addToBagBtns = document.querySelectorAll(".add-to-bag-btn");

  addToBagBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".product-card");
      const title = card.querySelector(".product-title").innerText;
      
      btn.innerText = "ADDED!";
      btn.style.backgroundColor = "#2e7d32";

      setTimeout(() => {
        btn.innerText = "ADD TO BAG";
        btn.style.backgroundColor = "#252f38";
      }, 1500);
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const icon = item.querySelector('.faq-icon');

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherIcon = otherItem.querySelector('.faq-icon');
        if (otherIcon) {
          otherIcon.textContent = '+';
        }
      }); 

      if (!isOpen) {
        item.classList.add('active');
        icon.textContent = '−';
      }
    });
  });
});