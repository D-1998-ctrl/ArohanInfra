// import React from 'react'

// const Purchase = () => {
//   return (
//     <div>Purchase</div>
//   )
// }

// export default Purchase





import React, { useMemo, useState, useEffect } from 'react'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Alert, Box, useMediaQuery, Button, Typography, TextField, Drawer, Divider, FormControl, Select, MenuItem, FormControlLabel, Checkbox } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { MaterialReactTable, } from 'material-react-table';
// import suppliermaster from './suppliermaster.json'
import { useTheme } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const PurchaseEntry = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  //table
  const columns = useMemo(() => {
    return [
      {
        accessorKey: 'srNo',
        header: 'Sr No',
        size: 100,
      },
      {
        accessorKey: 'AccountCode',
        header: 'Account Code',
        size: 150,
      },
      {
        accessorKey: 'AccountName',
        header: 'Account Name',
        size: 150,
      },
      {
        accessorKey: 'TypeCode',
        header: 'Type Code',
        size: 150,
      },


      {
        id: 'actions',
        header: 'Actions',
        size: 150,

      },
    ];
  }, []);
  //
  const [purchaseDate, setPurchaseDate] = useState('');


  return (
    <Box>
      <Box sx={{ background: 'rgb(238, 246, 252)', borderRadius: '10px', p: 5, height: 'auto' }}>
        <Box textAlign={'center'}>
          <Typography variant='h4'><b>Purchase Entry</b></Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button variant="contained" onClick={handleDrawerOpen}>Create Purchase Entry </Button>
        </Box>


        {/* <Box mt={4}>
          <MaterialReactTable
            columns={columns}
            // data={suppliermaster}
            enableColumnOrdering
            enableColumnResizing
          />
        </Box> */}

        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={handleDrawerClose}
          PaperProps={{
            sx: {
              borderRadius: isSmallScreen ? "0" : "10px 0 0 10px",
              width: isSmallScreen ? "100%" : "65%",
              zIndex: 1000,
            },
          }}
        >
          <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography m={2} variant="h6"><b>Create Purchase Entry</b></Typography>
            <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleDrawerClose} />
          </Box>
          <Divider />


          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, m: 1 }}>
              <Box flex={1}>
                <Box>
                  <Typography>Purchase No</Typography>
                  <TextField
                    // value={reorderLevel}
                    // onChange={(e) => setReorderLevel(e.target.value)}
                    size="small" margin="normal" placeholder='Purchase No' fullWidth />
                </Box>
                <Box>
                  <Typography>Party</Typography>
                  <TextField
                    // value={reorderLevel}
                    // onChange={(e) => setReorderLevel(e.target.value)}
                    size="small" margin="normal" placeholder='Party' fullWidth />
                </Box>

                <Box>
                  <Typography>Bill no</Typography>
                  <TextField
                    // value={reorderLevel}
                    // onChange={(e) => setReorderLevel(e.target.value)}
                    size="small" margin="normal" placeholder='Bill no' fullWidth />
                </Box>
              </Box>


              <Box flex={1}>
                {/* <Box>
                  <Typography>Purchase Date</Typography>
                  <TextField
                    // value={reorderLevel}
                    // onChange={(e) => setReorderLevel(e.target.value)}

                    size="small" margin="normal" placeholder='Purchase Date' fullWidth />

                </Box> */}
                <Box >

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Box width="100%">
                      <Typography variant="body2">Purchase Date</Typography>
                      <DatePicker
                        format="dd/MM/yyyy"
                        slotProps={{ textField: { size: "small", fullWidth: true } }} // Ensure full width
                      />
                    </Box>
                  </LocalizationProvider>
                </Box>



                <Box mt={2}>
                  <Typography>Brand Name</Typography>
                  <TextField
                    // value={reorderLevel}
                    // onChange={(e) => setReorderLevel(e.target.value)}
                    size="small" margin="normal" placeholder='Brand Name' fullWidth />
                </Box>

                <Box mt={3}>
                  {/* <Typography>Bill Date</Typography>
                  <TextField
                    // value={reorderLevel}
                    // onChange={(e) => setReorderLevel(e.target.value)}
                    size="small" margin="normal" placeholder='Bill Date' fullWidth /> */}

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Box width="100%">
                      <Typography variant="body2">Bill Date</Typography>
                      <DatePicker
                        format="dd/MM/yyyy"
                        slotProps={{ textField: { size: "small", fullWidth: true } }} // Ensure full width
                      />
                    </Box>
                  </LocalizationProvider>
                </Box>
              </Box>

            </Box>


            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, m: 1 }}>
                <Box flex={1}>
                  <Box>
                    <Typography>Item</Typography>
                    <TextField
                      // value={reorderLevel}
                      // onChange={(e) => setReorderLevel(e.target.value)}
                      size="small" margin="normal" placeholder='Purchase No' fullWidth />
                  </Box>
                </Box>

                <Box flex={1}>
                  <Box>
                    <Typography>Quantity</Typography>
                    <TextField
                      // value={reorderLevel}
                      // onChange={(e) => setReorderLevel(e.target.value)}
                      size="small" margin="normal" placeholder='Quantity' fullWidth />
                  </Box>

                </Box>

                <Box flex={1}>
                  <Box>
                    <Typography>Rate</Typography>
                    <TextField
                      // value={reorderLevel}
                      // onChange={(e) => setReorderLevel(e.target.value)}
                      size="small" margin="normal" placeholder='Rate' fullWidth />
                  </Box>

                </Box>


                <Box flex={1}>
                  <Box>
                    <Typography>Amount</Typography>
                    <TextField
                      // value={reorderLevel}
                      // onChange={(e) => setReorderLevel(e.target.value)}
                      size="small" margin="normal" placeholder='Amount' fullWidth />
                  </Box>

                </Box>

              </Box>

            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, m: 1 }}>
              <Box flex={1}>

              </Box>

            </Box>

          </Box>


          <Box m={1}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Sr No</TableCell>
                    <TableCell>Item ID</TableCell>
                    <TableCell>Item</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Rate</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>CGST</TableCell>
                    <TableCell>SGST</TableCell>
                    <TableCell>IGST</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>A101</TableCell>
                    <TableCell>Item 1</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>50</TableCell>
                    <TableCell>100</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>10</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>A102</TableCell>
                    <TableCell>Item 2</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>80</TableCell>
                    <TableCell>80</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>8</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>






          <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2} mb={5}>
            <Box>
              <Button variant='contained'>Save </Button>
            </Box>

            <Box>
              <Button onClick={handleDrawerClose} variant='outlined'>Cancel </Button>
            </Box>
          </Box>
        </Drawer>

      </Box>

    </Box>
  )
}

export default PurchaseEntry


