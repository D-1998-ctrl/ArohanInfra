

// import React, { useMemo, useState, useEffect } from 'react'
// import { Alert, useMediaQuery, Box, Button, Typography, TextField, Autocomplete, Drawer, Divider, FormControl, Select, MenuItem, } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import { MaterialReactTable, } from 'material-react-table';
// import suppliermaster from './suppliermaster.json'
// import axios from 'axios';
// import { useTheme } from "@mui/material/styles";
// import { toast } from "react-toastify";

// const MaterialMaster = () => {
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

//   //validation


//   const [formErrors, setFormErrors] = useState({});

//   // const handleChange = (field, value) => {
//   //   setFormValues((prev) => ({ ...prev, [field]: value }));
//   //   setFormErrors((prev) => ({ ...prev, [field]: "" })); // Clear error on change
//   // };
//   const handleChange = (field, value) => {
//     console.log(`${field} selected value:`, value); // Log the selected value
//     setMaterialGroup((prev) => ({ ...prev, [field]: value }));
//     setFormErrors((prev) => ({ ...prev, [field]: "" })); // Clear error on change
//   };
//   const [materialCodeError, setMaterialCodeError] = useState('');
//   const [materialGroupError, setMaterialGroupError] = useState('');


//   const [materialNameError, setMaterialNameError] = useState('');
//   const [brandNameError, setbrandNameError] = useState('');
//   const [purchaseRateError, setPurchaseRateError] = useState('');
//   const [reorderLevelError, setReorderLevelError] = useState('');
//   const [minBalError, setMinBalError] = useState('');
//   const [maxBalError, setMaxBalError] = useState('');

//   const [HSNCodeError, setHSNCodeError] = useState('');
//   const [CGSTError, setCGSTError] = useState('');
//   const [SGSTError, setSGSTError] = useState('');
//   const [IGSTError, setIGSTError] = useState('');



//   const validateForm = () => {
//     let isValid = true;
//     if (!materialCode) {
//       setMaterialCodeError("Material Code is required");
//       isValid = false;
//     } else {
//       setMaterialCodeError('');
//     }
//     // 
//     if (!materialGroup) {
//       setMaterialGroupError("Material Group is required");
//       isValid = false;
//     } else {
//       setMaterialGroupError('');
//     }


//     if (!materialName) {
//       setMaterialNameError("Material Name is required");
//       isValid = false;
//     } else {
//       setMaterialNameError('');
//     }

//     if (!brandName) {
//       setbrandNameError("Brand Name is required");
//       isValid = false;
//     } else {
//       setbrandNameError('');
//     }

//     if (!purchaseRate) {
//       setPurchaseRateError("Purchase Rate is required");
//       isValid = false;
//     } else {
//       setPurchaseRateError('');
//     }

//     if (!reorderLevel) {
//       setReorderLevelError("Reorder Level is required");
//       isValid = false;
//     } else {
//       setReorderLevelError('');
//     }

//     if (!minBal) {
//       setMinBalError("Min Balance is required");
//       isValid = false;
//     } else {
//       setMinBalError('');
//     }

//     if (!maxBal) {
//       setMaxBalError("Max Balance is required");
//       isValid = false;
//     } else {
//       setMaxBalError('');


//     } if (!HSNCode) {
//       setHSNCodeError("HSN Code is required");
//       isValid = false;
//     } else {
//       setHSNCodeError('');
//     }

//     if (!CGST) {
//       setCGSTError("CGST is required");
//       isValid = false;
//     } else {
//       setCGSTError('');
//     }


//     if (!CGST) {
//       setCGSTError("CGST is required");
//       isValid = false;
//     } else {
//       setCGSTError('');
//     }


//     if (!SGST) {
//       setSGSTError("SGST is required");
//       isValid = false;
//     } else {
//       setSGSTError('');
//     }

//     if (!IGST) {
//       setIGSTError("IGST is required");
//       isValid = false;
//     } else {
//       setIGSTError('')
//     }

//     return isValid;

//   };


//   //Intigration
//   const [materialCode, setMaterialCode] = useState("");
//   const [materialGroup, setMaterialGroup] = useState("");
//   const [materialName, setMaterialName] = useState("");


//   const [brandName, setBrandName] = useState("");
//   const [purchaseRate, setPurchaseRate] = useState('');


//   const [reorderLevel, setReorderLevel] = useState("");
//   const [minBal, setMinBal] = useState("");
//   const [maxBal, setMaxBal] = useState("");


//   const [HSNCode, setHSNCode] = useState("");
//   const [CGST, setCGST] = useState("");
//   const [SGST, setSGST] = useState("");
//   const [IGST, setIGST] = useState("");



//   const CreateMaterialMaster = () => {
//     if (!validateForm()) {
//       return; // Prevent form submission if validation fails
//     }

