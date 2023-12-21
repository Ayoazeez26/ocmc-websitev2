<script setup lang="ts">
const { $gsap, $ScrollTrigger } = useNuxtApp();

const mm = $gsap.matchMedia();
const halfLogo = ref(null);

const ctx = $gsap.context(() => {});
onUnmounted(() => {
  ctx.revert();
});
const loader = () => {
  const TLLOAD = $gsap.timeline({
    default: {
      ease: "power2"
    }
  })

  TLLOAD
  .to(halfLogo.value, { y: 0, duration: 1, delay: 0.4})
}
onMounted(() => {
  setTimeout(() => {
    console.log("mounted");
    // $ScrollTrigger.refresh();
  }, 1000);
  ctx.add(() => {
    mm.add("(min-width: 1024px)", () => {
      loader();
    });
  });
});
</script>
<template>
  <div
    class="bg-blue pt-20 px-4 md:px-6 xl:px-0 md:h-screen w-full md:pt-[120px] overflow-hidden"
  >
    <div
      class="w-full max-w-[1240px] flex justify-between pt-32 md:pt-20 mx-auto h-full"
    >
      <div class="flex flex-col md:justify-between w-full h-full">
        <div class="flex justify-center w-full mb-10 md:mb-12 lg:mb-20">
          <!-- <img class="hidden lg:block w-[146px]" src="https://s3.eu-west-2.amazonaws.com/ocmc-img.com/hero-left.png" alt="hero left image"> -->
          <div class="text-center flex flex-col items-center w-full">
            <h1
              class="text-white font-extrabold overflow-hidden leading-[42px] max-w-[769px] md:leading-[54px] lg:leading-[60px] text-[32px] md:text-[48px] lg:text-[50px]"
            >
              Turn Challenges into opportunities
              <span class="flex justify-center">
                with
                <img src="/svg/logo-half.svg" alt="logo half" />
                <div ref="halfLogo" class="relative flex -mt-2 translate-y-20">
                  <img class="absolute bottom-4 -left-14 -translate-x-1" src="/svg/bottom-logo.svg" alt="bottom half of the logo">
                  <span class="text-blue-4 text-[43px] pt-2">MC's</span>
                </div>
                <span class="pl-4">tailored solutions</span>
              </span>
            </h1>
            <p
              class="font-medium text-white tracking-[0.2px] mx-4 mt-6 lg:text-lg max-w-[433px]"
            >
              Let OCMC guide your business to success with our expert public
              procurement services. 
            </p>
            <div class="hidden lg:flex justify-center min-w-max mt-10">
              <nuxt-link
                to="/services"
                class="bg-white blue-btn text-blue-4 font-semibold rounded py-4 px-[130px]"
              >
                Get in touch
              </nuxt-link>
            </div>
          </div>
          
        </div>
        <div class="absolute bottom-0 left-0 right-0 w-full max-w-[1240px] mx-auto">
          <div class="relative w-full">
            <!-- <img class="absolute bottom-0 translate-x-40 translate-y-12 left-0 w-[394px]" src="/img/slide-img-1.png" alt="first slide image"> -->
            <img class="w-[159px] absolute bottom-72 left-20" src="/img/slide-img-2.png" alt="first slide image">
            <img class="absolute bottom-0 left-0 translate-x-[290px] -translate-y-16 w-[272px]" src="/img/slide-img-3.png" alt="first slide image">
            <!-- <img class="absolute bottom-[450px] right-[400px] w-[158px]" src="/img/slide-img-4.png" alt="first slide image"> -->
            <img class="absolute right-96 bottom-32 w-[240px]" src="/img/slide-img-5.png" alt="first slide image">
            <img class="w-[196px] absolute right-40 bottom-80" src="/img/slide-img-6.png" alt="first slide image">
            <!-- <img class="absolute right-0 -translate-x-44 bottom-0 translate-y-14 w-[380px]" src="/img/slide-img-7.png" alt="first slide image"> -->
          </div>
        </div>
        <div
          class="absolute bottom-0 flex justify-between left-0 right-0 w-full"
        >
          <img src="/img/vector-left.png" alt="left vector" />
          <img src="/img/vector-right.png" alt="right vector" />
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
