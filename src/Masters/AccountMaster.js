
import React, { useMemo, useState } from 'react'
import { Alert, Box, useMediaQuery, Button, Typography, TextField, Drawer, Divider, FormControl, Select, MenuItem, FormControlLabel, Checkbox } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { MaterialReactTable, } from 'material-react-table';
import suppliermaster from './suppliermaster.json'
import { useTheme } from "@mui/material/styles";

const AccountMaster = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const[openingBal,setOpeningBal] = useState(1000);
  const [debitCredit, setDebitCredit] = useState('Debit');




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
  ///validation
  const [formValues, setFormValues] = useState({
    AccountCode: "",
    AccountName: "",
    Group: "",
    SubGroup: "",
    Type: "",
    OpeningBalance:'',
    DebitCredit: "",
    
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (field, value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
    setFormErrors((prev) => ({ ...prev, [field]: "" })); // Clear error on change
  };

  const validate = () => {
    const errors = {};

    if (!formValues.AccountCode) errors.AccountCode = "Account Code is required.";
    if (!formValues.AccountName) errors.AccountName = "Account Name is required.";
    if (!formValues.SubGroup) errors.SubGroup = "SubGroup is required.";
    if (!formValues.Group) errors.Group = "Group  is required.";
    if (!formValues.Type) errors.Type = "Type is required.";
    if (!formValues.DebitCredit) errors.DebitCredit = "Debit Credit is required.";
    if (!formValues.OpeningBalance) errors.OpeningBalance = "OpeningBalance is required.";
   

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSave = () => {
    if (validate()) {
      // Perform save action
      console.log("Form submitted:", formValues);
      handleDrawerClose();
    }
  };


  return (
    <Box>
      <Box sx={{ background: 'rgb(238, 246, 252)', borderRadius: '10px', p: 5, height: 'auto' }}>
        <Box textAlign={'center'}>
          <Typography variant='h4'><b>Account Master</b></Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button variant="contained" onClick={handleDrawerOpen}>Create Account Master </Button>
        </Box>


        <Box mt={4}>
          <MaterialReactTable
            columns={columns}
            data={suppliermaster}
            enableColumnOrdering
            enableColumnResizing
          />
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
          <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography m={2} variant="h6"><b>Create Account Master</b></Typography>
            <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleDrawerClose} />
          </Box>
          <Divider />

          <Box m={2}>


            <Box>
              <Typography>Account Code</Typography>
              <TextField sx={{ width: '50%' }} onChange={(e) => handleChange("AccountCode", e.target.value)} value={formValues.AccountCode} error={!!formErrors.AccountCode} size="small" margin="normal" placeholder="Enter Account Code" fullWidth />
              {(!!formErrors.AccountCode) && (
                <Alert severity="error" sx={{
                  width: '92%',
                  p: '2',
                  pl: '4%', height: '23px',
                  borderRadius: '8px',
                  borderTopLeftRadius: '0',
                  borderTopRightRadius: '0',
                  fontSize: '12px',
                  display: 'flex',
                  backgroundColor: "#ffdddd",
                  color: "#a00",
                  alignItems: 'center',
                  '& .MuiAlert-icon': {
                    fontSize: '16px',
                    mr: '8px',
                  },
                }}>
                  {formErrors.AccountCode}
                </Alert>
              )}
            </Box>

            <Box>
              <Typography>Account Name</Typography>
              <TextField onChange={(e) => handleChange("AccountName", e.target.value)} value={formValues.AccountName} error={!!formErrors.AccountName} size="small" margin="normal" placeholder="Enter Account Name" fullWidth />
              {(!!formErrors.AccountName) && (
                <Alert severity="error" sx={{
                  width: '92%',
                  p: '2',
                  pl: '4%', height: '23px',
                  borderRadius: '8px',
                  borderTopLeftRadius: '0',
                  borderTopRightRadius: '0',
                  fontSize: '12px',
                  display: 'flex',
                  backgroundColor: "#ffdddd",
                  color: "#a00",
                  alignItems: 'center',
                  '& .MuiAlert-icon': {
                    fontSize: '16px',
                    mr: '8px',
                  },
                }}>
                  {formErrors.AccountName}
                </Alert>
              )}
            </Box>

            <Box display={'flex'} gap={2} alignItems={'center'}>
              <Box flex={1}  >
                <Typography> Group</Typography>
                <FormControl onChange={(e) => handleChange("Group", e.target.value)} value={formValues.Group} error={!!formErrors.Group}
                  fullWidth size="small" margin="normal">


                  <Select>
                    <MenuItem value=""></MenuItem>
                  </Select>
                  {(!!formErrors.Group) && (
                    <Alert severity="error" sx={{
                      width: '92%',
                      p: '2',
                      pl: '4%', height: '23px',
                      borderRadius: '8px',
                      borderTopLeftRadius: '0',
                      borderTopRightRadius: '0',
                      fontSize: '12px',
                      display: 'flex',
                      backgroundColor: "#ffdddd",
                      color: "#a00",
                      alignItems: 'center',
                      '& .MuiAlert-icon': {
                        fontSize: '16px',
                        mr: '8px',
                      },
                    }}>
                      {formErrors.Group}
                    </Alert>
                  )}
                </FormControl>
              </Box>

              <Box flex={1}  >
                <Typography>Sub Group</Typography>
                <FormControl onChange={(e) => handleChange("SubGroup", e.target.value)} value={formValues.SubGroup} error={!!formErrors.SubGroup}
                  fullWidth size="small" margin="normal">


                  <Select>
                    <MenuItem value=""></MenuItem>
                  </Select>
                  {(!!formErrors.SubGroup) && (
                    <Alert severity="error" sx={{
                      width: '92%',
                      p: '2',
                      pl: '4%', height: '23px',
                      borderRadius: '8px',
                      borderTopLeftRadius: '0',
                      borderTopRightRadius: '0',
                      fontSize: '12px',
                      display: 'flex',
                      backgroundColor: "#ffdddd",
                      color: "#a00",
                      alignItems: 'center',
                      '& .MuiAlert-icon': {
                        fontSize: '16px',
                        mr: '8px',
                      },
                    }}>
                      {formErrors.SubGroup}
                    </Alert>
                  )}
                </FormControl>
              </Box>
            </Box>


            <Box flex={1}  >
              <Typography>Type</Typography>
              <FormControl onChange={(e) => handleChange("Type", e.target.value)} value={formValues.Type} error={!!formErrors.Type}
                fullWidth size="small" margin="normal">
                <Select>
                  <MenuItem value=""></MenuItem>
                </Select>
                {(!!formErrors.Type) && (
                  <Alert severity="error" sx={{
                    width: '92%',
                    p: '2',
                    pl: '4%', height: '23px',
                    borderRadius: '8px',
                    borderTopLeftRadius: '0',
                    borderTopRightRadius: '0',
                    fontSize: '12px',
                    display: 'flex',
                    backgroundColor: "#ffdddd",
                    color: "#a00",
                    alignItems: 'center',
                    '& .MuiAlert-icon': {
                      fontSize: '16px',
                      mr: '8px',
                    },
                  }}>
                    {formErrors.Type}
                  </Alert>
                )}
              </FormControl>
            </Box>

            <Box display={'flex'} alignItems={'center'} gap={2}>
              <Box flex={1}>
                <Typography>Opening Balance</Typography>
                <TextField
                  type="number"
                  onChange={(e) => handleChange("AccountCode", e.target.value)}
                  value={openingBal}
                  error={!!formErrors.AccountCode}
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
                <FormControl onChange={(e) => handleChange("DebitCredit", e.target.value)} value={formValues.debitCredit} error={!!formErrors.DebitCredit}
                  fullWidth size="small" margin="normal">


                  <Select>
                    <MenuItem value="">Debit</MenuItem>
                    <MenuItem value="">Credit</MenuItem>
                  </Select>
                  {(!!formErrors.DebitCredit) && (
                    <Alert severity="error" sx={{
                      width: '92%',
                      p: '2',
                      pl: '4%', height: '23px',
                      borderRadius: '8px',
                      borderTopLeftRadius: '0',
                      borderTopRightRadius: '0',
                      fontSize: '12px',
                      display: 'flex',
                      backgroundColor: "#ffdddd",
                      color: "#a00",
                      alignItems: 'center',
                      '& .MuiAlert-icon': {
                        fontSize: '16px',
                        mr: '8px',
                      },
                    }}>
                      {formErrors.DebitCredit}
                    </Alert>
                  )}
                </FormControl>
              </Box>




            </Box>






          </Box>












          <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2} mt={5}>
            <Box>
              <Button onClick={handleSave} variant='contained'>Save </Button>
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

export default AccountMaster
