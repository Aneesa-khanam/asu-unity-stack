import React from "react";
import SectionSeasonMini from "./SectionSeasonMini";

export default {
  title: "Section Season Mini",
  component: SectionSeasonMini,
};

const Template = args => <SectionSeasonMini {...args} />;

export const Default = Template.bind({});
Default.args = {
  'seasons': {
    'title': "Coach’s season Club",
    'body': "An all-inclusive club and high-end lounge experience. Find your place in every Sun Devil moment.",
    'cta': {
      'text': "Learn More",
      'url': 'https://example.com'
    },
    'iconList': [
      {
        'text': "<p>Priority access to premium seating</p>",
        'icon': "ticket",
      },
      {
        'text': "<p>Exclusive member-only events</p>",
        'icon': "calendar",
      },
      {
        'text': "<p>Discounts on merchandise and concessions</p>",
        'icon': "star",
      },
    ],
    'currentLinksTitle': 'Current season ticket holders:',
    'currentLinks': [
      {
        'text': "text",
        'url': "https://example.com"
      }, {
        'text': "text",
        'url': "https://example.com"
      }, {
        'text': "text",
        'url': "https://example.com"
      }
    ],
    'footerText': "<h5>Have questions? We’re here to help.</h5><p>If you have questions regarding season tickets or mini plans, or are interested in joining the Season Ticket Holder family, please call 480-727-0000 or email seasontickets@asu.edu to speak to a Sun Devil Ticket sales representative.</p>"
  },

  'minis': {
    'title': "Mini Plans",
    'body': "Choose flexible ticket plans designed to fit your schedule and favorite matchups.",
    'cta': {
      'text': "Buy Now",
      'url': "https://example.com/buy-now",
    },

  },
};

