<script setup lang="ts">
const { $gsap, $ScrollTrigger } = useNuxtApp();

const mm = $gsap.matchMedia();
const halfLogo = ref(null);
const touchBtn = ref(null);
const blueBg = ref(null);
const touchText = ref(null);
const handShake = ref(null);
const banners = ref(null);
const leftBanner = ref(null);
const rightBanner = ref(null);
const hscroll = ref(null);

const ctx = $gsap.context(() => {});
onUnmounted(() => {
  ctx.revert();
});
// const loader = () => {
//   const TLLOAD = $gsap.timeline({
//     default: {
//       ease: "power2",
//     },
//   });

//   TLLOAD.to(halfLogo.value, { y: 0, duration: 1, delay: 0.4 });
// };
onMounted(() => {
  setTimeout(() => {
    $ScrollTrigger.refresh();
  }, 1000);
  ctx.add(() => {
    mm.add("(min-width: 1024px)", () => {
      $gsap.to(hscroll.value, {
        xPercent: -150,
        ease: "none",
        $ScrollTrigger: {
          trigger: hscroll.value,
          start: "top top+=200",
          end: "bottom top",
          // scrub: true,
          markers: true,
        },
      });
      $ScrollTrigger.create({
        trigger: banners.value,
        start: "top+=50% center",
        end: "bottom center",
        pin: handShake.value,
        scrub: true,
      });
      // $gsap.to(leftBanner.value, {
      //   xPercent: 50,
      //   ease: "none",
      //   $ScrollTrigger: {
      //     trigger: leftBanner.value,
      //     start: "top center",
      //     end: "bottom top",
      //     scrub: true,
      //     markers: true,
      //   },
      // });
    });
  });
});

const runAnim = () => {
  const TLLOAD = $gsap.timeline({
    default: {
      ease: "ease",
    },
  });

  TLLOAD.to(blueBg.value, { width: "100%", duration: 1 }).to(
    touchText.value,
    { color: "white" },
    "<0.4"
  );
};
const resetAnim = () => {
  const TLLOAD = $gsap.timeline({
    default: {
      ease: "ease",
    },
  });

  TLLOAD.to(blueBg.value, { width: 0, duration: 1 }).to(
    touchText.value,
    { color: "#0073FF" },
    "<0.4"
  );
};
</script>
<template>
  <div
    class="bg-blue pt-20 px-4 md:px-6 xl:px-0 md:h-screen w-full md:pt-[120px] relative overflow-hidden"
  >
    <div
      class="w-full max-w-[1240px] flex justify-between pt-32 md:pt-20 mx-auto h-full"
    >
      <div class="flex flex-col md:justify-between w-full h-full overflow-y-hidden">
        <div class="flex justify-center w-full mb-10 md:mb-12 lg:mb-20">
          <!-- <img class="hidden lg:block w-[146px]" src="https://s3.eu-west-2.amazonaws.com/ocmc-img.com/hero-left.png" alt="hero left image"> -->
          <div class="text-center flex flex-col items-center w-full">
            <h1
              class="text-white font-extrabold overflow-hidden leading-[42px] max-w-[514px] md:leading-[54px] lg:leading-[46.376px] text-[32px] md:text-[40px]"
            >
              We enable <span class="text-blue-4">SME's</span> secure and
              maintain public contracts
              <!-- <span class="flex justify-center">
                with
                <img src="/svg/logo-half.svg" alt="logo half" />
                <div ref="halfLogo" class="relative flex -mt-2 translate-y-20">
                  <img class="absolute bottom-4 -left-14 -translate-x-1" src="/svg/bottom-logo.svg" alt="bottom half of the logo">
                  <span class="text-blue-4 text-[43px] pt-2">MC's</span>
                </div>
                <span class="pl-4">tailored solutions</span>
              </span> -->
            </h1>
            <p
              class="text-white tracking-[0.2px] mx-4 mt-6 lg:text-[17px] max-w-[421px]"
            >
              Tenders, mock inspections, commissioned analytics and workshops
            </p>
            <div ref="hscroll" class="hscroll">Lorem ipsum dolor sit amet</div>
            <div class="hidden lg:flex justify-center min-w-max mt-10">
              <nuxt-link
                @mouseover="runAnim"
                @mouseout="resetAnim"
                ref="touchBtn"
                to="/services"
                class="bg-white blue-btn font-semibold rounded py-4 px-[130px] relative"
              >
                <p ref="touchText" class="text-blue-4 z-[2] relative">
                  Get in touch
                </p>
                <div
                  ref="blueBg"
                  class="absolute top-0 left-0 rounded w-0 h-full bg-blue-4 z-[1]"
                ></div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <img ref="handShake" src="/img/shake.png" alt="shake" />
        <div
          ref="banners"
          class="absolute bottom-0 flex justify-between left-0 right-0 w-full max-w-screen-2xl mx-auto overflow-hidden"
        >
          <img
            ref="leftBanner"
            class="-translate-x-60"
            src="/svg/left-banner.svg"
            alt="left vector"
          />
          <img
            ref="rightBanner"
            src="/svg/right-banner.svg"
            alt="right vector"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-hero-bg {
  background-position: center;
  @media screen and (max-width: 768px) {
    background-position: center left -350px;
  }
}
</style>
