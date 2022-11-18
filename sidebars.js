/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
    tutorialSidebar: [
      {
        type: 'category',
        label: 'Tutorial',
        items: ['hello'],
      },
    ],
     */

  Sidebar: [
    'index',
    {
      type: 'category',
      label: 'Learn',
      link: { type: 'doc', id: 'learn/README' },
      items: [
        'learn/protocol',
        {
          type: 'category',
          label: 'Terra Station',
          link: { type: 'doc', id: 'landing-pages/terra-station' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'learn/terra-station',
            },
          ],
        },
        'learn/fees',
        'learn/glossary',
      ],
    },
    {
      type: 'category',
      label: 'Develop',
      link: { type: 'doc', id: 'develop/README' },
      items: [
        'develop/get-started',
        'develop/which-tools',

        {
          type: 'category',
          label: 'Developer tools',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Terrain',
              collapsed: true,
              link: { type: 'doc', id: 'develop/terrain/README' },
              items: [
                'develop/terrain/initial-setup',
                'develop/terrain/using-terrain-localterra',
                'develop/terrain/using-terrain-testnet',
                'develop/terrain/mint-an-nft',
                'develop/terrain/cw20-factory',
                'develop/terrain/contract-migration',
              ],
            },

            {
              type: 'category',
              label: 'LocalTerra',
              collapsed: true,
              link: { type: 'doc', id: 'develop/localterra/README' },
              items: [
                'develop/localterra/install-localterra',
                'develop/localterra/configure',
                'develop/localterra/integrations',
                'develop/localterra/contracts',
                'develop/localterra/accounts',
              ],
            },
            {
              type: 'category',
              label: 'station.js',
              collapsed: true,
              link: { type: 'doc', id: 'develop/station-js/README' },
              items: [
                'develop/station-js/getting-started',
                'develop/station-js/terra-classic',
                'develop/station-js/common-examples',
                'develop/station-js/add-modules',
                'develop/station-js/coin-and-coins',
                'develop/station-js/fees',
                'develop/station-js/ibc',
                'develop/station-js/keys',
                'develop/station-js/make-a-connection',
                'develop/station-js/msgAuthorization',
                'develop/station-js/multisend',
                'develop/station-js/numeric',
                'develop/station-js/query-data',
                'develop/station-js/smart-contracts',
                'develop/station-js/transactions',
                'develop/station-js/wallets',
                'develop/station-js/Websockets',
              ],
            },
            {
              type: 'category',
              label: 'Terra.py',
              collapsed: true,
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'develop/terra-py',
                },
              ],
            },
            {
              type: 'category',
              label: 'Wallet Provider',
              collapsed: true,
              items: [
                'develop/wallet-provider/wallet-provider-tutorial',
                'develop/wallet-provider/station-extension',
                'develop/wallet-provider/station-mobile',
                'develop/wallet-provider/sign-bytes',
              ],
            },
            {
              type: 'category',
              label: 'Terrad',
              collapsed: true,
              items: [
                'develop/terrad/install-terrad',
                'develop/terrad/terrad-mac',
                'develop/terrad/using-terrad',
                'develop/terrad/commands',
                'develop/terrad/subcommands',
              ],
            },
          ],
        },

        {
          type: 'category',
          label: 'Developer guides',
          collapsed: true,
          items: [
            'develop/guides/initial',
            'develop/guides/sign-with-multisig',
            'develop/guides/start-lcd',
            'develop/vesting',
            'develop/open-source',
          ],
        },
        {
          type: 'category',
          label: 'dApp examples',
          collapsed: true,
          items: [
            'develop/examples/tictactoe',
            'develop/examples/nft',
            'develop/examples/token-factory',
            {
              type: 'link',
              label: 'Frontend templates', // The link label
              href: 'https://github.com/terra-money/wallet-provider/', // The external URL
            },
          ],
        },
        {
          type: 'category',
          label: 'Terra Core modules',
          collapsed: true,
          link: { type: 'doc', id: 'develop/module-specifications/README' },
          items: [
            'develop/module-specifications/spec-auth',
            'develop/module-specifications/spec-authz',
            'develop/module-specifications/spec-bank',
            'develop/module-specifications/spec-capability',
            'develop/module-specifications/spec-crisis',
            'develop/module-specifications/spec-distribution',
            'develop/module-specifications/spec-evidence',
            'develop/module-specifications/spec-feegrant',
            'develop/module-specifications/spec-governance',
            'develop/module-specifications/spec-mint',
            'develop/module-specifications/spec-params',
            'develop/module-specifications/spec-slashing',
            'develop/module-specifications/spec-staking',
            'develop/module-specifications/spec-upgrade',
            'develop/module-specifications/spec-wasm',
          ],
        },
        'develop/resources',
        'develop/swagger',
        'develop/endpoints',
      ],
    },

    {
      type: 'category',
      label: 'Full node',
      link: { type: 'doc', id: 'landing-pages/full-node' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'full-node',
        },
      ],
    },

    {
      type: 'category',
      label: 'Terra migration guides',
      link: { type: 'doc', id: 'landing-pages/migration' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'migration',
        },
      ],
    },
  ],
};

/*
    {
      type: 'doc',
      id: 'about/protocol',
      label: 'What is Terra?'
    },

        {
      type: 'html',
      value: '<img src="sponsor.png" alt="Sponsor" />', // The HTML to be rendered
      defaultStyle: true, // Use the default menu item styling
    },
    */

module.exports = sidebars;
