import {
  Button,
  Switch,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { Tenant } from "../Models/Tenant";

export const TenantDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const details = state as Tenant;

  const isActive = details.status === "ACTIVE";
  const statusLabel = isActive ? "Active" : "Inactive";

  const navigateBackToTenantListPage = () => navigate("/");
  
  return (
    <>
      <h2 style={{ textAlign: "left", marginLeft: "20px" }}>Tenant Details</h2>
      <TextField
        label="Name"
        value={details.name}
        inputProps={{
          readOnly: true,
        }}
        style={{
          display: "block",
          boxSizing: "border-box",
          marginLeft: "20px",
          marginTop: "20px",
        }}
      />
      <TextareaAutosize
        value={details.description}
        disabled
        minRows={3}
        style={{
          display: "block",
          marginLeft: "20px",
          marginTop: "20px",
          width: "50%",
        }}
      />
      <TextField
        label="Type"
        value={details.type}
        inputProps={{
          readOnly: true,
        }}
        style={{
          display: "block",
          boxSizing: "border-box",
          marginLeft: "20px",
          marginTop: "20px",
        }}
      />
      <label
        style={{
          display: "block",
          boxSizing: "border-box",
          marginLeft: "20px",
          marginTop: "20px",
        }}
      >
        {statusLabel}
        <Switch checked={isActive} />
      </label>
      <Button
        variant="contained"
        style={{
          display: "block",
          boxSizing: "border-box",
          marginLeft: "20px",
          marginTop: "20px",
        }}
        onClick={navigateBackToTenantListPage}
      >
        {"Back to list"}
      </Button>
    </>
  );
};
