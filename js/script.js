"use strict";

//Media Queries
const mqPhoneMd = window.matchMedia("(max-width: 24em)");
const mqPhone = window.matchMedia("(max-width: 37.5em)");
const mqTabPort = window.matchMedia("(max-width: 56.25em)");
const mqTabLand = window.matchMedia("(max-width: 75em)");
const mqLaptop = window.matchMedia("(max-width: 90em)");
const mqBigScr = window.matchMedia("(min-width: 112.5em)");

//Navigation
const navMenu = document.querySelectorAll(".nav-menu");
const navMenuContainer = document.querySelectorAll(".nav-menu--container");
const navItems = document.querySelectorAll(".nav-item");

const body = document.querySelector("body");
const darkOverlay = document.createElement("div");
darkOverlay.classList.add("dark-overlay");

navItems.forEach(function (item, i) {
  item.addEventListener("mouseover", () => {
    navMenu[i]?.classList.toggle("active");
    navMenuContainer[i]?.classList.toggle("active");
    body.prepend(darkOverlay);
  });
});

navItems.forEach(function (item, i) {
  item.addEventListener("mouseout", () => {
    navMenu[i]?.classList.remove("active");
    navMenuContainer[i]?.classList.remove("active");
    darkOverlay.remove();
  });
});

//Navigation --Search
const searchIcon = document.querySelector(".search-icon");
const searchModal = document.querySelector(".search");
const closeIcon = document.querySelector(".search-close");

searchIcon.addEventListener("click", () => {
  searchModal.classList.add("active");
});

closeIcon.addEventListener("click", (e) => {
  searchModal.classList.remove("active");
  searchInput.value = "";
});

window.addEventListener("keydown", (e) => {
  if (searchModal.classList.contains("active") && e.key == "Escape") {
    searchModal.classList.remove("active");
  }
});

const tags = document.querySelectorAll(".tag");
const searchInput = document.querySelector(".search-bar");

tags.forEach((tag) => {
  tag.addEventListener("click", () => {
    searchInput.value = tag.textContent;
  });
});

//Navigation --User
const userIcon = document.querySelectorAll(".shortcuts-icon")[2];
const userMenu = document.querySelector(".user-menu");

userIcon.addEventListener("mouseover", () => {
  userMenu.classList.add("active");
});

userIcon.addEventListener("mouseout", () => {
  userMenu.classList.remove("active");
});

//Navigation --HamburgerMenu
const header = document.querySelector(".header");
const html = document.querySelector("html");

const hamburgerIcon = document.querySelector(".hamburgermenu-icon");
const hamburgerCloseIcon = document.querySelector(".hamburgermenu-close");
const hamburgerMenu = document.querySelector(".hamburgermenu");
const hamburgerMenuWrapper = document.querySelector(".hamburgermenu-wrapper");
const hamburgerMenuDetail = document.querySelectorAll(".hamburgermenu-detail");
const hamburgerMenuItems = document.querySelectorAll(".hamburgermenu-item");
const hamburgerItemIcons = document.querySelectorAll(
  ".hamburgermenu-item--icon svg"
);
const hamburgerMenuPrev = document.querySelector(
  ".hamburgermenu-previous--icon"
);

// --HamburgerMenu Accordion
const hamburgerMenuAccordionIcons = document.querySelectorAll(
  ".hamburgermenu-accordion--icon svg"
);
const hamburgerMenuAccordionHeads = document.querySelectorAll(
  ".hamburgermenu-accordion--head"
);
const hamburgerMenuAccordionBodies = document.querySelectorAll(
  ".hamburgermenu-accordion--body"
);
//

for (let i = 0; i < hamburgerItemIcons.length; i++) {
  hamburgerItemIcons[i].dataset.menu = i;
  hamburgerMenuItems[i].dataset.menu = i;
}

for (let i = 0; i < hamburgerMenuDetail.length; i++) {
  hamburgerMenuDetail[i].dataset.menu = i;
}

for (let i = 0; i < hamburgerMenuAccordionHeads.length; i++) {
  hamburgerMenuAccordionHeads[i].dataset.accordion = i;
  hamburgerMenuAccordionIcons[i].dataset.accordion = i;
}

hamburgerIcon.addEventListener("click", function () {
  hamburgerMenu.classList.add("active");
  body.prepend(darkOverlay);
  header.style.zIndex = "-1";
  body.style.overflowY = "hidden";
  html.style.overflowY = "hidden";
});

