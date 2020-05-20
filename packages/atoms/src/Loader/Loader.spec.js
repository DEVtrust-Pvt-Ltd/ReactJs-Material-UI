import React from "react";
import { render } from "@testing-library/react";
import Loader from "./Loader";
import { withTheme } from "@cxa-shop-ui/styles";

describe("Loader Component", () => {
  it("should match snapshot with loader", () => {
    const props = {
      loading: true,
    };

    const Component = withTheme(Loader);
    const { container } = render(<Component {...props} />);

    expect(container).toMatchSnapshot();
  });

  it("should match snapshot without loader", () => {
    const props = {
      loading: false,
    };

    const Component = withTheme(Loader);
    const { container } = render(<Component {...props} />);

    expect(container).toMatchSnapshot();
  });
});
