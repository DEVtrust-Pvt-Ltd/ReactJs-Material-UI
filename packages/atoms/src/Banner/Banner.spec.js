import React from "react";
import {fireEvent, render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Banner from "./Banner";

const bannerDetail = [
    {
        id: 1,
        image:
            "pub/media/weltpixel/owlcarouselslider/images/j/u/cache/1200x350/july_cancer_prevention.png",
    },
    {
        id: 2,
        image:
            "pub/media/weltpixel/owlcarouselslider/images/l/a/cache/1200x350/landing_page-02_1_.png",
    },
];

const secureBaseMediaUrl = "https://choices.cxapalawan.com";

const handleBannerClick = () => {
    alert("banner clicked....");
};

describe("Banner Component", () => {
    it("should match snapshot when properties are present", () => {
        const {container} = render(
            <Banner
                banners={bannerDetail}
                secureBaseMediaUrl={secureBaseMediaUrl}
                onBannerClick={handleBannerClick}
            />
        );

        expect(container).toMatchSnapshot();
    });

    it("should call event", () => {
        const Component = Banner;

        const {getByTestId} = render(
            <Component
                banners={bannerDetail}
                secureBaseMediaUrl={secureBaseMediaUrl}
                onBannerClick={handleBannerClick}
            />
        );
        const swipableView = getByTestId("auto-play-swipeable-views");
        fireEvent.change(swipableView)

    });

});
