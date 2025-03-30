import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders homepage link", () => {
  render(<App />);
  const linkElement = screen.getByText(/首页/i);
  expect(linkElement).toBeInTheDocument();
});
