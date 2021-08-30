import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number, text, boolean } from "@storybook/addon-knobs";

import Review from ".";

storiesOf("Atoms|Review", module)
    .addDecorator(withKnobs)
    .add("Primary", () => (
        <Review
            author={text("author (prop)", "Author name")}
            date={text("date (prop)", "Sep 2019")}
            message={text(
                "message (prop)",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            )}
            disabled={boolean("disabled (prop)", true)}
            rating={number("rating (prop)", 4)}
            maxRating={number("maxRating (prop)", 5)}
            precision={number("precision (prop)", 0.5)}
            charLimit={number("charLimit (prop)", 250)}
            readMoreText={text("readMoreText (prop)", "Read more")}
            hideFullText={text("hideFullText (prop)", "Read less")}
        />
    ));
