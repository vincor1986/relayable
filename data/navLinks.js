// Dashboard Icons
import newProjectIcon from "@/public/images/icons/new-project.png";
import shortcutIcon from "@/public/images/icons/shortcuts.png";

// Why Relayable Icons
import timeIcon from "@/public/images/icons/time-saving.png";
import trackingIcon from "@/public/images/icons/track.png";
import trustIcon from "@/public/images/icons/trust.png";
import customiseIcon from "@/public/images/icons/customise.png";
import faqIcon from "@/public/images/icons/faq.png";

// How-To Guides Icons
import grantIcon from "@/public/images/icons/grant.png";
import revokeIcon from "@/public/images/icons/revoke.png";
import searchIcon from "@/public/images/icons/search.png";

const navLinks = [
  {
    name: "Engage",
    href: "/dashboard",
    description: "Learn and enagage with the Relayable community",
    sublinks: [
      {
        name: "Contribute",
        href: "/contribute",
        description: "Add a new interactive guide to the Relayable platform",
        icon: newProjectIcon,
      },
      {
        name: "Shortcuts",
        href: "/shortcuts",
        description: "View shortlisted and favourited resources",
        icon: shortcutIcon,
      },
      {
        name: "FAQ",
        href: "/faq",
        description: "Find answers to commonly asked questions",
        icon: faqIcon,
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
        name: "Time-saving Resources",
        href: "/benefits/#time-saving",
        description:
          "Spend more time building and less time worrying about instructions or credentials",
        icon: timeIcon,
      },
      {
        name: "Keep on track",
        href: "/benefits/#tracking",
        description: "Meet deadlines and surpass client expectations",
        icon: trackingIcon,
      },
      {
        name: "Establish Trust and Security",
        href: "/benefits/#trust",
        description:
          "Demonstrate exemplary security-focused practices and attitudes to reassure clients",
        icon: trustIcon,
      },
      {
        name: "Customisable Detailed Guides",
        href: "/benefits/#interactive-guides",
        description:
          "Our interactive guide-builder can save you time and ensure a smooth process for your client(s)",
        icon: customiseIcon,
      },
      {
        name: "FAQ",
        href: "/faq",
        description: "Find answers to commonly asked questions",
        icon: faqIcon,
      },
    ],
  },
  {
    name: "How-To Guides",
    href: "/guides/search",
    description:
      "Our easy to follow guides will make life easier for you and your clients",
    sublinks: [
      {
        name: "Access-granting",
        href: "/guides/search?query=granting%20access",
        description:
          "Our guides will make daunting and confusing access-granting procedures as easy as 1,2,3.",
        icon: grantIcon,
      },
      {
        name: "Access-revocation",
        href: "/guides/search?query=revoking%20access",
        description:
          "Our simple access-revocation guides will make removing developer access straight-forward and easy.",
        icon: revokeIcon,
      },
      {
        name: "Browse by Resource or Platform",
        href: "/guides",
        description:
          "Browse or search our interactive guides by platform, resource name or description",
        icon: searchIcon,
      },
    ],
  },
];

export default navLinks;
