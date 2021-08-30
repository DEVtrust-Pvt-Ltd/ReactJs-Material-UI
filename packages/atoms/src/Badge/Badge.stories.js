import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, optionsKnob as options, } from "@storybook/addon-knobs";
import Badge from "./Badge";
const label='Limited'


storiesOf("Atoms|Badge", module)
  .addDecorator(withKnobs)
  .add("Common", () => (
    <Badge      
    classname={options('CSS modifier', {      
      'badgeFullWidth': 'badgeFullWidth',
      'colorPrimary': 'colorPrimary',
      'colorSecondary': 'colorSecondary',
      'colorWarning': 'colorWarning',
      'colorDanger': 'colorDanger',
      'colorInfo': 'colorInfo',
      'colorSuccess': 'colorSuccess',
      },
      '',       
      { display: 'multi-select' },
      'CSS modifiers',
      )}
      label={text("default", 'Limited','Slots')}
      
    />
  )).add("rounded-discount", () => (
    <Badge      
    classname={options('CSS modifier', {   
      'colorPrimary': 'colorPrimary',
      'colorSecondary': 'colorSecondary',
      'colorWarning': 'colorWarning',
      'colorDanger': 'colorDanger',
      'colorInfo': 'colorInfo',
      'colorSuccess': 'colorSuccess',
      },
      '',       
      { display: 'multi-select' },
      'CSS modifiers',
      )}
      label={text("default", '25%','Slots')}
      discountOff={text("discountOff", 'OFF', 'Slots')}
      discountFlag={true}
    />
  ));
  