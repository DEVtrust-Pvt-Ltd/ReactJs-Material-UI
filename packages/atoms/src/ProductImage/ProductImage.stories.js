import React from "react";
import {storiesOf} from "@storybook/react";
import {
    withKnobs,
    object, number, text, boolean
} from "@storybook/addon-knobs";

import ProductImage from './ProductImage'

const imageSrc ={
    "mobile": {
      "url": "https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
    },
    "desktop": {
      "url": "https://storybook.storefrontui.io/assets/storybook/SfImage/product-216x326.jpg"
    }
  };
const width = 216;
const height = 326;
const lazy = true;
const pictureBreakpoint = 576;
const alt = 'Product image';
const rootMargin='';
const threshold= 0;
const overlayFlag=false;
const overlayText='';

storiesOf("Atoms|ProductImage", module)
    .addDecorator(withKnobs)
    .add("Common", () => (
        <ProductImage
            src={object('src', imageSrc)}
            alt={text('alt', alt)}
            width={number('width',width)}
            height={number('height',height)}
            lazy={boolean('lazy',true)}
            pictureBreakpoint={number('pictureBreakpoint',pictureBreakpoint)}
            rootMargin={text('rootMargin',rootMargin)}
            threshold={number('threshold',threshold)}
            overlayFlag={false}
            overlayText=''
        />
    ))
    .add("Without width and height", () => (
        <ProductImage
            src={object('src', imageSrc)}
            alt={text('alt', alt)}
            lazy={boolean('lazy',true)}
            pictureBreakpoint={number('pictureBreakpoint',pictureBreakpoint)}
            rootMargin={text('rootMargin',rootMargin)}
            threshold={number('threshold',threshold)}
        />
    ))
    .add("[slot] default", () => (
        <ProductImage
            src={object('src', imageSrc)}
            alt={text('alt', alt)}
            width={number('width',width)}
            height={number('height',height)}
            lazy={boolean('lazy',true)}
            pictureBreakpoint={number('pictureBreakpoint',pictureBreakpoint)}
            rootMargin={text('rootMargin',rootMargin)}
            threshold={number('threshold',threshold)}
            overlayFlag={true}
            overlayText={text('Overlay Text','Custom overlay content')}
            />
    ));
    
