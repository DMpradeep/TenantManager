import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TenantDetails } from "./Pages/TenantDetails";
import { TenantList } from "./Pages/TenantList";

export const AppRoutes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TenantList />} />
        <Route path="/tenant/:id" element={<TenantDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
