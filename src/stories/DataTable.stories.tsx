import { Meta } from "@storybook/react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

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

const rows = [
  {
    id: 1,
    tag: "abcd",
    posts: "1234",
  },
  {
    id: 2,
    tag: "efgh",
    posts: "5678",
  },
];

export default {
  title: "DataTable",
  component: DataGrid,
} as Meta;

export const Default: React.FC = () => (
  <div style={{ height: 400, width: "100%" }}>
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
      pageSizeOptions={[5, 10, 15]}
    />
  </div>
);
