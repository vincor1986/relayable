const vendorData = [
  {
    name: "Adobe Creative Cloud",
    priority: true,
  },
  {
    name: "Airtable",
  },
  {
    name: "Akamai",
  },
  {
    name: "Algolia",
    priority: true,
  },
  {
    name: "Asana",
  },
  {
    name: "Atlassian",
    priority: true,
  },
  {
    name: "Auth0",
  },
  {
    name: "AWS",
    priority: true,
  },
  {
    name: "AWS Amplify",
    priority: true,
  },
  {
    name: "AWS S3",
    priority: true,
  },
  {
    name: "Azure",
    priority: true,
  },
  {
    name: "Basecamp",
  },
  {
    name: "BigCommerce",
    priority: true,
  },
  {
    name: "Bitbucket",
    priority: true,
  },
  {
    name: "Bitrise",
  },
  {
    name: "Bitwarden",
  },
  {
    name: "Bluehost",
    priority: true,
  },
  {
    name: "Brevo",
  },
  {
    name: "Calendly",
    priority: true,
  },
  {
    name: "Canva",
    priority: true,
  },
  {
    name: "CircleCI",
    priority: true,
  },
  {
    name: "ClickFunnels",
  },
  {
    name: "ClickUp",
  },
  {
    name: "CloudBees",
  },
  {
    name: "Cloudflare",
    priority: true,
  },
  {
    name: "Cloudinary",
    priority: true,
  },
  {
    name: "Contentful",
  },
  {
    name: "cPanel",
    priority: true,
  },
  {
    name: "Datadog",
  },
  {
    name: "DigitalOcean",
    priority: true,
  },
  {
    name: "Docker",
    priority: true,
  },
  {
    name: "Fastly",
  },
  {
    name: "Fastmail",
    priority: true,
  },
  {
    name: "Figma",
    priority: true,
  },
  {
    name: "Firebase",
    priority: true,
  },
  {
    name: "Freshdesk",
  },
  {
    name: "Gatsby",
    priority: true,
  },
  {
    name: "Ghost",
  },
  {
    name: "GitHub",
    priority: true,
  },
  {
    name: "GitLab",
    priority: true,
  },
  {
    name: "GoDaddy",
    priority: true,
  },
  {
    name: "Google Admin",
    priority: true,
  },
  {
    name: "Google Analytics",
    priority: true,
  },
  {
    name: "Google Cloud Platform",
    priority: true,
  },
  {
    name: "Google Optimize",
    priority: true,
  },
  {
    name: "Google Search Console",
    priority: true,
  },
  {
    name: "Google Tag Manager",
    priority: true,
  },
  {
    name: "Heap",
  },
  {
    name: "Heroku",
    priority: true,
  },
  {
    name: "HostGator",
    priority: true,
  },
  {
    name: "HubSpot",
    priority: true,
  },
  {
    name: "Intercom",
  },
  {
    name: "InVision",
  },
  {
    name: "Jenkins",
    priority: true,
  },
  {
    name: "Jira",
  },
  {
    name: "Kinsta",
  },
  {
    name: "LastPass",
  },
  {
    name: "LaunchDarkly",
  },
  {
    name: "Loggly",
  },
  {
    name: "Magento",
  },
  {
    name: "Mailchimp",
    priority: true,
  },
  {
    name: "Mailgun",
  },
  {
    name: "Microsoft 365",
    priority: true,
  },
  {
    name: "Microsoft Azure DevOps",
    priority: true,
  },
  {
    name: "Microsoft Power BI",
    priority: true,
  },
  {
    name: "Mixpanel",
  },
  {
    name: "MongoDB Atlas",
    priority: true,
  },
  {
    name: "Namecheap",
    priority: true,
  },
  {
    name: "Netlify",
  },
  {
    name: "New Relic",
  },
  {
    name: "Notion",
  },
  {
    name: "Okta",
  },
  {
    name: "Optimizely",
  },
  {
    name: "Oracle",
    priority: true,
  },
  {
    name: "Pingdom",
  },
  {
    name: "Plesk",
  },
  {
    name: "Postman",
  },
  {
    name: "Prismic",
    priority: true,
  },
  {
    name: "Raygun",
  },
  {
    name: "Redash",
  },
  {
    name: "Rollbar",
  },
  {
    name: "Sanity.io",
    priority: true,
  },
  {
    name: "Segment",
  },
  {
    name: "SendGrid",
    priority: true,
  },
  {
    name: "Sendinblue",
    priority: true,
  },
  {
    name: "Sentry",
  },
  {
    name: "Shopify",
    priority: true,
  },
  {
    name: "SiteGround",
  },
  {
    name: "Slack",
    priority: true,
  },
  {
    name: "Squarespace",
    priority: true,
  },
  {
    name: "Statuspage",
  },
  {
    name: "Strapi",
    priority: true,
  },
  {
    name: "Stripe",
    priority: true,
  },
  {
    name: "Sumo",
  },
  {
    name: "Tableau",
  },
  {
    name: "Trello",
    priority: true,
  },
  {
    name: "Twilio",
  },
  {
    name: "Upstash",
  },
  {
    name: "Vercel",
    priority: true,
  },
  {
    name: "Vultr",
  },
  {
    name: "Webflow",
    priority: true,
  },
  {
    name: "Wix",
    priority: true,
  },
  {
    name: "WordPress",
    priority: true,
  },
  {
    name: "WP Engine",
    priority: true,
  },
  {
    name: "Zapier",
    priority: true,
  },
  {
    name: "Zoho",
    priority: true,
  },
]
  .filter((v) => v.priority)
  .map((v) => v.name);

module.exports = vendorData;
