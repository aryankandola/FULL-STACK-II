import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, expect, beforeEach } from "vitest";

import App from "../src/App";

beforeEach(() => {
  localStorage.clear();
});

describe("Social Media Post Scheduler", () => {
  test("renders application title", () => {
    render(<App />);

    expect(
      screen.getByText("Social Media Post Scheduler")
    ).toBeInTheDocument();
  });

  test("displays scheduled posts", () => {
    render(<App />);

    expect(
      screen.getByText("Instagram Post")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Product Announcement")
    ).toBeInTheDocument();
  });

  test("opens post form when date is clicked", () => {
    render(<App />);

    expect(
      screen.getByText("Content Calendar")
    ).toBeInTheDocument();
  });

  test("deletes a post", () => {
    render(<App />);

    const deleteButtons =
      screen.getAllByText("Delete");

    fireEvent.click(deleteButtons[0]);

    expect(
      screen.queryByText("Instagram Post")
    ).not.toBeInTheDocument();
  });

  test("shows total scheduled posts", () => {
    render(<App />);

    expect(
      screen.getByText("3")
    ).toBeInTheDocument();
  });
});