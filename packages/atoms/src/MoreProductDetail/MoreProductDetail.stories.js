import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import MoreProductDetails from ".";

storiesOf("Atoms| MoreProductDetails", module)
    .addDecorator(withKnobs)
    .add("More product details", () => (
        <MoreProductDetails
            question={text("question (prop)", "How to use")}
            topical={text("topical (prop)", "Topical")}
            content={text(
                "content (prop)",
                "Apply to desired area. In case of sensitivity, dilute 1 drop with 1 drop of V-6™ or olive oil. Add lemon to your skin care products to reduce the appearance of blemishes or to conditioner and DIY hair masques to give your hair a smoother, shinier look. Add a few drops to naturally derived floor, window, and surface cleaning solutions. Do not use Lemon oil on granite or stone, as it may etch the surface. Aromatic: Diffuse up to 1 hour 3 times daily. Diffuse Lemon alone or with other citrus and crisp-smelling oils such as Tangerine, Grapefruit, Orange, Bergamot, Rosemary, Tea Tree, and Eucalyptus Radiata to create an aromatic environment that is clean-smelling and positive. CAUTION: Keep out of reach of children. If you are pregnant, nursing, taking medication, or have a medical condition, consult a health professional prior to use. Avoid direct sunlight or UV rays for up to 12 hours after applying product."
            )} />
    ));


