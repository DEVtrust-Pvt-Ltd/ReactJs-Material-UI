import React from "react";
import { storiesOf } from "@storybook/react";
import {
    withKnobs,
    text, boolean
} from "@storybook/addon-knobs";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Notification from ".";

storiesOf("Atoms| Notification", module)
    .addDecorator(withKnobs)
    .add("notification", () => (
        <Notification
            content={text("content (prop)", "1 Item Added to Cart.")}
            iconComponent={<ShoppingCartIcon />}
            openSnackbar={boolean("openSnackbar (prop)", true)}
        />
    ));
