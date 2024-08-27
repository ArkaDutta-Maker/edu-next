export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Edu-Next",
  description: "Educational web",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Admission",
      href: "/admission",
    },
    {
      label: "Courses",
      href: "/courses",
    },
    {
      label: "Topper's Talk",
      href: "/topper",
    },
  ],
  navMenuItems: [
    // {
    //   label: "Home",
    //   href: "/",
    // },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Admission",
      href: "/admission",
    },
    {
      label: "Courses",
      href: "/courses",
    },
    {
      label: "Topper's Talk",
      href: "/topper",
    },
  ],
  links: {
    docs: "https://nextui.org",
  },
};
