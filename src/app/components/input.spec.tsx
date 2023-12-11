import { render, screen, fireEvent } from "@testing-library/react";
import type { DefaultRequirements } from "./input";
import { Input } from "./input";

describe("<Input />", () => {
  it("should updats password state on input change", () => {
    render(<Input requirements={["consecutiveLetters"]} />);

    const inputElement = screen.getByRole<HTMLInputElement>("textbox");
    fireEvent.change(inputElement, { target: { value: "testPassword" } });

    expect(inputElement.value).toBe("testPassword");
  });

  it("should manual requirement works correctly", () => {
    render(
      <Input
        manualRequirement={[
          { name: "Must have at least 5 characters", regex: /.{5,}/ },
        ]}
      />
    );

    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "1234" } });

    const checkIcons = screen.getByAltText<HTMLImageElement>("img");
    expect(checkIcons.src).toContain("wrong-icon.svg");
  });

  it("should manual requirement and default requirement works both correctly", () => {
    render(
      <Input
        requirements={["uppercaseLetter", "hasNumber", "specialChar"]}
        manualRequirement={[
          { name: "Must have at least 5 characters", regex: /.{5,}/ },
        ]}
      />
    );

    const checkIcons = screen.getAllByAltText<HTMLImageElement>("img");
    expect(checkIcons[0].src).toContain("wrong-icon.svg");
    expect(checkIcons[1].src).toContain("wrong-icon.svg");
    expect(checkIcons[2].src).toContain("wrong-icon.svg");
  });

  it.each([
    ["uppercaseLetter", "Test"],
    ["hasNumber", "test123"],
    ["specialChar", "TestPass!"],
    ["consecutiveLetters", "Test"],
  ])("should %s validation works correctly", (requirement, value) => {
    render(<Input requirements={[requirement as DefaultRequirements]} />);

    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: value } });

    const checkIcons = screen.getByAltText<HTMLImageElement>("img");
    expect(checkIcons.src).toContain("check-icon.svg");
  });
});
