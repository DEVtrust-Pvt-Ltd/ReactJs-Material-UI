import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, object } from "@storybook/addon-knobs";

import Gallery from ".";
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

storiesOf("Atoms|Gallery", module)
  .addDecorator(withKnobs)
  .add("gallery", () => (
    <Gallery
      products={object("products (prop)", products)}
    />
  )); 