//     const urlencoded = new URLSearchParams();
//     console.log("MaterialCode:", materialCode);
//     console.log("MaterialGroupId:", materialGroup);
//     console.log("MaterialName:", materialName);
//     console.log("BrandName:", brandName);
//     console.log("PurchaseRate:", purchaseRate);
//     console.log("ReOrderLevel:", reorderLevel);
//     console.log("MinBalance:", minBal);
//     console.log("MaxBalance:", maxBal);
//     console.log("HSNCode:", HSNCode);
//     console.log("CGSTPercentage:", CGST);
//     console.log("SGSTPercentage:", SGST);
//     console.log("IGSTPercentage:", IGST);
//     urlencoded.append("MaterialCode", materialCode);
//     urlencoded.append("MaterialGroupId", materialGroup);
//     urlencoded.append("MaterialName", materialName);
//     urlencoded.append("BrandName", brandName);
//     urlencoded.append("PurchaseRate", purchaseRate);
//     urlencoded.append("ReOrderLevel", reorderLevel);
//     urlencoded.append("MinBalance", minBal);
//     urlencoded.append("MaxBalance", maxBal);
//     urlencoded.append("HSNCode", HSNCode);
//     urlencoded.append("CGSTPercentage", CGST);
//     urlencoded.append("SGSTPercentage", SGST);
//     urlencoded.append("IGSTPercentage", IGST);

//     const requestOptions = {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     };

//     axios
//       .post(
//         "https://arohanagroapi.microtechsolutions.co.in/php/postmaterialmaster.php",
//         urlencoded,
//         requestOptions
//       )
//       .then((response) => {
//         console.log("API Response:", response.data);
//         if (response && response.message === "ChatTemplate created successfully") {
//           handleClearTemplate();

//           toast.success("Material Master created successfully");

//         } else {
//           toast.error(response.message || "Failed to create Material Master created");
//         }
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };


//   const handleClearTemplate = () => {
//     setMaterialCode('');
//     setMaterialGroup('');
//     setMaterialName('');
//     setBrandName('');
//     setPurchaseRate('');
//     setReorderLevel('');
//     setMinBal('');
//     setMaxBal('');
//     setHSNCode('');
//     setCGST('');
//     setSGST('');
//     setIGST('')
//   }

//   useEffect(() => {
//     CreateMaterialMaster();
//   }, []);


//   const [materialGroups, setMaterialGroups] = useState([]);

//   // Fetch data from API
//   useEffect(() => {
//     axios
//       .get("https://arohanagroapi.microtechsolutions.co.in/php/get/gettable.php?Table=Materialmaster")
//       .then((response) => {
//         if (response.data && Array.isArray(response.data)) {
//           // Extract unique MaterialGroupId values
//           const uniqueGroups = [...new Set(response.data.map(item => item.MaterialGroupId))];
//           setMaterialGroups(uniqueGroups);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching Material Groups:", error);
//         setMaterialGroupError("Failed to load Material Groups.");
//       });
//   }, []);

//   return (
//     <Box>
//       <Box sx={{ background: 'rgb(238, 246, 252)', borderRadius: '10px', p: 5, height: 'auto' }}>
//         <Box textAlign={'center'}>
//           <Typography variant='h4'><b>Material Master</b></Typography>
//         </Box>

//         <Box sx={{ display: 'flex', gap: 3 }}>
//           <Button variant="contained" onClick={handleDrawerOpen}>Create Material Master </Button>
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
//             <Typography m={2} variant="h6"><b>Create Material Master</b></Typography>
//             <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleDrawerClose} />
//           </Box>
//           <Divider />


//           <Box m={2}>
//             <Box display={'flex'} alignItems={'center'} gap={5}>
//               <Box flex={1} >
//                 <Typography>Material Code</Typography>
//                 <TextField
//                   value={materialCode}
//                   onChange={(e) => setMaterialCode(e.target.value)}
//                   error={!!materialCodeError}
//                   size="small" margin="normal" placeholder='Material Code' fullWidth />
//                 {(!!materialCodeError) && (
//                   <Alert severity="error" sx={{
//                     width: '92%',
//                     p: '2',
//                     pl: '4%', height: '23px',
//                     borderRadius: '8px',
//                     borderTopLeftRadius: '0',
//                     borderTopRightRadius: '0',
//                     fontSize: '12px',
//                     display: 'flex',
//                     backgroundColor: "#ffdddd",
//                     color: "#a00",
//                     alignItems: 'center',
//                     '& .MuiAlert-icon': {
//                       fontSize: '16px',
//                       mr: '8px',
//                     },
//                   }}>
//                     {materialCodeError}
//                   </Alert>
//                 )}
//               </Box>

//               {/* <Box flex={1}>
//                 <Typography>Material Group</Typography>
//                 <FormControl fullWidth size="small" margin="normal" error={!!formErrors.MaterialGroup}>
//                   <Select
//                     value={formValues.MaterialGroup}
//                     onChange={(e) => {
//                       console.log("Selected Material Group:", e.target.value);
//                       handleChange("MaterialGroup", e.target.value);
//                     }}
//                     displayEmpty
//                   >
//                     {Array.isArray(materialGroup) && materialGroup.map((group, index) => (
//                       <MenuItem key={index} value={group.id}>
//                         {group.name}
//                       </MenuItem>
//                     ))}
//                   </Select>

//                   {/* {!!formErrors.MaterialGroup && (
//           <Alert
//             severity="error"
//             sx={{
//               width: '92%',
//               p: '2',
//               pl: '4%',
//               height: '23px',
//               borderRadius: '8px',
//               borderTopLeftRadius: '0',
//               borderTopRightRadius: '0',
//               fontSize: '12px',
//               display: 'flex',
//               backgroundColor: "#ffdddd",
//               color: "#a00",
//               alignItems: 'center',
//               '& .MuiAlert-icon': {
//                 fontSize: '16px',
//                 mr: '8px',
//               },
//             }}
//           >
//             {formErrors.MaterialGroup}
//           </Alert>
//         )} */}
//               {/* </FormControl>
//               </Box> */}



