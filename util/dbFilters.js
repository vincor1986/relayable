export const SEARCH_FILTER = {
  projection: {
    _id: true,
    id: true,
    vendorSlug: true,
    title: true,
    vendor: true,
    slug: true,
    description: true,
    author: true,
    category: true,
  },
};

export const FULL_GUIDE_FILTER = {
  projection: {
    _id: true,
    id: true,
    vendor: true,
    title: true,
    slug: true,
    vendorSlug: true,
    author: true,
    description: true,
    variables: true,
    steps: true,
    lastUpdated: true,
    submittedAt: true,
    category: true,
  },
};

export const EDIT_FILTER = {
  projection: {
    ...FULL_GUIDE_FILTER.projection,
    reviewRequests: true,
    approved: true,
  },
};
