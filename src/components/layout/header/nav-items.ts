export const navItems: NavItem[] = [
  {
    type: "link",
    href: "/",
    label: "Home",
  },
  {
    type: "link",
    href: "/roadmap",
    label: "Roadmap",
  },
  {
    type: "link",
    href: "/mindset",
    label: "Engineer Mindset",
  },
  {
    type: "link",
    href: "/opensource",
    label: "Open Source",
  },
  {
    type: "link",
    href: "/about",
    label: "About",
  },
];

type NavItem =
  | {
      type: "link";
      href: string;
      label: string;
    }
  | {
      type: "dropdown";
      label: string;
      items: {
        href: string;
        label: string;
      }[];
    };
