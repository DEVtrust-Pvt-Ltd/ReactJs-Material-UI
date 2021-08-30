import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from '@storybook/addon-actions'
import { withKnobs, number } from "@storybook/addon-knobs";
import MoreProductDetails from "@cxa-shop-ui/atoms/src/MoreProductDetail";
import SelfCollectionDetail from "@cxa-shop-ui/atoms/src/SelfCollectionDetail";
import { ProductReview } from "@cxa-shop-ui/molecules";

import Accordion from ".";

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

storiesOf("Organism|Accordion", module)
  .addDecorator(withKnobs)
  .add("Accordion", () => (
    <Accordion
      reviewCount={number("reviewCount (prop)", 25)}
      productDetail={<MoreProductDetails {...propsMoreDetail} />}
      selfContent={<SelfCollectionDetail {...propsMoreDetail} />}
      review={<ProductReview reviews={propReview} />}
      moreDetailContent={<span>More Details</span>}
      moreProductDetails={<span>More product details</span>}
      selfCollectionDetails={<span>Self-collection details</span>}
      Reviews={<span>Reviews</span>}
      onClick={action('onClick')}
    />
  ));
