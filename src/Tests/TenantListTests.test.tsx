import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TenantList } from "../Pages/TenantList";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

jest.mock("@apollo/client", () => ({
  ...jest.requireActual("@apollo/client"),
  useQuery: () => ({
    data: {
      getTenants: [
        {
          id: "t1",
          name: "Test_Tenant",
          description: "Test_Description",
          type: "Real",
          status: "Inactive",
        },
      ],
    },
    loading: false,
  }),
}));

test("has tenant list header and data-grid", () => {
  render(<TenantList />);
  expect(screen.getByRole("heading")).toHaveTextContent("Tenant List");
  expect(screen.getAllByRole("grid")).toHaveLength(1);
});
