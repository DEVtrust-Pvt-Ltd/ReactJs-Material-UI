import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number, text, boolean } from "@storybook/addon-knobs";
import ProductPrice from "./ProductPrice";

storiesOf("Atoms|ProductPrice", module)
  .addDecorator(withKnobs)
  .add("Common", () => (
    <ProductPrice
      regular={text("regular", '$200.00')}
      special={text("special", '$100.00')}
      specialFlag={false}
      oldFlag={false}
    />
  )).add("[slot] special", () => (
    <ProductPrice
      regular={text("regular", '$200.00')}
      special={text("special", '$100.00')}
      specialFlag={true} 
      oldFlag={false}
    />
  )).add("[slot] old", () => (
    <ProductPrice
          regular={text("regular", '$200.00')}
          special={text("special", '$100.00')}
          specialFlag={false}
          oldFlag={true}
    />
  )).add("[slot] regular", () => (
    <ProductPrice
      regular={text("regular", '$200.00')}
      special={text("special", '')}
      specialFlag={false}
      oldFlag={false}
    />
  ));