//               {/* <Box flex={1}>
//                 <Typography>Material Group</Typography>
//                 <Autocomplete
//                   value={materialGroup}
//                   onChange={(e, newValue) => {
//                     console.log("Selected Material Group:", newValue);
//                     handleChange("MaterialGroup", newValue); 
//                   }}
//                   options={Array.isArray(materialGroup) ? materialGroup : []}
//                   getOptionLabel={(option) => option.name || ''}
//                   renderInput={(params) => (
//                     <TextField
//                       {...params}
//                       size="small"
//                       margin="normal"
//                       fullWidth
//                       error={!!formErrors.MaterialGroup}
//                       helperText={formErrors.MaterialGroup || ''}
//                     />
//                   )}
//                 />
//               </Box> */}


//               <Box flex={1}>
//                 <Typography>Material Group</Typography>
//                 <Autocomplete
//                   options={materialGroups}
//                   value={materialGroup}
//                   onChange={(event, newValue) => setMaterialGroup(newValue)}
//                   renderInput={(params) => (
//                     <TextField
//                       {...params}
//                       placeholder="Select Material Group"
//                       size="small"
//                       margin="normal"
//                       fullWidth
//                       error={!!materialGroupError}
//                     />
//                   )}
//                 />
//                 {!!materialGroupError && (
//                   <Alert
//                     severity="error"
//                     sx={{
//                       width: "92%",
//                       p: "2",
//                       pl: "4%",
//                       height: "23px",
//                       borderRadius: "8px",
//                       borderTopLeftRadius: "0",
//                       borderTopRightRadius: "0",
//                       fontSize: "12px",
//                       display: "flex",
//                       backgroundColor: "#ffdddd",
//                       color: "#a00",
//                       alignItems: "center",
//                       "& .MuiAlert-icon": {
//                         fontSize: "16px",
//                         mr: "8px",
//                       },
//                     }}
//                   >
//                     {materialGroupError}
//                   </Alert>
//                 )}
//               </Box>


//               {/* <Box flex={1}>
//                 <Typography>Material Group</Typography>
//                 <Autocomplete
//                   value={materialGroup}
//                   onChange={(e, newValue) => {
//                     console.log("Selected Material Group:", newValue);
//                     handleChange("MaterialGroup", newValue); 
//                   }}
//                   options={Array.isArray(materialGroup) ? materialGroup : []}
//                   getOptionLabel={(option) => option.name || ''}
//                   renderInput={(params) => (
//                     <TextField
//                       {...params}
//                       size="small"
//                       margin="normal"
//                       fullWidth
//                       error={!!materialGroup}
//                       helperText={materialGroup || ''}
//                     />
//                   )}
//                 />

//               </Box> */}
//             </Box>



//             <Box flex={1}  >
//               <Typography>Material Name</Typography>
//               <TextField
//                 // onChange={(e) => handleChange("MaterialName", e.target.value)}
//                 //  value={formValues.MaterialName}
//                 //   error={!!formErrors.MaterialName} 
//                 value={materialName}
//                 onChange={(e) => setMaterialName(e.target.value)}
//                 error={!!materialNameError}
//                 size="small" margin="normal" placeholder='Material Name' fullWidth />
//               {(!!materialNameError) && (
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
//                   {materialNameError}
//                 </Alert>
//               )}
//             </Box>

//             <Box flex={1}  >
//               <Typography>Brand Name</Typography>
//               <TextField
//                 value={brandName}
//                 onChange={(e) => setBrandName(e.target.value)}
//                 error={!!brandNameError}
//                 size="small" margin="normal" placeholder='Brand Name' fullWidth />
//               {(!!brandNameError) && (
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
//                   {brandNameError}
//                 </Alert>
//               )}
//             </Box>

//             <Box display={'flex'} alignItems={'center'} gap={5} mt={1}>
//               <Box flex={1}  >
//                 <Typography>Purchase Rate</Typography>
//                 <TextField
//                   value={purchaseRate}
//                   onChange={(e) => setPurchaseRate(e.target.value)}
//                   error={!!purchaseRateError}
//                   size="small" margin="normal" placeholder='Purchase Role' fullWidth />
//                 {(!!purchaseRateError) && (
//                   <Alert severity="error" sx={{
//                     width: '92%',
//                     p: '2',
//                     pl: '4%', height: '23px',
//                     borderRadius: '8px',
//                     borderTopLeftRadius: '0',
//                     borderTopRightRadius: '0',
//                     fontSize: '12px',
//                     display: 'flex',
//                     backgroundColor: "#ffdddd",
//                     color: "#a00",
//                     alignItems: 'center',
//                     '& .MuiAlert-icon': {
//                       fontSize: '16px',
//                       mr: '8px',
//                     },
//                   }}>
//                     {purchaseRateError}
//                   </Alert>
//                 )}
//               </Box>

