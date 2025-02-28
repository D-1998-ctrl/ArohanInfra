
// import React, { useMemo, useState } from 'react'
// import { Alert, Box, useMediaQuery, Button, Typography, TextField, Drawer, Divider, FormControl, Select, MenuItem, FormControlLabel, Checkbox } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import { MaterialReactTable, } from 'material-react-table';
// import suppliermaster from './suppliermaster.json'
// import { useTheme } from "@mui/material/styles";

// const AccountMaster = () => {
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const[openingBal,setOpeningBal] = useState(1000);
//   const [debitCredit, setDebitCredit] = useState('Debit');




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
//     Group: "",
//     SubGroup: "",
//     Type: "",
//     OpeningBalance:'',
//     DebitCredit: "",

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
//     if (!formValues.Group) errors.Group = "Group  is required.";
//     if (!formValues.Type) errors.Type = "Type is required.";
//     if (!formValues.DebitCredit) errors.DebitCredit = "Debit Credit is required.";
//     if (!formValues.OpeningBalance) errors.OpeningBalance = "OpeningBalance is required.";


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
//       <Box sx={{ p: 5, height: 'auto' }}>
//         <Box textAlign={'center'}>
//           <Typography sx={{ color: 'var(--complementary-color)', }}  variant='h4'><b>Account Master</b></Typography>
//         </Box>

//         <Box sx={{ display: 'flex', gap: 3 }}>
//           <Button sx={{ background: 'var(--complementary-color)', }}  variant="contained" onClick={handleDrawerOpen}>Create Account Master </Button>
//         </Box>


//         <Box mt={4}>
//           <MaterialReactTable
//             columns={columns}
//             data={suppliermaster}
//             // enableColumnOrdering
//             enableColumnResizing
//             muiTableHeadCellProps={{
//               sx: {

//                 color: 'var(--primary-color)',

//               },
//             }}
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
//           <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between',background:'rgb(236, 253, 230)' }}>
//             <Typography m={2} variant="h6"><b>Create Account Master</b></Typography>
//             <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleDrawerClose} />
//           </Box>
//           <Divider />

//           <Box m={2}>


//             <Box>
//               <Typography>Account Code</Typography>
//               <TextField sx={{ width: '50%' }} onChange={(e) => handleChange("AccountCode", e.target.value)} value={formValues.AccountCode} error={!!formErrors.AccountCode} size="small" margin="normal" placeholder="Enter Account Code" fullWidth />
//               {(!!formErrors.AccountCode) && (
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
//                   {formErrors.AccountCode}
//                 </Alert>
//               )}
//             </Box>

//             <Box>
//               <Typography>Account Name</Typography>
//               <TextField onChange={(e) => handleChange("AccountName", e.target.value)} value={formValues.AccountName} error={!!formErrors.AccountName} size="small" margin="normal" placeholder="Enter Account Name" fullWidth />
//               {(!!formErrors.AccountName) && (
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
//                   {formErrors.AccountName}
//                 </Alert>
//               )}
//             </Box>

//             <Box display={'flex'} gap={2} alignItems={'center'}>
//               <Box flex={1}  >
//                 <Typography> Group</Typography>
//                 <FormControl onChange={(e) => handleChange("Group", e.target.value)} value={formValues.Group} error={!!formErrors.Group}
//                   fullWidth size="small" margin="normal">


//                   <Select>
//                     <MenuItem value=""></MenuItem>
//                   </Select>
//                   {(!!formErrors.Group) && (
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
//                       {formErrors.Group}
//                     </Alert>
//                   )}
//                 </FormControl>
//               </Box>

//               <Box flex={1}  >
//                 <Typography>Sub Group</Typography>
//                 <FormControl onChange={(e) => handleChange("SubGroup", e.target.value)} value={formValues.SubGroup} error={!!formErrors.SubGroup}
//                   fullWidth size="small" margin="normal">


//                   <Select>
//                     <MenuItem value=""></MenuItem>
//                   </Select>
//                   {(!!formErrors.SubGroup) && (
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
//                       {formErrors.SubGroup}
//                     </Alert>
//                   )}
//                 </FormControl>
//               </Box>
//             </Box>


//             <Box flex={1}  >
//               <Typography>Type</Typography>
//               <FormControl onChange={(e) => handleChange("Type", e.target.value)} value={formValues.Type} error={!!formErrors.Type}
//                 fullWidth size="small" margin="normal">
//                 <Select>
//                   <MenuItem value=""></MenuItem>
//                 </Select>
//                 {(!!formErrors.Type) && (
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
//                     {formErrors.Type}
//                   </Alert>
//                 )}
//               </FormControl>
//             </Box>

