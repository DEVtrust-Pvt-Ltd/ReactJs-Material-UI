import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number, text, boolean } from "@storybook/addon-knobs";
import ProductCard from "./ProductCard";

storiesOf("Molecules|ProductCard", module)
  .addDecorator(withKnobs)
  .add("Basic", () => (
    <ProductCard
      src={text(
        "SRC",
        "https://img.etimg.com/thumb/width-400,height-300,msid-68734208,imgsize-326584/.jpg"
      )}
      title={text("Title", "Paella dish")}
      discount={number("Discount %", 25)}
      walletFlag={boolean("Pay By Wallet", true)}
      brand={text("Brand", "Eatology Limited")}
      rating={number("Rating", 4)}
      ratingCount={number("Rating Count", 25)}
      oldPrice={number("Old Price", 438)}
      currentPrice={number("Current Price", 328)}
      currency={text("Currency Symbol", "HK $")}
    />
  ));
