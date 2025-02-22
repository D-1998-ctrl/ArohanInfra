// // import React, { useMemo, useState } from 'react'
// // import { Alert, useMediaQuery, Box, Button, Typography, TextField, Drawer, Divider, FormControl, Select, MenuItem, } from '@mui/material';
// // import CloseIcon from '@mui/icons-material/Close';
// // import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// // import { LocalizationProvider } from "@mui/x-date-pickers";
// // import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// // import Grid from '@mui/material/Grid';
// // import { MaterialReactTable, } from 'material-react-table';
// // import customermaster from './customermaster.json'
// // import { useTheme } from "@mui/material/styles";

// // const CustomerMaster = () => {
// //   const theme = useTheme();
// //   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
// //   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
// //   const handleDrawerOpen = () => {
// //     setIsDrawerOpen(true);
// //   };

// //   const handleDrawerClose = () => {
// //     setIsDrawerOpen(false);
// //   };
// //   //for tables
// //   const columns = useMemo(() => {
// //     return [
// //       {
// //         accessorKey: 'srNo',
// //         header: 'Sr No',
// //         size: 100,
// //       },
// //       {
// //         accessorKey: 'FromDate',
// //         header: 'From Date',
// //         size: 150,
// //       },
// //       {
// //         accessorKey: 'ToDate',
// //         header: 'To Date',
// //         size: 150,
// //       },
// //       {
// //         accessorKey: 'Basic',
// //         header: 'Basic',
// //         size: 150,
// //       },


// //       {
// //         id: 'actions',
// //         header: 'Actions',
// //         size: 150,

// //       },
// //     ];
// //   }, []);

// //   //validation
// //   const [formValues, setFormValues] = useState({
// //     account: "",
// //     employee: "",
// //     fromDate: null,
// //     toDate: null,
// //     basic: "",
// //     hra: "",
// //     cca: "",
// //     occ: "",
// //     pt: "",
// //     labourWelfare: "",
// //     tea: "",
// //     conveyance: "",
// //     grossSalary: "",
// //     pf: "",
// //     esi: "",
// //     totalDeduction: "",
// //     GSTNo:''
// //   });

// //   const [formErrors, setFormErrors] = useState({});

// //   const handleChange = (field, value) => {
// //     setFormValues((prev) => ({ ...prev, [field]: value }));
// //     setFormErrors((prev) => ({ ...prev, [field]: "" })); // Clear error on change
// //   };

// //   const validate = () => {
// //     const errors = {};

// //     if (!formValues.account) errors.account = "Account is required.";
// //     if (!formValues.employee) errors.employee = "Employee is required.";
// //     if (!formValues.fromDate) errors.fromDate = "From Date is required.";
// //     if (!formValues.toDate) errors.toDate = "To Date is required.";
// //     if (!formValues.basic) errors.basic = "Basic is required.";
// //     if (!formValues.hra) errors.hra = "HRA is required.";
// //     if (!formValues.cca) errors.cca = "CCA is required.";
// //     if (!formValues.occ) errors.occ = "OCC is required.";

// //     if (!formValues.pt) errors.pt = "PT is required.";
// //     if (!formValues.labourWelfare) errors.labourWelfare = "Labour Welfare is required.";
// //     if (!formValues.tea) errors.tea = "Tea is required.";
// //     if (!formValues.conveyance) errors.conveyance = "Conveyance is required.";
// //     if (!formValues.grossSalary)
// //       errors.grossSalary = "Gross Salary is required.";
// //     if (!formValues.pf) errors.pf = "PF is required.";
// //     if (!formValues.esi) errors.esi = "ESI is required.";
// //     if (!formValues.totalDeduction) errors.totalDeduction = "Total Deduction is required.";
// //     if (!formValues.GSTNo) errors.GSTNo = "GST No is required.";

// //     setFormErrors(errors);
// //     return Object.keys(errors).length === 0; // Return true if no errors
// //   };

// //   const handleSave = () => {
// //     if (validate()) {
// //       // Perform save action
// //       console.log("Form submitted:", formValues);
// //       handleDrawerClose();
// //     }
// //   };


// //   return (
// //     <Box>
// //       <Box sx={{ background: 'rgb(238, 246, 252)', borderRadius: '10px', p: 5, height: 'auto' }}>
// //         <Box textAlign={'center'}>
// //           <Typography variant='h4'><b>Customer Master</b></Typography>
// //         </Box>

// //         <Box sx={{ display: 'flex', gap: 3 }}>
// //           <Button variant="contained" onClick={handleDrawerOpen}>Create Customer Master </Button>
// //         </Box>

// //         <Box mt={4}>
// //           <MaterialReactTable
// //             columns={columns}
// //             data={customermaster}

// //             enableColumnOrdering
// //             enableColumnResizing
// //           />
// //         </Box>

// //         <Drawer
// //           anchor="right"
// //           open={isDrawerOpen}
// //           onClose={handleDrawerClose}
// //           PaperProps={{
// //             sx: {
// //               borderRadius: isSmallScreen ? "0" : "10px 0 0 10px",
// //               width: isSmallScreen ? "100%" : "650px",
// //               zIndex: 1000,
// //             },
// //           }}
// //         >
// //           <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
// //             <Typography m={2} variant="h6"><b>Create Customer Master</b></Typography>
// //             <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleDrawerClose} />
// //           </Box>
// //           <Divider />


// //           <Box m={2}>
// //             <Grid container spacing={2}>

// //               <Grid item xs={6}>
// //                 <Box>
// //                   <Typography>Account</Typography>
// //                   <FormControl fullWidth size="small" margin="normal">
// //                     <Select>
// //                       <MenuItem value=""></MenuItem>
// //                     </Select>
// //                     {(!!formErrors.account) && (
// //                       <Alert severity="error" sx={{
// //                         width: '92%',
// //                         p: '2',
// //                         pl: '4%', height: '23px',
// //                         borderRadius: '8px',
// //                         borderTopLeftRadius: '0',
// //                         borderTopRightRadius: '0',
// //                         fontSize: '12px',
// //                         display: 'flex',
// //                         backgroundColor: "#ffdddd",
// //                         color: "#a00",
// //                         alignItems: 'center',
// //                         '& .MuiAlert-icon': {
// //                           fontSize: '16px',
// //                           mr: '8px',
// //                         },
// //                       }}>
// //                         {formErrors.account}
// //                       </Alert>
// //                     )}
// //                   </FormControl>
// //                 </Box>
// //               </Grid>
// //               <Grid item xs={6}>
// //                 <Box>
// //                   <Typography>Employee</Typography>
// //                   <FormControl fullWidth size="small" margin="normal">
// //                     <Select>
// //                       <MenuItem value=""></MenuItem>
// //                     </Select>
// //                     {(!!formErrors.employee) && (
// //                       <Alert severity="error" sx={{
// //                         width: '92%',
// //                         p: '2',
// //                         pl: '4%', height: '23px',
// //                         borderRadius: '8px',
// //                         borderTopLeftRadius: '0',
// //                         borderTopRightRadius: '0',
// //                         fontSize: '12px',
// //                         display: 'flex',
// //                         backgroundColor: "#ffdddd",
// //                         color: "#a00",
// //                         alignItems: 'center',
// //                         '& .MuiAlert-icon': {
// //                           fontSize: '16px',
// //                           mr: '8px',
// //                         },
// //                       }}>
// //                         {formErrors.employee}
// //                       </Alert>
// //                     )}
// //                   </FormControl>
// //                 </Box>
// //               </Grid>


// //               <Grid item xs={6}>
// //                 <LocalizationProvider dateAdapter={AdapterDateFns}>
// //                   <Box>
// //                     <Typography>From Date</Typography>
// //                     <DatePicker
// //                       format="dd/MM/yyyy"
// //                       // value={formValues.fromDate}
// //                       // onChange={(e) => handleChange("fromDate", e.target.value)}
// //                       // error={!!formErrors.fromDate}
// //                       sx={{ width: "100%" }}

// //                       renderInput={(params) => <TextField {...params} size="small" />}
// //                     />
// //                   </Box>
// //                   {(!!formErrors.fromDate) && (
// //                     <Alert severity="error" sx={{
// //                       width: '92%',
// //                       p: '2',
// //                       pl: '4%', height: '23px',
// //                       borderRadius: '8px',
// //                       borderTopLeftRadius: '0',
// //                       borderTopRightRadius: '0',
// //                       fontSize: '12px',
// //                       display: 'flex',
// //                       backgroundColor: "#ffdddd",
// //                       color: "#a00",
// //                       alignItems: 'center',
// //                       '& .MuiAlert-icon': {
// //                         fontSize: '16px',
// //                         mr: '8px',
// //                       },
// //                     }}>
// //                       {formErrors.fromDate}
// //                     </Alert>
// //                   )}
// //                 </LocalizationProvider>
// //               </Grid>
// //               <Grid item xs={6}>
// //                 <LocalizationProvider dateAdapter={AdapterDateFns}>
// //                   <Box>
// //                     <Typography>To Date</Typography>
// //                     <DatePicker
// //                       format="dd/MM/yyyy"
// //                       // value={formValues.toDate}
// //                       // onChange={(e) => handleChange("toDate", e.target.value)}
// //                       // error={!!formErrors.toDate}
// //                       sx={{ width: "100%" }}
// //                       renderInput={(params) => <TextField {...params} size="small" />}
// //                     />
// //                   </Box>
// //                   {(!!formErrors.toDate) && (
// //                     <Alert severity="error" sx={{
// //                       width: '92%',
// //                       p: '2',
// //                       pl: '4%', height: '23px',
// //                       borderRadius: '8px',
// //                       borderTopLeftRadius: '0',
// //                       borderTopRightRadius: '0',
// //                       fontSize: '12px',
// //                       display: 'flex',
// //                       backgroundColor: "#ffdddd",
// //                       color: "#a00",
// //                       alignItems: 'center',
// //                       '& .MuiAlert-icon': {
// //                         fontSize: '16px',
// //                         mr: '8px',
// //                       },
// //                     }}>
// //                       {formErrors.toDate}
// //                     </Alert>
// //                   )}
// //                 </LocalizationProvider>
// //               </Grid>


// //               <Grid item xs={6}>
// //                 <Box>
// //                   <Typography>Basic</Typography>
// //                   <TextField onChange={(e) => handleChange("basic", e.target.value)} value={formValues.basic} error={!!formErrors.basic} size="small" margin="normal" placeholder="Enter Basic" fullWidth />
// //                   {(!!formErrors.basic) && (
// //                     <Alert severity="error" sx={{
// //                       width: '92%',
// //                       p: '2',
// //                       pl: '4%', height: '23px',
// //                       borderRadius: '8px',
// //                       borderTopLeftRadius: '0',
// //                       borderTopRightRadius: '0',
// //                       fontSize: '12px',
// //                       display: 'flex',
// //                       backgroundColor: "#ffdddd",
// //                       color: "#a00",
// //                       alignItems: 'center',
// //                       '& .MuiAlert-icon': {
// //                         fontSize: '16px',
// //                         mr: '8px',
// //                       },
// //                     }}>
// //                       {formErrors.basic}
// //                     </Alert>
// //                   )}
// //                 </Box>
// //               </Grid>
// //               <Grid item xs={6}>
// //                 <Box>
// //                   <Typography>HRA</Typography>
// //                   <TextField onChange={(e) => handleChange("hra", e.target.value)} value={formValues.hra} error={!!formErrors.hra} size="small" margin="normal" type="number" placeholder="Enter HRA" fullWidth />
// //                   {(!!formErrors.hra) && (
// //                     <Alert severity="error" sx={{
// //                       width: '92%',
// //                       p: '2',
// //                       pl: '4%', height: '23px',
// //                       borderRadius: '8px',
// //                       borderTopLeftRadius: '0',
// //                       borderTopRightRadius: '0',
// //                       fontSize: '12px',
// //                       display: 'flex',
// //                       backgroundColor: "#ffdddd",
// //                       color: "#a00",
// //                       alignItems: 'center',
// //                       '& .MuiAlert-icon': {
// //                         fontSize: '16px',
// //                         mr: '8px',
// //                       },
// //                     }}>
// //                       {formErrors.hra}
// //                     </Alert>
// //                   )}
// //                 </Box>
// //               </Grid>


// //               <Grid item xs={6}>
// //                 <Box>
// //                   <Typography>CCA</Typography>
// //                   <TextField onChange={(e) => handleChange("cca", e.target.value)} value={formValues.cca} error={!!formErrors.cca} size="small" margin="normal" placeholder="Enter CCA" fullWidth />
// //                   {(!!formErrors.cca) && (
// //                     <Alert severity="error" sx={{
// //                       width: '92%',
// //                       p: '2',
// //                       pl: '4%', height: '23px',
// //                       borderRadius: '8px',
// //                       borderTopLeftRadius: '0',
// //                       borderTopRightRadius: '0',
// //                       fontSize: '12px',
// //                       display: 'flex',
// //                       backgroundColor: "#ffdddd",
// //                       color: "#a00",
// //                       alignItems: 'center',
// //                       '& .MuiAlert-icon': {
// //                         fontSize: '16px',
// //                         mr: '8px',
// //                       },
// //                     }}>
// //                       {formErrors.cca}
// //                     </Alert>
// //                   )}
// //                 </Box>
// //               </Grid>
// //               <Grid item xs={6}>
// //                 <Box>
// //                   <Typography>OCC</Typography>
// //                   <TextField onChange={(e) => handleChange("occ", e.target.value)} value={formValues.occ} error={!!formErrors.occ} size="small" margin="normal" type="number" placeholder="Enter OCC" fullWidth />
// //                   {(!!formErrors.occ) && (
// //                     <Alert severity="error" sx={{
// //                       width: '92%',
// //                       p: '2',
// //                       pl: '4%', height: '23px',
// //                       borderRadius: '8px',
// //                       borderTopLeftRadius: '0',
// //                       borderTopRightRadius: '0',
// //                       fontSize: '12px',
// //                       display: 'flex',
// //                       backgroundColor: "#ffdddd",
// //                       color: "#a00",
// //                       alignItems: 'center',
// //                       '& .MuiAlert-icon': {
// //                         fontSize: '16px',
// //                         mr: '8px',
// //                       },
// //                     }}>
// //                       {formErrors.occ}
// //                     </Alert>
// //                   )}
// //                 </Box>
// //               </Grid>


// //               <Grid item xs={6}>
// //                 <Box>
// //                   <Typography>PT</Typography>
// //                   <TextField onChange={(e) => handleChange("pt", e.target.value)} value={formValues.pt} error={!!formErrors.pt} size="small" margin="normal" placeholder="Enter PT" fullWidth />
// //                   {(!!formErrors.pt) && (
// //                     <Alert severity="error" sx={{
// //                       width: '92%',
// //                       p: '2',
// //                       pl: '4%', height: '23px',
// //                       borderRadius: '8px',
// //                       borderTopLeftRadius: '0',
// //                       borderTopRightRadius: '0',
// //                       fontSize: '12px',
// //                       display: 'flex',
// //                       backgroundColor: "#ffdddd",
// //                       color: "#a00",
// //                       alignItems: 'center',
// //                       '& .MuiAlert-icon': {
// //                         fontSize: '16px',
// //                         mr: '8px',
// //                       },
// //                     }}>
// //                       {formErrors.pt}
// //                     </Alert>
// //                   )}
// //                 </Box>
// //               </Grid>
// //               <Grid item xs={6}>
// //                 <Box>
// //                   <Typography>Labour Welfare</Typography>
// //                   <TextField onChange={(e) => handleChange("labourWelfare", e.target.value)} value={formValues.labourWelfare} error={!!formErrors.labourWelfare} size="small" margin="normal" placeholder="Enter Labour Welfare" fullWidth />
// //                   {(!!formErrors.labourWelfare) && (
// //                     <Alert severity="error" sx={{
// //                       width: '92%',
// //                       p: '2',
// //                       pl: '4%', height: '23px',
// //                       borderRadius: '8px',
// //                       borderTopLeftRadius: '0',
// //                       borderTopRightRadius: '0',
// //                       fontSize: '12px',
// //                       display: 'flex',
// //                       backgroundColor: "#ffdddd",
// //                       color: "#a00",
// //                       alignItems: 'center',
// //                       '& .MuiAlert-icon': {
// //                         fontSize: '16px',
// //                         mr: '8px',
// //                       },
// //                     }}>
// //                       {formErrors.labourWelfare}
// //                     </Alert>
// //                   )}
// //                 </Box>
// //               </Grid>


