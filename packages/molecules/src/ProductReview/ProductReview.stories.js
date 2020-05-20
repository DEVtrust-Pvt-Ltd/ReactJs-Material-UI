import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import ProductReview from ".";

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
    charLimit: 250,
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
    charLimit: 250,
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
    charLimit: 250,
    readMoreText: "Read more",
    hideFullText: "Read less",
  },
];

storiesOf("Molecules|ProductReviews", module)
  .addDecorator(withKnobs)
  .add("ProductReviews", () => <ProductReview reviews={propReview} />);
