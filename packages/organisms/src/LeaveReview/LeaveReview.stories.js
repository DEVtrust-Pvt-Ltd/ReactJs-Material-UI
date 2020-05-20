import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from '@storybook/addon-actions'
import { withKnobs, text, number } from "@storybook/addon-knobs";

import LeaveReview from '.'

storiesOf("Organism|LeaveReview", module)
    .addDecorator(withKnobs)
    .add("LeaveReview", () => (
        <LeaveReview
            title={text("buttonText (prop)", "Leave a Review")}
            heading={text("heading (prop)", "Lemon Essential Oil (Young Living)")}
            subHeading={text("subHeading (prop)", "Balance Health")}
            rating={number("rating (prop)", 4)}
            maxRating={number("maxRating (prop)", 5)}
            precision={number("precision (prop)", 0.5)}
            onChange={action('onChange')}
            onHandleNavigate={action('onHandleNavigate')}
            onHandleSubmit={action('onHandleSubmit')}
        />
    ));