hamburgerCloseIcon.addEventListener("click", function () {
  hamburgerMenu.classList.remove("active");
  darkOverlay.remove();
  header.style.zIndex = "initial";
  body.style.overflowY = "initial";
  html.style.overflowY = "initial";
});

hamburgerMenuWrapper.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("next-icon") ||
    e.target.classList.contains("hamburgermenu-item")
  ) {
    const itemNum = e.target.dataset.menu;
    hamburgerMenuWrapper.classList.add("deactive");
    hamburgerMenuDetail[itemNum].classList.add("active");
    hamburgerMenuPrev.classList.add("active");

    hamburgerMenuPrev.addEventListener("click", function () {
      hamburgerMenuWrapper.classList.remove("deactive");
      hamburgerMenuDetail[itemNum].classList.remove("active");
      hamburgerMenuPrev.classList.remove("active");

      //Close Accordions
      hamburgerMenuAccordionBodies.forEach((body) =>
        body.classList.remove("active")
      );
      hamburgerMenuAccordionIcons.forEach((icon) =>
        icon.classList.remove("active")
      );
    });

    hamburgerCloseIcon.addEventListener("click", function () {
      hamburgerMenuWrapper.classList.remove("deactive");
      hamburgerMenuDetail[itemNum].classList.remove("active");
      hamburgerMenuPrev.classList.remove("active");
    });
  }
});

const activateAccordion = function (num) {
  hamburgerMenuDetail[num].addEventListener("click", function (e) {
    if (
      e.target.classList.contains("hamburgermenu-accordion--head") ||
      e.target.classList.contains("next-icon")
    ) {
      const accordionNum = e.target.dataset.accordion;
      hamburgerMenuAccordionBodies[accordionNum].classList.toggle("active");
      hamburgerMenuAccordionIcons[accordionNum].classList.toggle("active");
    }
  });
};

activateAccordion(1);
activateAccordion(3);
activateAccordion(5);
activateAccordion(6);

//Slider
const sliderPreviousBtn = document.querySelector(".previous-icon");
const sliderNextBtn = document.querySelector(".slider .next-icon");
const slide = document.querySelector(".slide");
const slideHeading = document.querySelector(".slide-caption--heading");
const slideText = document.querySelector(".slide-caption--text");
const sliderTimer = document.querySelector(".slider-timer");
const sliderLine = document.querySelectorAll(".slider-line");
const sliderLineProgress = document.querySelectorAll(".slider-line--progress");
const images = [
  "slide-image-1.png",
  "slide-image-2.png",
  "slide-image-3.png",
  "slide-image-4.png",
  "slide-image-5.png",
  "slide-image-6.png",
];
const headings = [
  "Galaxy Tab S8 Series",
  "Upgrade to more epic <br> days and nights.",
  "May 15 - 21",
  "Give Mom the gift of art",
  "Tech to celebrate <br> every Mom",
  "Bespoke My Life",
];
const texts = [
  "The ultimate tablet equipped with all you need to transform your day",
  "Get up to $750 instant trade-in credit.",
  "Save up to 35%. A relaxing summer starts with deals for your SmartThings home.",
  "Save up to $300 off The Frame this Mother's Day.",
  "Find the perfect Samsung gift for every Mom this Mother's Day.",
  "Express yourself in every space with modern colors and design.",
];

//Slider --MQ
if (mqPhone.matches) {
  headings[1] = "Upgrade to more epic days and nights.";
  headings[4] = "Tech to celebrate every Mom.";
}

const goToDot = function (slideNum) {
  if (mqPhone.matches) {
    sliderLine.forEach((circle) => (circle.style.backgroundColor = "#8c8f90"));
    sliderLine[slideNum].style.backgroundColor = "#000000";
  }
};
//

const initSlider = function () {
  slide.style.backgroundImage = `url(images/${images[0]})`;
  slideHeading.textContent = headings[0];
  slideText.textContent = texts[0];
  goToDot(0);
};

initSlider();

const goToSlide = function (slideNumber) {
  slide.style.backgroundImage = `url(images/${images[slideNumber]})`;
  slideHeading.innerHTML = headings[slideNumber];
  slideText.innerHTML = texts[slideNumber];

  if (slideNumber == 2 || slideNumber == 5) {
    slideHeading.style.color = "white";
    slideText.style.color = "white";
  } else {
    slideHeading.style.color = "black";
    slideText.style.color = "black";
  }

  if (mqPhone.matches) {
    if (slideNumber == 2 || slideNumber == 5) {
      slideHeading.style.color = "black";
      slideText.style.color = "black";
    }
  }

  slide.classList.add("image-fade");

  setTimeout(() => {
    slide.classList.remove("image-fade");
  }, 500);
};

