
import React, { useMemo, useState, useEffect } from 'react'
import { Alert, Autocomplete, useMediaQuery, Box, Button, IconButton, Typography, TextField, Drawer, Divider, FormControl, Select, MenuItem, Menu } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { MaterialReactTable, } from 'material-react-table';
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useTheme } from "@mui/material/styles";
import axios from 'axios';
import { toast } from "react-toastify";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from 'moment';
import dayjs from "dayjs";
const ProductionEntry = () => {
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


    const [data, setData] = useState([]);
    const columns = useMemo(() => {
        return [

            {
                accessorKey: 'ProductionNo',
                header: 'Production No',
                size: 150,
            },
            {
                accessorKey: 'ProductionDate.date',
                header: 'Production Date',
                size: 150,
                Cell: ({ cell }) => <span>{moment(cell.getValue()).format('DD-MM-YYYY')}</span>,
            },
            // {
            //     accessorKey: 'OperatorId',
            //     header: 'Operator',
            //     size: 150,
            // },


            // {
            //     accessorKey: 'MachineId',
            //     header: 'Machine',
            //     size: 150,
            // },
            {
                accessorKey: 'MachineStartTime,date',
                header: 'Machine Start Time',
                size: 150,
                Cell: ({ cell }) => <span>{moment(cell.getValue()).format('DD-MM-YYYY')}</span>,
            },
            {
                accessorKey: 'MachineEndTime.date',
                header: 'Machine End Time',
                size: 150,
                Cell: ({ cell }) => <span>{moment(cell.getValue()).format('DD-MM-YYYY')}</span>,
            },
            {
                accessorKey: 'OilSeedId',
                header: 'Oil seed',
                size: 150,
            },

            {
                accessorKey: 'Storage',
                header: 'Storage',
                size: 150,
            },

            {
                accessorKey: 'BrandName',
                header: 'Brand Name',
                size: 150,
            },
            {
                accessorKey: 'BatchNo',
                header: 'Batch No',
                size: 150,
            },
            {
                accessorKey: 'Weight',
                header: 'Weight',
                size: 150,
            },
            {
                accessorKey: 'OilProduced',
                header: 'Oil Produced(Kg)',
                size: 150,
            },
            {
                accessorKey: 'Percentage',
                header: 'Percentage',
                size: 150,
            },
            {
                accessorKey: 'OilInLitre',
                header: 'Oil(L)',
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
        ];
    }, []);

    //integration
    const [productNo, setProductNo] = useState('');
    const [updateproductNo, setUpdateProductNo] = useState('');

    const [productiondate, setProductionDate] = useState(null);
    const [updateProductiondate, setUpdateProductionDate] = useState(null);

    const [Operator, setOperator] = useState('')
    const [updateOperator, setupdateOperator] = useState('')

    const [machines, setMachines] = useState('')
    const [Updatemachines, setUpdateMachines] = useState('')

    const [machinestarttime, SetMachineStartTime] = useState(null)
    const [updatemachinestarttime, setupdateMachineStartTime] = useState('')

    const [machineEndtime, SetMachineEndTime] = useState(null)
    const [updatemachineEndtime, setupdatemachineEndtime] = useState('')



    const [storage, setStorage] = useState('')
    const [updatestorage, setupdateStorage] = useState('')

    const [brandName, setBrandName] = useState('')
    const [updatebrandName, setupdateBrandName] = useState('')

    const [batchno, setBatchNo] = useState('')
    const [updatebatchno, setupdateBatchNo] = useState('')

    const [weight, setWeight] = useState('')
    const [updateweight, setupdateWeight] = useState('')

    const [oilProduced, setOilProduced] = useState('')
    const [updateoilProduced, setupdateOilProduced] = useState('')

    const [percentage, setPercentage] = useState('')
    const [updatepercentage, setUpdatePercentage] = useState('')

    const [oilInLit, setOilInLit] = useState('')
    const [updateoilInLit, setupdateOilInLit] = useState('')


    //for  Operator
    const [operatorOptions, setOperatorOptions] = useState([]);
    const [selectedOperator, setSelectedOperator] = useState("");

    const fetchAccounts = async () => {
        try {
            const response = await axios.get("https://arohanagroapi.microtechsolutions.co.in/php/get/gettable.php?Table=operators");
            const opratorOptions = response.data.map((operator) => ({
                value: operator.Id,
                label: operator.OperatorName,
            }));
            setOperatorOptions(opratorOptions);
        } catch (error) {

        }
    };

    //for Machines
    const [machineOptions, setMachineOptions] = useState([]);
    const [selectedMachine, setSelectedMachine] = useState("");

    const fetchMachines = async () => {
        try {
            const response = await axios.get("https://arohanagroapi.microtechsolutions.co.in/php/get/gettable.php?Table=machines");
            const machineOptions = response.data.map((machine) => ({
                value: machine.Id,
                label: machine.MachineName,
            }));
            setMachineOptions(machineOptions);
        } catch (error) {

        }
    };


    //for Oillseed
    const [oilseedOptions, setOilSeedOptions] = useState([]);
    const [selectedOillSeed, setSelectedOillSeed] = useState("");

    const fetchOilseed = async () => {
        try {
            const response = await axios.get("https://arohanagroapi.microtechsolutions.co.in/php/get/gettable.php?Table=oilseedmaster");
            const oil = response.data.map((oilseed) => ({
                value: oilseed.Id,
                label: oilseed.OilSeedName,
            }));
            setOilSeedOptions(oil);
        } catch (error) {

        }
    };

    useEffect(() => {
        fetchAccounts();
        fetchMachines();
        fetchOilseed()
    }, []);


    const handleClearTemplate = () => {
        setProductNo('');
        setProductionDate('');
        setSelectedOperator('');
        setSelectedMachine('');
        SetMachineStartTime('');
        SetMachineEndTime('');
        setSelectedOillSeed('');
        setStorage('');
        setBrandName('');
        setBatchNo('');
        setWeight('');
        setOilProduced('')
        setPercentage('')
        setOilInLit('')
    }


    //create Productionentry
    // const CreateProductionEntry = () => {

    //     const urlencoded = new URLSearchParams();
    //     urlencoded.append("ProductionNo", productNo);
    //     urlencoded.append("ProductionDate", productiondate);
    //     urlencoded.append("OperatorId", selectedOperator);
    //     urlencoded.append("OilSeedId", selectedOillSeed);
    //     urlencoded.append("Storage", storage);
    //     urlencoded.append("BrandName", brandName);
    //     urlencoded.append("BatchNo", batchno);
    //     urlencoded.append("MachineId", selectedMachine);
    //     urlencoded.append("MachineStartTime", machinestarttime);
    //     urlencoded.append("Weight", weight);
    //     urlencoded.append("OilProduced", oilProduced);
    //     urlencoded.append("Percentage", percentage);
    //     urlencoded.append("OilInLitre", oilInLit);
    //     urlencoded.append("MachineEndTime", machineEndtime);
    //     const requestOptions = {
    //         headers: {
    //             "Content-Type": "application/x-www-form-urlencoded",
    //         },
    //     };

    //     axios
    //         .post(
    //             "https://arohanagroapi.microtechsolutions.co.in/php/postproduction.php",
    //             urlencoded,
    //             requestOptions
    //         )
    //         .then((response) => {
    //             console.log("API Response:", response.data);
    //             // if (response && response.message === "ChatTemplate created successfully") {
    //             handleClearTemplate();
    //             handleDrawerClose()
    //             toast.success("Production Entry created successfully");

    //             // } else {
    //             //   toast.error(response.message || "Failed to create Material Master created");
    //             // }
    //         })
    //         .catch((error) => {
    //             console.error("Error:", error);
    //         });
    // };

    const CreateProductionEntry = () => {
        const formatDate = (date) => new Date(date).toISOString();
        const formattedProductionDate = formatDate(productiondate).split('T')[0];
        const formattedMachineStartTime = formatDate(machinestarttime);
        const formattedMachineEndTime = formatDate(machineEndtime);

        const urlencoded = new URLSearchParams();
        urlencoded.append("ProductionNo", productNo);
        urlencoded.append("ProductionDate", formattedProductionDate);
        urlencoded.append("OperatorId", selectedOperator);
        urlencoded.append("OilSeedId", selectedOillSeed);
        urlencoded.append("Storage", storage);
        urlencoded.append("BrandName", brandName);
        urlencoded.append("BatchNo", batchno);
        urlencoded.append("MachineId", selectedMachine);
        urlencoded.append("MachineStartTime", formattedMachineStartTime);
        urlencoded.append("Weight", weight);
        urlencoded.append("OilProduced", oilProduced);
        urlencoded.append("Percentage", percentage);
        urlencoded.append("OilInLitre", oilInLit);
        urlencoded.append("MachineEndTime", formattedMachineEndTime);
        const requestOptions = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        };

        axios
            .post(
                "https://arohanagroapi.microtechsolutions.co.in/php/postproduction.php",
                urlencoded,
                requestOptions
            )
            .then((response) => {
                console.log("API Response:", response.data);
                // if (response && response.message === "ChatTemplate created successfully") {
                handleClearTemplate();
                handleDrawerClose()
                toast.success("Production Entry created successfully");

                // } else {
                //   toast.error(response.message || "Failed to create Material Master created");
                // }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    //tble data
    const [Id, setID] = useState('')
    const fetchData = async () => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        try {
            const response = await fetch("https://arohanagroapi.microtechsolutions.co.in/php/get/gettable.php?Table=production", requestOptions);
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


    //get Data by Id
    const fetchDataById = () => {
        const requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(
            `https://arohanagroapi.microtechsolutions.co.in/php/getbyid.php?Id=${idwiseData}&Table=production`,
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                let productionDate = result.ProductionDate.date
                const productionDateObject = dayjs(productionDate);

                let machinestarttimeDate = result.MachineStartTime.date
                const machinestarttimeDateObject = dayjs(machinestarttimeDate);

               let machineendtimeDate=result.MachineEndTime.date
               const machineendtimeDateObject = dayjs(machineendtimeDate);

                setUpdateProductNo(result.ProductionNo)
                setUpdateProductionDate(productionDateObject || null);
                setSelectedOperator(result.OperatorId)
                setSelectedMachine(result.MachineId)
                setupdateMachineStartTime(machinestarttimeDateObject|| null)
                setupdatemachineEndtime(machineendtimeDateObject|| null)
                setSelectedOillSeed(result.OilSeedId)
                setupdateStorage(result.Storage)
                setupdateBrandName(result.BrandName)
                setupdateBatchNo(result.BatchNo)
                setupdateWeight(result.Weight)
                setupdateOilProduced(result.OilProduced)
                setUpdatePercentage(result.Percentage)
                setupdateOilInLit(result.OilInLitre)
            })
            .catch((error) => console.error(error));
    };
    useEffect(() => {
        // CreateMaterialMaster();
        fetchDataById(idwiseData)
    }, [idwiseData]);



    //update 
    const UpdateProductionEntry = () => {
        const urlencoded = new URLSearchParams();
        urlencoded.append("ProductionNo", updateproductNo);
        urlencoded.append("ProductionDate", updateProductiondate);
        urlencoded.append("OperatorId", updateOperator);
        urlencoded.append("OilSeedId", selectedOillSeed);
        urlencoded.append("Storage", updatestorage);
        urlencoded.append("BrandName", updatebrandName);
        urlencoded.append("BatchNo", updatebatchno);
        urlencoded.append("MachineId", selectedMachine);
        urlencoded.append("MachineStartTime", updatemachinestarttime);
        urlencoded.append("Weight", updateweight);
        urlencoded.append("OilProduced", updateoilProduced);
        urlencoded.append("Percentage", updatepercentage);
        urlencoded.append("OilInLitre", updateoilInLit);
        urlencoded.append("MachineEndTime", updatemachineEndtime);
        urlencoded.append("Id", idwiseData);
        const requestOptions = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        };

        axios
            .post(
                "https://arohanagroapi.microtechsolutions.co.in/php/updateproductmaster.php",
                urlencoded,
                requestOptions
            )
            .then((response) => {
                console.log("API Response:", response.data);
                handleEditDrawerClose()
                toast.success("Product Master Updated successfully");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };



    //for delete 
    const DeleteProductionEntry = () => {

        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        const url = `https://arohanagroapi.microtechsolutions.co.in/php/delete/deletetable.php?Table=production&Id=${currentRow.original.Id}`
        console.log(url)
        fetch(url, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)

                toast.success("Production Entry deleted successfully!");


            })
            .catch((error) => console.error(error));
    }



    return (
        <Box>
            <Box sx={{  p: 5, height: 'auto' }}>
                <Box textAlign={'center'}>
                    <Typography color='var(--complementary-color)' variant='h4'><b>Production Entry</b></Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 3 }}>
                    <Button sx={{ background: 'var(--complementary-color)', }} variant="contained" onClick={handleDrawerOpen}>Create Production Entry </Button>
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
                            onClick={DeleteProductionEntry}
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
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between',background:'rgb(236, 253, 230)' }}>
                            <Typography m={2} variant="h6"><b>Create Production Entry</b></Typography>
                            <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleDrawerClose} />
                        </Box>
                        <Divider />




                        <Box>
                            <Box display="flex" alignItems="center" justifyContent="space-between" gap={2}>

                                <Box flex={1} mt={2} m={2} >
                                    <Box mb={2}>
                                        <Typography variant="body2">Production No</Typography>
                                        <TextField
                                            value={productNo}
                                            disabled
                                            onChange={(e) => setProductNo(e.target.value)}
                                            size="small"  fullWidth />
                                    </Box>

                                    <Box flex={1}>
                                        <Typography variant="body2">Operator</Typography>
                                        <Select
                                            fullWidth
                                            size='small'
                                            value={selectedOperator || ""}
                                            onChange={(event) => setSelectedOperator(event.target.value)}

                                        >
                                            {operatorOptions.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </Box>

                                    <Box mt={2} >
                                        <Typography variant="body2">Machine Start Time</Typography>

                                        <DatePicker
                                            value={machinestarttime}
                                            onChange={(newDate) => SetMachineStartTime(newDate)}
                                            format="dd/MM/yyyy"
                                            slotProps={{ textField: { size: "small", fullWidth: true } }}
                                        />

                                    </Box>

                                    <Box mt={2}>
                                        <Typography variant="body2">Oil Seed</Typography>
                                        <Select
                                            fullWidth
                                            size='small'
                                            value={selectedOillSeed || ""}
                                            onChange={(event) => setSelectedOillSeed(event.target.value)}

                                        >
                                            {oilseedOptions.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </Box>

                                    <Box mt={2} >
                                        <Typography variant="body2">Brand Name</Typography>
                                        <TextField
                                            value={brandName}
                                            onChange={(e) => setBrandName(e.target.value)}
                                            size="small" placeholder="Enter Brand Name" fullWidth />
                                    </Box>

                                    <Box mt={2}>
                                        <Typography variant="body2">Weight</Typography>
                                        <TextField
                                            value={weight}
                                            onChange={(e) => setWeight(e.target.value)}
                                            size="small" placeholder="Enter Weight" fullWidth />
                                    </Box>

                                    <Box mt={2}>
                                        <Typography variant="body2"> Percentage</Typography>
                                        <TextField
                                            value={percentage}
                                            onChange={(e) => setPercentage(e.target.value)}
                                            size="small" placeholder="Enter Percentage " fullWidth />
                                    </Box>
                                </Box>


                                <Box flex={1} mt={2} m={2}>
                                    <Box mb={2}>
                                        <Typography variant="body2">Production Date</Typography>

                                        <DatePicker
                                            format="dd/MM/yyyy"
                                            value={productiondate}
                                            onChange={(newDate) => setProductionDate(newDate)}
                                            slotProps={{ textField: { size: "small", fullWidth: true } }}
                                        />

                                    </Box>

                                    <Box>
                                        <Typography variant="body2">Machine</Typography>
                                        <Select
                                            fullWidth
                                            size='small'
                                            value={selectedMachine || ""}
                                            onChange={(event) => setSelectedMachine(event.target.value)}

                                        >
                                            {machineOptions.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </Box>

                                    <Box mt={2} >
                                        <Typography variant="body2">Machine End Time</Typography>

                                        <DatePicker
                                            format="dd/MM/yyyy"
                                            value={machineEndtime}
                                            onChange={(newDate) => SetMachineEndTime(newDate)}
                                            slotProps={{ textField: { size: "small", fullWidth: true } }}
                                        />

                                    </Box>

                                    <Box mt={2}>
                                        <Typography variant="body2">Storage</Typography>
                                        <TextField
                                            value={storage}
                                            onChange={(e) => setStorage(e.target.value)}
                                            size="small" placeholder="Enter Storage " fullWidth />
                                    </Box>

                                    <Box mt={2} >
                                        <Typography variant="body2">Batch No</Typography>
                                        <TextField
                                            value={batchno}
                                            onChange={(e) => setBatchNo(e.target.value)}
                                            size="small" placeholder="Enter Batch No" fullWidth />
                                    </Box>

                                    <Box mt={2} >
                                        <Typography variant="body2">Oil Produced (kg)</Typography>
                                        <TextField
                                            value={oilProduced}
                                            onChange={(e) => setOilProduced(e.target.value)}
                                            size="small" placeholder="Enter Oil Produced " fullWidth />
                                    </Box>

                                    <Box mt={2}>
                                        <Typography variant="body2"> Oil (Lit)</Typography>
                                        <TextField
                                            value={oilInLit}
                                            onChange={(e) => setOilInLit(e.target.value)}
                                            size="small" placeholder="Enter Oil (Lit) " fullWidth />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>










                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2} mt={5}>
                            <Box>
                                <Button sx={{
                 background: 'var(--primary-color)', 
                 }}
                                    onClick={CreateProductionEntry}
                                    variant='contained'>Save </Button>
                            </Box>

                            <Box>
                                <Button sx={{ borderColor: 'var(--complementary-color)', color: 'var(--complementary-color)' }} onClick={handleDrawerClose} variant='outlined'><b>Cancel</b> </Button>
                            </Box>
                        </Box>
                    </LocalizationProvider>
                </Drawer>

                {/* edit drawer */}
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
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' ,background:'rgb(236, 253, 230)'}}>
                            <Typography m={2} variant="h6"><b>Update Production Entry</b></Typography>
                            <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleEditDrawerClose} />
                        </Box>
                        <Divider />

                        <Box>

                            <Box display="flex" alignItems="center" justifyContent="space-between" gap={2}>

                                <Box flex={1} mt={2} m={2} >
                                    <Box mb={2}>
                                        <Typography variant="body2">Production No</Typography>
                                        <TextField
                                            value={updateproductNo}
                                            onChange={(e) => setUpdateProductNo(e.target.value)}
                                            size="small" placeholder="Enter Product No" fullWidth disabled />
                                    </Box>

                                    <Box flex={1}>
                                        <Typography variant="body2">Operator</Typography>
                                        <Select
                                            fullWidth
                                            size='small'
                                            value={selectedOperator || ""}
                                            onChange={(event) => setSelectedOperator(event.target.value)}

                                        >
                                            {operatorOptions.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </Box>

                                    <Box mt={2} >
                                        <Typography variant="body2">Machine Start Time</Typography>

                                        <DatePicker
                                           
                                            value={updatemachinestarttime ? updatemachinestarttime.toDate() : null} 
                                            onChange={(newValue) =>setupdateMachineStartTime(newValue)}
                                            slotProps={{ textField: { size: 'small', fullWidth: true, } }}
                                            renderInput={(params) => <TextField />}
                                        />

                                    </Box>

                                    <Box mt={2}>
                                        <Typography variant="body2">Oil Seed</Typography>
                                        <Select
                                            fullWidth
                                            size='small'
                                            value={selectedOillSeed || ""}
                                            onChange={(event) => setSelectedOillSeed(event.target.value)}

                                        >
                                            {oilseedOptions.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </Box>

                                    <Box mt={2} >
                                        <Typography variant="body2">Brand Name</Typography>
                                        <TextField
                                            value={updatebrandName}
                                            onChange={(e) => setupdateBrandName(e.target.value)}
                                            size="small" placeholder="Enter Brand Name" fullWidth />
                                    </Box>

                                    <Box mt={2}>
                                        <Typography variant="body2">Weight</Typography>
                                        <TextField
                                            value={updateweight}
                                            onChange={(e) => setupdateWeight(e.target.value)}
                                            size="small" placeholder="Enter Weight" fullWidth />
                                    </Box>

                                    <Box mt={2}>
                                        <Typography variant="body2"> Percentage</Typography>
                                        <TextField
                                            value={updatepercentage}
                                            onChange={(e) => setUpdatePercentage(e.target.value)}
                                            size="small" placeholder="Enter Percentage " fullWidth />
                                    </Box>
                                </Box>


                                <Box flex={1} mt={2} m={2}>
                                    <Box mb={2}>
                                        <Typography variant="body2">Production Date</Typography>

                                        <DatePicker
                                            value={updateProductiondate ? updateProductiondate.toDate() : null} // Convert to Date object
                                            onChange={(newValue) => setUpdateProductionDate(newValue)}
                                            slotProps={{ textField: { size: 'small', fullWidth: true } }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />

                                    </Box>



                                    <Box>
                                        <Typography variant="body2">Machine</Typography>
                                        <Autocomplete
                                            fullWidth
                                            size="small"
                                            options={machineOptions}
                                            getOptionLabel={(option) => option.label}
                                            value={machineOptions.find((option) => option.value === selectedMachine) || null}
                                            onChange={(_, newValue) => setSelectedMachine(newValue ? newValue.value : "")}
                                            renderInput={(params) => <TextField {...params} variant="outlined" />}
                                        />
                                    </Box>

                                    <Box mt={2} >
                                        <Typography variant="body2">Machine End Time</Typography>

                                        <DatePicker
                                            format="dd/MM/yyyy"
                                       
                                            value={updatemachineEndtime ? updatemachineEndtime.toDate() : null} 
                                            onChange={(newValue) =>setupdatemachineEndtime(newValue)}
                                            
                                            slotProps={{ textField: { size: "small", fullWidth: true } }}
                                        />

                                    </Box>

                                    <Box mt={2}>
                                        <Typography variant="body2">Storage</Typography>
                                        <TextField
                                            value={updatestorage}
                                            onChange={(e) => setupdateStorage(e.target.value)}
                                            size="small" placeholder="Enter Storage " fullWidth />
                                    </Box>

                                    <Box mt={2} >
                                        <Typography variant="body2">Batch No</Typography>
                                        <TextField
                                            value={updatebatchno}
                                            onChange={(e) => setupdateBatchNo(e.target.value)}
                                            size="small" placeholder="Enter Batch No" fullWidth />
                                    </Box>

                                    <Box mt={2} >
                                        <Typography variant="body2">Oil Produced (kg)</Typography>
                                        <TextField
                                            value={updateoilProduced}
                                            onChange={(e) => setupdateOilProduced(e.target.value)}
                                            size="small" placeholder="Enter Oil Produced " fullWidth />
                                    </Box>

                                    <Box mt={2}>
                                        <Typography variant="body2">Oil (Lit)</Typography>
                                        <TextField
                                            value={updateoilInLit}
                                            onChange={(e) => setupdateOilInLit(e.target.value)}
                                            size="small" placeholder="Enter Oil (Lit) " fullWidth />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2} mt={5}>
                            <Box>
                                <Button sx={{
                 background: 'var(--primary-color)', 
                 }}
                                    onClick={UpdateProductionEntry}
                                    variant='contained'

                                >Save </Button>
                            </Box>

                            <Box>
                                <Button sx={{ borderColor: 'var(--complementary-color)', color: 'var(--complementary-color)' }} onClick={handleEditDrawerClose} variant='outlined'><b>Cancel</b> </Button>
                            </Box>
                        </Box>
                    </LocalizationProvider>
                </Drawer>


            </Box>

        </Box>
    )
}

export default ProductionEntry







































