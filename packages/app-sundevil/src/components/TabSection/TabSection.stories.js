// @ts-check
import React from "react";
import { TabSection } from "./TabSection";

const props = {
  'title': "Get premium tickets",
  'heroTopImage':
    "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/styles/image/public/2026-05/81fad32d983fe6cdc31316e0d2f5968d7fcc9752_0.webp?itok=8mw50JCM",
  'heroBottomImage':
    "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/styles/image/public/2026-05/premium-pattern_1.webp?itok=IZpLWm_5",
  'tabs': [
    {
      'tabTitle': 'Football',
      'tabContentTitle': 'Mountain America Stadium',
      'tabContentBody': '<h3 class="bg-gold" style="width: max-content;">Take Game Day to the next level.</h3><p>From private suites to all-inclusive clubs and field-level seating, each option delivers a distinct level of access, comfort and exclusivity.</p>',
      'tabContentText': 'Compare premium seating options',
      "tabContentCta": [
        {
          "title": "Secure your spot",
          "url": "https://example.com"
        },
        {
          "title": "Download pricing",
          "url": "https://example.com"
        }
      ],
      "cellContent": [
        {
          'cell1': {
            'title': 'Dos Equis Legends Club',
            'href': 'https://example.com'
          },
          'cell2': '-',
          'cell3': '4',
          'cell4': 'All-inclusive (full bar)',
          'cell5': '',
          'cell6': 'Top-tier hospitality',
          'cell7': {
            'title': 'Secure Coach’s Club seats',
            'href': 'https://example.com'
          },

        },
        {
          'cell1': {
            'title': 'Single-game suites',
            'href': 'https://example.com'
          },
          'cell2': '3',
          'cell3': '10',
          'cell4': 'All-inclusive Club 1 (full bar)',
          'cell5': '',
          'cell6': 'Top-tier Club 1 hospitality',
          'cell7': {
            'title': 'Secure Club 1 Coach’s Club seats',
            'href': 'https://example.com'
          },

        },
        {
          'cell1': {
            'title': 'North Field Boxes',
            'href': 'https://example.com'
          },
          'cell2': '-',
          'cell3': '4',
          'cell4': 'All-inclusive (full bar)',
          'cell5': '',
          'cell6': 'Top-tier hospitality',
          'cell7': {
            'title': 'Secure Coach’s Club seats',
            'href': 'https://example.com'
          },

        },
        {
          'cell1': {
            'title': 'Season suites',
            'href': 'https://example.com'
          },
          'cell2': '-',
          'cell3': '4',
          'cell4': 'All-inclusive (full bar)',
          'cell5': '',
          'cell6': 'Top-tier hospitality',
          'cell7': {
            'title': 'Secure Coach’s Club seats',
            'href': 'https://example.com'
          },

        },
      ],
      'carousels': [
        {
          'title': "Coach’s Club",
          'body': "An all-inclusive club and high-end lounge experience. Find your place in every Sun Devil moment.",
          'ctas': [
            {
              'title': "Learn More",
              'url': "#"
            },
            {
              'title': "Learn More",
              'url': "#"
            },
          ],
          'images': [
            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "Coach’s Club",
            },
            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "Coach’s Club",
            },
            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "Coach’s Club",
            },

          ],
        },
        {
          'title': "Coach’s Club",
          'body': "An all-inclusive club and high-end lounge experience. Find your place in every Sun Devil moment.",
          'ctas': [
            {
              'title': "Learn More",
              'url': "#"
            },
            {
              'title': "Learn More",
              'url': "#"
            },
          ],
          'images': [
            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "Coach’s Club",
            },
            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "Coach’s Club",
            },
            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "Coach’s Club",
            },
            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "Coach’s Club",
            },
            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "title",
            },
            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "title",
            },
            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "title",
            },
            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "title",
            },
          ],
        }]
    },
    {
      'tabTitle': 'Basketball',
      'tabContentTitle': '',
      'tabContentBody': '',
      'tabContentText': '',
      "tabContentCta": [
        {
          "title": "",
          "url": ""
        },
        {
          "title": "",
          "url": ""
        }
      ],
      "cellContent": [
      ],
      'carousels': [
        {
          'title': "Club",
          'body': "An all-inclusive club and high-end lounge experience. Find your place in every Sun Devil moment.",
          'ctas': [
            {
              'title': "Learn More",
              'url': "#"
            },
            {
              'title': "Learn More",
              'url': "#"
            },
          ],
          'images': [
            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "Coach’s Club",
            },
            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "title",
            },
            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "title",
            },
          ],
        },
        {
          'title': "Coach’s Basketball",
          'body': "An all-inclusive club and high-end lounge experience. Find your place in every Sun Devil moment.",
          'ctas': [
            {
              'title': "Learn More",
              'url': "#"
            },
            {
              'title': "Learn More",
              'url': "#"
            },
          ],
          'images': [
            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "Coach’s Club",
            },
            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "Coach’s Club",
            },
            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "Coach’s Club",
            },
            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "Coach’s Club",
            },
            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "title",
            },
            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "title",
            },
            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "title",
            },
            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "title",
            },
          ],
        }]
    },
    {
      'tabTitle': 'Ice Hockey',
      'tabContentTitle': '',
      'tabContentBody': '',
      'tabContentText': '',
      "tabContentCta": [
        {
          "title": "",
          "url": ""
        },
        {
          "title": "",
          "url": ""
        }
      ],
      "cellContent": [
        {
          'cell1': {
            'title': 'Single-game suites',
            'url': 'https://example.com'
          },
          'cell2': '-',
          'cell3': '4',
          'cell4': 'All-inclusive (full bar)',
          'cell5': '',
          'cell6': 'Top-tier hospitality',
          'cell7': {
            'title': 'Secure Coach’s Club seats',
            'url': 'https://example.com'
          },

        },
        {
          'cell1': {
            'title': 'Coach’s Club 9',
            'url': 'https://example.com'
          },
          'cell2': '-',
          'cell3': '4',
          'cell4': 'All-inclusive (full bar)',
          'cell5': '',
          'cell6': 'Top-tier hospitality',
          'cell7': {
            'title': 'Secure Coach’s Club seats',
            'url': 'https://example.com'
          },

        },
        {
          'cell1': {
            'title': 'Coach’s Club 10',
            'url': 'https://example.com'
          },
          'cell2': '-',
          'cell3': '4',
          'cell4': 'All-inclusive (full bar)',
          'cell5': '',
          'cell6': 'Top-tier hospitality',
          'cell7': {
            'title': 'Secure Coach’s Club seats',
            'url': 'https://example.com'
          },

        },
        {
          'cell1': {
            'title': 'Coach’s Club 11',
            'url': 'https://example.com'
          },
          'cell2': '-',
          'cell3': '4',
          'cell4': 'All-inclusive (full bar)',
          'cell5': '',
          'cell6': 'Top-tier hospitality',
          'cell7': {
            'title': 'Secure Coach’s Club seats',
            'url': 'https://example.com'
          },

        },
      ],
      'carousels': [
        {
          'title': "Coach’s Hockey",
          'body': "An all-inclusive club and high-end lounge experience. Find your place in every Sun Devil moment.",
          'ctas': [
            {
              'title': "Learn More",
              'url': "#"
            },
            {
              'title': "Learn More",
              'url': "#"
            },
          ],
          'images': [
            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "Coach’s Club",
            },

            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "Coach’s Club",
            },
            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "Coach’s Club",
            },

          ],
        },
        {
          'title': "Coach’s Club",
          'body': "An all-inclusive club and high-end lounge experience. Find your place in every Sun Devil moment.",
          'ctas': [
            {
              'title': "Learn More",
              'url': "#"
            },
            {
              'title': "Learn More",
              'url': "#"
            },
          ],
          'images': [
            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "Coach’s Club",
            },
            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "Coach’s Club",
            },

            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "title",
            },
            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "title",
            },
            {
              'backgroundUrl':
                "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
              'title': "title",
            },
          ],
        }]
    }, {
      'tabTitle': 'Baseball',
      'tabContentTitle': '',
      'tabContentBody': '',
      'tabContentText': '',
      "tabContentCta": [
        {
          "title": "",
          "url": ""
        },
        {
          "title": "",
          "url": ""
        }
      ],
      "cellContent": [
        {
          'cell1': {
            'title': 'Coach’s Club 12',
            'url': 'https://example.com'
          },
          'cell2': '-',
          'cell3': '4',
          'cell4': 'All-inclusive (full bar)',
          'cell5': '',
          'cell6': 'Top-tier hospitality',
          'cell7': {
            'title': 'Secure Coach’s Club seats',
            'url': 'https://example.com'
          },

        },
        {
          'cell1': {
            'title': 'Coach’s Club 13',
            'url': 'https://example.com'
          },
          'cell2': '-',
          'cell3': '4',
          'cell4': 'All-inclusive (full bar)',
          'cell5': '',
          'cell6': 'Top-tier hospitality',
          'cell7': {
            'title': 'Secure Coach’s Club seats',
            'url': 'https://example.com'
          },

        },
        {
          'cell1': {
            'title': 'Coach’s Club 14',
            'url': 'https://example.com'
          },
          'cell2': '-',
          'cell3': '4',
          'cell4': 'All-inclusive (full bar)',
          'cell5': '',
          'cell6': 'Top-tier hospitality',
          'cell7': {
            'title': 'Secure Coach’s Club seats',
            'url': 'https://example.com'
          },

        },
        {
          'cell1': {
            'title': 'Coach’s Club 15',
            'url': 'https://example.com'
          },
          'cell2': '-',
          'cell3': '4',
          'cell4': 'All-inclusive (full bar)',
          'cell5': '',
          'cell6': 'Top-tier hospitality',
          'cell7': {
            'title': 'Secure Coach’s Club seats',
            'url': 'https://example.com'
          },

        },
      ],
      'carousels': [

      ]
    }
  ],

};

export default {
  title: "Tab Section",
  component: <TabSection {...props} />,
};

const Template = () => {
  return <TabSection {...props} />;
};

export const Default = Template.bind({});
Default.args = props;
