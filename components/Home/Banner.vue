<script setup lang="ts">
const { $gsap, $ScrollTrigger } = useNuxtApp();

// const mm = $gsap.matchMedia();

const ctx = $gsap.context(() => {});
onUnmounted(() => {
  ctx.revert();
});
onMounted(() => {
  setTimeout(() => {
    console.log("mounted");
    $ScrollTrigger.refresh();
  }, 1000);
  ctx.add(() => {
    // mm.add("(min-width: 1024px)", () => {
    $gsap.set(".wrapper", { xPercent: -50, yPercent: -50 });
    const boxWidth = 640,
      totalWidth = boxWidth * 4 + 640,
      time = 30,
      noO1 = document.querySelectorAll(".image"),
      dirFromLeft = "+=" + totalWidth,
      dirFromRight = "-=" + totalWidth;

    const mod = $gsap.utils.wrap(0, totalWidth);

    $gsap.set(noO1, {
      x: function (i) {
        return i * boxWidth;
      },
    });

    const action = $gsap.timeline().to(noO1, {
      x: dirFromRight,
      modifiers: {
        x: (x) => mod(parseFloat(x)) + "px",
      },
      duration: time,
      ease: "none",
      repeat: -1,
    });
    // });
  });
});
</script>
<template>
  <div class="h-[100px] bg-whiter w-full overflow-hidden relative pt-14">
    <div
      class="flex flex-col px-5 xl:px-0 items-center justify-center mx-auto w-full"
    >
      <div class="w-full md:ml-4 max-w-[768px] md:text-center">
        <div
          class="wrapper w-[350%] h-10 left-1/2 top-[40%] overflow-hidden"
        >
          <div class="images">
            <div class="image absolute flex gap-4 w-[620px] mx-4">
              <img src="/svg/semi.svg" alt="semi circle" />
              <p class="text-blue-7 text-2xl min-w-max">
                Unlock Your Potential with OCMC's Tailored Solutions
              </p>
            </div>
            <div class="image absolute flex gap-4 w-[620px] mx-4">
              <img class="rotate-180" src="/svg/semi.svg" alt="semi circle" />
              <p class="text-blue-7 text-2xl min-w-max">
                Unlock Your Potential with OCMC's Tailored Solutions
              </p>
            </div>
            <div class="image absolute flex gap-4 w-[620px] mx-4">
              <img src="/svg/semi.svg" alt="semi circle" />
              <p class="text-blue-7 text-2xl min-w-max">
                Unlock Your Potential with OCMC's Tailored Solutions
              </p>
            </div>
            <div class="image absolute flex gap-4 w-[620px] mx-4">
              <img class="rotate-180" src="/svg/semi.svg" alt="semi circle" />
              <p class="text-blue-7 text-2xl min-w-max">
                Unlock Your Potential with OCMC's Tailored Solutions
              </p>
            </div>
            <div class="image absolute flex gap-4 w-[620px] mx-4">
              <img class="rotate-180" src="/svg/semi.svg" alt="semi circle" />
              <p class="text-blue-7 text-2xl min-w-max">
                Unlock Your Potential with OCMC's Tailored Solutions
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  background: linear-gradient(111deg, rgba(0, 6, 26, 0.95) 0%, #0a0a0a 100%);
}
.invert-curve {
  position: relative;
  &::after {
    position: absolute;
    content: "";
    bottom: 4px;
    left: 0;
    width: 100%;
    height: 14px;
    background-image: url("/svg/line.svg");
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (max-width: 1024px) {
      height: 9px;
      bottom: 3px;
    }
  }
}
</style>
