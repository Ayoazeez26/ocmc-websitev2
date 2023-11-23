<script setup lang="ts">
const blogs = ref([
  {
    name: "Best Practices For Providing Domicillary Care",
    image: "book-practice",
    link: "https://www.amazon.com/PRACTICES-PROVIDING-DOMICILIARY-SUPPORTED-SCHEMES-ebook/dp/B0CG4X4KS1",
  },
  {
    name: "bridging the gap",
    image: "book-mockup",
  },
  {
    name: "social care business management explained",
    image: "book-social",
  },
  {
    name: "mastering tupe transfers in social care services",
    image: "book-tupe",
  },
  {
    name: "the ultimate guide to tender writing",
    image: "book-tender",
  },
]);

const phoneNumber = ref("7903094884");
const message = ref("Hello, I would like to request for the free pdf copy");

const messageUrl = () => {
  return `https://api.whatsapp.com/send/?phone=%2B44${phoneNumber}&text=${message}%27;`;
};
</script>
<template>
  <div
    class="mx-auto w-full px-4 md:px-6 xl:px-0 mt-14 md:mt-16 mb-16 max-w-[1240px]"
  >
    <h2
      class="font-bold px-8 lg:px-0 leading-[36px] md:leading-[48px] lg:leading-[54px] mb-5 tracking-[-1.5px] text-2xl md:text-[32px] lg:text-[48px] w-full"
    >
      Out Now: A Social Care Provider’s Guide to the 2023 CQC State of Care
      Report. An Analytical Summary by OC Management Consultants
    </h2>
    <p class="leading-[28px] text-lg mt-4">
      Discover what the
      <span class="font-bold">2023 CQC State of Care Report</span> means for
      social care providers like you in our latest guide!
    </p>
    <p class="leading-[28px] text-lg my-4">
      The Care Quality Commission (CQC) released their annual assessment on
      England’s health and social care sector, which attested to the
      <span class="font-bold">deteriorating state of care in the country.</span>
      We have analysed the report from a provider’s lens, and identified key
      findings that will empower your decisions about service provision and
      organisational growth.
    </p>

    <div
      style="
        position: relative;
        padding-top: max(60%, 326px);
        height: 0;
        width: 100%;
      "
    >
      <iframe
        allow="clipboard-write"
        sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
        allowfullscreen="true"
        style="
          position: absolute;
          border: none;
          width: 100%;
          height: 100%;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
        "
        src="https://e.issuu.com/embed.html?backgroundColor=%23043c89&d=report_design_recovered_&u=tgpcmedia"
      ></iframe>
    </div>
    <p class="leading-[28px] text-lg mt-4 mb-8">
      <a :href="`https://api.whatsapp.com/send/?phone=%2B44${phoneNumber}&text=${message}%27`" class="underline" target="_blank">Click here</a> to
      get a free version of the pdf
    </p>

    <div class="flex justify-start mt-6">
      <div
        class="flex flex-col md:flex-row justify-start items-stretch flex-wrap gap-10 lg:gap-2"
      >
        <div
          v-for="(blog, idx) in blogs"
          :key="idx"
          class="flex flex-col w-full md:w-[408px]"
        >
          <img
            class="w-full"
            :src="`https://s3.eu-west-2.amazonaws.com/ocmc-img.com/${blog.image}.png`"
          />
          <div
            class="flex items-start h-full px-6 py-8 border bg-blue-2 text-white border-blue-2"
          >
            <div class="flex flex-col justify-between h-full w-full">
              <h3
                class="cut-text text-whiter font-semibold text-xl tracking-[-0.2px] text-ellipsis overflow-hidden block uppercase"
              >
                {{ blog.name }}
              </h3>
              <!-- <p
                class="cut-text text-lg leading-[28px] font-medium max-h-14 mt-4 text-ellipsis overflow-hidden block"
              >
                {{ blog.title }}
              </p> -->
              <div class="mt-10 flex self-end w-full">
                <template v-if="blog.link">
                  <a
                    :href="blog.link"
                    target="_blank"
                    class="bg-blue-4/30 text-center text-white rounded p-4 w-full"
                  >
                    Get Now!!
                  </a>
                </template>
                <template v-else>
                  <nuxt-link
                    to="/"
                    class="bg-blue-4/30 text-center text-white rounded p-4 w-full"
                  >
                    Coming Soon!
                  </nuxt-link>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cut-text {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
}
</style>
