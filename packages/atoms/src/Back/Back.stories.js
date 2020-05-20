import React from "react";
import { storiesOf } from "@storybook/react";
import {
    withKnobs,
} from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions'

import Back from '.'

storiesOf("Atoms|Back", module)
    .addDecorator(withKnobs)
    .add("back", () => (
        <Back navigationHandler={action('navigationHandler')} />
    ));