//               <Box flex={1} >
//                 <Typography>Reorder level</Typography>
//                 <TextField
//                   value={reorderLevel}
//                   onChange={(e) => setReorderLevel(e.target.value)}
//                   error={!!reorderLevelError}
//                   size="small" margin="normal" placeholder='Reorder level' fullWidth />
//                 {(!!reorderLevelError) && (
//                   <Alert severity="error" sx={{
//                     width: '92%',
//                     p: '2',
//                     pl: '4%', height: '23px',
//                     borderRadius: '8px',
//                     borderTopLeftRadius: '0',
//                     borderTopRightRadius: '0',
//                     fontSize: '12px',
//                     display: 'flex',
//                     backgroundColor: "#ffdddd",
//                     color: "#a00",
//                     alignItems: 'center',
//                     '& .MuiAlert-icon': {
//                       fontSize: '16px',
//                       mr: '8px',
//                     },
//                   }}>
//                     {reorderLevelError}
//                   </Alert>
//                 )}
//               </Box>

//               <Box flex={1} >
//                 <Typography>Min.Balance</Typography>
//                 <TextField
//                   value={minBal}
//                   onChange={(e) => setMinBal(e.target.value)}
//                   error={!!minBalError}
//                   size="small" margin="normal" placeholder='Min.Balance' fullWidth />
//                 {(!!minBalError) && (
//                   <Alert severity="error" sx={{
//                     width: '92%',
//                     p: '2',
//                     pl: '4%', height: '23px',
//                     borderRadius: '8px',
//                     borderTopLeftRadius: '0',
//                     borderTopRightRadius: '0',
//                     fontSize: '12px',
//                     display: 'flex',
//                     backgroundColor: "#ffdddd",
//                     color: "#a00",
//                     alignItems: 'center',
//                     '& .MuiAlert-icon': {
//                       fontSize: '16px',
//                       mr: '8px',
//                     },
//                   }}>
//                     {minBalError}
//                   </Alert>
//                 )}
//               </Box>
//             </Box>

//             <Box display={'flex'} alignItems={'center'} gap={5} >
//               <Box flex={1}  >
//                 <Typography>Max.Balance</Typography>
//                 <TextField
//                   value={maxBal}
//                   onChange={(e) => setMaxBal(e.target.value)}
//                   error={!!maxBalError}
//                   size="small" margin="normal" placeholder='Max.Balance' fullWidth />
//                 {(!!maxBalError) && (
//                   <Alert severity="error" sx={{
//                     width: '92%',
//                     p: '2',
//                     pl: '4%', height: '23px',
//                     borderRadius: '8px',
//                     borderTopLeftRadius: '0',
//                     borderTopRightRadius: '0',
//                     fontSize: '12px',
//                     display: 'flex',
//                     backgroundColor: "#ffdddd",
//                     color: "#a00",
//                     alignItems: 'center',
//                     '& .MuiAlert-icon': {
//                       fontSize: '16px',
//                       mr: '8px',
//                     },
//                   }}>
//                     {maxBalError}
//                   </Alert>
//                 )}
//               </Box>



//               <Box flex={1}  >
//                 <Typography>HSN Code</Typography>
//                 <TextField
//                   value={HSNCode}
//                   onChange={(e) => setHSNCode(e.target.value)}
//                   error={!!HSNCodeError}
//                   size="small" margin="normal" placeholder='HSN Code' fullWidth />
//                 {(!!HSNCodeError) && (
//                   <Alert severity="error" sx={{
//                     width: '92%',
//                     p: '2',
//                     pl: '4%', height: '23px',
//                     borderRadius: '8px',
//                     borderTopLeftRadius: '0',
//                     borderTopRightRadius: '0',
//                     fontSize: '12px',
//                     display: 'flex',
//                     backgroundColor: "#ffdddd",
//                     color: "#a00",
//                     alignItems: 'center',
//                     '& .MuiAlert-icon': {
//                       fontSize: '16px',
//                       mr: '8px',
//                     },
//                   }}>
//                     {HSNCodeError}
//                   </Alert>
//                 )}
//               </Box>
//             </Box>

//             <Box display={'flex'} alignItems={'center'} gap={5} mt={1} >
//               <Box flex={1} >
//                 <Typography>CGST%</Typography>
//                 <TextField
//                   value={CGST}
//                   onChange={(e) => setCGST(e.target.value)}
//                   error={!!CGSTError}
//                   size="small" margin="normal" placeholder='CGST' fullWidth />
//                 {(!!CGSTError) && (
//                   <Alert severity="error" sx={{
//                     width: '92%',
//                     p: '2',
//                     pl: '4%', height: '23px',
//                     borderRadius: '8px',
//                     borderTopLeftRadius: '0',
//                     borderTopRightRadius: '0',
//                     fontSize: '12px',
//                     display: 'flex',
//                     backgroundColor: "#ffdddd",
//                     color: "#a00",
//                     alignItems: 'center',
//                     '& .MuiAlert-icon': {
//                       fontSize: '16px',
//                       mr: '8px',
//                     },
//                   }}>
//                     {CGSTError}
//                   </Alert>
//                 )}
//               </Box>