// //               <Grid item xs={6}>
// //                 <Box>
// //                   <Typography>Tea</Typography>
// //                   <TextField onChange={(e) => handleChange("tea", e.target.value)} value={formValues.tea} error={!!formErrors.tea} size="small" margin="normal" type="number" placeholder="Enter Tea" fullWidth />
// //                   {(!!formErrors.tea) && (
// //                     <Alert severity="error" sx={{
// //                       width: '92%',
// //                       p: '2',
// //                       pl: '4%', height: '23px',
// //                       borderRadius: '8px',
// //                       borderTopLeftRadius: '0',
// //                       borderTopRightRadius: '0',
// //                       fontSize: '12px',
// //                       display: 'flex',
// //                       backgroundColor: "#ffdddd",
// //                       color: "#a00",
// //                       alignItems: 'center',
// //                       '& .MuiAlert-icon': {
// //                         fontSize: '16px',
// //                         mr: '8px',
// //                       },
// //                     }}>
// //                       {formErrors.tea}
// //                     </Alert>
// //                   )}
// //                 </Box>
// //               </Grid>
// //               <Grid item xs={6}>
// //                 <Box>
// //                   <Typography>Conveyance</Typography>
// //                   <TextField onChange={(e) => handleChange("conveyance", e.target.value)} value={formValues.conveyance} error={!!formErrors.conveyance} size="small" margin="normal" type="number" placeholder="Enter Conveyance" fullWidth />
// //                   {(!!formErrors.conveyance) && (
// //                     <Alert severity="error" sx={{
// //                       width: '92%',
// //                       p: '2',
// //                       pl: '4%', height: '23px',
// //                       borderRadius: '8px',
// //                       borderTopLeftRadius: '0',
// //                       borderTopRightRadius: '0',
// //                       fontSize: '12px',
// //                       display: 'flex',
// //                       backgroundColor: "#ffdddd",
// //                       color: "#a00",
// //                       alignItems: 'center',
// //                       '& .MuiAlert-icon': {
// //                         fontSize: '16px',
// //                         mr: '8px',
// //                       },
// //                     }}>
// //                       {formErrors.conveyance}
// //                     </Alert>
// //                   )}
// //                 </Box>
// //               </Grid>


// //               <Grid item xs={6}>
// //                 <Box>
// //                   <Typography>Gross Salary</Typography>
// //                   <TextField onChange={(e) => handleChange("grossSalary", e.target.value)} value={formValues.grossSalary} error={!!formErrors.grossSalary} size="small" margin="normal" type="number" placeholder="Enter Gross Salary" fullWidth />
// //                   {(!!formErrors.grossSalary) && (
// //                     <Alert severity="error" sx={{
// //                       width: '92%',
// //                       p: '2',
// //                       pl: '4%', height: '23px',
// //                       borderRadius: '8px',
// //                       borderTopLeftRadius: '0',
// //                       borderTopRightRadius: '0',
// //                       fontSize: '12px',
// //                       display: 'flex',
// //                       backgroundColor: "#ffdddd",
// //                       color: "#a00",
// //                       alignItems: 'center',
// //                       '& .MuiAlert-icon': {
// //                         fontSize: '16px',
// //                         mr: '8px',
// //                       },
// //                     }}>
// //                       {formErrors.grossSalary}
// //                     </Alert>
// //                   )}
// //                 </Box>
// //               </Grid>
// //               <Grid item xs={6}>
// //                 <Box>
// //                   <Typography>PF</Typography>
// //                   <TextField onChange={(e) => handleChange("pf", e.target.value)} value={formValues.pf} error={!!formErrors.pf} size="small" margin="normal" type="number" placeholder="Enter PF" fullWidth />
// //                   {(!!formErrors.pf) && (
// //                     <Alert severity="error" sx={{
// //                       width: '92%',
// //                       p: '2',
// //                       pl: '4%', height: '23px',
// //                       borderRadius: '8px',
// //                       borderTopLeftRadius: '0',
// //                       borderTopRightRadius: '0',
// //                       fontSize: '12px',
// //                       display: 'flex',
// //                       backgroundColor: "#ffdddd",
// //                       color: "#a00",
// //                       alignItems: 'center',
// //                       '& .MuiAlert-icon': {
// //                         fontSize: '16px',
// //                         mr: '8px',
// //                       },
// //                     }}>
// //                       {formErrors.pf}
// //                     </Alert>
// //                   )}
// //                 </Box>
// //               </Grid>


// //               <Grid item xs={6}>
// //                 <Box>
// //                   <Typography>ESI</Typography>
// //                   <TextField onChange={(e) => handleChange("esi", e.target.value)} value={formValues.esi} error={!!formErrors.esi} size="small" margin="normal" placeholder="Enter ESI" fullWidth />
// //                   {(!!formErrors.esi) && (
// //                     <Alert severity="error" sx={{
// //                       width: '92%',
// //                       p: '2',
// //                       pl: '4%', height: '23px',
// //                       borderRadius: '8px',
// //                       borderTopLeftRadius: '0',
// //                       borderTopRightRadius: '0',
// //                       fontSize: '12px',
// //                       display: 'flex',
// //                       backgroundColor: "#ffdddd",
// //                       color: "#a00",
// //                       alignItems: 'center',
// //                       '& .MuiAlert-icon': {
// //                         fontSize: '16px',
// //                         mr: '8px',
// //                       },
// //                     }}>
// //                       {formErrors.esi}
// //                     </Alert>
// //                   )}
// //                 </Box>
// //               </Grid>
// //               <Grid item xs={6}>
// //                 <Box>
// //                   <Typography>Total Deduction</Typography>
// //                   <TextField size="small" margin="normal" onChange={(e) => handleChange("totalDeduction", e.target.value)} value={formValues.totalDeduction} error={!!formErrors.totalDeduction} placeholder="Enter Total Deduction" fullWidth />
// //                   {(!!formErrors.totalDeduction) && (
// //                     <Alert severity="error" sx={{
// //                       width: '92%',
// //                       p: '2',
// //                       pl: '4%', height: '23px',
// //                       borderRadius: '8px',
// //                       borderTopLeftRadius: '0',
// //                       borderTopRightRadius: '0',

// //                       fontSize: '12px',
// //                       display: 'flex',
// //                       backgroundColor: "#ffdddd",
// //                       color: "#a00",
// //                       alignItems: 'center',
// //                       '& .MuiAlert-icon': {
// //                         fontSize: '16px',
// //                         mr: '8px',
// //                       },
// //                     }}>
// //                       {formErrors.totalDeduction}
// //                     </Alert>
// //                   )}
// //                 </Box>
// //               </Grid>
// //             </Grid>



// //             <Box >
// //               <Typography>GST No</Typography>
// //               <TextField onChange={(e) => handleChange("GSTNo", e.target.value)} value={formValues.GSTNo} error={!!formErrors.GSTNo}
// //                 size="small" margin="normal" placeholder="Enter GST No" fullWidth />
// //               {(!!formErrors.GSTNo) && (
// //                 <Alert severity="error" sx={{
// //                   width: '92%',
// //                   p: '2',
// //                   pl: '4%', height: '23px',
// //                   borderRadius: '8px',
// //                   borderTopLeftRadius: '0',
// //                   borderTopRightRadius: '0',
// //                   fontSize: '12px',
// //                   display: 'flex',
// //                   backgroundColor: "#ffdddd",
// //                   color: "#a00",
// //                   alignItems: 'center',
// //                   '& .MuiAlert-icon': {
// //                     fontSize: '16px',
// //                     mr: '8px',
// //                   },
// //                 }}>
// //                   {formErrors.GSTNo}
// //                 </Alert>
// //               )}
// //             </Box>
// //           </Box>




// //           <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2} mb={5}>
// //             <Box>
// //               <Button variant='contained' onClick={handleSave}>Save </Button>
// //             </Box>

// //             <Box>
// //               <Button onClick={handleDrawerClose} variant='outlined'>Cancel </Button>
// //             </Box>
// //           </Box>
// //         </Drawer>

// //       </Box>

// //     </Box>
// //   )
// // }

// // export default CustomerMaster


































































// // // import React, { useMemo, useState } from 'react'
// // // import { Box, Button, Typography, TextField, Drawer, Divider, FormControl, Select, MenuItem, InputLabel, Checkbox } from '@mui/material';
// // // import CloseIcon from '@mui/icons-material/Close';
// // // import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// // // import { LocalizationProvider } from "@mui/x-date-pickers";
// // // import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// // // import Grid from '@mui/material/Grid';
// // // import { MaterialReactTable, } from 'material-react-table';
// // // import customermaster from './customermaster.json'

// // // const CustomerMaster = () => {
// // //   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
// // //   const handleDrawerOpen = () => {
// // //     setIsDrawerOpen(true);
// // //   };

// // //   const handleDrawerClose = () => {
// // //     setIsDrawerOpen(false);
// // //   };
// // // //for tables
// // // const columns = useMemo(() => {
// // //   return [
// // //     {
// // //       accessorKey: 'srNo',
// // //       header: 'Sr No',
// // //       size: 100,
// // //     },
// // //     {
// // //       accessorKey: 'FromDate',
// // //       header: 'From Date',
// // //       size: 150,
// // //     },
// // //     {
// // //       accessorKey: 'ToDate',
// // //       header: 'To Date',
// // //       size: 150,
// // //     },
// // //     {
// // //       accessorKey: 'Basic',
// // //       header: 'Basic',
// // //       size: 150,
// // //     },


// // //     {
// // //       id: 'actions',
// // //       header: 'Actions',
// // //       size: 150,

// // //     },
// // //   ];
// // // }, []);
// // //   return (
// // //     <Box>
// // //       <Box sx={{ background: 'rgb(238, 246, 252)', borderRadius: '10px', p: 5, height: 'auto' }}>
// // //         <Box textAlign={'center'}>
// // //           <Typography variant='h4'><b>Customer Master</b></Typography>
// // //         </Box>

// // //         <Box sx={{ display: 'flex', gap: 3 }}>
// // //           <Button variant="contained" onClick={handleDrawerOpen}>Create Customer Master </Button>
// // //         </Box>

// // //         <Box mt={4}>
// // //           <MaterialReactTable
// // //             columns={columns}
// // //             data={customermaster}

// // //             enableColumnOrdering
// // //             enableColumnResizing
// // //           />
// // //         </Box>

// // //         <Drawer
// // //           anchor="right"
// // //           open={isDrawerOpen}
// // //           onClose={handleDrawerClose}
// // //           PaperProps={{
// // //             sx: { width: '50%' }, // Set the width here
// // //           }}
// // //         >
// // //           <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
// // //             <Typography m={2} variant="h6"><b>Create Customer Master</b></Typography>
// // //             <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleDrawerClose} />
// // //           </Box>
// // //           <Divider />

// // //           {/* <Box>
// // //           <Box display="flex" alignItems="center" gap={2}>
// // //             <Box flex={1} m={2}>
// // //               <Box>
// // //                 <Typography>Account</Typography>
// // //                 <FormControl fullWidth size="small" margin="normal">

// // //                   <Select>
// // //                     <MenuItem value=""></MenuItem>
// // //                   </Select>
// // //                 </FormControl>
// // //               </Box>

// // //               <Box mt={1}>
// // //                 <Typography>Basic</Typography>
// // //                 <TextField size="small" margin="normal" placeholder="Enter Basic" fullWidth />
// // //               </Box>

// // //               <Box mt={1}>
// // //                 <Typography>CCA</Typography>
// // //                 <TextField size="small" margin="normal" placeholder="Enter CCA" fullWidth />
// // //               </Box>

// // //               <Box mt={1}>
// // //                 <Typography>PT</Typography>
// // //                 <TextField size="small" margin="normal" placeholder="Enter PT" fullWidth />
// // //                 </Box>
// // //                 </Box>





// // //             <Box flex={1} m={2}>
// // //             <Box>
// // //                 <Typography>Employee</Typography>
// // //                 <FormControl fullWidth size="small" margin="normal">

// // //                   <Select>
// // //                     <MenuItem value=""></MenuItem>
// // //                   </Select>
// // //                 </FormControl>
// // //               </Box>

// // //               <Box mt={1}>
// // //                 <Typography>HRA</Typography>
// // //                 <TextField size="small" margin="normal" type='number' placeholder="Enter HRA" fullWidth />
// // //               </Box>

// // //               <Box mt={1}>
// // //                 <Typography>OCC</Typography>
// // //                 <TextField size="small" margin="normal" type='number' placeholder="Enter OCC" fullWidth />
// // //               </Box>

// // //               <Box mt={1}>
// // //                 <Typography>Labour Welfare</Typography>
// // //                 <TextField size="small" margin="normal" placeholder="Enter Labour Welfare " fullWidth />
// // //               </Box>
// // //             </Box>


// // //             <Box flex={1} m={2}>
// // //             <Box>
// // //             <LocalizationProvider dateAdapter={AdapterDateFns}>
// // //                     <Box  >
// // //                       <Typography > From Date</Typography>
// // //                       <DatePicker

// // //                         format="dd/MM/yyyy"
// // //                         sx={{ width: "100%", }}
// // //                         renderInput={(params) => <TextField {...params} size="small" />}
// // //                       />
// // //                     </Box>
// // //                   </LocalizationProvider>
// // //               </Box>

// // //               <Box mt={1}>
// // //                 <Typography>Tea</Typography>
// // //                 <TextField size="small" margin="normal" type='number' placeholder="Enter Tea" fullWidth />
// // //               </Box>

// // //               <Box mt={1}>
// // //                 <Typography>Gross Salary</Typography>
// // //                 <TextField size="small" margin="normal" type='number' placeholder="Enter Gross Salary" fullWidth />
// // //               </Box>

// // //               <Box mt={1}>
// // //                 <Typography>ESI</Typography>
// // //                 <TextField size="small" margin="normal" placeholder="Enter ESI " fullWidth />
// // //               </Box>
// // //             </Box>




// // //             <Box flex={1} m={2}>
// // //             <Box>
// // //             <LocalizationProvider dateAdapter={AdapterDateFns}>
// // //                     <Box  >
// // //                       <Typography > To Date</Typography>
// // //                       <DatePicker

// // //                         format="dd/MM/yyyy"
// // //                         sx={{ width: "100%", }}
// // //                         renderInput={(params) => <TextField {...params} size="small" />}
// // //                       />
// // //                     </Box>
// // //                   </LocalizationProvider>
// // //               </Box>

// // //               <Box mt={1}>
// // //                 <Typography>Conveyance</Typography>
// // //                 <TextField size="small" margin="normal" type='number' placeholder="Enter Conveyance" fullWidth />
// // //               </Box>

// // //               <Box mt={1}>
// // //                 <Typography>PF</Typography>
// // //                 <TextField size="small" margin="normal" type='number' placeholder="Enter PF" fullWidth />
// // //               </Box>

