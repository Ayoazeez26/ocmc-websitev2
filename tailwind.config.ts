import type { Config } from "tailwindcss";

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        black: "#000A0A",
        "black-2": "#1A1A1A",
        blue: "#111322",
        "blue-2": "#001D40",
        "blue-3": "#0E193A",
        "blue-4": "#0073FF",
        "blue-5": "#0A7AFF",
        "blue-6": "#D6E9FF",
        "blue-7": "#101420",
        "blue-8": "#F0F7FF",
        "blue-9": "#006EF5",
        "blue-10": "#001024",
        yellow: "#FADB36",
        primary: "#03989E",
        white: "#FAFFFF",
        whiter: "#FFFFFF",
        "light-green": "#F3FCFE",
        grey: "#1A2323",
        green: "#003D40",
        "grey-2": "#F4F7FA",
        "grey-3": "#615D5D",
        "grey-4": "#F5FAFF",
        "grey-5": "#30374F",
        "grey-6": "#404968",
        "grey-7": "#C2C2C2",
        "grey-8": "#7D89B0",
        "grey-9": "#101828",
        "grey-10": "#DCDADA",
        "grey-11": "#DCDFEA",
        "red-10": "#BE0712",
        "green-10": "#629442",
        "orange-10": "#CE9A22",
        // "grey-9": "#CCCECE",
      },
      backgroundImage: {
        "hero-bg":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/hero-bg.png')",
        "hero-bg-mob":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/hero-bg-mob.png')",
        "about-bg":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/about-bg.png')",
        "about-bg-mob":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/about-bg-mob.png')",
        "services-bg":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/services-bg.png')",
        "services-bg-mob":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/excellence.png')",
        "contact-bg":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/contact-bg.png')",
        "contact-bg-mob":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/contact-bg-mob.png')",
        "blog-bg":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/blog-bg.png')",
        "ebooks-bg":
          "url('https://s3.eu-west-2.amazonaws.com/ocmc-img.com/ebooks-bg.png')",
        "ocmc-bus": "url('/img/ocmc-bus.png')",
        "stacked-books": "url('/img/stacked-books.png')",
        "hand-with-heart": "url('/img/hand-with-heart.png')",
      },
    },
  },
  plugins: [],
  content: [],
};
