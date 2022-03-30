import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TenantDetails } from "../Pages/TenantDetails";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
  useLocation: () => ({
    state: {
      id: "t1",
      name: "Test_Tenant",
      description: "Test_Description",
      type: "Real",
      status: "ACTIVE",
    },
  }),
}));

test("has tenant list header and data-grid", () => {
  render(<TenantDetails />);
  expect(screen.getByRole("heading")).toHaveTextContent("Tenant Details");
  expect(screen.getByRole("button")).toHaveTextContent("Back to list");
});
