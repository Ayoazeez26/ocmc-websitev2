<script setup lang="ts">
const { $gsap } = useNuxtApp();

const mm = $gsap.matchMedia();

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
      const allCardItems = [...document.querySelectorAll(".aboutChildItem")];
      items.value = [];
      allCardItems.forEach((item) => items.value.push(newCardItem(item)));
      // loader();
    });
  });
});

const newCardItem = (el) => {
  const DOM = { el: el };
  DOM.gradient = DOM.el.querySelector(".gradient");
  DOM.textItem = DOM.el.querySelector(".textItem");
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

  TLLOAD.to(item.el, { width: "826px", duration: 0.2 })
    .to(item.gradient, { y: 0, duration: 0.3 }, "<0.1")
    .to(item.textItem, { y: 0, duration: 0.3 }, "<");
};

const setInactive = (item) => {
  const TLLOAD = $gsap.timeline({
    default: {
      ease: "easeInOut",
    },
  });

  TLLOAD.to(item.textItem, { y: "860px", duration: 0.1 })
    .to(item.gradient, { y: "530px", duration: 0.1 }, "<")
    .to(item.el, { width: "215px", duration: 0.1 }, "<");
};
</script>
<template>
  <div
    class="bg-grad flex flex-col lg:flex-row-reverse justify-between items-center pt-[134px] pb-[199px] lg:gap-[64px] px-4 md:px-6 xl:px-0"
  >
    <div
      class="flex flex-col items-center text-center lg:px-4 xl:px-0 lg:text-left mg:text-left md:pr-4 mx-auto w-full max-w-[1304px]"
    >
      <button class="bg-whiter text-blue-10 px-6 py-2 rounded-3xl">
        Sectors we serve
      </button>
      <h2
        class="font-bold leading-[113%] text-center lg:leading-[54px] text-whiter px-6 md:px-0 tracking-[-1.5px] text-[32px] lg:text-[40px] mt-[36px] w-full max-w-[923px]"
      >
        OCMC Care Ecosystem<br />
        Elevating public contracts across specialized sectors
      </h2>
      <div class="mt-32 flex justify-center gap-[26px] relative w-full">
        <div
          class="aboutChildItem bg-hand-with-heart bg-center bg-no-repeat bg-cover w-[215px] h-[596px] relative overflow-hidden"
        >
          <img
            class="gradient translate-y-[530px]"
            src="/img/gradient-bg.png"
            alt="gradient background"
          />
          <div
            class="textItem absolute bottom-0 translate-y-[860px] w-full px-10 py-8 text-whiter"
          >
            <h3 class="text-whiter text-[38px] font-medium mb-2">
              Transportation services
            </h3>
            <p class="text-lg leading-[25.592px]">
              We currently focus on passenger transport for Special Educational
              Needs (SEN) and Looked After Children (LAC) learners. Assisting
              SMEs in securing vehicle-only contracts employing council drivers.
              For unique circumstances, we aid in obtaining contracts for
              council-provided Passenger Assistants (PAs) to accompany learners
              during their journey.
            </p>
          </div>
        </div>
        <div
          class="aboutChildItem bg-ocmc-bus bg-center bg-no-repeat bg-cover w-[215px] h-[596px] relative overflow-hidden"
        >
          <img
            class="gradient translate-y-[530px]"
            src="/img/gradient-bg.png"
            alt="gradient background"
          />
          <div
            class="textItem absolute bottom-0 translate-y-[860px] w-full px-10 py-8 text-whiter"
          >
            <h3 class="text-whiter text-[38px] font-medium mb-2">
              Transportation services
            </h3>
            <p class="text-lg leading-[25.592px]">
              We currently focus on passenger transport for Special Educational
              Needs (SEN) and Looked After Children (LAC) learners. Assisting
              SMEs in securing vehicle-only contracts employing council drivers.
              For unique circumstances, we aid in obtaining contracts for
              council-provided Passenger Assistants (PAs) to accompany learners
              during their journey.
            </p>
          </div>
        </div>
        <div
          class="aboutChildItem bg-stacked-books bg-center bg-no-repeat bg-cover w-[215px] h-[596px] relative overflow-hidden"
        >
          <img
            class="gradient translate-y-[530px]"
            src="/img/gradient-bg.png"
            alt="gradient background"
          />
          <div
            class="textItem absolute bottom-0 translate-y-[860px] w-full px-10 py-8 text-whiter"
          >
            <h3 class="text-whiter text-[38px] font-medium mb-2">
              Transportation services
            </h3>
            <p class="text-lg leading-[25.592px]">
              We currently focus on passenger transport for Special Educational
              Needs (SEN) and Looked After Children (LAC) learners. Assisting
              SMEs in securing vehicle-only contracts employing council drivers.
              For unique circumstances, we aid in obtaining contracts for
              council-provided Passenger Assistants (PAs) to accompany learners
              during their journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg-grad {
  background: linear-gradient(
    356deg,
    #013498 -30.58%,
    #011d56 15.39%,
    #001238 56.57%,
    #010f32 96.9%,
    #010d36 153.29%
  );
}
</style>
