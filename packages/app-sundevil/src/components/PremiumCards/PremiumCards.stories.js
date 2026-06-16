import React from "react";
import PremiumCards from "./PremiumCards";

export default {
  title: "Premium Cards",
  component: PremiumCards,
};

const Template = args => <PremiumCards {...args} />;

export const Default = Template.bind({});
Default.args = {
  'sectionHeader': {
    'darkMode': false,
  },
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
  'iconList': [
    {
      "title": "Test",
      "iconList": [
        {
          "icon": {
            "icon_name": "6_hexagon_beehive",
            "style": "fas",
            "settings": "a:2:{s:7:\"masking\";a:2:{s:4:\"mask\";s:0:\"\";s:5:\"style\";s:0:\"\";}s:16:\"power_transforms\";a:3:{s:5:\"scale\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_y\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_x\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}}}"
          },
          "text": "<p><strong>Seating:</strong> Padded reserved seating</p>"
        },
        {
          "icon": {
            "icon_name": "8_bee",
            "style": "fas",
            "settings": "a:2:{s:7:\"masking\";a:2:{s:4:\"mask\";s:0:\"\";s:5:\"style\";s:0:\"\";}s:16:\"power_transforms\";a:3:{s:5:\"scale\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_y\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_x\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}}}"
          },
          "text": "<p><strong>Food and Beverage:</strong> All-inclusive with a full buffet and hosted bar</p>"
        },
        {
          "icon": {
            "icon_name": "5_icosahedron",
            "style": "fas",
            "settings": "a:2:{s:7:\"masking\";a:2:{s:4:\"mask\";s:0:\"\";s:5:\"style\";s:0:\"\";}s:16:\"power_transforms\";a:3:{s:5:\"scale\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_y\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_x\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}}}"
          },
          "text": "<p><strong>Space:</strong> Shared club, air-conditioned lounge</p>"
        },
        {
          "icon": {
            "icon_name": "3_dodecahedron",
            "style": "fas",
            "settings": "a:2:{s:7:\"masking\";a:2:{s:4:\"mask\";s:0:\"\";s:5:\"style\";s:0:\"\";}s:16:\"power_transforms\";a:3:{s:5:\"scale\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_y\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_x\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}}}"
          },
          "text": "<p><strong>Access:</strong> Private entrance and restrooms</p>"
        },
      ]
    },
    {
      "title": null,
      "iconList": [
        {
          "icon": {
            "icon_name": "6_hexagon_beehive",
            "style": "fas",
            "settings": "a:2:{s:7:\"masking\";a:2:{s:4:\"mask\";s:0:\"\";s:5:\"style\";s:0:\"\";}s:16:\"power_transforms\";a:3:{s:5:\"scale\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_y\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_x\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}}}"
          },
          "text": "<p><strong>Seating:</strong> Padded reserved seating</p>"
        },
        {
          "icon": {
            "icon_name": "8_bee",
            "style": "fas",
            "settings": "a:2:{s:7:\"masking\";a:2:{s:4:\"mask\";s:0:\"\";s:5:\"style\";s:0:\"\";}s:16:\"power_transforms\";a:3:{s:5:\"scale\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_y\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_x\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}}}"
          },
          "text": "<p><strong>Food and Beverage:</strong> All-inclusive with a full buffet and hosted bar</p>"
        },
        {
          "icon": {
            "icon_name": "5_icosahedron",
            "style": "fas",
            "settings": "a:2:{s:7:\"masking\";a:2:{s:4:\"mask\";s:0:\"\";s:5:\"style\";s:0:\"\";}s:16:\"power_transforms\";a:3:{s:5:\"scale\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_y\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_x\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}}}"
          },
          "text": "<p><strong>Space:</strong> Shared club, air-conditioned lounge</p>"
        },
        {
          "icon": {
            "icon_name": "3_dodecahedron",
            "style": "fas",
            "settings": "a:2:{s:7:\"masking\";a:2:{s:4:\"mask\";s:0:\"\";s:5:\"style\";s:0:\"\";}s:16:\"power_transforms\";a:3:{s:5:\"scale\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_y\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_x\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}}}"
          },
          "text": "<p><strong>Access:</strong> Private entrance and restrooms</p>"
        },
      ]
    }
  ],
  'images': [
    {
      'url':
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/styles/image/public/2026-05/81fad32d983fe6cdc31316e0d2f5968d7fcc9752_0.webp?itok=8mw50JCM",
      'title': "Coach’s Club",
    },
  ],
};
