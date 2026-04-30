// @ts-check
import React from "react";
import TicketsBySport from "./TicketsSportFilter";


const cards = [
  {
    id: "football",
    name: "Football",
    category: "Football",
    image:
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=768&q=80",
  },
  {
    id: "m-basketball",
    name: "M. Basketball",
    category: "Basketball",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=768&q=80",
  },
  {
    id: "w-basketball",
    name: "W. Basketball",
    category: "Basketball",
    image:
      "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=768&q=80",
  },
  {
    id: "ice-hockey",
    name: "Ice Hockey",
    category: "Ice Hockey",
    image:
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=768&q=80",
  },
  {
    id: "baseball",
    name: "Baseball",
    category: "Baseball",
    image:
      "https://images.unsplash.com/photo-1519407159197-f64a8e98c25b?w=768&q=80",
  },
  {
    id: "softball",
    name: "Softball",
    category: "Softball",
    image:
      "https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=768&q=80",
  },
  {
    id: "volleyball",
    name: "Volleyball",
    category: "Volleyball",
    image:
      "https://images.unsplash.com/photo-1592656094267-764a45160876?w=768&q=80",
  },
  {
    id: "wrestling",
    name: "Wrestling",
    category: "Wrestling",
    image:
      "https://images.unsplash.com/photo-1554580628-3e96ed03e79e?w=768&q=80",
  },
  {
    id: "gymnastics",
    name: "Gymnastics",
    category: "Gymnastics",
    image:
      "https://images.unsplash.com/photo-1556302132-40bb13638500?w=768&q=80",
  },
  {
    id: "soccer",
    name: "Soccer",
    category: "Soccer",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=768&q=80",
  },
  {
    id: "lacrosse",
    name: "Lacrosse",
    category: "Lacrosse",
    image:
      "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=768&q=80",
  },
];

const filterOptions = [
  "All Sports",
  "Football",
  "Basketball",
  "Ice Hockey",
  "Baseball",
  "Softball",
  "Volleyball",
  "Wrestling",
  "Gymnastics",
  "Soccer",
  "Lacrosse",
];

const props = {
  cards,
  filterOptions,
  sectionName: "tickets by sport",
};

export default {
  title: "Tickets/Tickets By Sport",
  component: TicketsBySport,
};

const Template = (args) => <TicketsBySport {...args} />;

export const Default = Template.bind({});
Default.args = {
  cards,
  filterOptions,
  sectionName: "tickets by sport",
  title: "Tickets/Tickets By Sport",
  description:
    "Learn about more ways you can purchase tickets to any ASU Sun Devils game.",
};