//               <Box flex={1}  >
//                 <Typography>SGST%</Typography>
//                 <TextField
//                   value={SGST}
//                   onChange={(e) => setSGST(e.target.value)}
//                   error={!!SGSTError}
//                   size="small" margin="normal" placeholder='SGST' fullWidth />
//                 {(!!SGSTError) && (
//                   <Alert severity="error" sx={{
//                     width: '92%',
//                     p: '2',
//                     pl: '4%', height: '23px',
//                     borderRadius: '8px',
//                     borderTopLeftRadius: '0',
//                     borderTopRightRadius: '0',
//                     fontSize: '12px',
//                     display: 'flex',
//                     backgroundColor: "#ffdddd",
//                     color: "#a00",
//                     alignItems: 'center',
//                     '& .MuiAlert-icon': {
//                       fontSize: '16px',
//                       mr: '8px',
//                     },
//                   }}>
//                     {SGSTError}
//                   </Alert>
//                 )}
//               </Box>

//               <Box flex={1}  >
//                 <Typography>IGST%</Typography>
//                 <TextField
//                   value={IGST}
//                   onChange={(e) => setIGST(e.target.value)}
//                   error={!!IGSTError}
//                   size="small" margin="normal" placeholder='IGST' fullWidth />
//                 {(!!IGSTError) && (
//                   <Alert severity="error" sx={{
//                     width: '92%',
//                     p: '2',
//                     pl: '4%', height: '23px',
//                     borderRadius: '8px',
//                     borderTopLeftRadius: '0',
//                     borderTopRightRadius: '0',
//                     fontSize: '12px',
//                     display: 'flex',
//                     backgroundColor: "#ffdddd",
//                     color: "#a00",
//                     alignItems: 'center',
//                     '& .MuiAlert-icon': {
//                       fontSize: '16px',
//                       mr: '8px',
//                     },
//                   }}>
//                     {IGSTError}
//                   </Alert>
//                 )}
//               </Box>
//             </Box>


//           </Box>



//           <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2} mt={5}>
//             <Box>
//               <Button variant='contained' onClick={CreateMaterialMaster}>Save </Button>
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

// export default MaterialMaster









import React, { useMemo, useState, useEffect } from 'react'
import { Alert, useMediaQuery, Box, Button, Typography, TextField, Autocomplete, Drawer, Divider, Select, MenuItem, Menu, IconButton, } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { MaterialReactTable, } from 'material-react-table';
import axios from 'axios';
import { useTheme } from "@mui/material/styles";
import { toast } from "react-toastify";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../Components/common.css'

