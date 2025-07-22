// Dashboard Icons
import projectsIcon from "@/public/images/icons/projects.png";
import newProjectIcon from "@/public/images/icons/new-project.png";
import shortcutIcon from "@/public/images/icons/shortcuts.png";
import settingsIcon from "@/public/images/icons/settings.png";

// Why Relayable Icons
import useCasesIcon from "@/public/images/icons/use-cases.png";
import timeIcon from "@/public/images/icons/time-saving.png";
import trackingIcon from "@/public/images/icons/track.png";
import trustIcon from "@/public/images/icons/trust.png";
import customiseIcon from "@/public/images/icons/customise.png";
import faqIcon from "@/public/images/icons/faq.png";

// How-To Guides Icons
import grantIcon from "@/public/images/icons/grant.png";
import revokeIcon from "@/public/images/icons/revoke.png";
import toolkitIcon from "@/public/images/icons/toolkit.png";
import searchIcon from "@/public/images/icons/search.png";

const navLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
    description: "View and manage your account and projects",
    sublinks: [
      {
        name: "Projects",
        href: "/dashboard/projects",
        description: "Access, edit and manage your existing projects",
        icon: projectsIcon,
      },
      {
        name: "New project",
        href: "/dashboard/new-project",
        description: "Add a brand new project to work on",
        icon: newProjectIcon,
      },
      {
        name: "Shortcuts",
        href: "/dashboard/shortcuts",
        description: "View shortlisted and favourited resources",
        icon: shortcutIcon,
      },
      {
        name: "Settings",
        href: "/dashboard/settings",
        description: "Configure your account settings to your preferences",
        icon: settingsIcon,
      },
    ],
  },
  {
    name: "Why Relayable?",
    href: "/benefits",
    description:
      "Discover what Relayable can offer to you, your company and your clients",
    sublinks: [
      {
        name: "Use Cases",
        href: "/benefits/use-cases",
        description: "Find out how Relayable can help with your project(s)",
        icon: useCasesIcon,
      },
      {
        name: "Time-saving Resources",
        href: "/benefits/time",
        description:
          "Spend more time building and less time worrying about instructions or credentials",
        icon: timeIcon,
      },
      {
        name: "Keep on track",
        href: "/benefits/tracking",
        description: "Meet deadlines and surpass client expectations",
        icon: trackingIcon,
      },
      {
        name: "Establish Trust and Security",
        href: "/benefits/trust",
        description:
          "Demonstrate exemplary security-focused practices and attitudes to reassure clients",
        icon: trustIcon,
      },
      {
        name: "Customisable Detailed Guides",
        href: "/guides",
        description:
          "Our interactive guide-builder can save you time and ensure a smooth process for your client(s)",
        icon: customiseIcon,
      },
      {
        name: "FAQ",
        href: "/frequently-asked-questions",
        description: "Find answers to commonly asked questions",
        icon: faqIcon,
      },
    ],
  },
  {
    name: "How-To Guides",
    href: "/guides",
    description:
      "Our easy to follow guides will make life easier for you and your clients",
    sublinks: [
      {
        name: "Access-granting",
        href: "/guides/grant-access",
        description:
          "Our guides will make daunting and confusing access-granting procedures as easy as 1,2,3.",
        icon: grantIcon,
      },
      {
        name: "Access-revocation",
        href: "/guides/revoke-access",
        description:
          "Our simple access-revocation guides will make removing developer access straight-forward and easy.",
        icon: revokeIcon,
      },
      {
        name: "Developer Toolkit",
        href: "/developer-toolkit",
        description:
          "A wide range of articles and resources focused on best access-related practices and attitudes",
        icon: toolkitIcon,
      },
      {
        name: "Browse by Resource or Vendor",
        href: "/guides",
        description:
          "Browse our how-to guides by company, resource name or web address",
        icon: searchIcon,
      },
    ],
  },
];

export default navLinks;
