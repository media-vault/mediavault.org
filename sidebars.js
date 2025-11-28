module.exports = {
  docs: [
    {
      type: "doc",
      id: "index",
      label: "Introduction",
    },
    {
      type: "doc",
      id: "quick-start",
      label: "Quick Start",
    },
    {
      type: "doc",
      id: "getting-help",
      label: "Getting Help",
    },
    {
      type: "doc",
      id: "faq",
      label: "FAQ",
    },
    {
      type: "category",
      label: "Installation",
      link: {
        type: "doc",
        id: "installation/index",
      },
      items: [
        {
          type: "doc",
          id: "installation/source",
          label: "Building from source",
        },
      ],
    },
    {
      type: "doc",
      id: "about",
      label: "About LibreUno",
    },
    {
      type: "doc",
      id: "community-standards",
      label: "Community Standards",
    },
    {
      type: "category",
      label: "Contributing",
      link: {
        type: "doc",
        id: "contributing/index",
      },
      items: [
        {
          type: "doc",
          id: "contributing/issues",
          label: "Reporting Issues",
        },
      ],
    },
  ],
};
