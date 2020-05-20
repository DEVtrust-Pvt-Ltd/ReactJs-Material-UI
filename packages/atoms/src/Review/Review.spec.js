import React from "react";
import {render} from "@testing-library/react";
import Review from ".";

describe("Review Component", () => {
    it("should match snapshot when properties are present", () => {
        const {container} = render(
            <Review
                author="Author name"
                date="Sep 2019"
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                rating={4}
                charLimit={250}
            />
        );

        expect(container).toMatchSnapshot();
    });
});
