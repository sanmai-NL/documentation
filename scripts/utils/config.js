// SPDX-FileCopyrightText: 2021 iteratec GmbH
//
// SPDX-License-Identifier: Apache-2.0

const docsConfig = {
    temp: "githubRepo", // Name of temporary folder, will be deleted after build
    repository: "secureCodeBox/secureCodeBox", // The repository url without the github part of the link
    targetPath: "docs", // This needs to be 'docs' for the docusaurus build, but you may specify a 'docs/<subdirectory>'
    srcDirs: ["scanners", "hooks"], // Directory names, relative to the root directory of the github project, containing the subdirectories with documentation
    sizeLimit: 500000, // Limit of file size, most importantly used for large findings.
    findingsDir: "findings", // Directory for large findings which exceeded sizeLimit
    branch: "main",


    // Configures files which will be copied from docsConfig.repository.
    // This is an array of config maps. The map has the properties
    // src: required source directory in main repository (docsConfig.repository)
    // dst: required target directory in this repository relative to config.targetPath
    // exclude: (optional) array of files to exclude from src, default is exclude nothing
    //
    // Example:
    // filesFromRepository: [
    //       {src: "foo", dst: "some/foo", exclude: ["snafu.md", "susfu.md"]},
    //       {src: "bar", dst: "some/bar"},
    //     ]
    filesFromRepository: [
      {src: "docs/adr", dst: "architecture/adr", exclude: ["adr_0000.md", "adr_README.md"]}
    ]
  },

  // This is to configure what to show at the homepage tile-view.
  integrationsConfig = {
    targetFile: "src/integrations.js", // Name of the target file to (over-)write
    integrationDirs: ["hooks", "scanners"], // Names of the directories relative to the root level of the `/docs` folder
    defaultIcon: "img/integrationIcons/Default.svg", // Default Icon when no imageUrl provided or could not resolve imageUrl
  },
  sidebarConfig = {
    sidebarName: "sidebars.json",
    // Sidebar gets merged with the entries autogenerated from the docs config listed above.
    // Entries in "sidebarStart" will be placed **before** the auto generated items
    // Entries in "sidebarEnd" will be placed **after** the auto generated items
    sidebarStart: {
      "Getting Started": [
        "getting-started/installation",
        "getting-started/first-scans",
        "getting-started/troubleshooting",
        "getting-started/uninstallation",
      ],
      "How To's": [
        "how-tos",
        "how-tos/automatically-repeating-scans",
        "how-tos/scanning-networks",
        "how-tos/scanning-web-applications",
        "how-tos/hooks",
      ],
    },
    sidebarEnd: {
      "Architecture": [
        "architecture/introduction",
        {
          // TODO: This should be autogenerated by the sidebar.build.js.
          type: "category",
          label: "Architecture Decision Records",
          items: [
            "architecture/adr/adr_0001",
            "architecture/adr/adr_0002",
            "architecture/adr/adr_0003",
            "architecture/adr/adr_0004",
            "architecture/adr/adr_0005",
            "architecture/adr/adr_0006",
            "architecture/adr/adr_0007",
          ],
        },
      ],
      "API Reference": [
        {
          type: "category",
          label: "Custom Resource Definitions",
          items: [
            "api/crds",
            "api/crds/scan",
            "api/crds/scheduled-scan",
            "api/crds/scan-type",
            "api/crds/parse-definition",
            "api/crds/scan-completion-hook",
            "api/crds/cascading-rule",
          ],
        },
        "api/finding",
      ],
      Contributing: [
        {
          type: "category",
          label: "Integrating a Scanner",
          items: [
            "contributing/integrating-a-scanner",
            "contributing/integrating-a-scanner/chart.yaml",
            "contributing/integrating-a-scanner/values.yaml",
            "contributing/integrating-a-scanner/cascading-rules-dir",
            "contributing/integrating-a-scanner/makefile",
            "contributing/integrating-a-scanner/scanner-dir",
            "contributing/integrating-a-scanner/parser-dir",
            "contributing/integrating-a-scanner/templates-dir",
            "contributing/integrating-a-scanner/examples-dir",
            "contributing/integrating-a-scanner/readme",
            "contributing/integrating-a-scanner/integration-tests",
          ]
        },
        {
          type: "category",
          label: "Integrating a Hook",
          items: [
            "contributing/integrating-a-hook",
            "contributing/integrating-a-hook/chart.yaml",
            "contributing/integrating-a-hook/values.yaml",
            "contributing/integrating-a-hook/makefile",
            "contributing/integrating-a-hook/dockerfile",
            "contributing/integrating-a-hook/hook",
            "contributing/integrating-a-hook/templates-dir",
            "contributing/integrating-a-hook/readme",
            "contributing/integrating-a-hook/integration-tests",
          ]
        },
        "contributing/operator",
        "contributing/conventions",
      ],
      Experimental: [
        "experimental/windows-scanners"
      ],
    },
  };

module.exports = {
  docsConfig,
  integrationsConfig,
  sidebarConfig,
};