let curSlide = 0;
const slideForward = function () {
  curSlide++;
  if (curSlide > images.length - 1) curSlide = 0;

  goToSlide(curSlide);
  goToDot(curSlide);
};

const slideBackward = function () {
  curSlide--;
  if (curSlide < 0) curSlide = images.length - 1;

  goToSlide(curSlide);
  goToDot(curSlide);
};

let slideshow = setInterval(slideForward, 4000);

sliderNextBtn.addEventListener("click", () => {
  clearInterval(slideshow);
  slideshow = setInterval(slideForward, 4000);
  slideForward();
});

sliderPreviousBtn.addEventListener("click", () => {
  clearInterval(slideshow);
  slideshow = setInterval(slideForward, 4000);
  slideBackward();
});

//Slider --Timer
sliderTimer.addEventListener("click", function (e) {
  const sliderItemNumber = e.target.parentNode.dataset.slideritem;
  goToSlide(sliderItemNumber);
  clearInterval(slideshow);
  slideshow = setInterval(slideForward, 4000);
});

//Slider --Timer Phone
sliderTimer.addEventListener("click", function (e) {
  if (mqPhone.matches) {
    if (e.target.classList.contains("slider-line")) {
      const sliderItemNumber = e.target.dataset.slideritem;
      sliderLine.forEach(
        (circle) => (circle.style.backgroundColor = "#8c8f90")
      );
      sliderLine[sliderItemNumber].style.backgroundColor = "#000000";
    }
  }
});
//

let num = 0;
const progressInterval0 = setInterval(function () {
  sliderLineProgress[0].style.width = `${num++}%`;

  if (num >= 100) {
    clearInterval(progressInterval0);
  }
}, 38);

setTimeout(() => {
  let num = 0;
  const progressInterval1 = setInterval(function () {
    sliderLineProgress[1].style.width = `${num++}%`;
    sliderLineProgress[0].style.width = "0";

    if (num >= 100) {
      clearInterval(progressInterval1);
      let num = 0;
      const progressInterval2 = setInterval(function () {
        sliderLineProgress[2].style.width = `${num++}%`;
        sliderLineProgress[1].style.width = "0";

        if (num >= 100) {
          clearInterval(progressInterval2);
          let num = 0;
          const progressInterval3 = setInterval(function () {
            sliderLineProgress[3].style.width = `${num++}%`;
            sliderLineProgress[2].style.width = "0";

            if (num >= 100) {
              clearInterval(progressInterval3);
              let num = 0;
              const progressInterval4 = setInterval(function () {
                sliderLineProgress[4].style.width = `${num++}%`;
                sliderLineProgress[3].style.width = "0";

                if (num >= 100) {
                  clearInterval(progressInterval4);
                  let num = 0;
                  const progressInterval5 = setInterval(function () {
                    sliderLineProgress[5].style.width = `${num++}%`;
                    sliderLineProgress[4].style.width = "0";

                    if (num >= 100) {
                      clearInterval(progressInterval5);
                      let num = 0;
                      const progressInterval0 = setInterval(function () {
                        sliderLineProgress[0].style.width = `${num++}%`;
                        sliderLineProgress[5].style.width = "0";

                        if (num >= 100) {
                          clearInterval(progressInterval0);
                        }
                      }, 38);
                    }
                  }, 38);
                }
              }, 38);
            }
          }, 38);
        }
      }, 38);
    }
  }, 38);
}, 4000);

//Card --Button
const shoppingCards = document.querySelectorAll(".shopping-card");
const cardButtons = document.querySelectorAll(".card-button");

const activateButton = function (i) {
  shoppingCards[i].addEventListener("mouseenter", function () {
    cardButtons[i].classList.add("active");
  });
};

const deactivateButton = function (i) {
  shoppingCards[i].addEventListener("mouseleave", function () {
    cardButtons[i].classList.remove("active");
  });
};

for (let i = 0; i < shoppingCards.length; i++) {
  activateButton(i);
  deactivateButton(i);
}

//Card --Textbox
const slide6Cards = document.querySelectorAll(".slide-6 > div");
const cardTextboxes = document.querySelectorAll(".card-textbox");

const deactivateTextbox = function (i) {
  slide6Cards[i].addEventListener("mouseenter", function () {
    cardTextboxes[i].classList.add("deactive");
  });
};

