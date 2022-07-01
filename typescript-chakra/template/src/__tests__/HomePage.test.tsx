import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";

import HomePage from "pages/home/";

test("Renders Documentation link", () => {
    render(<HomePage />);
    const linkElement = screen.getByText(/Documentation/i);
    expect(linkElement).toBeInTheDocument();
});