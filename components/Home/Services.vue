<script setup lang="ts">
const { $gsap, $ScrollTrigger, $TweenMax } = useNuxtApp();

const mm = $gsap.matchMedia();
const halfLogo = ref(null);
const firstSlide = ref(null);
const secondSlide = ref(null);
const hideLeftShowRight = ref(true);

const ctx = $gsap.context(() => {});
onUnmounted(() => {
  ctx.revert();
});
const items = ref([]);
onMounted(() => {
  setTimeout(() => {
    console.log("mounted");
    // $ScrollTrigger.refresh();
  }, 1000);
  ctx.add(() => {
    mm.add("(min-width: 1024px)", () => {
      const allCardItems = [...document.querySelectorAll(".childItem")];
      items.value = [];
      allCardItems.forEach((item) => items.value.push(newCardItem(item)));
      // loader();
    });
  });
});

const newCardItem = (el) => {
  const DOM = { el: el };
  DOM.inactiveCount = DOM.el.querySelector(".inactiveCount");
  DOM.activeCount = DOM.el.querySelector(".activeCount");
  DOM.activeText = DOM.el.querySelector(".activeText");
  DOM.activeHeader = DOM.el.querySelector(".activeText h3");
  DOM.cardDesc = DOM.el.querySelector(".cardDesc");
  DOM.el.addEventListener("mouseenter", () => {
    setActive(DOM);
  });
  DOM.el.addEventListener("mouseleave", () => {
    setInactive(DOM);
  });
  // console.log("DOM is => ", DOM);
  return DOM;
};

const setActive = (item) => {
  const TLLOAD = $gsap.timeline({
    default: {
      ease: "easeInOut",
    },
  });

  TLLOAD.to(item.activeHeader, {
    maxWidth: "558px",
    width: "auto",
    fontSize: "32px",
    fontWeight: "bold",
    ease: "none",
    duration: 0.1,
  })
    .to(item.el, { width: "558px", minWidth: "558px" }, "<")
    .to(item.activeCount, { autoAlpha: 1 }, "<")
    .to(item.inactiveCount, { autoAlpha: 0 }, "<")
    .to(item.activeText, { y: 0 }, "<")
    .add(() => {
      item.el.classList.add("active");
      item.el.classList.remove("border-l-grey-7");
      // item.activeHeader.style.maxWidth = '100%';
    }, "<");
};

const setInactive = (item) => {
  const TLLOAD = $gsap.timeline({
    default: {
      // ease: "none",
    },
  });

  TLLOAD.to(item.el, { width: "343px", minWidth: "343px", duration: 0.1 })
    .add(() => {
      item.el.classList.remove("active");
      item.el.classList.add("border-l-grey-7");
      // item.activeHeader.style.maxWidth = '179px';
    })
    .to(item.activeCount, { autoAlpha: 0 }, "<")
    .to(item.inactiveCount, { autoAlpha: 1 }, "<")
    .to(item.activeText, { y: "112px" }, "<")
    .to(
      item.activeHeader,
      { maxWidth: "160px", fontSize: "24px", fontWeight: "400" },
      "<"
    ),
    "<";
};

