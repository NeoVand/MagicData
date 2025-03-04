import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// Sample data for demonstration
const createData = (
  id: number,
  name: string,
  type: string,
  description: string,
  created: string,
  modified: string,
  rows: number
) => {
  return { id, name, type, description, created, modified, rows };
};

const rows = [
  createData(1, 'Customer Data', 'CSV', 'Monthly customer data import', '2023-06-01', '2023-06-05', 1200),
  createData(2, 'Product Catalog', 'JSON', 'Product details and pricing', '2023-05-15', '2023-06-02', 450),
  createData(3, 'Sales Report', 'Excel', 'Quarterly sales analysis', '2023-04-01', '2023-06-10', 2500),
  createData(4, 'Marketing Campaign', 'CSV', 'Campaign performance metrics', '2023-05-20', '2023-06-15', 320),
  createData(5, 'Inventory Status', 'JSON', 'Current inventory levels', '2023-06-01', '2023-06-12', 850),
];

export default function TableView() {
  return (
    <Box sx={{ width: '100%', height: '100%', overflow: 'hidden', m: 0, p: 0 }}>
      <TableContainer component={Paper} sx={{ 
        height: '100%', 
        overflow: 'auto', 
        borderRadius: 0,
        width: '100%',
        boxShadow: 'none',
        m: 0,
        p: 0
      }}>
        <Table stickyHeader aria-label="data table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Modified</TableCell>
              <TableCell align="right">Rows</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                hover
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.created}</TableCell>
                <TableCell>{row.modified}</TableCell>
                <TableCell align="right">{row.rows}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
} 