// // //               <Box mt={1}>
// // //                 <Typography>Total Deduction</Typography>
// // //                 <TextField size="small" margin="normal" placeholder="Enter Total Deduction " fullWidth />
// // //               </Box>
// // //             </Box>


// // //           </Box>


// // //           </Box> */}
// // //           <Box m={2}>
// // //             <Grid container spacing={2}>

// // //               <Grid item xs={6}>
// // //                 <Box>
// // //                   <Typography>Account</Typography>
// // //                   <FormControl fullWidth size="small" margin="normal">
// // //                     <Select>
// // //                       <MenuItem value=""></MenuItem>
// // //                     </Select>
// // //                   </FormControl>
// // //                 </Box>
// // //               </Grid>
// // //               <Grid item xs={6}>
// // //                 <Box>
// // //                   <Typography>Employee</Typography>
// // //                   <FormControl fullWidth size="small" margin="normal">
// // //                     <Select>
// // //                       <MenuItem value=""></MenuItem>
// // //                     </Select>
// // //                   </FormControl>
// // //                 </Box>
// // //               </Grid>


// // //               <Grid item xs={6}>
// // //                 <LocalizationProvider dateAdapter={AdapterDateFns}>
// // //                   <Box>
// // //                     <Typography>From Date</Typography>
// // //                     <DatePicker
// // //                       format="dd/MM/yyyy"
// // //                       sx={{ width: "100%" }}
// // //                       renderInput={(params) => <TextField {...params} size="small" />}
// // //                     />
// // //                   </Box>
// // //                 </LocalizationProvider>
// // //               </Grid>
// // //               <Grid item xs={6}>
// // //                 <LocalizationProvider dateAdapter={AdapterDateFns}>
// // //                   <Box>
// // //                     <Typography>To Date</Typography>
// // //                     <DatePicker
// // //                       format="dd/MM/yyyy"
// // //                       sx={{ width: "100%" }}
// // //                       renderInput={(params) => <TextField {...params} size="small" />}
// // //                     />
// // //                   </Box>
// // //                 </LocalizationProvider>
// // //               </Grid>


// // //               <Grid item xs={6}>
// // //                 <Box>
// // //                   <Typography>Basic</Typography>
// // //                   <TextField size="small" margin="normal" placeholder="Enter Basic" fullWidth />
// // //                 </Box>
// // //               </Grid>
// // //               <Grid item xs={6}>
// // //                 <Box>
// // //                   <Typography>HRA</Typography>
// // //                   <TextField size="small" margin="normal" type="number" placeholder="Enter HRA" fullWidth />
// // //                 </Box>
// // //               </Grid>


// // //               <Grid item xs={6}>
// // //                 <Box>
// // //                   <Typography>CCA</Typography>
// // //                   <TextField size="small" margin="normal" placeholder="Enter CCA" fullWidth />
// // //                 </Box>
// // //               </Grid>
// // //               <Grid item xs={6}>
// // //                 <Box>
// // //                   <Typography>OCC</Typography>
// // //                   <TextField size="small" margin="normal" type="number" placeholder="Enter OCC" fullWidth />
// // //                 </Box>
// // //               </Grid>


// // //               <Grid item xs={6}>
// // //                 <Box>
// // //                   <Typography>PT</Typography>
// // //                   <TextField size="small" margin="normal" placeholder="Enter PT" fullWidth />
// // //                 </Box>
// // //               </Grid>
// // //               <Grid item xs={6}>
// // //                 <Box>
// // //                   <Typography>Labour Welfare</Typography>
// // //                   <TextField size="small" margin="normal" placeholder="Enter Labour Welfare" fullWidth />
// // //                 </Box>
// // //               </Grid>


// // //               <Grid item xs={6}>
// // //                 <Box>
// // //                   <Typography>Tea</Typography>
// // //                   <TextField size="small" margin="normal" type="number" placeholder="Enter Tea" fullWidth />
// // //                 </Box>
// // //               </Grid>
// // //               <Grid item xs={6}>
// // //                 <Box>
// // //                   <Typography>Conveyance</Typography>
// // //                   <TextField size="small" margin="normal" type="number" placeholder="Enter Conveyance" fullWidth />
// // //                 </Box>
// // //               </Grid>


// // //               <Grid item xs={6}>
// // //                 <Box>
// // //                   <Typography>Gross Salary</Typography>
// // //                   <TextField size="small" margin="normal" type="number" placeholder="Enter Gross Salary" fullWidth />
// // //                 </Box>
// // //               </Grid>
// // //               <Grid item xs={6}>
// // //                 <Box>
// // //                   <Typography>PF</Typography>
// // //                   <TextField size="small" margin="normal" type="number" placeholder="Enter PF" fullWidth />
// // //                 </Box>
// // //               </Grid>


// // //               <Grid item xs={6}>
// // //                 <Box>
// // //                   <Typography>ESI</Typography>
// // //                   <TextField size="small" margin="normal" placeholder="Enter ESI" fullWidth />
// // //                 </Box>
// // //               </Grid>
// // //               <Grid item xs={6}>
// // //                 <Box>
// // //                   <Typography>Total Deduction</Typography>
// // //                   <TextField size="small" margin="normal" placeholder="Enter Total Deduction" fullWidth />
// // //                 </Box>
// // //               </Grid>
// // //             </Grid>
// // //           </Box>




// // //           <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2} mb={5}>
// // //             <Box>
// // //               <Button variant='contained'>Save </Button>
// // //             </Box>

// // //             <Box>
// // //               <Button onClick={handleDrawerClose} variant='outlined'>Cancel </Button>
// // //             </Box>
// // //           </Box>
// // //         </Drawer>

// // //       </Box>

// // //     </Box>
// // //   )
// // // }

// // // export default CustomerMaster


// import React, { useMemo, useState } from 'react'
// import { Alert, Box, useMediaQuery, Button, Typography, TextField, Drawer, Divider, FormControl, Select, MenuItem, FormControlLabel, Checkbox } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import { MaterialReactTable, } from 'material-react-table';
// import suppliermaster from './suppliermaster.json'
// import { useTheme } from "@mui/material/styles";

