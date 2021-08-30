import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ButtonComponent from '.'

storiesOf('Atoms|Button', module)
    .add('default', () => (
        <ButtonComponent onClick={action('onClick')}>
            Default Button
    </ButtonComponent>
    ))
    .add('primary', () => (
        <ButtonComponent primary onClick={action('onClick')} color='primary'>
            Primary Button
    </ButtonComponent>
    ))
    .add('disabled', () => (
        <ButtonComponent disabled onClick={action('onClick')}>
            Disabled Button
    </ButtonComponent>
    ))
    .add('primary disabled', () => (
        <ButtonComponent primary disabled onClick={action('onClick')}>
            Disabled Button
    </ButtonComponent>
    ))
    .add('fullWidth', () => (
        <ButtonComponent fullWidth onClick={action('onClick')}>
            Full Width Button
    </ButtonComponent>
    ))
    .add('small size', () => (
        <ButtonComponent size="small" onClick={action('onClick')}>
            Small size button
    </ButtonComponent>
    ))
    .add('medium size', () => (
        <ButtonComponent size="medium" onClick={action('onClick')}>
            Medium size button
    </ButtonComponent>
    ))