//             <Box display={'flex'} alignItems={'center'} gap={2}>
//               <Box flex={1}>
//                 <Typography>Opening Balance</Typography>
//                 <TextField
//                   type="number"
//                   onChange={(e) => handleChange("AccountCode", e.target.value)}
//                   value={openingBal}
//                   error={!!formErrors.AccountCode}
//                   size="small"
//                   margin="normal"
//                   placeholder="Enter Opening Balance"
//                   fullWidth
//                   InputProps={{
//                     inputProps: { style: { appearance: "textfield" } },
//                   }}
//                   sx={{
//                     '& input[type=number]': {
//                       MozAppearance: "textfield",
//                     },
//                     '& input[type=number]::-webkit-outer-spin-button': {
//                       WebkitAppearance: "none",
//                       margin: 0,
//                     },
//                     '& input[type=number]::-webkit-inner-spin-button': {
//                       WebkitAppearance: "none",
//                       margin: 0,
//                     },
//                   }}
//                 />
//               </Box>


//               <Box flex={1}  >
//                 <Typography>Debit or Credit</Typography>
//                 <FormControl onChange={(e) => handleChange("DebitCredit", e.target.value)} value={formValues.debitCredit} error={!!formErrors.DebitCredit}
//                   fullWidth size="small" margin="normal">


//                   <Select>
//                     <MenuItem value="">Debit</MenuItem>
//                     <MenuItem value="">Credit</MenuItem>
//                   </Select>
//                   {(!!formErrors.DebitCredit) && (
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
//                       {formErrors.DebitCredit}
//                     </Alert>
//                   )}
//                 </FormControl>
//               </Box>




//             </Box>






//           </Box>












//           <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2} mt={5}>
//             <Box>
//               <Button sx={{
//                  background: 'var(--primary-color)', 
//                  }} onClick={handleSave} variant='contained'>Save </Button>
//             </Box>

//             <Box>
//               <Button sx={{ borderColor: 'var(--complementary-color)', color: 'var(--complementary-color)' }} onClick={handleDrawerClose} variant='outlined'>Cancel </Button>
//             </Box>
//           </Box>
//         </Drawer>

//       </Box>

//     </Box>
//   )
// }

// export default AccountMaster




import React, { useMemo, useState, useEffect } from 'react'
import { Alert, IconButton, Menu, Box, useMediaQuery, Button, Typography, TextField, Drawer, Divider, FormControl, Select, MenuItem, FormControlLabel, Checkbox } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { MaterialReactTable, } from 'material-react-table';
import suppliermaster from './suppliermaster.json'
import { useTheme } from "@mui/material/styles";
import { toast } from "react-toastify";
import axios from 'axios';
import MoreVertIcon from '@mui/icons-material/MoreVert';



