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
        "blue-5": "#003069",
        "blue-6": "#D6E9FF",
        "blue-7": "#101420",
        "blue-8": "#F0F7FF",
        "blue-9": "#006EF5",
        "blue-10": "#001024",
        yellow: "#FADB36",
        primary: "#03989E",
        white: "#FAFFFF",
        whiter: "#FFFFFF",
        "light-green": "#CDEAEC",
        grey: "#1A2323",
        green: "#003D40",
        "grey-2": "#F4F7FA",
        "grey-3": "#615D5D",
        "grey-4": "#F5FAFF",
        "grey-5": "#808484",
        "grey-6": "#333B3B",
        "grey-7": "#C2C2C2",
        "grey-8": "#A4A5A7",
        "red-10": "#BE0712",
        "green-10": "#629442",
        "orange-10": "#CE9A22",
        "grey-9": "#CCCECE",
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
      },
    },
  },
  plugins: [],
  content: [],
};
