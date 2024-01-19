<script setup lang="ts"></script>
<template>
  <div
    class="bg-grad flex flex-col lg:flex-row-reverse justify-between items-center py-[134px] lg:gap-[64px] px-4 md:px-6 xl:px-0"
  >
    <div
      class="flex flex-col items-center lg:items-start text-center lg:px-4 xl:px-0 lg:text-left mg:text-left md:pr-4 mx-auto w-full max-w-[1304px]"
    >
      <button class="bg-whiter text-blue-10 px-6 py-2 rounded-3xl">
        Sectors we serve
      </button>
      <h2
        class="font-bold leading-[48px] lg:leading-[54px] text-whiter px-6 md:px-0 tracking-[-1.5px] text-[32px] lg:text-[48px] mt-[36px] w-full max-w-[923px]"
      >
        OCMC Care Ecosystem Elevating public contracts across specialized
        sectors
      </h2>
      <div class="flex mt-10">
        <nuxt-link
          to="/about"
          class="bg-blue-4 blue-btn text-white rounded py-4 px-8"
        >
          Learn More
          <Icon class="hovered ml-4" name="mdi:arrow-right" size="18px" />
        </nuxt-link>
      </div>
      <div class="mt-32 lg:mt-0 relative w-full max-w-[741px]">
        <img
          src="https://s3.eu-west-2.amazonaws.com/ocmc-img.com/driving-desk.png"
          alt="picture of people sitting having meeting"
        />
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