const slideFromLeft = () => {
  const TLLeft = $gsap.timeline();

  TLLeft.to(secondSlide.value, { duration: 0.6, x: "110%" }).to(
    firstSlide.value,
    { duration: 0.6, x: 0 },
    "<"
  );
  hideLeftShowRight.value = true;
};
const slideFromRight = () => {
  const TLRight = $gsap.timeline();

  TLRight.to(firstSlide.value, { duration: 0.6, x: "-100%" }).to(
    secondSlide.value,
    { duration: 0.6, x: 0 },
    "<"
  );
  hideLeftShowRight.value = false;
};
</script>
<template>
  <div
    class="bg-blue-8 flex flex-col py-[60px] lg:py-[120px] w-full overflow-hidden relative"
  >
    <div
      class="flex flex-col mx-auto px-4 md:px-6 xl:px-0 justify-between w-full"
    >
      <div
        class="flex justify-between items-start w-full max-w-[1302px] mx-auto"
      >
        <div class="">
          <p class="text-blue-4 mb-2">Services</p>
          <h2
            class="font-bold text-black-2 leading-[36px] md:leading-[48px] lg:leading-[120%] tracking-[-1.5px] text-2xl md:text-[32px] lg:text-[40px] w-full max-w-[584px]"
          >
            Streamline Your Operations with OCMC's Services
          </h2>
        </div>
        <div class="hidden lg:flex justify-center min-w-max">
          <nuxt-link
            to="/services"
            class="bg-blue-9 blue-btn text-white rounded-lg py-4 px-8 w-[210px] text-center"
          >
            See Services
            <!-- <Icon class="hovered ml-4" name="mdi:arrow-right" size="18px" /> -->
          </nuxt-link>
        </div>
      </div>
      <div class="flex mt-12 w-full max-w-[1382px] mx-auto">
        <button v-if="!hideLeftShowRight" @click="slideFromLeft" class="bg-blue-4/10 h-[410px] w-[42px]">
          <img class="rotate-180" src="/svg/left-arrow.svg" alt="arrow-left" />
        </button>
        <div class="w-full relative overflow-hidden">
          <div
            ref="firstSlide"
            class="child absolute flex flex-col md:flex-row gap-2.5 overflow-x-hidden overflow-y-hidden w-full max-w-[1440px] mx-auto"
          >
            <div
              class="childItem pt-10 bg-transparent border border-l-[4px] items-start border-l-grey-7 border-transparent text-grey-3 rounded-r-lg flex flex-col md:min-w-[400px] md:w-[400px] pl-[20px] relative overflow-hidden h-[412px]"
            >
              <div class="relative">
                <div
                  ref="activeCount"
                  class="activeCount absolute w-[65px] h-[65px] flex items-center justify-center letter border border-blue-6 min-w-max bg-white rounded-lg px-[15px] py-[11px] invisible"
                >
                  <img src="/img/01.png" alt="01" />
                </div>
                <p
                  ref="inactiveCount"
                  class="inactiveCount cabinet absolute w-[65px] h-[65px] flex items-center justify-center text-[32px] font-bold text-grey-7"
                >
                  01
                </p>
              </div>

              <div
                ref="activeText"
                class="activeText flex flex-col translate-y-28 pr-8 pt-10 pb-16 mt-40"
              >
                <h3
                  class="text-grey-7 text-[24px] font-medium mb-4 max-w-[160px]"
                >
                  Tender Writing
                </h3>
                <!-- <p class="text-lg my-2">
            We provide:
          </p> -->
                <p class="cardDesc text-2xl text-grey-3">
                  Choose from flexible payment options, bulk Purchases
                </p>
              </div>
            </div>
            <div
              class="childItem pt-10 bg-transparent border border-l-[4px] items-start border-l-grey-7 border-transparent text-grey-3 rounded-r-lg min-w-[343px] w-[343px] flex flex-col md:min-w-[400px] md:w-[400px] pl-[20px] relative overflow-hidden h-[412px]"
            >
              <div class="relative">
                <div
                  ref="activeCount"
                  class="activeCount absolute w-[65px] h-[65px] flex items-center justify-center letter border border-blue-6 min-w-max bg-white rounded-lg px-[15px] py-[11px] invisible"
                >
                  <img src="/img/02.png" alt="02" />
                </div>
                <p
                  ref="inactiveCount"
                  class="inactiveCount cabinet absolute w-[65px] h-[65px] flex items-center justify-center text-[32px] font-bold text-grey-7"
                >
                  02
                </p>
              </div>

              <div
                ref="activeText"
                class="activeText flex flex-col translate-y-28 pr-8 py-10 mt-36"
              >
                <h3
                  class="text-grey-7 text-[24px] font-medium mb-4 max-w-[160px]"
                >
                  Tender Sourcing
                </h3>
                <!-- <p class="text-lg my-2">
            We provide:
          </p> -->
                <p class="cardDesc text-2xl text-grey-3">
                  Find suitable tenders or your organisation TODAY! Call us or
                  sign up to your portal.
                </p>
              </div>
            </div>
            <div
              class="childItem bg-transparent border pt-10 border-l-[4px] items-start border-l-grey-7 border-transparent text-grey-3 rounded-r-lg min-w-[343px] w-[343px] flex flex-col md:min-w-[400px] md:w-[400px] pl-[20px] relative overflow-hidden h-[412px]"
            >
              <div class="relative">
                <div
                  ref="activeCount"
                  class="activeCount absolute w-[65px] h-[65px] flex items-center justify-center letter border border-blue-6 min-w-max bg-white rounded-lg px-[15px] py-[11px] invisible"
                >
                  <img src="/img/03.png" alt="03" />
                </div>
                <p
                  ref="inactiveCount"
                  class="inactiveCount cabinet absolute w-[65px] h-[65px] flex items-center justify-center text-[32px] font-bold text-grey-7"
                >
                  03
                </p>
              </div>

              <div
                ref="activeText"
                class="activeText flex flex-col translate-y-40 pr-8 py-10 mt-20"
              >
                <h3
                  class="text-grey-7 text-[24px] font-medium mb-6 max-w-[160px]"
                >
                  Market Analysis (Commissioned analytics)
                </h3>
                <!-- <p class="text-lg my-2">
            We provide:
          </p> -->
                <p class="cardDesc text-2xl text-grey-3">
                  Gain insights to stay ahead and access new market for the
                  growth and sustainability of your business
                </p>
              </div>
            </div>
          </div>
          <div
            ref="secondSlide"
            class="child absolute flex flex-col md:flex-row gap-2.5 overflow-x-hidden overflow-y-hidden w-full max-w-[1440px] mx-auto translate-x-[110%]"
          >
            <div
              class="childItem pt-10 bg-transparent border border-l-[4px] items-start border-l-grey-7 border-transparent text-grey-3 rounded-r-lg flex flex-col md:min-w-[400px] md:w-[400px] pl-[20px] relative overflow-hidden h-[412px]"
            >
              <div class="relative">
                <div
                  ref="activeCount"
                  class="activeCount absolute w-[65px] h-[65px] flex items-center justify-center letter border border-blue-6 min-w-max bg-white rounded-lg px-[15px] py-[11px] invisible"
                >
                  <img src="/img/04.png" alt="01" />
                </div>
                <p
                  ref="inactiveCount"
                  class="inactiveCount cabinet absolute w-[65px] h-[65px] flex items-center justify-center text-[32px] font-bold text-grey-7"
                >
                  04
                </p>
              </div>

              <div
                ref="activeText"
                class="activeText flex flex-col translate-y-28 pr-8 pt-10 pb-16 mt-40"
              >
                <h3
                  class="text-grey-7 text-[24px] font-medium mb-4 max-w-[160px]"
                >
                  Quality compliance support
                </h3>
                <!-- <p class="text-lg my-2">
            We provide:
          </p> -->
                <p class="cardDesc text-2xl text-grey-3">
                  Ensure that you are adhering to all regulatory guideline to a and maintain public contracts
                </p>
              </div>
            </div>
            <div
              class="childItem pt-10 bg-transparent border border-l-[4px] items-start border-l-grey-7 border-transparent text-grey-3 rounded-r-lg min-w-[343px] w-[343px] flex flex-col md:min-w-[400px] md:w-[400px] pl-[20px] relative overflow-hidden h-[412px]"
            >
              <div class="relative">
                <div
                  ref="activeCount"
                  class="activeCount absolute w-[65px] h-[65px] flex items-center justify-center letter border border-blue-6 min-w-max bg-white rounded-lg px-[15px] py-[11px] invisible"
                >
                  <img src="/img/05.png" alt="02" />
                </div>
                <p
                  ref="inactiveCount"
                  class="inactiveCount cabinet absolute w-[65px] h-[65px] flex items-center justify-center text-[32px] font-bold text-grey-7"
                >
                  05
                </p>
              </div>

              <div
                ref="activeText"
                class="activeText flex flex-col translate-y-28 pr-8 py-10 mt-36"
              >
                <h3
                  class="text-grey-7 text-[24px] font-medium mb-4 max-w-[160px]"
                >
                  Training (Workshops)
                </h3>
                <!-- <p class="text-lg my-2">
            We provide:
          </p> -->
                <p class="cardDesc text-2xl text-grey-3">
                  Improve your service delivery by ensure tasks are completed a
                </p>
              </div>
            </div>
            <!-- <div
              class="childItem bg-transparent border pt-10 border-l-[4px] items-start border-l-grey-7 border-transparent text-grey-3 rounded-r-lg min-w-[343px] w-[343px] flex flex-col md:min-w-[400px] md:w-[400px] pl-[20px] relative overflow-hidden h-[412px]"
            >
              <div class="relative">
                <div
                  ref="activeCount"
                  class="activeCount absolute w-[65px] h-[65px] flex items-center justify-center letter border border-blue-6 min-w-max bg-white rounded-lg px-[15px] py-[11px] invisible"
                >
                  <img src="/img/03.png" alt="03" />
                </div>
                <p
                  ref="inactiveCount"
                  class="inactiveCount cabinet absolute w-[65px] h-[65px] flex items-center justify-center text-[32px] font-bold text-grey-7"
                >
                  06
                </p>
              </div>

              <div
                ref="activeText"
                class="activeText flex flex-col translate-y-40 pr-8 py-10 mt-20"
              >
                <h3
                  class="text-grey-7 text-[24px] font-medium mb-6 max-w-[160px]"
                >
                  Market Analysis (Commissioned analytics)
                </h3>
                <p class="cardDesc text-2xl text-grey-3">
                  Gain insights to stay ahead and access new market for the
                  growth and sustainability of your business
                </p>
              </div>
            </div> -->
          </div>
        </div>
        <button v-if="hideLeftShowRight" @click="slideFromRight" class="bg-blue-4/10 h-[410px] w-[42px]">
          <img src="/svg/left-arrow.svg" alt="arrow-left" />
        </button>
      </div>
    </div>
    <div class="flex mt-10 justify-center lg:hidden">
      <nuxt-link
        to="/services"
        class="bg-blue-4 blue-btn text-white rounded py-4 px-8"
      >
        More Services
        <Icon class="hovered ml-4" name="mdi:arrow-right" size="18px" />
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.white-list li {
  background-image: url("~/assets/white-check.svg");
  background-repeat: no-repeat;
}
.blue-list li {
  background-image: url("~/assets/blue-check.svg");
  background-repeat: no-repeat;
}
li {
  list-style: none;
  padding-left: 30px;
}
li::before {
  content: "";
  display: inline-block;
  background-image: url();
}

.active {
  padding-left: 46px;
  background-color: $grey-4;
  border-left-width: 12px;
  border-color: $blue-6;
  border-left-color: $blue-9;
  // width: 343px;
  // min-width: 343px;
  // @media (min-width: 768px) {
  //   width: 558px;
  //   min-width: 558px;
  // }
  h3 {
    color: $blue-9;
    // width: 558px;
    // font-size: 32px;
    // font-weight: bold;
    // width: auto;
    // max-width: 100%;
  }
}
</style>