// const CustomerMaster = () => {
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const handleDrawerOpen = () => {
//     setIsDrawerOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setIsDrawerOpen(false);
//   };
//   //table
//   const columns = useMemo(() => {
//     return [
//       {
//         accessorKey: 'srNo',
//         header: 'Sr No',
//         size: 100,
//       },
//       {
//         accessorKey: 'AccountCode',
//         header: 'Account Code',
//         size: 150,
//       },
//       {
//         accessorKey: 'AccountName',
//         header: 'Account Name',
//         size: 150,
//       },
//       {
//         accessorKey: 'TypeCode',
//         header: 'Type Code',
//         size: 150,
//       },


//       {
//         id: 'actions',
//         header: 'Actions',
//         size: 150,

//       },
//     ];
//   }, []);
//   ///validation
//   const [formValues, setFormValues] = useState({
//     AccountCode: "",
//     AccountName: "",
//     SubGroup: "",
//     GroupId: "",
//     CurrentBalance: "",
//     DebitCredit: "",
//     TypeCode: "",
//     Salesman: "",
//     Address1: "",
//     Address2: "",
//     State: "",
//     City: "",
//     Pincode: "",
//     Email: "",
//     MobileNo: "",
//     url: "",
//     GSTNo: "",
//   });
//   const [formErrors, setFormErrors] = useState({});

//   const handleChange = (field, value) => {
//     setFormValues((prev) => ({ ...prev, [field]: value }));
//     setFormErrors((prev) => ({ ...prev, [field]: "" })); // Clear error on change
//   };

//   const validate = () => {
//     const errors = {};

//     if (!formValues.AccountCode) errors.AccountCode = "Account Code is required.";
//     if (!formValues.AccountName) errors.AccountName = "Account Name is required.";
//     if (!formValues.SubGroup) errors.SubGroup = "SubGroup is required.";
//     if (!formValues.GroupId) errors.GroupId = "Group Id is required.";
//     if (!formValues.CurrentBalance) errors.CurrentBalance = "Current Balance is required.";
//     if (!formValues.DebitCredit) errors.DebitCredit = "Debit Credit is required.";
//     if (!formValues.TypeCode) errors.TypeCode = "Type Code is required.";
//     if (!formValues.Salesman) errors.Salesman = "Salesman is required.";

//     if (!formValues.Address1) errors.Address1 = "Address1 is required.";
//     if (!formValues.Address2) errors.Address2 = "Address 2  is required.";
//     if (!formValues.State) errors.State = "State is required.";
//     if (!formValues.City) errors.City = "City is required.";
//     if (!formValues.Pincode)
//       errors.Pincode = "Pincode is required.";
//     if (!formValues.Email) errors.Email = "Email is required.";
//     if (!formValues.MobileNo) errors.MobileNo = "Mobile No is required.";
//     if (!formValues.url) errors.url = "url is required.";
//     if (!formValues.GSTNo) errors.GSTNo = "GST No is required.";
//     // Add other field-specific validation as needed

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0; // Return true if no errors
//   };

//   const handleSave = () => {
//     if (validate()) {
//       // Perform save action
//       console.log("Form submitted:", formValues);
//       handleDrawerClose();
//     }
//   };


//   return (
//     <Box>
//       <Box sx={{ background: 'rgb(238, 246, 252)', borderRadius: '10px', p: 5, height: 'auto' }}>
//         <Box textAlign={'center'}>
//           <Typography variant='h4'><b>Customer Master</b></Typography>
//         </Box>

//         <Box sx={{ display: 'flex', gap: 3 }}>
//           <Button variant="contained" onClick={handleDrawerOpen}>Create Customer Master </Button>
//         </Box>


//         <Box mt={4}>
//           <MaterialReactTable
//             columns={columns}
//             data={suppliermaster}
//             enableColumnOrdering
//             enableColumnResizing
//           />
//         </Box>

//         <Drawer
//           anchor="right"
//           open={isDrawerOpen}
//           onClose={handleDrawerClose}
//           PaperProps={{
//             sx: {
//               borderRadius: isSmallScreen ? "0" : "10px 0 0 10px",
//               width: isSmallScreen ? "100%" : "650px",
//               zIndex: 1000,
//             },
//           }}
//         >
//           <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <Typography m={2} variant="h6"><b>Create Customer Master</b></Typography>
//             <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleDrawerClose} />
//           </Box>
//           <Divider />

//           <Box>
//             <Box display="flex" alignItems="center" gap={2}>
//               <Box flex={1} m={2}>
//                 <Box>
//                   <Typography>Account Code</Typography>
//                   <TextField onChange={(e) => handleChange("AccountCode", e.target.value)} value={formValues.AccountCode} error={!!formErrors.AccountCode} size="small" margin="normal" placeholder="Enter Account Code" fullWidth />
//                   {(!!formErrors.AccountCode) && (
//                     <Alert severity="error" sx={{
//                       width: '92%',
//                       p: '2',
//                       pl: '4%', height: '23px',
//                       borderRadius: '8px',
//                       borderTopLeftRadius: '0',
//                       borderTopRightRadius: '0',
//                       fontSize: '12px',
//                       display: 'flex',
//                       backgroundColor: "#ffdddd",
//                       color: "#a00",
//                       alignItems: 'center',
//                       '& .MuiAlert-icon': {
//                         fontSize: '16px',
//                         mr: '8px',
//                       },
//                     }}>
//                       {formErrors.AccountCode}
//                     </Alert>
//                   )}
//                 </Box>

//                 <Box>
//                   <Typography> Group Id </Typography>
//                   <FormControl onChange={(e) => handleChange("SubGroup", e.target.value)} value={formValues.SubGroup} error={!!formErrors.SubGroup} fullWidth size="small" margin="normal">

//                     <Select>
//                       <MenuItem value=""></MenuItem>
//                     </Select>

//                     {(!!formErrors.SubGroup) && (
//                       <Alert severity="error" sx={{
//                         width: '92%',
//                         p: '2',
//                         pl: '4%', height: '23px',
//                         borderRadius: '8px',
//                         borderTopLeftRadius: '0',
//                         borderTopRightRadius: '0',
//                         fontSize: '12px',
//                         display: 'flex',
//                         backgroundColor: "#ffdddd",
//                         color: "#a00",
//                         alignItems: 'center',
//                         '& .MuiAlert-icon': {
//                           fontSize: '16px',
//                           mr: '8px',
//                         },
//                       }}>
//                         {formErrors.SubGroup}
//                       </Alert>
//                     )}
//                   </FormControl>
//                 </Box>

//                 <Box>
//                   <Typography>Current Balance</Typography>
//                   <TextField
//                     onChange={(e) => handleChange("CurrentBalance", e.target.value)} value={formValues.CurrentBalance} error={!!formErrors.CurrentBalance} size="small" margin="normal" placeholder="Enter Account Name" fullWidth />
//                   {(!!formErrors.CurrentBalance) && (
//                     <Alert severity="error" sx={{
//                       width: '92%',
//                       p: '2',
//                       pl: '4%', height: '23px',
//                       borderRadius: '8px',
//                       borderTopLeftRadius: '0',
//                       borderTopRightRadius: '0',
//                       fontSize: '12px',
//                       display: 'flex',
//                       backgroundColor: "#ffdddd",
//                       color: "#a00",
//                       alignItems: 'center',
//                       '& .MuiAlert-icon': {
//                         fontSize: '16px',
//                         mr: '8px',
//                       },
//                     }}>
//                       {formErrors.CurrentBalance}
//                     </Alert>
//                   )}
//                 </Box>


//                 <Box>
//                   <Typography>Type Code</Typography>
//                   <TextField onChange={(e) => handleChange("TypeCode", e.target.value)} value={formValues.TypeCode} error={!!formErrors.TypeCode}
//                     size="small" margin="normal" placeholder="Enter Type code" fullWidth />
//                   {(!!formErrors.TypeCode) && (
//                     <Alert severity="error" sx={{
//                       width: '92%',
//                       p: '2',
//                       pl: '4%', height: '23px',
//                       borderRadius: '8px',
//                       borderTopLeftRadius: '0',
//                       borderTopRightRadius: '0',
//                       fontSize: '12px',
//                       display: 'flex',
//                       backgroundColor: "#ffdddd",
//                       color: "#a00",
//                       alignItems: 'center',
//                       '& .MuiAlert-icon': {
//                         fontSize: '16px',
//                         mr: '8px',
//                       },
//                     }}>
//                       {formErrors.TypeCode}
//                     </Alert>
//                   )}
//                 </Box>

//                 <Box>
//                   <Typography>Address 1</Typography>
//                   <TextField onChange={(e) => handleChange("Address1", e.target.value)} value={formValues.Address1} error={!!formErrors.Address1} size="small" margin="normal" placeholder="Enter Address 1" fullWidth />
//                   {(!!formErrors.Address1) && (
//                     <Alert severity="error" sx={{
//                       width: '92%',
//                       p: '2',
//                       pl: '4%', height: '23px',
//                       borderRadius: '8px',
//                       borderTopLeftRadius: '0',
//                       borderTopRightRadius: '0',
//                       fontSize: '12px',
//                       display: 'flex',
//                       backgroundColor: "#ffdddd",
//                       color: "#a00",
//                       alignItems: 'center',
//                       '& .MuiAlert-icon': {
//                         fontSize: '16px',
//                         mr: '8px',
//                       },
//                     }}>
//                       {formErrors.Address1}
//                     </Alert>
//                   )}
//                 </Box>

//                 <Box>
//                   <Typography>City </Typography>
//                   <FormControl onChange={(e) => handleChange("State", e.target.value)} value={formValues.State} error={!!formErrors.State} fullWidth size="small" margin="normal">

//                     <Select>
//                       <MenuItem value=""></MenuItem>
//                     </Select>

//                     {(!!formErrors.State) && (
//                       <Alert severity="error" sx={{
//                         width: '92%',
//                         p: '2',
//                         pl: '4%', height: '23px',
//                         borderRadius: '8px',
//                         borderTopLeftRadius: '0',
//                         borderTopRightRadius: '0',
//                         fontSize: '12px',
//                         display: 'flex',
//                         backgroundColor: "#ffdddd",
//                         color: "#a00",
//                         alignItems: 'center',
//                         '& .MuiAlert-icon': {
//                           fontSize: '16px',
//                           mr: '8px',
//                         },
//                       }}>
//                         {formErrors.State}
//                       </Alert>
//                     )}
//                   </FormControl>
//                 </Box>

//                 <Box>
//                   <Typography>Pincode</Typography>
//                   <TextField onChange={(e) => handleChange("Pincode", e.target.value)} value={formValues.Pincode} error={!!formErrors.Pincode} size="small" margin="normal" placeholder="Enter pincode" fullWidth />
//                   {(!!formErrors.Pincode) && (
//                     <Alert severity="error" sx={{
//                       width: '92%',
//                       p: '2',
//                       pl: '4%', height: '23px',
//                       borderRadius: '8px',
//                       borderTopLeftRadius: '0',
//                       borderTopRightRadius: '0',
//                       fontSize: '12px',
//                       display: 'flex',
//                       backgroundColor: "#ffdddd",
//                       color: "#a00",
//                       alignItems: 'center',
//                       '& .MuiAlert-icon': {
//                         fontSize: '16px',
//                         mr: '8px',
//                       },
//                     }}>
//                       {formErrors.Pincode}
//                     </Alert>
//                   )}
//                 </Box>

//                 <Box>
//                   <Typography>Mobile No</Typography>
//                   <TextField onChange={(e) => handleChange("MobileNo", e.target.value)} value={formValues.MobileNo} error={!!formErrors.MobileNo}
//                     size="small" margin="normal" placeholder="Enter Mobile No" fullWidth />
//                   {(!!formErrors.MobileNo) && (
//                     <Alert severity="error" sx={{
//                       width: '92%',
//                       p: '2',
//                       pl: '4%', height: '23px',
//                       borderRadius: '8px',
//                       borderTopLeftRadius: '0',
//                       borderTopRightRadius: '0',
//                       fontSize: '12px',
//                       display: 'flex',
//                       backgroundColor: "#ffdddd",
//                       color: "#a00",
//                       alignItems: 'center',
//                       '& .MuiAlert-icon': {
//                         fontSize: '16px',
//                         mr: '8px',
//                       },
//                     }}>
//                       {formErrors.MobileNo}
//                     </Alert>
//                   )}
//                 </Box>

//               </Box>





//               <Box flex={1} m={2}>


//                 <Box>
//                   <Typography>Account Name</Typography>
//                   <TextField onChange={(e) => handleChange("AccountName", e.target.value)} value={formValues.AccountName} error={!!formErrors.AccountName}
//                     size="small" margin="normal" placeholder="Enter Account Name" fullWidth />

//                   {(!!formErrors.AccountName) && (
//                     <Alert severity="error" sx={{
//                       width: '92%',
//                       p: '2',
//                       pl: '4%', height: '23px',
//                       borderRadius: '8px',
//                       borderTopLeftRadius: '0',
//                       borderTopRightRadius: '0',
//                       fontSize: '12px',
//                       display: 'flex',
//                       backgroundColor: "#ffdddd",
//                       color: "#a00",
//                       alignItems: 'center',
//                       '& .MuiAlert-icon': {
//                         fontSize: '16px',
//                         mr: '8px',
//                       },
//                     }}>
//                       {formErrors.AccountName}
//                     </Alert>
//                   )}
//                 </Box>

//                 <Box>
//                   <Typography>Sub Group Id</Typography>
//                   <FormControl onChange={(e) => handleChange("GroupId", e.target.value)} value={formValues.GroupId} error={!!formErrors.GroupId} fullWidth size="small" margin="normal">

//                     <Select>
//                       <MenuItem value=""></MenuItem>
//                     </Select>
//                     {(!!formErrors.GroupId) && (
//                       <Alert severity="error" sx={{
//                         width: '92%',
//                         p: '2',
//                         pl: '4%', height: '23px',
//                         borderRadius: '8px',
//                         borderTopLeftRadius: '0',
//                         borderTopRightRadius: '0',
//                         fontSize: '12px',
//                         display: 'flex',
//                         backgroundColor: "#ffdddd",
//                         color: "#a00",
//                         alignItems: 'center',
//                         '& .MuiAlert-icon': {
//                           fontSize: '16px',
//                           mr: '8px',
//                         },
//                       }}>
//                         {formErrors.GroupId}
//                       </Alert>
//                     )}
//                   </FormControl>
//                 </Box>

//                 <Box>
//                   <Typography>Debit/Credit </Typography>
//                   <FormControl onChange={(e) => handleChange("DebitCredit", e.target.value)} value={formValues.DebitCredit} error={!!formErrors.DebitCredit} fullWidth size="small" margin="normal">

//                     <Select>
//                       <MenuItem value=""></MenuItem>
//                     </Select>
//                     {(!!formErrors.DebitCredit) && (
//                       <Alert severity="error" sx={{
//                         width: '92%',
//                         p: '2',
//                         pl: '4%', height: '23px',
//                         borderRadius: '8px',
//                         borderTopLeftRadius: '0',
//                         borderTopRightRadius: '0',
//                         fontSize: '12px',
//                         display: 'flex',
//                         backgroundColor: "#ffdddd",
//                         color: "#a00",
//                         alignItems: 'center',
//                         '& .MuiAlert-icon': {
//                           fontSize: '16px',
//                           mr: '8px',
//                         },
//                       }}>
//                         {formErrors.DebitCredit}
//                       </Alert>
//                     )}
//                   </FormControl>
//                 </Box>


//                 <Box>
//                   <Typography>Salesman </Typography>
//                   <FormControl onChange={(e) => handleChange("Salesman", e.target.value)} value={formValues.Salesman} error={!!formErrors.Salesman} fullWidth size="small" margin="normal">

//                     <Select>
//                       <MenuItem value=""></MenuItem>
//                     </Select>
//                     {(!!formErrors.Salesman) && (
//                       <Alert severity="error" sx={{
//                         width: '92%',
//                         p: '2',
//                         pl: '4%', height: '23px',
//                         borderRadius: '8px',
//                         borderTopLeftRadius: '0',
//                         borderTopRightRadius: '0',
//                         fontSize: '12px',
//                         display: 'flex',
//                         backgroundColor: "#ffdddd",
//                         color: "#a00",
//                         alignItems: 'center',
//                         '& .MuiAlert-icon': {
//                           fontSize: '16px',
//                           mr: '8px',
//                         },
//                       }}>
//                         {formErrors.Salesman}
//                       </Alert>
//                     )}
//                   </FormControl>
//                 </Box>

//                 <Box>
//                   <Typography>Address 2</Typography>
//                   <TextField onChange={(e) => handleChange("Address2", e.target.value)} value={formValues.Address2} error={!!formErrors.Address2}
//                     size="small" margin="normal" placeholder="Enter Address 2" fullWidth />
//                   {(!!formErrors.Address2) && (
//                     <Alert severity="error" sx={{
//                       width: '92%',
//                       p: '2',
//                       pl: '4%', height: '23px',
//                       borderRadius: '8px',
//                       borderTopLeftRadius: '0',
//                       borderTopRightRadius: '0',
//                       fontSize: '12px',
//                       display: 'flex',
//                       backgroundColor: "#ffdddd",
//                       color: "#a00",
//                       alignItems: 'center',
//                       '& .MuiAlert-icon': {
//                         fontSize: '16px',
//                         mr: '8px',
//                       },
//                     }}>
//                       {formErrors.Address2}
//                     </Alert>
//                   )}
//                 </Box>

//                 <Box>
//                   <Typography>State</Typography>
//                   <FormControl onChange={(e) => handleChange("City", e.target.value)} value={formValues.City} error={!!formErrors.City} fullWidth size="small" margin="normal">

//                     <Select>
//                       <MenuItem value=""></MenuItem>
//                     </Select>
//                     {(!!formErrors.City) && (
//                       <Alert severity="error" sx={{
//                         width: '92%',
//                         p: '2',
//                         pl: '4%', height: '23px',
//                         borderRadius: '8px',
//                         borderTopLeftRadius: '0',
//                         borderTopRightRadius: '0',
//                         fontSize: '12px',
//                         display: 'flex',
//                         backgroundColor: "#ffdddd",
//                         color: "#a00",
//                         alignItems: 'center',
//                         '& .MuiAlert-icon': {
//                           fontSize: '16px',
//                           mr: '8px',
//                         },
//                       }}>
//                         {formErrors.City}
//                       </Alert>
//                     )}
//                   </FormControl>
//                 </Box>

//                 <Box>
//                   <Typography>Email</Typography>
//                   <TextField onChange={(e) => handleChange("Email", e.target.value)} value={formValues.Email} error={!!formErrors.Email} size="small" margin="normal" placeholder="Enter Email" fullWidth />
//                   {(!!formErrors.Email) && (
//                     <Alert severity="error" sx={{
//                       width: '92%',
//                       p: '2',
//                       pl: '4%', height: '23px',
//                       borderRadius: '8px',
//                       borderTopLeftRadius: '0',
//                       borderTopRightRadius: '0',
//                       fontSize: '12px',
//                       display: 'flex',
//                       backgroundColor: "#ffdddd",
//                       color: "#a00",
//                       alignItems: 'center',
//                       '& .MuiAlert-icon': {
//                         fontSize: '16px',
//                         mr: '8px',
//                       },
//                     }}>
//                       {formErrors.Email}
//                     </Alert>
//                   )}
//                 </Box>

//                 <Box>
//                   <Typography>URL</Typography>
//                   <TextField onChange={(e) => handleChange("url", e.target.value)} value={formValues.url} error={!!formErrors.url}
//                     size="small" margin="normal" placeholder="Enter URL" fullWidth />
//                   {(!!formErrors.url) && (
//                     <Alert severity="error" sx={{
//                       width: '92%',
//                       p: '2',
//                       pl: '4%', height: '23px',
//                       borderRadius: '8px',
//                       borderTopLeftRadius: '0',
//                       borderTopRightRadius: '0',
//                       fontSize: '12px',
//                       display: 'flex',
//                       backgroundColor: "#ffdddd",
//                       color: "#a00",
//                       alignItems: 'center',
//                       '& .MuiAlert-icon': {
//                         fontSize: '16px',
//                         mr: '8px',
//                       },
//                     }}>
//                       {formErrors.url}
//                     </Alert>
//                   )}
//                 </Box>

//               </Box>










//             </Box>


//             <Box m={2}>
//               <Typography>GST No</Typography>
//               <TextField onChange={(e) => handleChange("GSTNo", e.target.value)} value={formValues.GSTNo} error={!!formErrors.GSTNo}
//                 size="small" margin="normal" placeholder="Enter GST No" fullWidth />
//               {(!!formErrors.GSTNo) && (
//                 <Alert severity="error" sx={{
//                   width: '92%',
//                   p: '2',
//                   pl: '4%', height: '23px',
//                   borderRadius: '8px',
//                   borderTopLeftRadius: '0',
//                   borderTopRightRadius: '0',
//                   fontSize: '12px',
//                   display: 'flex',
//                   backgroundColor: "#ffdddd",
//                   color: "#a00",
//                   alignItems: 'center',
//                   '& .MuiAlert-icon': {
//                     fontSize: '16px',
//                     mr: '8px',
//                   },
//                 }}>
//                   {formErrors.GSTNo}
//                 </Alert>
//               )}
//             </Box>

//             <Box m={2} display={'flex'} alignItems={'center'} gap={5}>
//               <FormControlLabel
//                 control={<Checkbox />}
//                 label="Is System"
//               />


//               <FormControlLabel
//                 control={<Checkbox />}
//                 label="GST "
//               />


//               <FormControlLabel
//                 control={<Checkbox />}
//                 label="Compliance"
//               />
//             </Box>



//           </Box>





//           <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2} mb={5}>
//             <Box>
//               <Button onClick={handleSave} variant='contained'>Save </Button>
//             </Box>

//             <Box>
//               <Button onClick={handleDrawerClose} variant='outlined'>Cancel </Button>
//             </Box>
//           </Box>
//         </Drawer>

//       </Box>

//     </Box>
//   )
// }

// export default CustomerMaster

// import React, { useMemo, useState } from 'react'
// import { Alert, useMediaQuery, Box, Button, Typography, TextField, Drawer, Divider, FormControl, Select, MenuItem, } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import Grid from '@mui/material/Grid';
// import { MaterialReactTable, } from 'material-react-table';
// import customermaster from './customermaster.json'
// import { useTheme } from "@mui/material/styles";

// const CustomerMaster = () => {
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const handleDrawerOpen = () => {
//     setIsDrawerOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setIsDrawerOpen(false);
//   };
//   //for tables
//   const columns = useMemo(() => {
//     return [
//       {
//         accessorKey: 'srNo',
//         header: 'Sr No',
//         size: 100,
//       },
//       {
//         accessorKey: 'FromDate',
//         header: 'From Date',
//         size: 150,
//       },
//       {
//         accessorKey: 'ToDate',
//         header: 'To Date',
//         size: 150,
//       },
//       {
//         accessorKey: 'Basic',
//         header: 'Basic',
//         size: 150,
//       },


//       {
//         id: 'actions',
//         header: 'Actions',
//         size: 150,

//       },
//     ];
//   }, []);

//   //validation
//   const [formValues, setFormValues] = useState({
//     account: "",
//     employee: "",
//     fromDate: null,
//     toDate: null,
//     basic: "",
//     hra: "",
//     cca: "",
//     occ: "",
//     pt: "",
//     labourWelfare: "",
//     tea: "",
//     conveyance: "",
//     grossSalary: "",
//     pf: "",
//     esi: "",
//     totalDeduction: "",
//     GSTNo:''
//   });

//   const [formErrors, setFormErrors] = useState({});

//   const handleChange = (field, value) => {
//     setFormValues((prev) => ({ ...prev, [field]: value }));
//     setFormErrors((prev) => ({ ...prev, [field]: "" })); // Clear error on change
//   };

//   const validate = () => {
//     const errors = {};

//     if (!formValues.account) errors.account = "Account is required.";
//     if (!formValues.employee) errors.employee = "Employee is required.";
//     if (!formValues.fromDate) errors.fromDate = "From Date is required.";
//     if (!formValues.toDate) errors.toDate = "To Date is required.";
//     if (!formValues.basic) errors.basic = "Basic is required.";
//     if (!formValues.hra) errors.hra = "HRA is required.";
//     if (!formValues.cca) errors.cca = "CCA is required.";
//     if (!formValues.occ) errors.occ = "OCC is required.";

//     if (!formValues.pt) errors.pt = "PT is required.";
//     if (!formValues.labourWelfare) errors.labourWelfare = "Labour Welfare is required.";
//     if (!formValues.tea) errors.tea = "Tea is required.";
//     if (!formValues.conveyance) errors.conveyance = "Conveyance is required.";
//     if (!formValues.grossSalary)
//       errors.grossSalary = "Gross Salary is required.";
//     if (!formValues.pf) errors.pf = "PF is required.";
//     if (!formValues.esi) errors.esi = "ESI is required.";
//     if (!formValues.totalDeduction) errors.totalDeduction = "Total Deduction is required.";
//     if (!formValues.GSTNo) errors.GSTNo = "GST No is required.";

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0; // Return true if no errors
//   };

//   const handleSave = () => {
//     if (validate()) {
//       // Perform save action
//       console.log("Form submitted:", formValues);
//       handleDrawerClose();
//     }
//   };


//   return (
//     <Box>
//       <Box sx={{ background: 'rgb(238, 246, 252)', borderRadius: '10px', p: 5, height: 'auto' }}>
//         <Box textAlign={'center'}>
//           <Typography variant='h4'><b>Customer Master</b></Typography>
//         </Box>

//         <Box sx={{ display: 'flex', gap: 3 }}>
//           <Button variant="contained" onClick={handleDrawerOpen}>Create Customer Master </Button>
//         </Box>

//         <Box mt={4}>
//           <MaterialReactTable
//             columns={columns}
//             data={customermaster}

//             enableColumnOrdering
//             enableColumnResizing
//           />
//         </Box>

//         <Drawer
//           anchor="right"
//           open={isDrawerOpen}
//           onClose={handleDrawerClose}
//           PaperProps={{
//             sx: {
//               borderRadius: isSmallScreen ? "0" : "10px 0 0 10px",
//               width: isSmallScreen ? "100%" : "650px",
//               zIndex: 1000,
//             },
//           }}
//         >
//           <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <Typography m={2} variant="h6"><b>Create Customer Master</b></Typography>
//             <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleDrawerClose} />
//           </Box>
//           <Divider />


//           <Box m={2}>
//             <Grid container spacing={2}>

//               <Grid item xs={6}>
//                 <Box>
//                   <Typography>Account</Typography>
//                   <FormControl fullWidth size="small" margin="normal">
//                     <Select>
//                       <MenuItem value=""></MenuItem>
//                     </Select>
//                     {(!!formErrors.account) && (
//                       <Alert severity="error" sx={{
//                         width: '92%',
//                         p: '2',
//                         pl: '4%', height: '23px',
//                         borderRadius: '8px',
//                         borderTopLeftRadius: '0',
//                         borderTopRightRadius: '0',
//                         fontSize: '12px',
//                         display: 'flex',
//                         backgroundColor: "#ffdddd",
//                         color: "#a00",
//                         alignItems: 'center',
//                         '& .MuiAlert-icon': {
//                           fontSize: '16px',
//                           mr: '8px',
//                         },
//                       }}>
//                         {formErrors.account}
//                       </Alert>
//                     )}
//                   </FormControl>
//                 </Box>
//               </Grid>
//               <Grid item xs={6}>
//                 <Box>
//                   <Typography>Employee</Typography>
//                   <FormControl fullWidth size="small" margin="normal">
//                     <Select>
//                       <MenuItem value=""></MenuItem>
//                     </Select>
//                     {(!!formErrors.employee) && (
//                       <Alert severity="error" sx={{
//                         width: '92%',
//                         p: '2',
//                         pl: '4%', height: '23px',
//                         borderRadius: '8px',
//                         borderTopLeftRadius: '0',
//                         borderTopRightRadius: '0',
//                         fontSize: '12px',
//                         display: 'flex',
//                         backgroundColor: "#ffdddd",
//                         color: "#a00",
//                         alignItems: 'center',
//                         '& .MuiAlert-icon': {
//                           fontSize: '16px',
//                           mr: '8px',
//                         },
//                       }}>
//                         {formErrors.employee}
//                       </Alert>
//                     )}
//                   </FormControl>
//                 </Box>
//               </Grid>


//               <Grid item xs={6}>
//                 <LocalizationProvider dateAdapter={AdapterDateFns}>
//                   <Box>
//                     <Typography>From Date</Typography>
//                     <DatePicker
//                       format="dd/MM/yyyy"
//                       // value={formValues.fromDate}
//                       // onChange={(e) => handleChange("fromDate", e.target.value)}
//                       // error={!!formErrors.fromDate}
//                       sx={{ width: "100%" }}

//                       renderInput={(params) => <TextField {...params} size="small" />}
//                     />
//                   </Box>
//                   {(!!formErrors.fromDate) && (
//                     <Alert severity="error" sx={{
//                       width: '92%',
//                       p: '2',
//                       pl: '4%', height: '23px',
//                       borderRadius: '8px',
//                       borderTopLeftRadius: '0',
//                       borderTopRightRadius: '0',
//                       fontSize: '12px',
//                       display: 'flex',
//                       backgroundColor: "#ffdddd",
//                       color: "#a00",
//                       alignItems: 'center',
//                       '& .MuiAlert-icon': {
//                         fontSize: '16px',
//                         mr: '8px',
//                       },
//                     }}>
//                       {formErrors.fromDate}
//                     </Alert>
//                   )}
//                 </LocalizationProvider>
//               </Grid>
//               <Grid item xs={6}>
//                 <LocalizationProvider dateAdapter={AdapterDateFns}>
//                   <Box>
//                     <Typography>To Date</Typography>
//                     <DatePicker
//                       format="dd/MM/yyyy"
//                       // value={formValues.toDate}
//                       // onChange={(e) => handleChange("toDate", e.target.value)}
//                       // error={!!formErrors.toDate}
//                       sx={{ width: "100%" }}
//                       renderInput={(params) => <TextField {...params} size="small" />}
//                     />
//                   </Box>
//                   {(!!formErrors.toDate) && (
//                     <Alert severity="error" sx={{
//                       width: '92%',
//                       p: '2',
//                       pl: '4%', height: '23px',
//                       borderRadius: '8px',
//                       borderTopLeftRadius: '0',
//                       borderTopRightRadius: '0',
//                       fontSize: '12px',
//                       display: 'flex',
//                       backgroundColor: "#ffdddd",
//                       color: "#a00",
//                       alignItems: 'center',
//                       '& .MuiAlert-icon': {
//                         fontSize: '16px',
//                         mr: '8px',
//                       },
//                     }}>
//                       {formErrors.toDate}
//                     </Alert>
//                   )}
//                 </LocalizationProvider>
//               </Grid>


//               <Grid item xs={6}>
//                 <Box>
//                   <Typography>Basic</Typography>
//                   <TextField onChange={(e) => handleChange("basic", e.target.value)} value={formValues.basic} error={!!formErrors.basic} size="small" margin="normal" placeholder="Enter Basic" fullWidth />
//                   {(!!formErrors.basic) && (
//                     <Alert severity="error" sx={{
//                       width: '92%',
//                       p: '2',
//                       pl: '4%', height: '23px',
//                       borderRadius: '8px',
//                       borderTopLeftRadius: '0',
//                       borderTopRightRadius: '0',
//                       fontSize: '12px',
//                       display: 'flex',
//                       backgroundColor: "#ffdddd",
//                       color: "#a00",
//                       alignItems: 'center',
//                       '& .MuiAlert-icon': {
//                         fontSize: '16px',
//                         mr: '8px',
//                       },
//                     }}>
//                       {formErrors.basic}
//                     </Alert>
//                   )}
//                 </Box>
//               </Grid>
//               <Grid item xs={6}>
//                 <Box>
//                   <Typography>HRA</Typography>
//                   <TextField onChange={(e) => handleChange("hra", e.target.value)} value={formValues.hra} error={!!formErrors.hra} size="small" margin="normal" type="number" placeholder="Enter HRA" fullWidth />
//                   {(!!formErrors.hra) && (
//                     <Alert severity="error" sx={{
//                       width: '92%',
//                       p: '2',
//                       pl: '4%', height: '23px',
//                       borderRadius: '8px',
//                       borderTopLeftRadius: '0',
//                       borderTopRightRadius: '0',
//                       fontSize: '12px',
//                       display: 'flex',
//                       backgroundColor: "#ffdddd",
//                       color: "#a00",
//                       alignItems: 'center',
//                       '& .MuiAlert-icon': {
//                         fontSize: '16px',
//                         mr: '8px',
//                       },
//                     }}>
//                       {formErrors.hra}
//                     </Alert>
//                   )}
//                 </Box>
//               </Grid>


//               <Grid item xs={6}>
//                 <Box>
//                   <Typography>CCA</Typography>
//                   <TextField onChange={(e) => handleChange("cca", e.target.value)} value={formValues.cca} error={!!formErrors.cca} size="small" margin="normal" placeholder="Enter CCA" fullWidth />
//                   {(!!formErrors.cca) && (
//                     <Alert severity="error" sx={{
//                       width: '92%',
//                       p: '2',
//                       pl: '4%', height: '23px',
//                       borderRadius: '8px',
//                       borderTopLeftRadius: '0',
//                       borderTopRightRadius: '0',
//                       fontSize: '12px',
//                       display: 'flex',
//                       backgroundColor: "#ffdddd",
//                       color: "#a00",
//                       alignItems: 'center',
//                       '& .MuiAlert-icon': {
//                         fontSize: '16px',
//                         mr: '8px',
//                       },
//                     }}>
//                       {formErrors.cca}
//                     </Alert>
//                   )}
//                 </Box>
//               </Grid>
//               <Grid item xs={6}>
//                 <Box>
//                   <Typography>OCC</Typography>
//                   <TextField onChange={(e) => handleChange("occ", e.target.value)} value={formValues.occ} error={!!formErrors.occ} size="small" margin="normal" type="number" placeholder="Enter OCC" fullWidth />
//                   {(!!formErrors.occ) && (
//                     <Alert severity="error" sx={{
//                       width: '92%',
//                       p: '2',
//                       pl: '4%', height: '23px',
//                       borderRadius: '8px',
//                       borderTopLeftRadius: '0',
//                       borderTopRightRadius: '0',
//                       fontSize: '12px',
//                       display: 'flex',
//                       backgroundColor: "#ffdddd",
//                       color: "#a00",
//                       alignItems: 'center',
//                       '& .MuiAlert-icon': {
//                         fontSize: '16px',
//                         mr: '8px',
//                       },
//                     }}>
//                       {formErrors.occ}
//                     </Alert>
//                   )}
//                 </Box>
//               </Grid>


//               <Grid item xs={6}>
//                 <Box>
//                   <Typography>PT</Typography>
//                   <TextField onChange={(e) => handleChange("pt", e.target.value)} value={formValues.pt} error={!!formErrors.pt} size="small" margin="normal" placeholder="Enter PT" fullWidth />
//                   {(!!formErrors.pt) && (
//                     <Alert severity="error" sx={{
//                       width: '92%',
//                       p: '2',
//                       pl: '4%', height: '23px',
//                       borderRadius: '8px',
//                       borderTopLeftRadius: '0',
//                       borderTopRightRadius: '0',
//                       fontSize: '12px',
//                       display: 'flex',
//                       backgroundColor: "#ffdddd",
//                       color: "#a00",
//                       alignItems: 'center',
//                       '& .MuiAlert-icon': {
//                         fontSize: '16px',
//                         mr: '8px',
//                       },
//                     }}>
//                       {formErrors.pt}
//                     </Alert>
//                   )}
//                 </Box>
//               </Grid>
//               <Grid item xs={6}>
//                 <Box>
//                   <Typography>Labour Welfare</Typography>
//                   <TextField onChange={(e) => handleChange("labourWelfare", e.target.value)} value={formValues.labourWelfare} error={!!formErrors.labourWelfare} size="small" margin="normal" placeholder="Enter Labour Welfare" fullWidth />
//                   {(!!formErrors.labourWelfare) && (
//                     <Alert severity="error" sx={{
//                       width: '92%',
//                       p: '2',
//                       pl: '4%', height: '23px',
//                       borderRadius: '8px',
//                       borderTopLeftRadius: '0',
//                       borderTopRightRadius: '0',
//                       fontSize: '12px',
//                       display: 'flex',
//                       backgroundColor: "#ffdddd",
//                       color: "#a00",
//                       alignItems: 'center',
//                       '& .MuiAlert-icon': {
//                         fontSize: '16px',
//                         mr: '8px',
//                       },
//                     }}>
//                       {formErrors.labourWelfare}
//                     </Alert>
//                   )}
//                 </Box>
//               </Grid>


//               <Grid item xs={6}>
//                 <Box>
//                   <Typography>Tea</Typography>
//                   <TextField onChange={(e) => handleChange("tea", e.target.value)} value={formValues.tea} error={!!formErrors.tea} size="small" margin="normal" type="number" placeholder="Enter Tea" fullWidth />
//                   {(!!formErrors.tea) && (
//                     <Alert severity="error" sx={{
//                       width: '92%',
//                       p: '2',
//                       pl: '4%', height: '23px',
//                       borderRadius: '8px',
//                       borderTopLeftRadius: '0',
//                       borderTopRightRadius: '0',
//                       fontSize: '12px',
//                       display: 'flex',
//                       backgroundColor: "#ffdddd",
//                       color: "#a00",
//                       alignItems: 'center',
//                       '& .MuiAlert-icon': {
//                         fontSize: '16px',
//                         mr: '8px',
//                       },
//                     }}>
//                       {formErrors.tea}
//                     </Alert>
//                   )}
//                 </Box>
//               </Grid>
//               <Grid item xs={6}>
//                 <Box>
//                   <Typography>Conveyance</Typography>
//                   <TextField onChange={(e) => handleChange("conveyance", e.target.value)} value={formValues.conveyance} error={!!formErrors.conveyance} size="small" margin="normal" type="number" placeholder="Enter Conveyance" fullWidth />
//                   {(!!formErrors.conveyance) && (
//                     <Alert severity="error" sx={{
//                       width: '92%',
//                       p: '2',
//                       pl: '4%', height: '23px',
//                       borderRadius: '8px',
//                       borderTopLeftRadius: '0',
//                       borderTopRightRadius: '0',
//                       fontSize: '12px',
//                       display: 'flex',
//                       backgroundColor: "#ffdddd",
//                       color: "#a00",
//                       alignItems: 'center',
//                       '& .MuiAlert-icon': {
//                         fontSize: '16px',
//                         mr: '8px',
//                       },
//                     }}>
//                       {formErrors.conveyance}
//                     </Alert>
//                   )}
//                 </Box>
//               </Grid>


//               <Grid item xs={6}>
//                 <Box>
//                   <Typography>Gross Salary</Typography>
//                   <TextField onChange={(e) => handleChange("grossSalary", e.target.value)} value={formValues.grossSalary} error={!!formErrors.grossSalary} size="small" margin="normal" type="number" placeholder="Enter Gross Salary" fullWidth />
//                   {(!!formErrors.grossSalary) && (
//                     <Alert severity="error" sx={{
//                       width: '92%',
//                       p: '2',
//                       pl: '4%', height: '23px',
//                       borderRadius: '8px',
//                       borderTopLeftRadius: '0',
//                       borderTopRightRadius: '0',
//                       fontSize: '12px',
//                       display: 'flex',
//                       backgroundColor: "#ffdddd",
//                       color: "#a00",
//                       alignItems: 'center',
//                       '& .MuiAlert-icon': {
//                         fontSize: '16px',
//                         mr: '8px',
//                       },
//                     }}>
//                       {formErrors.grossSalary}
//                     </Alert>
//                   )}
//                 </Box>
//               </Grid>
//               <Grid item xs={6}>
//                 <Box>
//                   <Typography>PF</Typography>
//                   <TextField onChange={(e) => handleChange("pf", e.target.value)} value={formValues.pf} error={!!formErrors.pf} size="small" margin="normal" type="number" placeholder="Enter PF" fullWidth />
//                   {(!!formErrors.pf) && (
//                     <Alert severity="error" sx={{
//                       width: '92%',
//                       p: '2',
//                       pl: '4%', height: '23px',
//                       borderRadius: '8px',
//                       borderTopLeftRadius: '0',
//                       borderTopRightRadius: '0',
//                       fontSize: '12px',
//                       display: 'flex',
//                       backgroundColor: "#ffdddd",
//                       color: "#a00",
//                       alignItems: 'center',
//                       '& .MuiAlert-icon': {
//                         fontSize: '16px',
//                         mr: '8px',
//                       },
//                     }}>
//                       {formErrors.pf}
//                     </Alert>
//                   )}
//                 </Box>
//               </Grid>


//               <Grid item xs={6}>
//                 <Box>
//                   <Typography>ESI</Typography>
//                   <TextField onChange={(e) => handleChange("esi", e.target.value)} value={formValues.esi} error={!!formErrors.esi} size="small" margin="normal" placeholder="Enter ESI" fullWidth />
//                   {(!!formErrors.esi) && (
//                     <Alert severity="error" sx={{
//                       width: '92%',
//                       p: '2',
//                       pl: '4%', height: '23px',
//                       borderRadius: '8px',
//                       borderTopLeftRadius: '0',
//                       borderTopRightRadius: '0',
//                       fontSize: '12px',
//                       display: 'flex',
//                       backgroundColor: "#ffdddd",
//                       color: "#a00",
//                       alignItems: 'center',
//                       '& .MuiAlert-icon': {
//                         fontSize: '16px',
//                         mr: '8px',
//                       },
//                     }}>
//                       {formErrors.esi}
//                     </Alert>
//                   )}
//                 </Box>
//               </Grid>
//               <Grid item xs={6}>
//                 <Box>
//                   <Typography>Total Deduction</Typography>
//                   <TextField size="small" margin="normal" onChange={(e) => handleChange("totalDeduction", e.target.value)} value={formValues.totalDeduction} error={!!formErrors.totalDeduction} placeholder="Enter Total Deduction" fullWidth />
//                   {(!!formErrors.totalDeduction) && (
//                     <Alert severity="error" sx={{
//                       width: '92%',
//                       p: '2',
//                       pl: '4%', height: '23px',
//                       borderRadius: '8px',
//                       borderTopLeftRadius: '0',
//                       borderTopRightRadius: '0',

//                       fontSize: '12px',
//                       display: 'flex',
//                       backgroundColor: "#ffdddd",
//                       color: "#a00",
//                       alignItems: 'center',
//                       '& .MuiAlert-icon': {
//                         fontSize: '16px',
//                         mr: '8px',
//                       },
//                     }}>
//                       {formErrors.totalDeduction}
//                     </Alert>
//                   )}
//                 </Box>
//               </Grid>
//             </Grid>



//             <Box >
//               <Typography>GST No</Typography>
//               <TextField onChange={(e) => handleChange("GSTNo", e.target.value)} value={formValues.GSTNo} error={!!formErrors.GSTNo}
//                 size="small" margin="normal" placeholder="Enter GST No" fullWidth />
//               {(!!formErrors.GSTNo) && (
//                 <Alert severity="error" sx={{
//                   width: '92%',
//                   p: '2',
//                   pl: '4%', height: '23px',
//                   borderRadius: '8px',
//                   borderTopLeftRadius: '0',
//                   borderTopRightRadius: '0',
//                   fontSize: '12px',
//                   display: 'flex',
//                   backgroundColor: "#ffdddd",
//                   color: "#a00",
//                   alignItems: 'center',
//                   '& .MuiAlert-icon': {
//                     fontSize: '16px',
//                     mr: '8px',
//                   },
//                 }}>
//                   {formErrors.GSTNo}
//                 </Alert>
//               )}
//             </Box>
//           </Box>




//           <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2} mb={5}>
//             <Box>
//               <Button variant='contained' onClick={handleSave}>Save </Button>
//             </Box>

//             <Box>
//               <Button onClick={handleDrawerClose} variant='outlined'>Cancel </Button>
//             </Box>
//           </Box>
//         </Drawer>

//       </Box>

//     </Box>
//   )
// }

// export default CustomerMaster


































































// // import React, { useMemo, useState } from 'react'
// // import { Box, Button, Typography, TextField, Drawer, Divider, FormControl, Select, MenuItem, InputLabel, Checkbox } from '@mui/material';
// // import CloseIcon from '@mui/icons-material/Close';
// // import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// // import { LocalizationProvider } from "@mui/x-date-pickers";
// // import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// // import Grid from '@mui/material/Grid';
// // import { MaterialReactTable, } from 'material-react-table';
// // import customermaster from './customermaster.json'

// // const CustomerMaster = () => {
// //   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
// //   const handleDrawerOpen = () => {
// //     setIsDrawerOpen(true);
// //   };

// //   const handleDrawerClose = () => {
// //     setIsDrawerOpen(false);
// //   };
// // //for tables
// // const columns = useMemo(() => {
// //   return [
// //     {
// //       accessorKey: 'srNo',
// //       header: 'Sr No',
// //       size: 100,
// //     },
// //     {
// //       accessorKey: 'FromDate',
// //       header: 'From Date',
// //       size: 150,
// //     },
// //     {
// //       accessorKey: 'ToDate',
// //       header: 'To Date',
// //       size: 150,
// //     },
// //     {
// //       accessorKey: 'Basic',
// //       header: 'Basic',
// //       size: 150,
// //     },


// //     {
// //       id: 'actions',
// //       header: 'Actions',
// //       size: 150,

// //     },
// //   ];
// // }, []);
// //   return (
// //     <Box>
// //       <Box sx={{ background: 'rgb(238, 246, 252)', borderRadius: '10px', p: 5, height: 'auto' }}>
// //         <Box textAlign={'center'}>
// //           <Typography variant='h4'><b>Customer Master</b></Typography>
// //         </Box>

// //         <Box sx={{ display: 'flex', gap: 3 }}>
// //           <Button variant="contained" onClick={handleDrawerOpen}>Create Customer Master </Button>
// //         </Box>

// //         <Box mt={4}>
// //           <MaterialReactTable
// //             columns={columns}
// //             data={customermaster}

// //             enableColumnOrdering
// //             enableColumnResizing
// //           />
// //         </Box>

// //         <Drawer
// //           anchor="right"
// //           open={isDrawerOpen}
// //           onClose={handleDrawerClose}
// //           PaperProps={{
// //             sx: { width: '50%' }, // Set the width here
// //           }}
// //         >
// //           <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
// //             <Typography m={2} variant="h6"><b>Create Customer Master</b></Typography>
// //             <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleDrawerClose} />
// //           </Box>
// //           <Divider />

// //           {/* <Box>
// //           <Box display="flex" alignItems="center" gap={2}>
// //             <Box flex={1} m={2}>
// //               <Box>
// //                 <Typography>Account</Typography>
// //                 <FormControl fullWidth size="small" margin="normal">

// //                   <Select>
// //                     <MenuItem value=""></MenuItem>
// //                   </Select>
// //                 </FormControl>
// //               </Box>

// //               <Box mt={1}>
// //                 <Typography>Basic</Typography>
// //                 <TextField size="small" margin="normal" placeholder="Enter Basic" fullWidth />
// //               </Box>

// //               <Box mt={1}>
// //                 <Typography>CCA</Typography>
// //                 <TextField size="small" margin="normal" placeholder="Enter CCA" fullWidth />
// //               </Box>

// //               <Box mt={1}>
// //                 <Typography>PT</Typography>
// //                 <TextField size="small" margin="normal" placeholder="Enter PT" fullWidth />
// //                 </Box>
// //                 </Box>





// //             <Box flex={1} m={2}>
// //             <Box>
// //                 <Typography>Employee</Typography>
// //                 <FormControl fullWidth size="small" margin="normal">

// //                   <Select>
// //                     <MenuItem value=""></MenuItem>
// //                   </Select>
// //                 </FormControl>
// //               </Box>

// //               <Box mt={1}>
// //                 <Typography>HRA</Typography>
// //                 <TextField size="small" margin="normal" type='number' placeholder="Enter HRA" fullWidth />
// //               </Box>

// //               <Box mt={1}>
// //                 <Typography>OCC</Typography>
// //                 <TextField size="small" margin="normal" type='number' placeholder="Enter OCC" fullWidth />
// //               </Box>

// //               <Box mt={1}>
// //                 <Typography>Labour Welfare</Typography>
// //                 <TextField size="small" margin="normal" placeholder="Enter Labour Welfare " fullWidth />
// //               </Box>
// //             </Box>


// //             <Box flex={1} m={2}>
// //             <Box>
// //             <LocalizationProvider dateAdapter={AdapterDateFns}>
// //                     <Box  >
// //                       <Typography > From Date</Typography>
// //                       <DatePicker

// //                         format="dd/MM/yyyy"
// //                         sx={{ width: "100%", }}
// //                         renderInput={(params) => <TextField {...params} size="small" />}
// //                       />
// //                     </Box>
// //                   </LocalizationProvider>
// //               </Box>

// //               <Box mt={1}>
// //                 <Typography>Tea</Typography>
// //                 <TextField size="small" margin="normal" type='number' placeholder="Enter Tea" fullWidth />
// //               </Box>

// //               <Box mt={1}>
// //                 <Typography>Gross Salary</Typography>
// //                 <TextField size="small" margin="normal" type='number' placeholder="Enter Gross Salary" fullWidth />
// //               </Box>

// //               <Box mt={1}>
// //                 <Typography>ESI</Typography>
// //                 <TextField size="small" margin="normal" placeholder="Enter ESI " fullWidth />
// //               </Box>
// //             </Box>




// //             <Box flex={1} m={2}>
// //             <Box>
// //             <LocalizationProvider dateAdapter={AdapterDateFns}>
// //                     <Box  >
// //                       <Typography > To Date</Typography>
// //                       <DatePicker

// //                         format="dd/MM/yyyy"
// //                         sx={{ width: "100%", }}
// //                         renderInput={(params) => <TextField {...params} size="small" />}
// //                       />
// //                     </Box>
// //                   </LocalizationProvider>
// //               </Box>

// //               <Box mt={1}>
// //                 <Typography>Conveyance</Typography>
// //                 <TextField size="small" margin="normal" type='number' placeholder="Enter Conveyance" fullWidth />
// //               </Box>

// //               <Box mt={1}>
// //                 <Typography>PF</Typography>
// //                 <TextField size="small" margin="normal" type='number' placeholder="Enter PF" fullWidth />
// //               </Box>

// //               <Box mt={1}>
// //                 <Typography>Total Deduction</Typography>
// //                 <TextField size="small" margin="normal" placeholder="Enter Total Deduction " fullWidth />
// //               </Box>
// //             </Box>


// //           </Box>


// //           </Box> */}
// //           <Box m={2}>
// //             <Grid container spacing={2}>

// //               <Grid item xs={6}>
// //                 <Box>
// //                   <Typography>Account</Typography>
// //                   <FormControl fullWidth size="small" margin="normal">
// //                     <Select>
// //                       <MenuItem value=""></MenuItem>
// //                     </Select>
// //                   </FormControl>
// //                 </Box>
// //               </Grid>
// //               <Grid item xs={6}>
// //                 <Box>
// //                   <Typography>Employee</Typography>
// //                   <FormControl fullWidth size="small" margin="normal">
// //                     <Select>
// //                       <MenuItem value=""></MenuItem>
// //                     </Select>
// //                   </FormControl>
// //                 </Box>
// //               </Grid>


// //               <Grid item xs={6}>
// //                 <LocalizationProvider dateAdapter={AdapterDateFns}>
// //                   <Box>
// //                     <Typography>From Date</Typography>
// //                     <DatePicker
// //                       format="dd/MM/yyyy"
// //                       sx={{ width: "100%" }}
// //                       renderInput={(params) => <TextField {...params} size="small" />}
// //                     />
// //                   </Box>
// //                 </LocalizationProvider>
// //               </Grid>
// //               <Grid item xs={6}>
// //                 <LocalizationProvider dateAdapter={AdapterDateFns}>
// //                   <Box>
// //                     <Typography>To Date</Typography>
// //                     <DatePicker
// //                       format="dd/MM/yyyy"
// //                       sx={{ width: "100%" }}
// //                       renderInput={(params) => <TextField {...params} size="small" />}
// //                     />
// //                   </Box>
// //                 </LocalizationProvider>
// //               </Grid>


// //               <Grid item xs={6}>
// //                 <Box>
// //                   <Typography>Basic</Typography>
// //                   <TextField size="small" margin="normal" placeholder="Enter Basic" fullWidth />
// //                 </Box>
// //               </Grid>
// //               <Grid item xs={6}>
// //                 <Box>
// //                   <Typography>HRA</Typography>
// //                   <TextField size="small" margin="normal" type="number" placeholder="Enter HRA" fullWidth />
// //                 </Box>
// //               </Grid>


// //               <Grid item xs={6}>
// //                 <Box>
// //                   <Typography>CCA</Typography>
// //                   <TextField size="small" margin="normal" placeholder="Enter CCA" fullWidth />
// //                 </Box>
// //               </Grid>
// //               <Grid item xs={6}>
// //                 <Box>
// //                   <Typography>OCC</Typography>
// //                   <TextField size="small" margin="normal" type="number" placeholder="Enter OCC" fullWidth />
// //                 </Box>
// //               </Grid>


// //               <Grid item xs={6}>
// //                 <Box>
// //                   <Typography>PT</Typography>
// //                   <TextField size="small" margin="normal" placeholder="Enter PT" fullWidth />
// //                 </Box>
// //               </Grid>
// //               <Grid item xs={6}>
// //                 <Box>
// //                   <Typography>Labour Welfare</Typography>
// //                   <TextField size="small" margin="normal" placeholder="Enter Labour Welfare" fullWidth />
// //                 </Box>
// //               </Grid>


// //               <Grid item xs={6}>
// //                 <Box>
// //                   <Typography>Tea</Typography>
// //                   <TextField size="small" margin="normal" type="number" placeholder="Enter Tea" fullWidth />
// //                 </Box>
// //               </Grid>
// //               <Grid item xs={6}>
// //                 <Box>
// //                   <Typography>Conveyance</Typography>
// //                   <TextField size="small" margin="normal" type="number" placeholder="Enter Conveyance" fullWidth />
// //                 </Box>
// //               </Grid>


// //               <Grid item xs={6}>
// //                 <Box>
// //                   <Typography>Gross Salary</Typography>
// //                   <TextField size="small" margin="normal" type="number" placeholder="Enter Gross Salary" fullWidth />
// //                 </Box>
// //               </Grid>
// //               <Grid item xs={6}>
// //                 <Box>
// //                   <Typography>PF</Typography>
// //                   <TextField size="small" margin="normal" type="number" placeholder="Enter PF" fullWidth />
// //                 </Box>
// //               </Grid>


// //               <Grid item xs={6}>
// //                 <Box>
// //                   <Typography>ESI</Typography>
// //                   <TextField size="small" margin="normal" placeholder="Enter ESI" fullWidth />
// //                 </Box>
// //               </Grid>
// //               <Grid item xs={6}>
// //                 <Box>
// //                   <Typography>Total Deduction</Typography>
// //                   <TextField size="small" margin="normal" placeholder="Enter Total Deduction" fullWidth />
// //                 </Box>
// //               </Grid>
// //             </Grid>
// //           </Box>




// //           <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2} mb={5}>
// //             <Box>
// //               <Button variant='contained'>Save </Button>
// //             </Box>

// //             <Box>
// //               <Button onClick={handleDrawerClose} variant='outlined'>Cancel </Button>
// //             </Box>
// //           </Box>
// //         </Drawer>

// //       </Box>

// //     </Box>
// //   )
// // }

// // export default CustomerMaster


import React, { useMemo, useState, useEffect } from 'react'
import { Menu, Alert, Box, useMediaQuery, Button, IconButton, Typography, TextField, Drawer, Divider, FormControl, Select, MenuItem, FormControlLabel, Checkbox } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { MaterialReactTable, } from 'material-react-table';
import suppliermaster from './suppliermaster.json'
import { useTheme } from "@mui/material/styles";
import '../Components/common.css'
import axios from 'axios';
import { toast } from "react-toastify";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PhoneInput from "react-phone-input-2";

const CustomerMaster = () => {
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
  //tble data
  const [Id, setID] = useState('')
  const [data, setData] = useState([]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [currentRow, setCurrentRow] = useState(null);

  const handleMenuOpen = (event, row) => {
    setAnchorEl(event.currentTarget);
    setCurrentRow(row);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const [idwiseData, setIdwiseData] = useState('')

  const handleEdit = () => {
    if (currentRow) {
      console.log("Editing item with ID:", currentRow.original.Id);
      setIdwiseData(currentRow.original.Id)
    }
  };

  console.log('idwiseData', idwiseData)

  // edit drawer
  const [isEditDrawerOpen, setEditIsDrawerOpen] = useState(false);
  const handleEditDrawerOpen = () => {
    handleEdit()
    setEditIsDrawerOpen(true);
    handleMenuOpen(false)

  };

  const handleEditDrawerClose = () => {
    setEditIsDrawerOpen(false);
  };
  console.log(idwiseData)







  const fetchData = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    try {
      const response = await fetch("https://arohanagroapi.microtechsolutions.co.in/php/get/gettable.php?Table=customermaster", requestOptions);
      const result = await response.json();

      console.log("Fetched result:", result);  // Log the fetched data before setting it

      setData(result);
      setID(result.map(item => item.Id));
      console.log('id', setID)

    } catch (error) {
      console.error(error);
    }
  };
  console.log("result", data);
  useEffect(() => {
    fetchData();
  }, []);

  const columns = useMemo(() => {
    return [
      {
        accessorKey: 'srNo',
        header: 'Sr No',
        size: 100,
        Cell: ({ row }) => row.index + 1,
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
        accessorKey: 'DrOrCr',
        header: 'Debit/Credit',
        size: 150,
      },


      {
        accessorKey: 'Address1',
        header: 'Address1',
        size: 150,
      },
      {
        accessorKey: 'Address2',
        header: 'Address2',
        size: 150,
      },
      {
        accessorKey: 'EmailId',
        header: 'Email Id',
        size: 150,
      },
      {
        accessorKey: 'MobileNo',
        header: 'Mobile No',
        size: 150,
      },
      {
        accessorKey: 'GSTNo',
        header: 'GST No',
        size: 150,
      },

      {
        accessorKey: 'CurrentBalance',
        header: 'Current Balance',
        size: 150,
      },

      {
        id: 'actions',
        header: 'Actions',
        size: 150,
        Cell: ({ row }) => (
          <IconButton
            onClick={(event) => handleMenuOpen(event, row)}
          >
            <MoreVertIcon />
          </IconButton>
        ),

      },
    ];
  }, []);

  //
  const [accountCode, setAccountCode] = useState('')
  const [updatedaccountCode, setUpdatedAccountCode] = useState('')
  const [AccountName, setAccountName] = useState('');
  const [updatedAccountName, setUpdatedAccountName] = useState('');

  const [currentBal, setCurrentBal] = useState('');
  const [updatedcurrentBal, setUpdatedCurrentBal] = useState('');

  const [debitCredit, setDebitCredit] = useState('');
  const [updateddebitCredit, setUpdatedDebitCredit] = useState('');

  const [typecode, setTypecode] = useState('C');
  const [updatedtypecode, setUpdatedTypecode] = useState('C');

  const [address1, setAddress1] = useState('');
  const [updatedaddress1, setUpdatedAddress1] = useState('');


  const [address2, setAddress2] = useState('');
  const [updatedaddress2, setUpdatedAddress2] = useState('');

  const [pincode, setPincode] = useState('');
  const [updatedpincode, setUpdatedPincode] = useState('');

  const [email, setEmail] = useState('');
  const [updatedemail, setUpdatedEmail] = useState('');


  const [mobileno, setMobile] = useState('');
  const [updatedmobileno, setupdatedMobile] = useState('');


  const [urls, setURLs] = useState('');
  const [updatedurls, setUpdatedURLs] = useState('');

  const [gstNo, SetGSTNo] = useState('');
  const [updatedgstNo, SetupdatedGSTNo] = useState('');


  const [issystem, setIsSystem] = useState(false);
  const [updatedissystem, setupdatedIsSystem] = useState(false);

  const [gst, setGst] = useState(false);
  const [updatedgst, setupdatedGst] = useState(false);

  const [compliance, setCompliance] = useState(false);
  const [updatedcompliance, setupdatedCompliance] = useState(false);

  //fetch groupId
  const [groupOption, setGroupOption] = useState('');
  const [selectedGroupOption, setSelectedGroupOption] = useState('');

  const fetchGroup = async () => {
    try {
      const response = await fetch(
        "https://arohanagroapi.microtechsolutions.co.in/php/get/gettable.php?Table=accountgroup"
      );
      const result = await response.json();

      console.log("grp info:", result);

      const options = result.map((grp) => ({
        value: grp.Id,
        label: grp.GroupName,
      }));

      setGroupOption(options);
    } catch (error) {
      console.error("Error fetching accounts:", error);
    }
  };


  //fetch SubgroupId
  const [subGroupOption, setSubGroupOption] = useState('');
  const [selectedSubGroupOption, setSelectedSubGroupOption] = useState('');

  const fetchSubGroup = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://arohanagroapi.microtechsolutions.co.in/php/get/gettable.php?Table=subaccountgroup",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("grp info:", result);

        const options = result.map((grp) => ({
          value: grp.Id,
          label: grp.SubGroupName,
        }));

        setSubGroupOption(options);

      })
      .catch((error) => console.error("Error fetching accounts:", error));
  };


  //for cityId
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  const fetchCity = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://arohanagroapi.microtechsolutions.co.in/php/get/gettable.php?Table=city",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("API Response:", result); // Debugging log


        const cityOptions = result.map((city) => ({
          value: city?.Id || "",
          label: city?.CityName,
        }));

        setOptions(cityOptions);

      })
      .catch((error) => console.error("Error fetching cities:", error));
  };
  //for state id 
  const [stateOptions, setStateOptions] = useState([]);
  const [loadingState, setLoadingState] = useState(false);
  const [selectedState, setSelectedState] = useState(null);


  const fetchState = async () => {
    setLoadingState(true);

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://arohanagroapi.microtechsolutions.co.in/php/get/gettable.php?Table=state",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("API Response:", result); // Debugging log


        const stateOptions = result.map((state) => ({
          value: state?.Id || "",
          label: state?.StateName || "Unknown",
        }));

        setStateOptions(stateOptions);

      })
      .catch((error) => console.error("Error fetching states:", error))
      .finally(() => setLoadingState(false));
  };


  useEffect(() => {
    fetchGroup();
    fetchSubGroup();
    fetchCity();
    fetchState()
    fetchDataById(idwiseData)
  }, [idwiseData]);


  //create Customer Master
  const CreateCustomerMaster = () => {
    const urlencoded = new URLSearchParams();
    urlencoded.append("AccountCode", accountCode);
    urlencoded.append("AccountName", AccountName);
    urlencoded.append("GroupId", selectedGroupOption);
    urlencoded.append("SubGroupId", selectedSubGroupOption);
    urlencoded.append("DrOrCr", debitCredit);
    urlencoded.append("TypeCode", "C");
    urlencoded.append("CurrentBalance", currentBal);
    urlencoded.append("Address1", address1);
    urlencoded.append("Address2", address2);
    urlencoded.append("CityId", selectedCity);
    urlencoded.append("StateId", selectedState);
    urlencoded.append("Pincode", pincode);
    urlencoded.append("EmailId", email);
    urlencoded.append("MobileNo", mobileno);
    urlencoded.append("URL", urls);
    urlencoded.append("GSTNo", gstNo);
    urlencoded.append("IsSystem", issystem);
    urlencoded.append("GST", gst);
    urlencoded.append("Compilance", compliance);
    const requestOptions = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios
      .post(
        "https://arohanagroapi.microtechsolutions.co.in/php/postcustomermaster.php",
        urlencoded,
        requestOptions
      )
      .then((response) => {
        console.log("API Response:", response.data);
        handleClearTemplate();
        fetchData();
        handleDrawerClose()
        toast.success("Customer Master created successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleClearTemplate = () => {
    setAccountCode('');
    setAccountName('');
    setSelectedGroupOption('');
    setSelectedSubGroupOption('');
    setDebitCredit(' ');
    setTypecode('');
    setAddress1('');
    setAddress2('');
    setSelectedCity('');
    setSelectedState('');
    setPincode('');
    setEmail(' ');
    setMobile('');
    setURLs('');
    SetGSTNo('');
    setIsSystem('');
    setGst(' ');
    setCompliance('');
  }

  //for delete 
  const DeleteProductMaster = () => {
    // if (currentRow) {
    //   console.log("Editing item with ID:", currentRow.original.Id);

    // }
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    const url = `https://arohanagroapi.microtechsolutions.co.in/php/delete/deletetable.php?Table=customermaster&Id=${currentRow.original.Id}`
    console.log(url)
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)

        toast.success("customermaster deleted successfully!");


      })
      .catch((error) => console.error(error));
  }

  //get Data by Id
  const fetchDataById = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://arohanagroapi.microtechsolutions.co.in/php/getbyid.php?Id=${idwiseData}&Table=customermaster`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setUpdatedAccountCode(result.AccountCode)
        setUpdatedAccountName(result.AccountName)
        setUpdatedCurrentBal(result.CurrentBalance)
        setUpdatedDebitCredit(result.DrOrCr)
        setUpdatedTypecode(result.TypeCode)
        setUpdatedAddress1(result.Address1)
        setUpdatedAddress2(result.Address2)
        setUpdatedPincode(result.Pincode)
        setupdatedMobile(result.MobileNo)
        setUpdatedURLs(result.URL)
        SetupdatedGSTNo(result.GSTNo)
        setupdatedIsSystem(result.IsSystem)
        setupdatedGst(result.GST)
        setupdatedCompliance(result.Compilance)
        setSelectedGroupOption(result.GroupId)
        setSelectedSubGroupOption(result.SubGroupId)
        setSelectedCity(result.CityId)
        setSelectedState(result.StateId)
        setUpdatedEmail(result.EmailId)

      })
      .catch((error) => console.error(error));
  };
  // useEffect(() => {
  //   // CreateMaterialMaster();
  //   fetchDataById(idwiseData)
  // }, [idwiseData])


  //update
  // const UpdateCustomerMaster = () => {
  //   const urlencoded = new URLSearchParams();
  //   urlencoded.append("AccountCode", accountCode);
  //   urlencoded.append("AccountName", AccountName);
  //   urlencoded.append("GroupId", selectedGroupOption);
  //   urlencoded.append("SubGroupId", selectedSubGroupOption);
  //   urlencoded.append("DrOrCr", debitCredit);
  //   urlencoded.append("TypeCode", "C");
  //   urlencoded.append("CurrentBalance", currentBal);
  //   urlencoded.append("Address1", address1);
  //   urlencoded.append("Address2", address2);
  //   urlencoded.append("CityId", selectedCity);
  //   urlencoded.append("StateId", selectedState);
  //   urlencoded.append("Pincode", pincode);
  //   urlencoded.append("EmailId", email);
  //   urlencoded.append("MobileNo", mobileno);
  //   urlencoded.append("URL", urls);
  //   urlencoded.append("GSTNo", gstNo);
  //   urlencoded.append("IsSystem", issystem);
  //   urlencoded.append("GST", gst);
  //   urlencoded.append("Compilance", compliance);
  //   urlencoded.append("Id", idwiseData);
  //   const requestOptions = {
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //   };

  //   axios
  //     .post(
  //       "https://arohanagroapi.microtechsolutions.co.in/php/updatecustomermaster.php",
  //       urlencoded,
  //       requestOptions
  //     )
  //     .then((response) => {
  //       console.log("API Response:", response.data);
  //       handleEditDrawerClose()
  //       fetchData();
  //       toast.success("Customer Master Updated successfully");
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };
  const UpdateCustomerMaster = () => {
    const qs = require('qs');
    let data = qs.stringify({
      'AccountCode': updatedaccountCode,
      'AccountName': updatedAccountName,
      'GroupId': selectedGroupOption,
      'SubGroupId': selectedSubGroupOption,
      'DrOrCr': debitCredit,
      'TypeCode': 'C',
      'Address1': updatedaddress1,
      'Address2': updatedaddress2,
      'CityId': selectedCity,
      'StateId': selectedGroupOption,
      'Pincode': updatedpincode,
      'EmailId': updatedemail,
      'MobileNo': updatedmobileno,
      'URL': updatedurls,
      'GSTNo': updatedgstNo,
      'IsSystem': updatedissystem,
      'GST': updatedgst,
      'Compilance': updatedcompliance,
      'CurrentBalance': updatedcurrentBal,
      'Id': idwiseData
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://arohanagroapi.microtechsolutions.co.in/php/updatecustomermaster.php',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        handleEditDrawerClose()
        toast.success("customer Master Updated successfully");

      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <Box>
      <Box textAlign={'center'} >
        <Typography variant='h4' color='var(--complementary-color)'><b>Customer Master</b></Typography>
      </Box>
      <Box sx={{
        //  background: 'rgb(236, 253, 230)', 
        p: 5, height: 'auto'
      }}>


        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button sx={{ background: 'var(--complementary-color)', }}
            variant="contained"
            onClick={handleDrawerOpen}
          >Create Customer Master </Button>
        </Box>


        <Box mt={4}>
          <MaterialReactTable
            columns={columns}
            data={data}
            muiTableHeadCellProps={{
              sx: {

                color: 'var(--primary-color)',

              },
            }}

          />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem
              onClick={handleEditDrawerOpen}
            >Edit </MenuItem>
            <MenuItem
              onClick={DeleteProductMaster}
            >
              Delete</MenuItem>
          </Menu>
        </Box>

        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={handleDrawerClose}
          PaperProps={{
            sx: {
              borderRadius: isSmallScreen ? "0" : "10px 0 0 10px",
              width: isSmallScreen ? "100%" : "650px",
              zIndex: 1000,
            },
          }}
        >
          <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgb(236, 253, 230)' }}>
            <Typography m={2} variant="h6"><b>Create Customer Master</b></Typography>
            <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleDrawerClose} />
          </Box>
          <Divider />

          <Box>
            {/* <Box display="flex" alignItems="center" gap={2}>
              <Box flex={1} >
                <Box m={1.5}>
                  <Typography>Account Code</Typography>
                  <TextField
                    value={accountCode}
                    onChange={(e) => setAccountCode(e.target.value)}
                    size="small" margin="normal" placeholder="Enter Account Code" fullWidth />

                </Box>

                <Box m={1.5}>
                  <Typography> Group  </Typography>
                  <FormControl fullWidth size="small" margin="normal">

                    <Select
                      fullWidth
                      size="small"
                      value={selectedGroupOption}
                      onChange={(event) => setSelectedGroupOption(event.target.value)}
                    >
                      {groupOption.length > 0 ? (
                        groupOption.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem disabled>No options available</MenuItem>
                      )}
                    </Select>

                  </FormControl>
                </Box>

                <Box m={1.5}>
                  <Typography>Current Balance</Typography>
                  <TextField
                    value={currentBal}
                    onChange={(e) => setCurrentBal(e.target.value)}
                    size="small" margin="normal" placeholder="Enter Account Name" fullWidth />

                </Box>


                <Box m={1.5}>
                  <Typography>Type Code</Typography>
                  <TextField
                    size="small" margin="normal" placeholder="Enter Type code" fullWidth />

                </Box>

                <Box m={1.5}>
                  <Typography>Address 1</Typography>
                  <TextField
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                    size="small" margin="normal" placeholder="Enter Address 1" fullWidth />

                </Box>

                <Box m={1.5}>
                  <Typography>City </Typography>
                  <FormControl fullWidth size="small" margin="normal">

                    <Select
                      fullWidth
                      size="small"
                      value={selectedCity || ""}
                      onChange={(event) => setSelectedCity(event.target.value)}
                    >
                      {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>

                  </FormControl>
                </Box>

                <Box m={1.5}>
                  <Typography>Pincode</Typography>
                  <TextField
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    size="small" margin="normal" placeholder="Enter pincode" fullWidth />

                </Box>

                <Box m={1.5}>
                  <Typography>Mobile No</Typography>
                  <PhoneInput
                    country={"in"}
                    value={mobileno}
                    onChange={(phone) => setMobile(phone)}
                    inputProps={{ name: "phone", required: true }}
                    inputStyle={{
                      width: "100%",
                      height: "40px",
                      fontSize: "16px",
                      borderRadius: "5px",
                    }}
                    buttonStyle={{ borderRadius: "5px" }}
                  />

                </Box>

              </Box>





              <Box flex={1} >


                <Box m={1.5}>
                  <Typography>Account Name</Typography>
                  <TextField
                    value={AccountName}
                    onChange={(e) => setAccountName(e.target.value)}
                    size="small" margin="normal" placeholder="Enter Account Name" fullWidth />


                </Box>

                <Box m={1.5}>
                  <Typography>Sub Group Id</Typography>
                  <FormControl fullWidth size="small" margin="normal">

                    <Select
                      fullWidth
                      size="small"
                      value={selectedSubGroupOption}
                      onChange={(event) => setSelectedSubGroupOption(event.target.value)}
                    >
                      {subGroupOption.length > 0 ? (
                        subGroupOption.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem disabled>No options available</MenuItem>
                      )}
                    </Select>

                  </FormControl>
                </Box>

                <Box m={1.5}>
                  <Typography>Debit/Credit </Typography>
                  <FormControl fullWidth size="small" margin="normal">

                    <Select value={debitCredit} onChange={(event, newValue) => setDebitCredit(newValue)}  >
                      <MenuItem value="">D</MenuItem>
                      <MenuItem value="">C</MenuItem>
                    </Select>

                  </FormControl>
                </Box>


                {/* <Box m={1.5}>
                  <Typography>Salesman </Typography>
                  <FormControl fullWidth size="small" margin="normal">

                    <Select>
                      <MenuItem value=""></MenuItem>
                    </Select>

                  </FormControl>
                </Box> */}

            {/* <Box m={1.5}>
                  <Typography>Address 2</Typography>
                  <TextField
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                    size="small" margin="normal" placeholder="Enter Address 2" fullWidth />

                </Box>

                <Box m={1.5}>
                  <Typography>State</Typography>
                  <FormControl fullWidth size="small" margin="normal">

                    <Select
                      fullWidth
                      size="small"
                      value={selectedState || ""}
                      onChange={(event) => setSelectedState(event.target.value)}
                    >
                      {stateOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>

                  </FormControl>
                </Box>

                <Box m={1.5}>
                  <Typography>Email</Typography>
                  <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    size="small" margin="normal" placeholder="Enter Email" fullWidth />

                </Box>

                <Box m={1.5}>
                  <Typography>URL</Typography>
                  <TextField
                    value={url}
                    onChange={(e) => setURL(e.target.value)}
                    size="small" margin="normal" placeholder="Enter URL" fullWidth />

                </Box>


                <Box m={1.5}>
              <Typography>GST No</Typography>
              <TextField
                value={gstNo}
                onChange={(e) => SetGSTNo(e.target.value)}
                size="small" margin="normal" placeholder="Enter GST No" fullWidth />

            </Box>

              </Box>

            </Box> */}


            <Box display="flex" alignItems="flex-start" gap={2}>
              {/* Left Column */}
              <Box flex={1}>
                <Box m={1.5}>
                  <Typography>Account Code</Typography>
                  <TextField
                    value={accountCode}
                    onChange={(e) => setAccountCode(e.target.value)}
                    size="small"
                    placeholder="Enter Account Code"
                    fullWidth
                  />
                </Box>

                <Box m={1.5}>
                  <Typography>Group</Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      value={selectedGroupOption}
                      onChange={(event) => setSelectedGroupOption(event.target.value)}
                    >
                      {groupOption.length > 0 ? (
                        groupOption.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem disabled>No options available</MenuItem>
                      )}
                    </Select>
                  </FormControl>
                </Box>

                <Box m={1.5}>
                  <Typography>Current Balance</Typography>
                  <TextField
                    value={currentBal}
                    onChange={(e) => setCurrentBal(e.target.value)}
                    size="small"
                    placeholder="Enter Current Balance"
                    fullWidth
                  />
                </Box>

                <Box m={1.5}>
                  <Typography>Type Code</Typography>
                  <TextField
                    value={typecode}
                    disabled
                    onChange={(e) => setTypecode(e.target.value)}
                    size="small" placeholder="Enter Type Code" fullWidth />
                </Box>

                <Box m={1.5}>
                  <Typography>Address 1</Typography>
                  <TextField
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                    size="small"
                    placeholder="Enter Address 1"
                    fullWidth
                  />
                </Box>

                <Box m={1.5}>
                  <Typography>City</Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      value={selectedCity || ""}
                      onChange={(event) => setSelectedCity(event.target.value)}
                    >
                      {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>

                <Box m={1.5}>
                  <Typography>Pincode</Typography>
                  <TextField
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    size="small"
                    placeholder="Enter Pincode"
                    fullWidth
                  />
                </Box>

                <Box m={1.5}>
                  <Typography>Mobile No</Typography>
                  <PhoneInput
                    country={"in"}
                    value={mobileno}
                    onChange={(phone) => setMobile(phone)}
                    inputProps={{ name: "phone", required: true }}
                    inputStyle={{
                      width: "100%",
                      height: "40px",
                      fontSize: "16px",
                      borderRadius: "5px",
                    }}
                    buttonStyle={{ borderRadius: "5px" }}
                  />
                </Box>
              </Box>

              {/* Right Column */}
              <Box flex={1}>
                <Box m={1.5}>
                  <Typography>Account Name</Typography>
                  <TextField
                    value={AccountName}
                    onChange={(e) => setAccountName(e.target.value)}
                    size="small"
                    placeholder="Enter Account Name"
                    fullWidth
                  />
                </Box>

                <Box m={1.5}>
                  <Typography>Sub Group Id</Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      value={selectedSubGroupOption}
                      onChange={(event) => setSelectedSubGroupOption(event.target.value)}
                    >
                      {subGroupOption.length > 0 ? (
                        subGroupOption.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem disabled>No options available</MenuItem>
                      )}
                    </Select>
                  </FormControl>
                </Box>

                <Box m={1.5}>
                  <Typography>Debit/Credit</Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      value={debitCredit}
                      onChange={(event) => setDebitCredit(event.target.value)}
                    >
                      <MenuItem value="D">D</MenuItem>
                      <MenuItem value="C">C</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box m={1.5}>
                  <Typography>Address 2</Typography>
                  <TextField
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                    size="small"
                    placeholder="Enter Address 2"
                    fullWidth
                  />
                </Box>

                <Box m={1.5}>
                  <Typography>State</Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      value={selectedState || ""}
                      onChange={(event) => setSelectedState(event.target.value)}
                    >
                      {stateOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>

                <Box m={1.5}>
                  <Typography>Email</Typography>
                  <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    size="small"
                    placeholder="Enter Email"
                    fullWidth
                  />
                </Box>

                <Box m={1.5}>
                  <Typography>URL</Typography>
                  <TextField
                    value={urls}
                    onChange={(e) => setURLs(e.target.value)}
                    size="small"
                    placeholder="Enter URL"
                    fullWidth
                  />
                </Box>

                <Box m={1.5}>
                  <Typography>GST No</Typography>
                  <TextField
                    value={gstNo}
                    onChange={(e) => SetGSTNo(e.target.value)}
                    size="small"
                    placeholder="Enter GST No"
                    fullWidth
                  />
                </Box>
              </Box>
            </Box>

            <Box m={2} display={'flex'} justifyContent={'center'} alignItems={'center'} gap={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={issystem}
                    onChange={(event) => setIsSystem(event.target.checked)}
                  />
                }
                label="Is System"
              />


              <FormControlLabel
                control={<Checkbox

                  checked={gst}
                  onChange={(event) => setGst(event.target.checked)}

                />}
                label="GST "
              />


              <FormControlLabel
                control={<Checkbox
                  checked={compliance}
                  onChange={(event) => setCompliance(event.target.checked)}

                />}
                label="Compliance"
              />
            </Box>

          </Box>


          <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={5} mb={5} mt={3}>
            <Box>
              <Button sx={{
                background: 'var(--primary-color)',
              }} onClick={CreateCustomerMaster} variant='contained'>Save </Button>
            </Box>

            <Box>
              <Button sx={{ borderColor: 'var(--complementary-color)', color: 'var(--complementary-color)' }}
                onClick={handleDrawerClose}
                variant='outlined'>
                <b>Cancel</b>

              </Button>
            </Box>
          </Box>
        </Drawer>


        <Drawer
          anchor="right"
          open={isEditDrawerOpen}
          onClose={handleEditDrawerClose}
          PaperProps={{
            sx: {
              borderRadius: isSmallScreen ? "0" : "10px 0 0 10px",
              width: isSmallScreen ? "100%" : "650px",
              zIndex: 1000,
            },
          }}
        >
          <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgb(236, 253, 230)' }}>
            <Typography m={2} variant="h6"><b>Update Customer Master</b></Typography>
            <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleEditDrawerClose} />
          </Box>
          <Divider />


          <Box>

            <Box display="flex" alignItems="flex-start" gap={2}>
              {/* Left Column */}
              <Box flex={1}>
                <Box m={1.5}>
                  <Typography>Account Code</Typography>
                  <TextField
                    value={updatedaccountCode}
                    onChange={(e) => setUpdatedAccountCode(e.target.value)}
                    size="small"
                    placeholder="Enter Account Code"
                    fullWidth
                  />
                </Box>

                <Box m={1.5}>
                  <Typography>Group</Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      value={selectedGroupOption}
                      onChange={(event) => setSelectedGroupOption(event.target.value)}
                    >
                      {groupOption.length > 0 ? (
                        groupOption.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem disabled>No options available</MenuItem>
                      )}
                    </Select>
                  </FormControl>
                </Box>

                <Box m={1.5}>
                  <Typography>Current Balance</Typography>
                  <TextField
                    value={updatedcurrentBal}
                    onChange={(e) => setUpdatedCurrentBal(e.target.value)}
                    size="small"
                    placeholder="Enter Current Balance"
                    fullWidth
                  />
                </Box>

                <Box m={1.5}>
                  <Typography>Type Code</Typography>
                  <TextField
                    value={updatedtypecode}
                    disabled
                    onChange={(e) => setUpdatedTypecode(e.target.value)}
                    size="small" placeholder="Enter Type Code" fullWidth />
                </Box>

                <Box m={1.5}>
                  <Typography>Address 1</Typography>
                  <TextField
                    value={updatedaddress1}
                    onChange={(e) => setUpdatedAddress1(e.target.value)}
                    size="small"
                    placeholder="Enter Address 1"
                    fullWidth
                  />
                </Box>

                <Box m={1.5}>
                  <Typography>City</Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      value={selectedCity || ""}
                      onChange={(event) => setSelectedCity(event.target.value)}
                    >
                      {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>

                <Box m={1.5}>
                  <Typography>Pincode</Typography>
                  <TextField
                    value={updatedpincode}
                    onChange={(e) => setUpdatedPincode(e.target.value)}
                    size="small"
                    placeholder="Enter Pincode"
                    fullWidth
                  />
                </Box>

                <Box m={1.5}>
                  <Typography>Mobile No</Typography>
                  <PhoneInput
                    country={"in"}
                    value={updatedmobileno}
                    onChange={(phone) => setupdatedMobile(phone)}
                    inputProps={{ name: "phone", required: true }}
                    inputStyle={{
                      width: "100%",
                      height: "40px",
                      fontSize: "16px",
                      borderRadius: "5px",
                    }}
                    buttonStyle={{ borderRadius: "5px" }}
                  />
                </Box>
              </Box>

              {/* Right Column */}
              <Box flex={1}>
                <Box m={1.5}>
                  <Typography>Account Name</Typography>
                  <TextField
                    value={updatedAccountName}
                    onChange={(e) => setUpdatedAccountName(e.target.value)}
                    size="small"
                    placeholder="Enter Account Name"
                    fullWidth
                  />
                </Box>

                <Box m={1.5}>
                  <Typography>Sub Group Id</Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      value={selectedSubGroupOption}
                      onChange={(event) => setSelectedSubGroupOption(event.target.value)}
                    >
                      {subGroupOption.length > 0 ? (
                        subGroupOption.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem disabled>No options available</MenuItem>
                      )}
                    </Select>
                  </FormControl>
                </Box>

                <Box m={1.5}>
                  <Typography>Debit/Credit</Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      value={updateddebitCredit}
                      onChange={(event) => setUpdatedDebitCredit(event.target.value)}
                    >
                      <MenuItem value="D">D</MenuItem>
                      <MenuItem value="C">C</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box m={1.5}>
                  <Typography>Address 2</Typography>
                  <TextField
                    value={updatedaddress2}
                    onChange={(e) => setUpdatedAddress2(e.target.value)}
                    size="small"
                    placeholder="Enter Address 2"
                    fullWidth
                  />
                </Box>

                <Box m={1.5}>
                  <Typography>State</Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      value={selectedState || ""}
                      onChange={(event) => setSelectedState(event.target.value)}
                    >
                      {stateOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>

                <Box m={1.5}>
                  <Typography>Email</Typography>
                  <TextField
                    value={updatedemail}
                    onChange={(e) => setUpdatedEmail(e.target.value)}
                    size="small"
                    placeholder="Enter Email"
                    fullWidth
                  />
                </Box>

                <Box m={1.5}>
                  <Typography>URL</Typography>
                  <TextField
                    value={updatedurls}
                    onChange={(e) => setUpdatedURLs(e.target.value)}
                    size="small"
                    placeholder="Enter URL"
                    fullWidth
                  />
                </Box>

                <Box m={1.5}>
                  <Typography>GST No</Typography>
                  <TextField
                    value={updatedgstNo}
                    onChange={(e) => SetupdatedGSTNo(e.target.value)}
                    size="small"
                    placeholder="Enter GST No"
                    fullWidth
                  />
                </Box>
              </Box>
            </Box>

            <Box m={2} display={'flex'} justifyContent={'center'} alignItems={'center'} gap={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={updatedissystem}
                    onChange={(event) => setupdatedIsSystem(event.target.checked)}
                  />
                }
                label="Is System"
              />


              <FormControlLabel
                control={<Checkbox

                  checked={updatedgst}
                  onChange={(event) => setupdatedGst(event.target.checked)}

                />}
                label="GST "
              />


              <FormControlLabel
                control={<Checkbox
                  checked={updatedcompliance}
                  onChange={(event) => setupdatedCompliance(event.target.checked)}

                />}
                label="Compliance"
              />
            </Box>

          </Box>





          <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2} mt={5}>
            <Box>
              <Button onClick={UpdateCustomerMaster} sx={{
                background: 'var(--primary-color)',
              }} variant='contained'>Save </Button>
            </Box>

            <Box>
              <Button sx={{ borderColor: 'var(--complementary-color)', color: 'var(--complementary-color)' }} onClick={handleEditDrawerClose} variant='outlined'><b>Cancel</b> </Button>
            </Box>
          </Box>
        </Drawer>

      </Box>

    </Box>
  )
}

export default CustomerMaster



