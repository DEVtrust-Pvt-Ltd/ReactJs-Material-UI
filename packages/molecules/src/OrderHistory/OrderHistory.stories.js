import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions'

import OrderHistory from '.'

const qty = [{
  id: 1,
  title: 'Lemon Essential Oil (Young Living)',
  qty: 1
},
{
  id: 2,
  title: 'Trial Lighter Delights (1 Day Meals)',
  qty: 2
},
{
  id: 3,
  title: 'Raindrop Technique',
  qty: 1
}];
const propOrder = [
  {
    dateOfOrder: "15 June 2019",
    orderNo: "CXA4321",
    totalAmount: "1,812.00",
    totalCount: 4,
    orders: { qty },
  },
  {
    dateOfOrder: "15 June 2019",
    orderNo: "CXA4321",
    totalAmount: "1,812.00",
    totalCount: 4,
    orders: { qty },
  },
  {
    dateOfOrder: "15 June 2019",
    orderNo: "CXA4321",
    totalAmount: "1,812.00",
    totalCount: 4,
    orders: { qty },
  },
];

storiesOf("Molecules|Order History", module)
  .addDecorator(withKnobs)
  .add("order history", () => <OrderHistory heading="My order history" orders={propOrder} onClick={action("onClick")} />);
