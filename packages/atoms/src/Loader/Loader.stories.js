import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number, text, boolean } from "@storybook/addon-knobs";
import Loader from "./Loader";

storiesOf("Atoms|Loader", module)
  .addDecorator(withKnobs)
  .add("Common", () => (
    <Loader
      loading={boolean("disabled (prop)", true)}
      size={number("size (prop)", 40)}
    />
  ));
