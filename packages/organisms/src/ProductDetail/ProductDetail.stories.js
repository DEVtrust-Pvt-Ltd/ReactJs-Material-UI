import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from '@storybook/addon-actions'
import { withKnobs, text, number } from "@storybook/addon-knobs";

import ProductDetail from ".";

const propsMoreDetail = {
  question: "How to use",
  topical: "Topical",
  content:
    "Apply to desired area. In case of sensitivity, dilute 1 drop with 1 drop of V-6™ or olive oil. Add lemon to your skin care products to reduce the appearance of blemishes or to conditioner and DIY hair masques to give your hair a smoother, shinier look. Add a few drops to naturally derived floor, window, and surface cleaning solutions. Do not use Lemon oil on granite or stone, as it may etch the surface. Aromatic: Diffuse up to 1 hour 3 times daily. Diffuse Lemon alone or with other citrus and crisp-smelling oils such as Tangerine, Grapefruit, Orange, Bergamot, Rosemary, Tea Tree, and Eucalyptus Radiata to create an aromatic environment that is clean-smelling and positive. CAUTION: Keep out of reach of children. If you are pregnant, nursing, taking medication, or have a medical condition, consult a health professional prior to use. Avoid direct sunlight or UV rays for up to 12 hours after applying product.",
};

const propReview = [
  {
    author: "Author name",
    date: "Sep 2019",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    disabled: true,
    rating: 4,
    maxRating: 5,
    precision: 0.5,
    charLimit: 150,
    readMoreText: "Read more",
    hideFullText: "Read less",
  },
  {
    author: "Author name",
    date: "Sep 2019",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    disabled: true,
    rating: 4,
    maxRating: 5,
    precision: 0.5,
    charLimit: 150,
    readMoreText: "Read more",
    hideFullText: "Read less",
  },
  {
    author: "Author name",
    date: "Sep 2019",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    disabled: true,
    rating: 4,
    maxRating: 5,
    precision: 0.5,
    charLimit: 150,
    readMoreText: "Read more",
    hideFullText: "Read less",
  },
];

const products = [
  {
    id: 1,
    imageUrl: "https://www.nicepng.com/png/detail/55-557418_medicine-bottle-png-clip-art-royalty-free-download.png",
  },
  {
    id: 2,
    imageUrl:
      "https://www.nicepng.com/png/detail/55-557418_medicine-bottle-png-clip-art-royalty-free-download.png",
  },
];

storiesOf("Organism|ProductDetail", module)
  .addDecorator(withKnobs)
  .add("ProductDetail", () => (
    <ProductDetail
      heading={text("heading (prop)", "Lemon Essential Oil (Young Living)")}
      subHeading={text("subHeading (prop)", "Balance Health")}
      orderHeading={text("orderHeading (prop)", "Customise my order")}
      productDetails="Containing the naturally occurring constituent limonene, Lemon essential oil is a key component in many popular essential oil-infused products. Lemon is used worldwide in cleaners and soaps for its refreshing scent. One bottle of 5ml."
      oldPrice={number("oldPrice (prop)", 145.00)}
      newPrice={number("newPrice (prop)", 130.00)}
      offRate={number("offRate (prop)", 10)}
      reviewCount={number("reviewCount (prop)", 25)}
      products={products}
      moreDetails={propsMoreDetail}
      productReview={propReview}
      onHandleNavigate={action('onHandleNavigate')}
      onChange={action('onChange')}
      onHandleCart={action('onHandleCart')}
      onHandleReview={action('onHandleReview')}
    />
  ));
