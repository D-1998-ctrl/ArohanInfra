
import React, { useMemo, useState } from 'react'
import { Alert, Box, useMediaQuery, Button, Typography, TextField, Drawer, Divider, FormControl, Select, MenuItem, FormControlLabel, Checkbox } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { MaterialReactTable, } from 'material-react-table';
import suppliermaster from './suppliermaster.json'
import { useTheme } from "@mui/material/styles";

const SupplierMaster = () => {
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
  ///validation
  const [formValues, setFormValues] = useState({
    AccountCode: "",
    AccountName: "",
    SubGroup: "",
    GroupId: "",
    CurrentBalance: "",
    DebitCredit: "",
    TypeCode: "",
    Salesman: "",
    Address1: "",
    Address2: "",
    State: "",
    City: "",
    Pincode: "",
    Email: "",
    MobileNo: "",
    url: "",
    GSTNo: "",
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
    if (!formValues.GroupId) errors.GroupId = "Group Id is required.";
    if (!formValues.CurrentBalance) errors.CurrentBalance = "Current Balance is required.";
    if (!formValues.DebitCredit) errors.DebitCredit = "Debit Credit is required.";
    if (!formValues.TypeCode) errors.TypeCode = "Type Code is required.";
    if (!formValues.Salesman) errors.Salesman = "Salesman is required.";

    if (!formValues.Address1) errors.Address1 = "Address1 is required.";
    if (!formValues.Address2) errors.Address2 = "Address 2  is required.";
    if (!formValues.State) errors.State = "State is required.";
    if (!formValues.City) errors.City = "City is required.";
    if (!formValues.Pincode)
      errors.Pincode = "Pincode is required.";
    if (!formValues.Email) errors.Email = "Email is required.";
    if (!formValues.MobileNo) errors.MobileNo = "Mobile No is required.";
    if (!formValues.url) errors.url = "url is required.";
    if (!formValues.GSTNo) errors.GSTNo = "GST No is required.";
    // Add other field-specific validation as needed

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
          <Typography variant='h4'><b>Supplier Master</b></Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button variant="contained" onClick={handleDrawerOpen}>Create Supplier Master </Button>
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
            <Typography m={2} variant="h6"><b>Create Supplier Master</b></Typography>
            <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleDrawerClose} />
          </Box>
          <Divider />

          <Box>
            <Box display="flex" alignItems="center" gap={2}>
              <Box flex={1} m={2}>
                <Box>
                  <Typography>Account Code</Typography>
                  <TextField onChange={(e) => handleChange("AccountCode", e.target.value)} value={formValues.AccountCode} error={!!formErrors.AccountCode} size="small" margin="normal" placeholder="Enter Account Code" fullWidth />
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
                  <Typography>Sub Group </Typography>
                  <FormControl onChange={(e) => handleChange("SubGroup", e.target.value)} value={formValues.SubGroup} error={!!formErrors.SubGroup} fullWidth size="small" margin="normal">

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

                <Box>
                  <Typography>Current Balance</Typography>
                  <TextField
                    onChange={(e) => handleChange("CurrentBalance", e.target.value)} value={formValues.CurrentBalance} error={!!formErrors.CurrentBalance} size="small" margin="normal" placeholder="Enter Account Name" fullWidth />
                  {(!!formErrors.CurrentBalance) && (
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
                      {formErrors.CurrentBalance}
                    </Alert>
                  )}
                </Box>


                <Box>
                  <Typography>Type Code</Typography>
                  <TextField onChange={(e) => handleChange("TypeCode", e.target.value)} value={formValues.TypeCode} error={!!formErrors.TypeCode}
                    size="small" margin="normal" placeholder="Enter Type code" fullWidth />
                  {(!!formErrors.TypeCode) && (
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
                      {formErrors.TypeCode}
                    </Alert>
                  )}
                </Box>

                <Box>
                  <Typography>Address 1</Typography>
                  <TextField onChange={(e) => handleChange("Address1", e.target.value)} value={formValues.Address1} error={!!formErrors.Address1} size="small" margin="normal" placeholder="Enter Address 1" fullWidth />
                  {(!!formErrors.Address1) && (
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
                      {formErrors.Address1}
                    </Alert>
                  )}
                </Box>

                <Box>
                  <Typography>State </Typography>
                  <FormControl onChange={(e) => handleChange("State", e.target.value)} value={formValues.State} error={!!formErrors.State} fullWidth size="small" margin="normal">

                    <Select>
                      <MenuItem value=""></MenuItem>
                    </Select>

                    {(!!formErrors.State) && (
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
                        {formErrors.State}
                      </Alert>
                    )}
                  </FormControl>
                </Box>

                <Box>
                  <Typography>Pincode</Typography>
                  <TextField onChange={(e) => handleChange("Pincode", e.target.value)} value={formValues.Pincode} error={!!formErrors.Pincode} size="small" margin="normal" placeholder="Enter pincode" fullWidth />
                  {(!!formErrors.Pincode) && (
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
                      {formErrors.Pincode}
                    </Alert>
                  )}
                </Box>

                <Box>
                  <Typography>Mobile No</Typography>
                  <TextField onChange={(e) => handleChange("MobileNo", e.target.value)} value={formValues.MobileNo} error={!!formErrors.MobileNo}
                    size="small" margin="normal" placeholder="Enter Mobile No" fullWidth />
                  {(!!formErrors.MobileNo) && (
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
                      {formErrors.MobileNo}
                    </Alert>
                  )}
                </Box>

              </Box>





              <Box flex={1} m={2}>


                <Box>
                  <Typography>Account Name</Typography>
                  <TextField onChange={(e) => handleChange("AccountName", e.target.value)} value={formValues.AccountName} error={!!formErrors.AccountName}
                    size="small" margin="normal" placeholder="Enter Account Name" fullWidth />

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

                <Box>
                  <Typography>Group Id</Typography>
                  <FormControl onChange={(e) => handleChange("GroupId", e.target.value)} value={formValues.GroupId} error={!!formErrors.GroupId} fullWidth size="small" margin="normal">

                    <Select>
                      <MenuItem value=""></MenuItem>
                    </Select>
                    {(!!formErrors.GroupId) && (
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
                        {formErrors.GroupId}
                      </Alert>
                    )}
                  </FormControl>
                </Box>

                <Box>
                  <Typography>Debit/Credit </Typography>
                  <FormControl onChange={(e) => handleChange("DebitCredit", e.target.value)} value={formValues.DebitCredit} error={!!formErrors.DebitCredit} fullWidth size="small" margin="normal">

                    <Select>
                      <MenuItem value=""></MenuItem>
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


                <Box>
                  <Typography>Salesman </Typography>
                  <FormControl onChange={(e) => handleChange("Salesman", e.target.value)} value={formValues.Salesman} error={!!formErrors.Salesman} fullWidth size="small" margin="normal">

                    <Select>
                      <MenuItem value=""></MenuItem>
                    </Select>
                    {(!!formErrors.Salesman) && (
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
                        {formErrors.Salesman}
                      </Alert>
                    )}
                  </FormControl>
                </Box>

                <Box>
                  <Typography>Address 2</Typography>
                  <TextField onChange={(e) => handleChange("Address2", e.target.value)} value={formValues.Address2} error={!!formErrors.Address2}
                    size="small" margin="normal" placeholder="Enter Address 2" fullWidth />
                  {(!!formErrors.Address2) && (
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
                      {formErrors.Address2}
                    </Alert>
                  )}
                </Box>

                <Box>
                  <Typography>City </Typography>
                  <FormControl onChange={(e) => handleChange("City", e.target.value)} value={formValues.City} error={!!formErrors.City} fullWidth size="small" margin="normal">

                    <Select>
                      <MenuItem value=""></MenuItem>
                    </Select>
                    {(!!formErrors.City) && (
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
                        {formErrors.City}
                      </Alert>
                    )}
                  </FormControl>
                </Box>

                <Box>
                  <Typography>Email</Typography>
                  <TextField onChange={(e) => handleChange("Email", e.target.value)} value={formValues.Email} error={!!formErrors.Email} size="small" margin="normal" placeholder="Enter Email" fullWidth />
                  {(!!formErrors.Email) && (
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
                      {formErrors.Email}
                    </Alert>
                  )}
                </Box>

                <Box>
                  <Typography>URL</Typography>
                  <TextField onChange={(e) => handleChange("url", e.target.value)} value={formValues.url} error={!!formErrors.url}
                    size="small" margin="normal" placeholder="Enter URL" fullWidth />
                  {(!!formErrors.url) && (
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
                      {formErrors.url}
                    </Alert>
                  )}
                </Box>

              </Box>










            </Box>


            <Box m={2}>
              <Typography>GST No</Typography>
              <TextField onChange={(e) => handleChange("GSTNo", e.target.value)} value={formValues.GSTNo} error={!!formErrors.GSTNo}
                size="small" margin="normal" placeholder="Enter GST No" fullWidth />
              {(!!formErrors.GSTNo) && (
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
                  {formErrors.GSTNo}
                </Alert>
              )}
            </Box>

            <Box m={2} display={'flex'} alignItems={'center'} gap={5}>
              <FormControlLabel
                control={<Checkbox />}
                label="Is System"
              />


              <FormControlLabel
                control={<Checkbox />}
                label="GST Yes/No"
              />


              <FormControlLabel
                control={<Checkbox />}
                label="Compliance"
              />
            </Box>



          </Box>





          <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2} mb={5}>
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

export default SupplierMaster
