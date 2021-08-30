import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from "@storybook/addon-knobs";

import RadioComponent from ".";

const radioProps1 = {
    label: 'Radio Button 1',
    value: 'Label1',
    checked: true
};

const radioProps2 = {
    label: 'Radio Button 2',
    value: 'Label2',
    checked: false
}

storiesOf('Atoms| Radio', module)
    .addDecorator(withKnobs)
    .add('with checked', () => (
        <RadioComponent {...radioProps1} />
    ))
    .add('without checked', () => (
        <RadioComponent {...radioProps2} />
    ));
