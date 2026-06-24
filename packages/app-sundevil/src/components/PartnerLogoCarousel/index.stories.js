import React from "react";
import PartnerLogoCarousel from "./PartnerLogoCarousel";

export default {
  title: "Partner Logo Carousel",
  component: PartnerLogoCarousel,
};

const Template = args => <PartnerLogoCarousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  titleH2: "",
  titleH3: "Featured partners",
  sectionName: "Featured partners",
  carouselType: "featured_partner_carousel",
  buttonLink: "https://example.com",
  buttonLabel: "Partner with us",
  footerLink: "https://example.com",
  footerLabel: "Learn more about our partnerships",
  arrowAlignment: "center_separated",
  length: "3",
  cards: [
    {
      id: "1",
      imageUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2026-01/coca-cola-official-logo.webp",
      imageAlt: "From The Buttes, Give 'Em Hell Devils! Cheer",
      imageWidth: "228px",
      imageHeight: "139px",
    },
    {
      id: "2",
      imageUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2026-01/Allstate-official-logo_0.webp",
      imageAlt: "From The Buttes, Give 'Em Hell Devils! Cheer",
      imageWidth: "228px",
      imageHeight: "139px",
    },
    {
      id: "3",
      imageUrl:
        "https://asuapp4dev.prod.acquia-sites.com//sites/default/files/2025-12/invisalign.webp",
      imageAlt: "From The Buttes, Give 'Em Hell Devils! Cheer",
      imageWidth: "228px",
      imageHeight: "139px",
    },
    {
      id: "4",
      imageUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2026-01/jersey-mikes-official-logo_0.webp",
      imageAlt: "From The Buttes, Give 'Em Hell Devils! Cheer",
      imageWidth: "228px",
      imageHeight: "139px",
    },
    {
      id: "5",
      imageUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2026-01/AAA-insurance-official-logo_0.webp",
      imageAlt: "From The Buttes, Give 'Em Hell Devils! Cheer",
      imageWidth: "228px",
      imageHeight: "139px",
    },
    {
      id: "6",
      imageUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2026-01/honey-stinger_0.webp",
      imageAlt: "From The Buttes, Give 'Em Hell Devils! Cheer",
      imageWidth: "228px",
      imageHeight: "139px",
    },
    {
      id: "7",
      imageUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2026-02/desert-financial.png",
      imageAlt: "From The Buttes, Give 'Em Hell Devils! Cheer",
      imageWidth: "228px",
      imageHeight: "139px",
    },
    {
      id: "8",
      imageUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2026-01/coors-light-official-logo_0.webp",
      imageAlt: "From The Buttes, Give 'Em Hell Devils! Cheer",
      imageWidth: "228px",
      imageHeight: "139px",
    },
    {
      id: "9",
      imageUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/mountain-america-stadium.webp",
      imageAlt: "From The Buttes, Give 'Em Hell Devils! Cheer",
      imageWidth: "228px",
      imageHeight: "139px",
    },
    {
      id: "10",
      imageUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/mountain-america-stadium.webp",
      imageAlt: "From The Buttes, Give 'Em Hell Devils! Cheer",
      imageWidth: "228px",
      imageHeight: "139px",
    },
  ],
};

