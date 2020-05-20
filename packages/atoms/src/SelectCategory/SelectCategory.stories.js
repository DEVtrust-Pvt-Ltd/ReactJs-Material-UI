import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from '@storybook/addon-actions'
import { withKnobs } from "@storybook/addon-knobs";

import Categories from '.'

const categories = [{
    id: 1,
    name: 'Alternative medicine',
    subCategories: [{
        id: 1,
        name: 'All alternative medicine'
    },
    {
        id: 2,
        name: 'TCM'
    },
    {
        id: 3,
        name: 'Homeopathy'
    },
    {
        id: 4,
        name: 'Naturopathy'
    }]
},
{
    id: 2,
    name: 'Dental',
    subCategories: [{
        id: 1,
        name: 'General checkup'
    }]

}, {
    id: 3,
    name: 'Food and supplements',
    subCategories: [{
        id: 1,
        name: 'All food and supplements'
    },
    {
        id: 2,
        name: 'Chinese supplements'
    }, {
        id: 3,
        name: 'Food appliances'
    },
    {
        id: 4,
        name: 'General supplements'
    },
    {
        id: 5,
        name: 'Healthy food'
    }, {
        id: 6,
        name: 'Diet and nutrition'
    }]
},
{
    id: 4,
    name: 'Insurance',
    subCategories: [{
        id: 1,
        name: 'All insurance'
    },
    {
        id: 2,
        name: 'Life insurance'
    }, {
        id: 3,
        name: 'Travel insurance'
    }]
},
{
    id: 5,
    name: 'Kids ',
    subCategories: [{
        id: 1,
        name: 'Enrichment'
    }]
},
{
    id: 6,
    name: 'Lifestyle and leisure',
    subCategories: [{
        id: 1,
        name: 'All lifestyle and leisure'
    },
    {
        id: 2,
        name: 'Cosmetic treatments'
    }, {
        id: 3,
        name: 'Massage and reflexology'
    },
    {
        id: 4,
        name: 'Membership'
    },
    {
        id: 5,
        name: 'Wellness appliances'
    }, {
        id: 6,
        name: 'Entertainment'
    },
    {
        id: 7,
        name: 'Flowers'
    }
    ]

}, {
    id: 7,
    name: 'Medical and specialised therapies',
    subCategories: [{
        id: 1,
        name: 'All medical and specialised therapies'
    },
    {
        id: 2,
        name: 'Health screenings'
    }, {
        id: 3,
        name: 'Mental health treatments'
    },
    {
        id: 4,
        name: 'Specialist consultations'
    }, {
        id: 5,
        name: 'Vaccines'
    }]
},
{
    id: 8,
    name: 'Pain management',
    subCategories: [{
        id: 1,
        name: 'All pain management '
    },
    {
        id: 2,
        name: 'Chiropractic'
    }]
}];

storiesOf("Atoms|Categories", module)
    .addDecorator(withKnobs)
    .add("categories", () => (
        <Categories
            heading="Select category"
            title="category"
            btnText="Apply"
            categories={categories}
            checked={true}
            onHandleApply={action("onHandleApply")}
            onChange={action('onChange')}
            onHandleNavigate={action('onHandleNavigate')}
        />
    ));
