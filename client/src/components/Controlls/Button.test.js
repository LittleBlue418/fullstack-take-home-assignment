import { fireEvent, render, screen } from "@testing-library/react";

import { Button } from "./Button";

const renderComponent = () => {
  const onMock = jest.fn();
  render(<Button onClick={onMock}>Hello world</Button>);
  return { onMock };
};

describe("Button", () => {
  it("Displays the props that are fed in", () => {
    renderComponent();
    expect(
      screen.getByRole("button", { name: "Hello world" })
    ).toBeInTheDocument();
  });

  it("Calls the function that is fed into it", () => {
    const { onMock } = renderComponent();
    fireEvent.click(screen.getByText("Hello world"));
    expect(onMock).toHaveBeenCalled();
  });
});

