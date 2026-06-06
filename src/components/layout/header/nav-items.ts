export const navItems: NavItem[] = [
  {
    type: "link",
    href: "/",
    label: "Home",
  },
  {
    type: "link",
    href: "/text-generator",
    label: "Roadmap",
  },
  {
    type: "link",
    href: "/pricing",
    label: "Engineer Mindset",
  },
  {
    type: "link",
    href: "/contact",
    label: "Open Source",
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
