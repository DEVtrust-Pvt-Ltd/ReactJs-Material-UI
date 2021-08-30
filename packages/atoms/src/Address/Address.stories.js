import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, object } from "@storybook/addon-knobs";

import Address from ".";

const country = [
    { id: 1, name: 'Hong-Kong', value: 'Hong-Kong' },
    { id: 2, name: 'India', value: 'India' },
]

storiesOf('Atoms| Address', module)
    .addDecorator(withKnobs)
    .add('address', () => (
        <Address
            checked={boolean("checked (props)", "checked")}
            onChange={action('onChange')}
            country={object("country (prop)", country)} />
    ));
