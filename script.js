window.addEventListener("load", () => {
    const pre = document.getElementById("preloader");
    if (!pre) return;
  
    pre.style.transition = "opacity 4s ease";
    pre.style.opacity = "0";
  
    setTimeout(() => pre.remove(), 2000);
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const menu = document.getElementById("mobile-menu");
    const closeBtn = document.querySelector("#mobile-menu .close-btn");
  
    if (burger && menu && closeBtn) {
      burger.addEventListener("click", () => menu.classList.add("is-open"));
      closeBtn.addEventListener("click", () => menu.classList.remove("is-open"));
    }
  
    const heroSwiper = new Swiper(".hero-swiper", {
      loop: true,
      speed: 800,
      effect: "slide",
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      keyboard: { enabled: true },
    });
  
    const catsSwiper = new Swiper(".cats-swiper", {
      slidesPerView: "auto",
      spaceBetween: 16,
      loop: true,
      autoplay: {
        delay: 2000,
      },
      freeMode: true,
      grabCursor: true,
      pagination: {
        el: ".cats-pagination",
        clickable: true,
      },
    }); 
  });
  
  const authModal = document.getElementById("authModal");
  if (authModal) {
    authModal.addEventListener("show.bs.modal", (event) => {
      const button = event.relatedTarget;
      if (button?.dataset.bsTab === "register") {
        const registerTab = authModal.querySelector("#register-tab");
        if (registerTab) new bootstrap.Tab(registerTab).show();
      }
    });
  }
  