const AccountMaster = () => {
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
        Cell: ({ row }) => row.index + 1,
      },
      // {
      //   accessorKey: 'AccountCode',
      //   header: 'Account Code',
      //   size: 150,
      // },
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
        accessorKey: 'DrORCr',
        header: 'Debit/Credit',
        size: 150,
      },

      {
        accessorKey: 'OpeningBalance',
        header: 'Opening Balance',
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
  const [AccountName, setAccountName] = useState('');
  const [updatedAccountName, setUpdatedAccountName] = useState('');

  const [currentBal, setCurrentBal] = useState('1000');
  const [updatedcurrentBal, setUpdatedCurrentBal] = useState('');

  const [typecode, setTypecode] = useState('');
  const [updatedtypecode, setUpdatedTypecode] = useState('');

  const [debitCredit, setDebitCredit] = useState('D');

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
  useEffect(() => {
    fetchGroup();
    fetchSubGroup();
  }, []);

  //create AccountMaster
  const CreateAccountMaster = () => {
    const urlencoded = new URLSearchParams();
    urlencoded.append("AccountName", AccountName);
    urlencoded.append("GroupId", selectedGroupOption);
    urlencoded.append("SubGroupId", selectedSubGroupOption);
    urlencoded.append("OpeningBalance", currentBal);
    urlencoded.append("DrORCr", debitCredit);
    urlencoded.append("TypeCode", typecode);
    urlencoded.append("IsSystem", '0');
    urlencoded.append("Depriciation", '0');
    const requestOptions = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios
      .post(
        "https://arohanagroapi.microtechsolutions.co.in/php/postaccount.php",
        urlencoded,
        requestOptions
      )
      .then((response) => {
        console.log("API Response:", response.data);
        handleClearTemplate();
        handleDrawerClose()
        toast.success("Account Master created successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };


  const handleClearTemplate = () => {
    setAccountName('');
    setSelectedGroupOption('');
    setSelectedSubGroupOption('');
    setDebitCredit(' ');
    setTypecode('');
  }
  //for table
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
  // const [accountId, setAccountId] = useState(null)

  const handleEdit = () => {
    if (currentRow) {
      console.log("Editing item with ID:", currentRow.original);
      setIdwiseData(currentRow.original.Id)
      console.log(currentRow.original.Id)
      // setAccountId(currentRow.original.AccountId)
      console.log(currentRow.original.AccountId)
      setUpdatedAccountName(currentRow.original.AccountName)
      setSelectedGroupOption(currentRow.original.GroupId)
      setSelectedSubGroupOption(currentRow.original.SubGroupId)
      setUpdatedCurrentBal(currentRow.original.OpeningBalance)
      setDebitCredit(currentRow.original.DrORCr)
      setTypecode(currentRow.original.TypeCode)
    }
  };
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

      const response = await fetch("https://arohanagroapi.microtechsolutions.co.in/php/get/gettable.php?Table=Account", requestOptions);
      const result = await response.json();
      console.log("Fetched result:", result);
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);


    //update 
    const UpdateAccountMaster = () => {
      const urlencoded = new URLSearchParams();
      // urlencoded.append("MaterialCode", updatematerialCode);
      urlencoded.append("AccountName", updatedAccountName);
      urlencoded.append("GroupId", selectedGroupOption);
      urlencoded.append("SubGroupId", selectedSubGroupOption);
      urlencoded.append("OpeningBalance", updatedcurrentBal);
      urlencoded.append("DrORCr", debitCredit);
      urlencoded.append("TypeCode", typecode);
      urlencoded.append("IsSystem", '0');

      urlencoded.append("Id", idwiseData);
      const requestOptions = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
  
      axios
        .post(
          "https://arohanagroapi.microtechsolutions.co.in/php/updateaccount.php",
          urlencoded,
          requestOptions
        )
        .then((response) => {
          console.log("API Response:", response.data);
          handleEditDrawerClose()
          toast.success("Account Master Updated successfully");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };



     //for delete 
      const DeleteAccountMaster = () => {
        // if (currentRow) {
        //   console.log("Editing item with ID:", currentRow.original.Id);
    
        // }
        const requestOptions = {
          method: "GET",
          redirect: "follow"
        };
        const url = `https://arohanagroapi.microtechsolutions.co.in/php/delete/deletetable.php?Table=Account&Id=${currentRow.original.Id}`
        console.log(url)
        fetch(url, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log(result)
    
            toast.success("Material deleted successfully!");
    
    
          })
          .catch((error) => console.error(error));
      }

  return (
   
      <Box sx={{ height: 'auto',m:2 }}>
        <Box textAlign={'center'}>
          <Typography sx={{ color: 'var(--complementary-color)', }} variant='h4'><b>Account Master</b></Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button sx={{ background: 'var(--complementary-color)', }} variant="contained" onClick={handleDrawerOpen}>Create Account Master </Button>
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
               onClick={DeleteAccountMaster}
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
            <Typography m={2} variant="h6"><b>Create Account Master</b></Typography>
            <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleDrawerClose} />
          </Box>
          <Divider />

          <Box m={2}>
            {/* <Box>
              <Typography>Account Code</Typography>
              <TextField sx={{ width: '50%' }}  size="small" margin="normal" placeholder="Enter Account Code" fullWidth />
            </Box> */}

            <Box>
              <Typography>Account Name</Typography>
              <TextField
                value={AccountName}
                onChange={(e) => setAccountName(e.target.value)}
                size="small" margin="normal" placeholder="Enter Account Name" fullWidth />
            </Box>

            <Box display={'flex'} gap={2} alignItems={'center'}>
              <Box flex={1}>
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

              <Box flex={1}  >
                <Typography>Sub Group</Typography>
                <FormControl
                  fullWidth size="small" margin="normal">
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
            </Box>


            <Box flex={1}  >
              <Typography>Type Code</Typography>
              <FormControl
                fullWidth size="small" margin="normal">
                <Select
                  value={typecode}

                  onChange={(event) => setTypecode(event.target.value)}
                >
                  <MenuItem value="C">C</MenuItem>
                  <MenuItem value="S">S</MenuItem>
                </Select>

              </FormControl>
            </Box>

            <Box display={'flex'} alignItems={'center'} gap={2}>
              <Box flex={1}>
                <Typography>Opening Balance</Typography>
                <TextField
                  value={currentBal}
                  onChange={(e) => setCurrentBal(e.target.value)}
                  type="number"

                  size="small"
                  margin="normal"
                  placeholder="Enter Opening Balance"
                  fullWidth
                  InputProps={{
                    inputProps: { style: { appearance: "textfield" } },
                  }}
                  sx={{
                    '& input[type=number]': {
                      MozAppearance: "textfield",
                    },
                    '& input[type=number]::-webkit-outer-spin-button': {
                      WebkitAppearance: "none",
                      margin: 0,
                    },
                    '& input[type=number]::-webkit-inner-spin-button': {
                      WebkitAppearance: "none",
                      margin: 0,
                    },
                  }}
                />
              </Box>


              <Box flex={1}  >
                <Typography>Debit or Credit</Typography>
                <FormControl
                  fullWidth size="small" margin="normal">


                  <Select
                    value={debitCredit}
                    onChange={(event) => setDebitCredit(event.target.value)}

                  >
                    <MenuItem value="D">D</MenuItem>
                    <MenuItem value="C">C</MenuItem>
                  </Select>

                </FormControl>
              </Box>

            </Box>
          </Box>
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2} mt={5}>
            <Box>
              <Button onClick={CreateAccountMaster} sx={{
                background: 'var(--primary-color)',
              }} variant='contained'>Save </Button>
            </Box>

            <Box>
              <Button sx={{ borderColor: 'var(--complementary-color)', color: 'var(--complementary-color)' }} onClick={handleDrawerClose} variant='outlined'>Cancel </Button>
            </Box>
          </Box>
        </Drawer>


        {/* edit  */}

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
            <Typography m={2} variant="h6"><b>Update Account Master</b></Typography>
            <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleEditDrawerClose} />
          </Box>
          <Divider />

          <Box m={2}>
            {/* <Box>
              <Typography>Account Code</Typography>
              <TextField sx={{ width: '50%' }}  size="small" margin="normal" placeholder="Enter Account Code" fullWidth />
            </Box> */}

            <Box>
              <Typography>Account Name</Typography>
              <TextField
                value={updatedAccountName}
                onChange={(e) => setUpdatedAccountName(e.target.value)}
                size="small" margin="normal" placeholder="Enter Account Name" fullWidth />
            </Box>

            <Box display={'flex'} gap={2} alignItems={'center'}>
              <Box flex={1}>
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

              <Box flex={1}  >
                <Typography>Sub Group</Typography>
                <FormControl
                  fullWidth size="small" margin="normal">
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
            </Box>


            <Box flex={1}  >
              <Typography>Type Code</Typography>
              <FormControl
                fullWidth size="small" margin="normal">
                <Select
                  value={typecode}

                  onChange={(event) => setTypecode(event.target.value)}
                >
                  <MenuItem value="C">C</MenuItem>
                  <MenuItem value="S">S</MenuItem>
                </Select>

              </FormControl>
            </Box>

            <Box display={'flex'} alignItems={'center'} gap={2}>
              <Box flex={1}>
                <Typography>Opening Balance</Typography>
                <TextField
                  value={updatedcurrentBal}
                  onChange={(e) => setUpdatedCurrentBal(e.target.value)}
                  type="number"

                  size="small"
                  margin="normal"
                  placeholder="Enter Opening Balance"
                  fullWidth
                  InputProps={{
                    inputProps: { style: { appearance: "textfield" } },
                  }}
                  sx={{
                    '& input[type=number]': {
                      MozAppearance: "textfield",
                    },
                    '& input[type=number]::-webkit-outer-spin-button': {
                      WebkitAppearance: "none",
                      margin: 0,
                    },
                    '& input[type=number]::-webkit-inner-spin-button': {
                      WebkitAppearance: "none",
                      margin: 0,
                    },
                  }}
                />
              </Box>


              <Box flex={1}  >
                <Typography>Debit or Credit</Typography>
                <FormControl
                  fullWidth size="small" margin="normal">
                  <Select
                    value={debitCredit}
                    onChange={(event) => setDebitCredit(event.target.value)}
                  >
                    <MenuItem value="D">D</MenuItem>
                    <MenuItem value="C">C</MenuItem>
                  </Select>
                </FormControl>
              </Box>

            </Box>
          </Box>
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2} mt={5}>
            <Box>
              <Button onClick={UpdateAccountMaster}
               sx={{
                background: 'var(--primary-color)',
              }} variant='contained'>Save </Button>
            </Box>

            <Box>
              <Button sx={{ borderColor: 'var(--complementary-color)', color: 'var(--complementary-color)' }} onClick={handleEditDrawerClose} variant='outlined'>Cancel </Button>
            </Box>
          </Box>
        </Drawer>


      </Box>


  )
}

export default AccountMaster
