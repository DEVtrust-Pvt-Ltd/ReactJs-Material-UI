import React from "react";
import { storiesOf } from "@storybook/react";
import {
    withKnobs,
    number
} from "@storybook/addon-knobs";

import ProductQuantity from '.'

storiesOf("Atoms|ProductQuantity", module)
    .addDecorator(withKnobs)
    .add("product quantity", () => (
        <ProductQuantity quantityValue={number("quantity value (prop)", 2)} />
    ));
