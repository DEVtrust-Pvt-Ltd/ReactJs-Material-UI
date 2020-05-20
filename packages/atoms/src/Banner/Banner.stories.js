import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, object } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions'

import Banner from ".";

const banners = [
  {
    id: 1,
    imageUrl: "https://material-ui.com/static/images/cards/paella.jpg",
  },
  {
    id: 2,
    imageUrl:
      "https://material-ui.com/static/images/cards/contemplative-reptile.jpg",
  },
];

storiesOf("Atoms|Banners", module)
  .addDecorator(withKnobs)
  .add("banner", () => (
    <Banner
      banners={object("banners (prop)", banners)}
      onBannerClick={action('onBannerClick')}
    />
  ));
