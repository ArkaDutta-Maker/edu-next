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
      label: "Pricing",
      href: "/pricing",
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
      label: "Pricing",
      href: "/pricing",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
