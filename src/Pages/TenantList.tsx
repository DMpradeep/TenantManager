import React from "react";
import { Tenant } from "../Models/Tenant";
import {
  DataGrid,
  GridCallbackDetails,
  gridClasses,
  GridColDef,
  GridRenderCellParams,
  GridRowParams,
  GridRowSpacingParams,
  MuiEvent,
} from "@mui/x-data-grid";
import { Switch } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { BallTriangle } from "react-loader-spinner";

export const TenantList = (): JSX.Element => {
  const pageSize = 20;

  const { data, loading } = useQuery(TENANT_LIST);
  const navigate = useNavigate();

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      width: 200,
      sortable: false,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "description",
      headerName: "Description",
      width: 600,
      sortable: false,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "type",
      headerName: "Type",
      width: 200,
      sortable: false,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params: GridRenderCellParams<string>) => {
        const isActive = params.value === "ACTIVE";
        const label = isActive ? "Active" : "Inactive";
        return (
          <>
            <Switch checked={isActive} />
            {label}
          </>
        );
      },
    },
  ];

  const getRowSpacing = (params: GridRowSpacingParams) => {
    return {
      top: params.isFirstVisible ? 0 : 5,
      bottom: params.isLastVisible ? 0 : 5,
    };
  };

  const navigateToTenantDetailsPage = (
    params: GridRowParams,
    _event: MuiEvent<React.MouseEvent>,
    _details: GridCallbackDetails
  ) => navigate("/tenant/" + params.row.id, { state: params.row });

  if (loading) {
    return (
      <BallTriangle height="100" width="100" color="orange" />
    );
  }

  const tenants = data?.getTenants as Tenant[];
  const validTenants = tenants?.filter((tenant) =>
    tenant.id.match(/^[t0-9]+$/i)
  );

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Tenant List</h2>
      <div style={{ height: "400px", width: "100%" }}>
        <DataGrid
          columns={columns}
          rows={validTenants}
          pageSize={pageSize}
          rowsPerPageOptions={[pageSize]}
          getRowSpacing={getRowSpacing}
          disableSelectionOnClick
          disableDensitySelector
          disableColumnSelector
          disableColumnMenu
          autoHeight
          sx={{
            [`& .${gridClasses.row}`]: {
              bgcolor: (theme) =>
                theme.palette.mode === "light" ? grey[200] : grey[900],
            },
          }}
          onRowDoubleClick={navigateToTenantDetailsPage}
        />
      </div>
    </>
  );
};

const TENANT_LIST = gql`
  query TenantList {
    getTenants @rest(type: "tenantList", path: "", endpoint: "tenantList") {
      id
      name
      description
      type
      status
    }
  }
`;
