export const navItems = [
  {
    type: "link",
    href: "/",
    label: "Home",
  },
  {
    type: "link",
    label: "Roadmap",
    href: "/text-generator",
  },
  {
    type: "link",
    label: "Engineer Mindset",
    href: "/pricing",
  },
  {
    type: "link",
    label: "Open Source",
    href: "/contact",
  },
] satisfies NavItem[];

type NavItem = Record<string, string | unknown> &
  (
    | {
        type: "link";
        href: string;
      }
    | {
        type: "dropdown";
      }
  );
