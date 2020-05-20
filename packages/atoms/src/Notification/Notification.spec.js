import React from "react";
import {render} from "@testing-library/react";
import Notification from ".";

describe("Notification Component", () => {
    it("should match snapshot when properties are present", () => {
        const {container} = render(
            <Notification
                content="1 Item Added to Cart."
                handleClose={() => alert("Closed...")}
            />
        );

        expect(container).toMatchSnapshot();
    });
});