const MaterialMaster = () => {
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
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentRow, setCurrentRow] = useState(null);

  // Handle menu opening
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

  const [data, setData] = useState([]);
  const columns = useMemo(() => [
    {
      accessorKey: 'MaterialCode',
      header: 'Material Code',
      size: 150,
    },

    {
      accessorKey: 'MaterialGroupId',
      header: 'Material ID',
      size: 150,
    },

    {
      accessorKey: 'BrandName',
      header: 'Brand Name',
      size: 150,
    },
    {
      accessorKey: 'PurchaseRate',
      header: 'Purchase Rate',
      size: 150,
    },
    {
      accessorKey: 'ReOrderLevel',
      header: 'ReOrder Level',
      size: 150,
    },

    {
      accessorKey: 'MinBalance',
      header: 'Min Balance',
      size: 150,
    },

    {
      accessorKey: 'MaxBalance',
      header: 'Max Balance',
      size: 150,
    },

    {
      accessorKey: 'HSNCode',
      header: 'HSN Code',
      size: 150,
    },

    {
      accessorKey: 'CGSTPercentage',
      header: 'CGST%',
      size: 150,
    },

    {
      accessorKey: 'SGSTPercentage',
      header: 'SGST%',
      size: 150,
    },

    {
      accessorKey: 'IGSTPercentage',
      header: 'IGST',
      size: 150,
    },

    {
      id: 'actions',
      header: 'Actions',
      size: 150,
      Cell: ({ row }) => (
        <IconButton
          onClick={(event) => handleMenuOpen(event, row)} // Open the menu on click
        >
          <MoreVertIcon />
        </IconButton>
      ),
    },
  ], []);


  const [Id, setID] = useState('')
  const fetchData = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    try {
      const response = await fetch("https://arohanagroapi.microtechsolutions.co.in/php/get/gettable.php?Table=Materialmaster", requestOptions);
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

  //get Data by Id
  // const fetchDataById=()=>{
  //   const requestOptions = {
  //     method: "GET",
  //     redirect: "follow"
  //   };

  //   fetch(`https://arohanagroapi.microtechsolutions.co.in/php/getbyid.php?Id=${idwiseData}&Table=Materialmaster`, requestOptions)

  //     .then((response) => response.json())
  //     .then((result) => console.log(result)


  //   )
  //     .catch((error) => console.error(error));

  // }
  const fetchDataById = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://arohanagroapi.microtechsolutions.co.in/php/getbyid.php?Id=${idwiseData}&Table=Materialmaster`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setUpdateMaterialCode(result.MaterialCode)
        console.log('editmaterial', result.MaterialCode);
        setUpdatematerialGroup(result.MaterialGroupId)
        console.log('editmaterial', result.MaterialGroupId);
        setUpdateMaterialName(result.MaterialName)
        setUpdateBrandName(result.BrandName)
        setUpdatePurchaseRate(result.PurchaseRate)
        setUpdateReorderLevel(result.ReOrderLevel)
        setUpdateMinBal(result.MinBalance)
        setUpdateMaxBal(result.MaxBalance)
        setUpdateHSNCode(result.HSNCode)
        setUpdateCGST(result.CGSTPercentage)
        setUpdateSGST(result.SGSTPercentage)
        setUpdateIGST(result.IGSTPercentage)


      })
      .catch((error) => console.error(error));
  };
  const [materialGroupError, setMaterialGroupError] = useState('');

  //Intigration
  const [materialCode, setMaterialCode] = useState("");
  const [updatematerialCode, setUpdateMaterialCode] = useState("");
  const [materialGroup, setMaterialGroup] = useState("");
  const [updatematerialGroup, setUpdatematerialGroup] = useState("");
  const [materialName, setMaterialName] = useState("");
  const [updatematerialName, setUpdateMaterialName] = useState("");

  const [brandName, setBrandName] = useState("");
  const [updatebrandName, setUpdateBrandName] = useState("");
  const [purchaseRate, setPurchaseRate] = useState('');
  const [updatepurchaseRate, setUpdatePurchaseRate] = useState('');

  const [reorderLevel, setReorderLevel] = useState("");
  const [updatereorderLevel, setUpdateReorderLevel] = useState("");
  const [minBal, setMinBal] = useState("");
  const [updateminBal, setUpdateMinBal] = useState("");
  const [maxBal, setMaxBal] = useState("");
  const [updatemaxBal, setUpdateMaxBal] = useState("");

  const [HSNCode, setHSNCode] = useState("");
  const [updateHSNCode, setUpdateHSNCode] = useState("");
  const [CGST, setCGST] = useState("");
  const [updateCGST, setUpdateCGST] = useState("");
  const [SGST, setSGST] = useState("");
  const [updateSGST, setUpdateSGST] = useState("");
  const [IGST, setIGST] = useState("");
  const [updateIGST, setUpdateIGST] = useState("");


  const CreateMaterialMaster = () => {
    const urlencoded = new URLSearchParams();
    console.log("MaterialCode:", materialCode);
    console.log("MaterialGroupId:", materialGroup);
    console.log("MaterialName:", materialName);
    console.log("BrandName:", brandName);
    console.log("PurchaseRate:", purchaseRate);
    console.log("ReOrderLevel:", reorderLevel);
    console.log("MinBalance:", minBal);
    console.log("MaxBalance:", maxBal);
    console.log("HSNCode:", HSNCode);
    console.log("CGSTPercentage:", CGST);
    console.log("SGSTPercentage:", SGST);
    console.log("IGSTPercentage:", IGST);
    urlencoded.append("MaterialCode", materialCode);
    urlencoded.append("MaterialGroupId", materialGroup);
    urlencoded.append("MaterialName", materialName);
    urlencoded.append("BrandName", brandName);
    urlencoded.append("PurchaseRate", purchaseRate);
    urlencoded.append("ReOrderLevel", reorderLevel);
    urlencoded.append("MinBalance", minBal);
    urlencoded.append("MaxBalance", maxBal);
    urlencoded.append("HSNCode", HSNCode);
    urlencoded.append("CGSTPercentage", CGST);
    urlencoded.append("SGSTPercentage", SGST);
    urlencoded.append("IGSTPercentage", IGST);

    const requestOptions = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios
      .post(
        "https://arohanagroapi.microtechsolutions.co.in/php/postmaterialmaster.php",
        urlencoded,
        requestOptions
      )
      .then((response) => {
        console.log("API Response:", response.data);
        // if (response && response.message === "ChatTemplate created successfully") {
        handleClearTemplate();
        handleDrawerClose()
        toast.success("Material Master created successfully");

        // } else {
        //   toast.error(response.message || "Failed to create Material Master created");
        // }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };


  const handleClearTemplate = () => {
    setMaterialCode('');
    setMaterialGroup('');
    setMaterialName('');
    setBrandName('');
    setPurchaseRate('');
    setReorderLevel('');
    setMinBal('');
    setMaxBal('');
    setHSNCode('');
    setCGST('');
    setSGST('');
    setIGST('')
  }

  useEffect(() => {
    // CreateMaterialMaster();
    fetchDataById(idwiseData)
  }, [idwiseData]);


  const [materialGroups, setMaterialGroups] = useState([]);

  // Fetch data from API material group
  useEffect(() => {
    axios
      .get("https://arohanagroapi.microtechsolutions.co.in/php/get/gettable.php?Table=Materialmaster")
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          // Extract unique MaterialGroupId values
          const uniqueGroups = [...new Set(response.data.map(item => item.MaterialGroupId))];
          setMaterialGroups(uniqueGroups);

        }

      })
      .catch((error) => {
        console.error("Error fetching Material Groups:", error);
        setMaterialGroupError("Failed to load Material Groups.");
      });
  }, []);

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
  //for delete 
  const DeleteMaterialMaster = () => {
    // if (currentRow) {
    //   console.log("Editing item with ID:", currentRow.original.Id);
     
    // }
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    const url = `https://arohanagroapi.microtechsolutions.co.in/php/delete/deletetable.php?Table=Materialmaster&Id=${currentRow.original.Id}`
    console.log(url)
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) =>{ 
        console.log(result)
       
          toast.success("Material deleted successfully!");
         
       
      })
      .catch((error) => console.error(error));
  }



  //update 
  const UpdateMaterialMaster = () => {
    const urlencoded = new URLSearchParams();
    urlencoded.append("MaterialCode", updatematerialCode);
    urlencoded.append("MaterialGroupId", updatematerialGroup);
    urlencoded.append("MaterialName", updatematerialName);
    urlencoded.append("BrandName", updatebrandName);
    urlencoded.append("PurchaseRate", updatepurchaseRate);
    urlencoded.append("ReOrderLevel", updatereorderLevel);
    urlencoded.append("MinBalance", updateminBal);
    urlencoded.append("MaxBalance", updatemaxBal);
    urlencoded.append("HSNCode", updateHSNCode);
    urlencoded.append("CGSTPercentage", updateCGST);
    urlencoded.append("SGSTPercentage", updateSGST);
    urlencoded.append("IGSTPercentage", updateIGST);
    urlencoded.append("Id", idwiseData);
    const requestOptions = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios
      .post(
        "https://arohanagroapi.microtechsolutions.co.in/php/updatematerialmaster.php",
        urlencoded,
        requestOptions
      )
      .then((response) => {
        console.log("API Response:", response.data);
        handleEditDrawerClose()
        toast.success("Material Master Updated successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };




  return (
    <Box>
      <Box sx={{  p: 5, height: 'auto' }}>
        <Box textAlign={'center'}>
          <Typography color='var(--complementary-color)' variant='h4'><b>Material Master</b></Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button sx={{ background: 'var(--complementary-color)', }} variant="contained" onClick={handleDrawerOpen}>Create Material Master </Button>
        </Box>


        <Box mt={4}>
          <MaterialReactTable
            columns={columns}
            data={data}
          // enableColumnOrdering
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
              // onClick={handleEdit}

              onClick={handleEditDrawerOpen}

            >Edit</MenuItem>
            <MenuItem onClick={DeleteMaterialMaster}>Delete</MenuItem>
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
          <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between',background:'rgb(236, 253, 230)' }}>
            <Typography m={2} variant="h6"><b>Create Material Master</b></Typography>
            <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleDrawerClose} />
          </Box>
          <Divider />


          <Box m={2}>
            <Box display={'flex'} alignItems={'center'} gap={5}>
              <Box flex={1} >
                <Typography>Material Code</Typography>
                <TextField
                  value={materialCode}
                  onChange={(e) => setMaterialCode(e.target.value)}

                  size="small" margin="normal" placeholder='Material Code' fullWidth />

              </Box>




              <Box flex={1}>
                <Typography>Material Group</Typography>
                <Autocomplete
                  options={materialGroups}
                  value={materialGroup}
                  onChange={(event, newValue) => setMaterialGroup(newValue)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Select Material Group"
                      size="small"
                      margin="normal"
                      fullWidth

                    />
                  )}
                />

              </Box>



            </Box>



            <Box flex={1}  >
              <Typography>Material Name</Typography>
              <TextField

                value={materialName}
                onChange={(e) => setMaterialName(e.target.value)}

                size="small" margin="normal" placeholder='Material Name' fullWidth />

            </Box>

            <Box flex={1}  >
              <Typography>Brand Name</Typography>
              <TextField
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}

                size="small" margin="normal" placeholder='Brand Name' fullWidth />

            </Box>

            <Box display={'flex'} alignItems={'center'} gap={5} mt={1}>
              <Box flex={1}  >
                <Typography>Purchase Rate</Typography>
                <TextField
                  value={purchaseRate}
                  onChange={(e) => setPurchaseRate(e.target.value)}

                  size="small" margin="normal" placeholder='Purchase Role' fullWidth />

              </Box>

              <Box flex={1} >
                <Typography>Reorder level</Typography>
                <TextField
                  value={reorderLevel}
                  onChange={(e) => setReorderLevel(e.target.value)}

                  size="small" margin="normal" placeholder='Reorder level' fullWidth />

              </Box>

              <Box flex={1} >
                <Typography>Min.Balance</Typography>
                <TextField
                  value={minBal}
                  onChange={(e) => setMinBal(e.target.value)}

                  size="small" margin="normal" placeholder='Min.Balance' fullWidth />

              </Box>
            </Box>

            <Box display={'flex'} alignItems={'center'} gap={5} >
              <Box flex={1}  >
                <Typography>Max.Balance</Typography>
                <TextField
                  value={maxBal}
                  onChange={(e) => setMaxBal(e.target.value)}

                  size="small" margin="normal" placeholder='Max.Balance' fullWidth />

              </Box>



              <Box flex={1}  >
                <Typography>HSN Code</Typography>
                <TextField
                  value={HSNCode}
                  onChange={(e) => setHSNCode(e.target.value)}

                  size="small" margin="normal" placeholder='HSN Code' fullWidth />

              </Box>
            </Box>

            <Box display={'flex'} alignItems={'center'} gap={5} mt={1} >
              <Box flex={1} >
                <Typography>CGST%</Typography>
                <TextField
                  value={CGST}
                  onChange={(e) => setCGST(e.target.value)}

                  size="small" margin="normal" placeholder='CGST' fullWidth />

              </Box>

              <Box flex={1}  >
                <Typography>SGST%</Typography>
                <TextField
                  value={SGST}
                  onChange={(e) => setSGST(e.target.value)}

                  size="small" margin="normal" placeholder='SGST' fullWidth />

              </Box>

              <Box flex={1}  >
                <Typography>IGST%</Typography>
                <TextField
                  value={IGST}
                  onChange={(e) => setIGST(e.target.value)}

                  size="small" margin="normal" placeholder='IGST' fullWidth />

              </Box>
            </Box>


          </Box>



          <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2} mt={5}>
            <Box>
              <Button  sx={{
                 background: 'var(--primary-color)', 
                 }} variant='contained' onClick={CreateMaterialMaster}>Save </Button>
            </Box>

            <Box>
              <Button sx={{ borderColor: 'var(--complementary-color)', color: 'var(--complementary-color)' }}  onClick={handleDrawerClose} variant='outlined'>Cancel </Button>
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
          <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between',background:'rgb(236, 253, 230)' }}>
            <Typography m={2} variant="h6"><b>Update Material Master</b></Typography>
            <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleEditDrawerClose} />
          </Box>
          <Divider />


          <Box m={2}>
            <Box display={'flex'} alignItems={'center'} gap={5}>
              <Box flex={1} >
                <Typography>Material Code</Typography>
                <TextField
                  value={updatematerialCode}
                  onChange={(e) => setUpdateMaterialCode(e.target.value)}

                  size="small" margin="normal" placeholder='Material Code' fullWidth />

              </Box>




              <Box flex={1}>
                <Typography>Material Group</Typography>
                <Autocomplete
                  options={materialGroups}
                  value={updatematerialGroup}
                  onChange={(event, newValue) => setUpdatematerialGroup(newValue)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Select Material Group"
                      size="small"
                      margin="normal"
                      fullWidth

                    />
                  )}
                />

              </Box>



            </Box>



            <Box flex={1}  >
              <Typography>Material Name</Typography>
              <TextField

                value={updatematerialName}
                onChange={(e) => setUpdateMaterialName(e.target.value)}

                size="small" margin="normal" placeholder='Material Name' fullWidth />

            </Box>

            <Box flex={1}  >
              <Typography>Brand Name</Typography>
              <TextField
                value={updatebrandName}
                onChange={(e) => setUpdateBrandName(e.target.value)}

                size="small" margin="normal" placeholder='Brand Name' fullWidth />

            </Box>

            <Box display={'flex'} alignItems={'center'} gap={5} mt={1}>
              <Box flex={1}  >
                <Typography>Purchase Rate</Typography>
                <TextField
                  value={updatepurchaseRate}
                  onChange={(e) => setUpdatePurchaseRate(e.target.value)}

                  size="small" margin="normal" placeholder='Purchase Role' fullWidth />

              </Box>

              <Box flex={1} >
                <Typography>Reorder level</Typography>
                <TextField
                  value={updatereorderLevel}
                  onChange={(e) => setUpdateReorderLevel(e.target.value)}

                  size="small" margin="normal" placeholder='Reorder level' fullWidth />

              </Box>

              <Box flex={1} >
                <Typography>Min.Balance</Typography>
                <TextField
                  value={updateminBal}
                  onChange={(e) => setUpdateMinBal(e.target.value)}

                  size="small" margin="normal" placeholder='Min.Balance' fullWidth />

              </Box>
            </Box>

            <Box display={'flex'} alignItems={'center'} gap={5} >
              <Box flex={1}  >
                <Typography>Max.Balance</Typography>
                <TextField
                  value={updatemaxBal}
                  onChange={(e) => setUpdateMaxBal(e.target.value)}

                  size="small" margin="normal" placeholder='Max.Balance' fullWidth />

              </Box>



              <Box flex={1}  >
                <Typography>HSN Code</Typography>
                <TextField
                  value={updateHSNCode}
                  onChange={(e) => setUpdateHSNCode(e.target.value)}

                  size="small" margin="normal" placeholder='HSN Code' fullWidth />

              </Box>
            </Box>

            <Box display={'flex'} alignItems={'center'} gap={5} mt={1} >
              <Box flex={1} >
                <Typography>CGST%</Typography>
                <TextField
                  value={updateCGST}
                  onChange={(e) => setUpdateCGST(e.target.value)}

                  size="small" margin="normal" placeholder='CGST' fullWidth />

              </Box>

              <Box flex={1}  >
                <Typography>SGST%</Typography>
                <TextField
                  value={updateSGST}
                  onChange={(e) => setUpdateSGST(e.target.value)}

                  size="small" margin="normal" placeholder='SGST' fullWidth />

              </Box>

              <Box flex={1}  >
                <Typography>IGST%</Typography>
                <TextField
                  value={updateIGST}
                  onChange={(e) => setUpdateIGST(e.target.value)}

                  size="small" margin="normal" placeholder='IGST' fullWidth />

              </Box>
            </Box>


          </Box>



          <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2} mt={5}>
            <Box>
              <Button sx={{
                 background: 'var(--primary-color)', 
                 }} variant='contained' onClick={UpdateMaterialMaster}>Save </Button>
            </Box>

            <Box>
              <Button sx={{ borderColor: 'var(--complementary-color)', color: 'var(--complementary-color)' }}  onClick={handleEditDrawerClose} variant='outlined'>Cancel </Button>
            </Box>
          </Box>
        </Drawer>

      </Box>

    </Box>
  )
}

export default MaterialMaster

