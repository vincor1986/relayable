const vendorData = [
  {
    name: "Adobe Creative Cloud",
    priority: true,
    count: 3,
  },
  {
    name: "Airtable",
    count: 2,
  },
  {
    name: "Akamai",
    count: 2,
  },
  {
    name: "Algolia",
    priority: true,
    count: 3,
  },
  {
    name: "Asana",
    count: 1,
  },
  {
    name: "Atlassian",
    priority: true,
    count: 2,
  },
  {
    name: "Auth0",
    count: 3,
  },
  {
    name: "AWS",
    priority: true,
    count: 5,
  },
  {
    name: "AWS Amplify",
    priority: true,
    count: 4,
  },
  {
    name: "AWS S3",
    priority: true,
    count: 3,
  },
  {
    name: "Azure",
    priority: true,
    count: 6,
  },
  {
    name: "Basecamp",
    count: 1,
  },
  {
    name: "BigCommerce",
    priority: true,
    count: 3,
  },
  {
    name: "Bitbucket",
    priority: true,
    count: 2,
  },
  {
    name: "Bitrise",
    count: 1,
  },
  {
    name: "Bitwarden",
    count: 1,
  },
  {
    name: "Bluehost",
    priority: true,
    count: 2,
  },
  {
    name: "Brevo",
    count: 1,
  },
  {
    name: "Calendly",
    priority: true,
    count: 2,
  },
  {
    name: "Canva",
    priority: true,
    count: 3,
  },
  {
    name: "CircleCI",
    priority: true,
    count: 4,
  },
  {
    name: "ClickFunnels",
    count: 2,
  },
  {
    name: "ClickUp",
    count: 1,
  },
  {
    name: "CloudBees",
    count: 1,
  },
  {
    name: "Cloudflare",
    priority: true,
    count: 5,
  },
  {
    name: "Cloudinary",
    priority: true,
    count: 3,
  },
  {
    name: "Contentful",
    count: 1,
  },
  {
    name: "cPanel",
    priority: true,
    count: 4,
  },
  {
    name: "Datadog",
    count: 1,
  },
  {
    name: "DigitalOcean",
    priority: true,
    count: 4,
  },
  {
    name: "Docker",
    priority: true,
    count: 3,
  },
  {
    name: "Fastly",
    count: 1,
  },
  {
    name: "Fastmail",
    priority: true,
    count: 2,
  },
  {
    name: "Figma",
    priority: true,
    count: 1,
  },
  {
    name: "Firebase",
    priority: true,
    count: 3,
  },
  {
    name: "Freshdesk",
    count: 1,
  },
  {
    name: "Gatsby",
    priority: true,
    count: 2,
  },
  {
    name: "Ghost",
    count: 1,
  },
  {
    name: "GitHub",
    priority: true,
    count: 5,
  },
  {
    name: "GitLab",
    priority: true,
    count: 4,
  },
  {
    name: "GoDaddy",
    priority: true,
    count: 3,
  },
  {
    name: "Google Admin",
    priority: true,
    count: 2,
  },
  {
    name: "Google Analytics",
    priority: true,
    count: 4,
  },
  {
    name: "Google Cloud Platform",
    priority: true,
    count: 5,
  },
  {
    name: "Google Optimize",
    priority: true,
    count: 2,
  },
  {
    name: "Google Search Console",
    priority: true,
    count: 3,
  },
  {
    name: "Google Tag Manager",
    priority: true,
    count: 4,
  },
  {
    name: "Heap",
    count: 1,
  },
  {
    name: "Heroku",
    priority: true,
    count: 3,
  },
  {
    name: "HostGator",
    priority: true,
    count: 2,
  },
  {
    name: "HubSpot",
    priority: true,
    count: 4,
  },
  {
    name: "Intercom",
    count: 1,
  },
  {
    name: "InVision",
    count: 1,
  },
  {
    name: "Jenkins",
    priority: true,
    count: 2,
  },
  {
    name: "Jira",
    count: 1,
  },
  {
    name: "Kinsta",
    count: 2,
  },
  {
    name: "LastPass",
    count: 1,
  },
  {
    name: "LaunchDarkly",
    count: 1,
  },
  {
    name: "Loggly",
    count: 1,
  },
  {
    name: "Magento",
    count: 2,
  },
  {
    name: "Mailchimp",
    priority: true,
    count: 3,
  },
  {
    name: "Mailgun",
    priority: true,
    count: 2,
  },
  {
    name: "Microsoft 365",
    priority: true,
    count: 4,
  },
  {
    name: "Microsoft Azure DevOps",
    priority: true,
    count: 3,
  },
  {
    name: "Microsoft Power BI",
    priority: true,
    count: 2,
  },
  {
    name: "Mixpanel",
    count: 1,
  },
  {
    name: "MongoDB Atlas",
    priority: true,
    count: 3,
  },
  {
    name: "Namecheap",
    priority: true,
    count: 2,
  },
  {
    name: "Netlify",
    count: 3,
  },
  {
    name: "New Relic",
    count: 1,
  },
  {
    name: "Notion",
    count: 1,
  },
  {
    name: "Okta",
    count: 1,
  },
  {
    name: "Optimizely",
    count: 1,
  },
  {
    name: "Oracle",
    priority: true,
    count: 3,
  },
  {
    name: "Pingdom",
    count: 1,
  },
  {
    name: "Plesk",
    count: 1,
  },
  {
    name: "Postman",
    count: 1,
  },
  {
    name: "Prismic",
    priority: true,
    count: 3,
  },
  {
    name: "Raygun",
    count: 1,
  },
  {
    name: "Redash",
    count: 1,
  },
  {
    name: "Rollbar",
    count: 1,
  },
  {
    name: "Sanity.io",
    priority: true,
    count: 3,
  },
  {
    name: "Segment",
    count: 1,
  },
  {
    name: "SendGrid",
    priority: true,
    count: 3,
  },
  {
    name: "Sendinblue",
    priority: true,
    count: 4,
  },
  {
    name: "Sentry",
    count: 1,
  },
  {
    name: "Shopify",
    priority: true,
    count: 6,
  },
  {
    name: "SiteGround",
    priority: true,
    count: 3,
  },
  {
    name: "Slack",
    priority: true,
    count: 3,
  },
  {
    name: "Squarespace",
    priority: true,
    count: 4,
  },
  {
    name: "Statuspage",
    count: 1,
  },
  {
    name: "Strapi",
    priority: true,
    count: 2,
  },
  {
    name: "Stripe",
    priority: true,
    count: 5,
  },
  {
    name: "Sumo",
    count: 1,
  },
  {
    name: "Tableau",
    priority: true,
    count: 2,
  },
  {
    name: "Trello",
    priority: true,
    count: 2,
  },
  {
    name: "Twilio",
    priority: true,
    count: 4,
  },
  {
    name: "Upstash",
    count: 1,
  },
  {
    name: "Vercel",
    priority: true,
    count: 4,
  },
  {
    name: "Vultr",
    count: 1,
  },
  {
    name: "Webflow",
    priority: true,
    count: 3,
  },
  {
    name: "Wix",
    priority: true,
    count: 4,
  },
  {
    name: "WordPress",
    priority: true,
    count: 5,
  },
  {
    name: "WP Engine",
    priority: true,
    count: 3,
  },
  {
    name: "Zapier",
    priority: true,
    count: 4,
  },
  {
    name: "Zoho",
    priority: true,
    count: 2,
  },
];

module.exports = vendorData;
