import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from '@storybook/addon-actions'
import {
    withKnobs,
} from "@storybook/addon-knobs";

import Order from '.'

const orders = [{
    id: 1,
    title: 'Lemon Essential Oil (Young Living)',
    qty: 1
},
{
    id: 2,
    title: 'Trial Lighter Delights (1 Day Meals)',
    qty: 2
},
{
    id: 3,
    title: 'Raindrop Technique',
    qty: 1
},
]
storiesOf("Atoms|Order", module)
    .addDecorator(withKnobs)
    .add("order", () => (
        <Order
            heading="My order history"
            dateOfOrder="15 June 2019"
            orderNo="CXA4321"
            totalAmount="1,812.00"
            totalCount={4}
            orders={orders}
            onClick={action('onClick')}
        />
    ));
