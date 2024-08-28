import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { App } from "./app";

describe("truthy tests", () => {
  test("1 + 1 should be 2", () => {
    expect(1 + 1).toEqual(2);
  });
});

describe("app", () => {
  test("should see greeting", () => {
    render(<App />);

    expect(screen.getByText(/working/i)).toBeInTheDocument();
  });
});
