// const faqs = document.querySelectorAll(".faq__card");

// faqs.forEach((faq) => {
//   faq.addEventListener("click", () => {
//     faq.classList.toggle("active");

//     faqs.forEach((otherFaq) => {
//       if (otherFaq !== faq) {
//         otherFaq.classList.remove("active");
//       }
//     });
//   });
// });

const faqs = document.querySelectorAll(".faq__card");

faqs.forEach((faq__card) => {
  faq__card.addEventListener("click", () => {
    faq__card.classList.toggle("active");

    faqs.forEach((otherFaq) => {
      if (otherFaq !== faq__card) {
        otherFaq.classList.remove("active");
      }
    });
  });
});

// leftBorder = document.querySelectorAll(".about__feature-article-wrapper");

// leftBorder.forEach((border) => {
//   border.addEventListener("click", () => {
//     if (leftBorder.style == null) {
//       border.classList.add("border-left");
//     } else {
//       border.classList.remove("border-left");
//     }
//   });
// });

sections = document.querySelectorAll(".about__feature-article-wrapper");

// const sections = document.querySelectorAll(".custom-section");
let activeSectionIndex = localStorage.getItem("activeSectionIndex");

if (activeSectionIndex !== null) {
  sections[activeSectionIndex].classList.add("border-left");
}

sections.forEach((section, index) => {
  section.addEventListener("click", () => {
    sections.forEach((otherSection) => {
      otherSection.classList.remove("border-left");
    });
    section.classList.add("border-left");
    activeSectionIndex = index;
    localStorage.setItem("activeSectionIndex", activeSectionIndex);
  });
});
