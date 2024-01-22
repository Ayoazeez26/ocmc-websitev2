<script setup lang="ts">
const resource = ref("Books");
const services = ref([
  {
    name: "Bridging the gap",
    image: "bridging-the-gap",
  },
  {
    name: "Transformative Practices",
    image: "transformative",
  },
  {
    name: "Navigating the Dynamics",
    image: "navigating",
  },
  {
    name: "Strategies for Social Well-being",
    image: "strategies",
  },
  {
    name: "A Guide to Ethical Leadership",
    image: "leadership",
  },
  {
    name: "The Blueprint for Success",
    image: "bridging-the-gap",
  },
]);
const videos = ref([
  {
    title: "CQC Regulation 13: Good Governance",
    img: "video-placeholder",
  },
  {
    title: "CQC Regulation 13: Good Governance",
    img: "video-placeholder",
  },
  {
    title: "CQC Regulation 13: Good Governance",
    img: "video-placeholder",
  },
]);
const posts = ref([
  {
    title: "£500 million fund to make patients top priority",
    date: "April 23, 2023",
    author: "Mrs Obi",
  },
  {
    title: "workforce development fund: adult social care",
    date: "April 23, 2023",
    author: "Mrs Obi",
  },
  {
    title: "supported living: the economical benefits",
    date: "April 23, 2023",
    author: "Mrs Obi",
  },
]);
</script>
<template>
  <div
    class="flex flex-col items-center mx-auto px-4 py-28 md:px-6 xl:px-0 w-full max-w-[1304px]"
  >
    <div
      class="flex flex-col lg:flex-row lg:items-center justify-between w-full"
    >
      <div class="">
        <h2
          class="font-semibold text-grey-5 leading-[48px] w-[200px] md:w-auto lg:leading-[54px] tracking-[-1.5px] text-[32px] lg:text-[40px]"
        >
          Stay Informed with OCMC
        </h2>
        <p class="text-grey-6 mt-1">Gain insights for the Changing Landscape</p>
      </div>
      <div
        class="bg-light-green px-[73.5px] py-[22.5px] flex mt-8 gap-[34px] lg:mt-0 overflow-x-auto"
      >
        <button
          @click="resource = 'All'"
          class="py-1 border-b-4"
          :class="
            resource === 'All'
              ? 'text-blue-4 border-blue-4 font-semibold'
              : 'border-light-green text-grey-8'
          "
        >
          All resources
        </button>
        <button
          @click="resource = 'Books'"
          class="py-1 border-b-4"
          :class="
            resource === 'Books'
              ? 'text-blue-4 border-blue-4 font-semibold'
              : 'border-light-green text-grey-8'
          "
        >
          Books
        </button>
        <button
          @click="resource = 'Videos'"
          class="py-1 border-b-4"
          :class="
            resource === 'Videos'
              ? 'text-blue-4 border-blue-4 font-semibold'
              : 'border-light-green text-grey-8'
          "
        >
          Videos
        </button>
        <button
          @click="resource = 'Blog'"
          class="py-1 border-b-4"
          :class="
            resource === 'Blog'
              ? 'text-blue-4 border-blue-4 font-semibold'
              : 'border-light-green text-grey-8'
          "
        >
          Blog
        </button>
      </div>
    </div>
    <div v-show="resource === 'Books'" class="w-full">
      <div class="flex justify-center mt-10 w-full">
        <div
          class="flex flex-col lg:flex-row md:items-stretch justify-center flex-wrap gap-10 lg:gap-8"
        >
          <div
            v-for="(service, idx) in services"
            :key="idx"
            class="flex flex-col gap-6 w-full lg:w-[398px]"
          >
            <img class="w-full" :src="`/img/${service.image}.png`" />
            <div
              class="border border-grey-10 flex items-start px-6 py-8"
            >
              <div class="flex justify-between w-full ">
                <div class="flex flex-col">
                  <h3 class="font-medium text-grey-9">
                    {{ service.name }}
                  </h3>
                  <div class="flex items-center mt-[10px] gap-[5px]">
                    <img src="/svg/book.svg" alt="book icon" />
                    <h4 class="text-blue-5 text-2xl font-medium">Books</h4>
                  </div>
                </div>
                <!-- <p
                  class="cut-text text-lg leading-[28px] font-medium max-h-14 mt-4 text-ellipsis overflow-hidden block"
                >
                  {{ service.title }}
                </p> -->
                <div class="flex items-center justify-center">
                  <nuxt-link to="/ebooks" class="border border-grey-11 rounded-2xl py-4 px-6">
                    <Icon
                      class="-rotate-45"
                      name="mdi:arrow-right"
                      size="24px"
                      color="#404968"
                    />
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex mt-[71px] justify-center">
        <nuxt-link
          to="/ebooks"
          class="text-blue-4 blue-btn rounded py-4 px-8 w-[329px] text-center bg-whiter border border-black/20"
        >
          See all
        </nuxt-link>
      </div>
    </div>
    <div v-show="resource === 'Videos'" class="w-full">
      <div class="flex justify-center mt-10">
        <div
          class="flex flex-col lg:flex-row justify-center flex-wrap gap-10 lg:gap-6"
        >
          <div
            v-for="(video, idx) in videos"
            :key="idx"
            class="flex flex-col w-full lg:w-[397px]"
          >
            <img
              class="w-full"
              :src="`https://s3.eu-west-2.amazonaws.com/ocmc-img.com/${video.img}.png`"
            />
            <div
              class="flex items-center px-4 py-8 border bg-blue-2 text-white border-blue-2"
            >
              <div class="flex items-center w-full gap-x-4">
                <img class="h-10 w-10" src="/img/play.png" alt="play picture" />
                <p
                  class="cut-text text-lg leading-[28px] font-medium max-h-14 text-ellipsis overflow-hidden block"
                >
                  {{ video.title }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex mt-10 justify-center">
        <nuxt-link to="/ebooks" class="text-blue-4 blue-btn rounded py-4 px-8">
          See More
          <Icon
            class="hovered ml-3"
            name="mdi:arrow-right"
            size="18px"
            color="#0073FF"
          />
        </nuxt-link>
      </div>
    </div>
    <div v-show="resource === 'Blog'" class="">
      <div class="flex flex-col lg:flex-row gap-10 mt-10">
        <nuxt-link to="/blog/id" class="w-full max-w-[612px]">
          <img
            src="https://s3.eu-west-2.amazonaws.com/ocmc-img.com/book-mockup-1.png"
            alt="book mockup"
          />
          <div class="bg-blue-2 px-6 py-12">
            <div class="flex flex-col md:flex-row md:items-center gap-6">
              <div class="flex md:justify-center max-w-fit relative">
                <img
                  class="absolute -right-2 -top-2"
                  src="/svg/dark-logo-splash.svg"
                  alt="splash logo"
                />
                <nuxt-link
                  to="/services"
                  class="bg-blue-4 text-white uppercase rounded py-2 px-4"
                >
                  Trending
                </nuxt-link>
              </div>
              <div class="flex gap-6 items-center">
                <p class="text-whiter">April 23, 2023</p>
                <div class="w-2 h-9 bg-blue-4" />
                <p class="text-whiter">By Mrs Obi</p>
              </div>
            </div>
            <h2 class="font-bold text-whiter text-2xl max-w-[483px] mt-6">
              SUPPORTED LIVING: MORE THAN PROVIDING A HOUSE AND A SERVICE
            </h2>
          </div>
        </nuxt-link>
        <div class="flex flex-col gap-6">
          <nuxt-link
            v-for="(post, index) in posts"
            :key="index"
            class="flex items-center"
            to="/blog/id"
          >
            <img
              class="w-[164px] hidden md:block"
              src="https://s3.eu-west-2.amazonaws.com/ocmc-img.com/book-mockup-mob.png"
              alt="small book mockup"
            />
            <img
              class="w-[164px] md:hidden"
              src="https://s3.eu-west-2.amazonaws.com/ocmc-img.com/book-mockup-mob-2.png"
              alt="small book mockup"
            />
            <div class="flex flex-col gap-y-2 px-6 max-w-[424px]">
              <h3
                class="cut-text text-lg font-bold uppercase max-h-14 text-ellipsis overflow-hidden block"
              >
                {{ post.title }}
              </h3>
              <div
                class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6"
              >
                <p>{{ post.date }}</p>
                <div class="w-7/12 md:w-1 h-1 md:h-7 bg-blue-4" />
                <p>By {{ post.author }}</p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="flex mt-10 justify-center">
        <nuxt-link to="/ebooks" class="text-blue-4 blue-btn rounded py-4 px-8">
          View More
          <Icon
            class="ml-3 hovered"
            name="mdi:arrow-right"
            size="18px"
            color="#0073FF"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cut-text {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
}
</style>
