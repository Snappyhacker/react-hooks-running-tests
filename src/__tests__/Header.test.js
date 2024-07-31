import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Header from "../components/Header";

test("renders the header text", () => {
  render(<Header />);
  expect(screen.getByText("Hello from the header")).toBeInTheDocument();
});