const activateTextbox = function (i) {
  slide6Cards[i].addEventListener("mouseleave", function () {
    cardTextboxes[i].classList.remove("deactive");
  });
};

for (let i = 0; i < slide6Cards.length; i++) {
  deactivateTextbox(i);
  activateTextbox(i);
}

//Card --Shopping
const shoppingSlides = document.querySelectorAll(".shopping-slide");
const cardTab = document.querySelector(".card-tab");
const cardTabTitles = document.querySelectorAll(".card-tab--title");

const goToCard = function (slide) {
  shoppingSlides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

const activateTab = function (tabNumber) {
  cardTabTitles.forEach(function (title) {
    title.classList.remove("active");
  });

  document
    .querySelector(`.card-tab--title[data-card="${tabNumber}"]`)
    .classList.add("active");
};

cardTab.addEventListener("click", function (e) {
  const cardNumber = e.target.dataset.card;
  goToCard(cardNumber);
  activateTab(cardNumber);
});

const initCards = function () {
  goToCard(0);
  activateTab(0);
};

initCards();

//Card --Feature(One)
const featureSlidesOne = document.querySelectorAll(
  ".section-one .feature-slide"
);
const featureCaptionOne = document.querySelectorAll(
  ".section-one .feature-caption"
);
const featureTabOne = document.querySelector(".section-one .feature-tab");
const featureTabTitlesOne = document.querySelectorAll(
  ".section-one .feature-tab--title"
);

const goToFeatureCard = function (name, slide) {
  name.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

const activateFeatureTabOne = function (tabNumber) {
  featureTabTitlesOne.forEach(function (title) {
    title.classList.remove("active");
  });

  document
    .querySelector(`.feature-tab--title[data-featurecardone="${tabNumber}"]`)
    .classList.add("active");
};

featureTabOne.addEventListener("click", function (e) {
  const cardNumber = e.target.dataset.featurecardone;
  goToFeatureCard(featureSlidesOne, cardNumber);
  activateFeatureTabOne(cardNumber);
  featureCaptionOne[cardNumber].classList.add("slide-left");
  setTimeout(() => {
    featureCaptionOne[cardNumber].classList.remove("slide-left");
  }, 650);
});

const initFeatureCardsOne = function () {
  goToFeatureCard(featureSlidesOne, 0);
  activateFeatureTabOne(0);
};

initFeatureCardsOne();

//Card --Feature(Two)
const featureSlidesTwo = document.querySelectorAll(
  ".section-two .feature-slide"
);
const featureCaptionTwo = document.querySelectorAll(
  ".section-two .feature-caption"
);
const featureTabTwo = document.querySelector(".section-two .feature-tab");
const featureTabTitlesTwo = document.querySelectorAll(
  ".section-two .feature-tab--title"
);

const activateFeatureTabTwo = function (tabNumber) {
  featureTabTitlesTwo.forEach(function (title) {
    title.classList.remove("active");
  });

  document
    .querySelector(`.feature-tab--title[data-featurecardtwo="${tabNumber}"]`)
    .classList.add("active");
};

featureTabTwo.addEventListener("click", function (e) {
  const cardNumber = e.target.dataset.featurecardtwo;
  goToFeatureCard(featureSlidesTwo, cardNumber);
  activateFeatureTabTwo(cardNumber);
  featureCaptionTwo[cardNumber].classList.add("slide-left");
  setTimeout(() => {
    featureCaptionTwo[cardNumber].classList.remove("slide-left");
  }, 650);
});

const initFeatureCardsTwo = function () {
  goToFeatureCard(featureSlidesTwo, 0);
  activateFeatureTabTwo(0);
};

initFeatureCardsTwo();

//Card --Feature(Three)
const featureSlidesThree = document.querySelectorAll(
  ".section-three .feature-slide"
);
const featureCaptionThree = document.querySelectorAll(
  ".section-three .feature-caption"
);
const featureTabThree = document.querySelector(".section-three .feature-tab");
const featureTabTitlesThree = document.querySelectorAll(
  ".section-three .feature-tab--title"
);

const activateFeatureTabThree = function (tabNumber) {
  featureTabTitlesThree.forEach(function (title) {
    title.classList.remove("active");
  });

  document
    .querySelector(`.feature-tab--title[data-featurecardthree="${tabNumber}"]`)
    .classList.add("active");
};

featureTabThree.addEventListener("click", function (e) {
  const cardNumber = e.target.dataset.featurecardthree;
  goToFeatureCard(featureSlidesThree, cardNumber);
  activateFeatureTabThree(cardNumber);
  featureCaptionThree[cardNumber].classList.add("slide-left");
  setTimeout(() => {
    featureCaptionThree[cardNumber].classList.remove("slide-left");
  }, 650);
});

const initFeatureCardsThree = function () {
  goToFeatureCard(featureSlidesThree, 0);
  activateFeatureTabThree(0);
};

initFeatureCardsThree();

//Card --Feature(Four)
const featureSlidesFour = document.querySelectorAll(
  ".section-four .feature-slide"
);
const featureCaptionFour = document.querySelectorAll(
  ".section-four .feature-caption"
);
const featureTabFour = document.querySelector(".section-four .feature-tab");
const featureTabTitlesFour = document.querySelectorAll(
  ".section-four .feature-tab--title"
);

const activateFeatureTabFour = function (tabNumber) {
  featureTabTitlesFour.forEach(function (title) {
    title.classList.remove("active");
  });

  document
    .querySelector(`.feature-tab--title[data-featurecardfour="${tabNumber}"]`)
    .classList.add("active");
};

featureTabFour.addEventListener("click", function (e) {
  const cardNumber = e.target.dataset.featurecardfour;
  goToFeatureCard(featureSlidesFour, cardNumber);
  activateFeatureTabFour(cardNumber);
  featureCaptionFour[cardNumber].classList.add("slide-left");
  setTimeout(() => {
    featureCaptionFour[cardNumber].classList.remove("slide-left");
  }, 650);
});

const initFeatureCardsFour = function () {
  goToFeatureCard(featureSlidesFour, 0);
  activateFeatureTabFour(0);
};

initFeatureCardsFour();

//Swiper
const exploreSidebar = document.querySelector(".explore-sidebar");
const exploreBox = document.querySelectorAll(".explore-box");
const exploreText = document.querySelectorAll(".explore-text");
const exploreImg = document.querySelector(".explore-image");
const exploreImgs = [
  "explore-image-1.png",
  "explore-image-2.png",
  "explore-image-3.png",
];

const initSwiper = function () {
  exploreImg.style.backgroundImage = 'url("images/explore-image-1.png")';
  exploreBox[0].classList.add("active");

  for (let i = 0; i < exploreBox.length; i++) {
    exploreBox[i].dataset.swiper = i;
    exploreText[i].dataset.swiper = i;
  }

  exploreSidebar.dataset.swiper = 0;
};

initSwiper();

exploreSidebar.addEventListener("mouseover", function (e) {
  // Matching Strategy
  if (
    e.target.classList.contains("explore-box") ||
    e.target.classList.contains("explore-text")
  ) {
    const targetBoxNum = e.target.dataset.swiper;
    exploreImg.style.backgroundImage = `url("images/${exploreImgs[targetBoxNum]}")`;
    exploreBox.forEach((box) => box.classList.remove("active"));
    document
      .querySelector(`.explore-box[data-swiper="${targetBoxNum}"]`)
      .classList.add("active");
    exploreSidebar.dataset.swiper = targetBoxNum;
  }
});

// Search Section
const sectionSearchTags = document.querySelectorAll(
  ".section-search--tags .tag"
);
const sectionSearchInput = document.querySelector(
  ".section-search--form input"
);

sectionSearchTags.forEach((tag) => {
  tag.addEventListener("click", () => {
    sectionSearchInput.value = tag.textContent;
  });
});

// Accordion
const accordionHead = document.querySelectorAll(".accordion-head");
const accordionBody = document.querySelectorAll(".accordion-body");
const accordionIcon = document.querySelectorAll(".accordion-icon");
const accordionIconPath = document.querySelectorAll(".accordion-icon path");

for (let i = 0; i < accordionHead.length; i++) {
  accordionBody[i].classList.add("active");
  accordionIcon[i].classList.add("active");
  accordionIconPath[i].classList.add("active");

  accordionHead[i].addEventListener("click", function () {
    accordionBody[i].classList.toggle("active");
    accordionIcon[i].classList.toggle("active");
    accordionIconPath[i].classList.toggle("active");
  });
}

//Footer MQ
const footerTerms = document.querySelectorAll(".footer-extra--terms li");

if (mqPhone.matches) {
  footerTerms[1].remove();
}

//Footer Year
const footerYear = document.querySelector(".footer-year");

const date = new Date();
const currentYear = date.getFullYear();

footerYear.textContent = currentYear;
