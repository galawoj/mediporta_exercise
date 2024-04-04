import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useAppContext } from "../store/AppContext";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70, disableColumnMenu: true },
  { field: "tag", headerName: "Tag", width: 130, disableColumnMenu: true },
  {
    field: "posts",
    headerName: "Number of posts",
    width: 130,
    disableColumnMenu: true,
  },
];

const DataTable: React.FC = () => {
  const { tags } = useAppContext();

  const rows = tags.map((e, i) => ({
    id: i + 1,
    tag: e.name,
    posts: e.count,
  }));

  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <DataGrid
        sx={{ display: "flex", flexDirection: "column-reverse" }}
        rowSelection={false}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 15, tags.length]}
      />
    </div>
  );
};

export default DataTable;
