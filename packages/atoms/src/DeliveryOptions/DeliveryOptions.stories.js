import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { RadioComponent } from '@cxa-shop-ui/atoms'
import { withKnobs } from "@storybook/addon-knobs";

import DeliveryOption from ".";

const props = {
    value: 'Delivery',
    name: 'Delivery or Self-collection',
    onChange: action('onChange')
};

const radioProps1 = {
    label: 'Delivery (+HK$ 5.00)',
    value: 'Delivery',
    checked: true
};

const radioProps2 = {
    label: 'Self-collection (Free)',
    value: 'Self-collection',
    checked: true
}

storiesOf('Atoms| DeliveryOptions', module)
    .addDecorator(withKnobs)
    .add('delivery option checked', () => (
        <DeliveryOption label="Delivery or Self-collection" {...props}>
            <RadioComponent {...radioProps1} />
            <RadioComponent label="Self-collection (Free)" value="Self-collection" />
        </DeliveryOption>
    ))
    .add('Self-collection option checked', () => (
        <DeliveryOption label="Delivery or Self-collection" {...props}>
            <RadioComponent label="Delivery (+HK$ 5.00)" value="Delivery" />
            <RadioComponent {...radioProps2} />
        </DeliveryOption>
    ));
