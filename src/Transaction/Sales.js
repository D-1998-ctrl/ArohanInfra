
// import React, { useMemo, useState, useEffect } from 'react'
// import { IconButton, Menu, Table, Autocomplete, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Alert, Box, useMediaQuery, Button, Typography, TextField, Drawer, Divider, FormControl, Select, MenuItem, FormControlLabel, Checkbox } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import { useTheme } from "@mui/material/styles";
// import { DatePicker } from "@mui/x-date-pickers";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import "react-phone-input-2/lib/style.css";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import PhoneInput from "react-phone-input-2";

// import axios from 'axios';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import qs from 'qs';
// import moment from 'moment';
// import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const SalesEntry = () => {
//     const theme = useTheme();
//     const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
//     const [isDrawerOpen, setIsDrawerOpen] = useState(false);



//     const [editingIndex, setEditingIndex] = useState(-1);

//     const [isEditing, setIsEditing] = useState(false);
//     const [invoiceheaders, setInvoiceheaders] = useState([]);
//     const [invoicedetails, setInvoicedetails] = useState([]);
//     const [id, setId] = useState('');
//         const [invdetailId, setInvdetailId] = useState('')
//     const [rows, setRows] = useState([
//         {
//             InvoiceId: '',
//             ProductId: '',
//             Quantity: 0,
//             Rate: '',
//             Amount: 0,
//             CGSTPercentage: 0,
//             CGSTAmount: 0,
//             SGSTPercentage: 0,
//             SGSTAmount: 0,
//             IGSTPercentage: 0,
//             IGSTAmount: 0
//         },
//     ]);


//     const handleInputChange = (index, field, value) => {
//         const updatedRows = [...rows];
//         // Update the changed field value
//         updatedRows[index][field] = value;
//         // Auto-calculate Amount when Quantity or Rate is updated
//         if (field === "Quantity" || field === "Rate") {
//             const quantity = parseFloat(updatedRows[index].Quantity) || 0;
//             const rate = parseFloat(updatedRows[index].Rate) || 0;
//             updatedRows[index].Amount = quantity * rate;
//         }

//         // Auto-calculate CGST Amount when CGSTPercentage is updated
//         if (field === "CGSTPercentage" || field === "Quantity" || field === "Rate") {
//             const amount = parseFloat(updatedRows[index].Amount) || 0;
//             const cgstPercentage = parseFloat(updatedRows[index].CGSTPercentage) || 0;
//             updatedRows[index].CGSTAmount = (amount * cgstPercentage) / 100;
//         }

//         // Auto-calculate SGST Amount when SGSTPercentage is updated
//         if (field === "SGSTPercentage" || field === "Quantity" || field === "Rate") {
//             const amount = parseFloat(updatedRows[index].Amount) || 0;
//             const sgstPercentage = parseFloat(updatedRows[index].SGSTPercentage) || 0;
//             updatedRows[index].SGSTAmount = (amount * sgstPercentage) / 100;
//         }

//         // Auto-calculate IGST Amount when IGSTPercentage is updated
//         if (field === "IGSTPercentage" || field === "Quantity" || field === "Rate") {
//             const amount = parseFloat(updatedRows[index].Amount) || 0;
//             const igstPercentage = parseFloat(updatedRows[index].IGSTPercentage) || 0;
//             updatedRows[index].IGSTAmount = (amount * igstPercentage) / 100;
//         }

//         // Update the state
//         setRows(updatedRows);
//     };

//     useEffect(() => {
//         fetchInvoiceHeader()
//         fetchInvdetails()
//     }, [])

//     //get of Invoice header
//     const fetchInvoiceHeader = async () => {
//         try {
//             const response = await axios.get("https://arohanagroapi.microtechsolutions.co.in/php/get/gettable.php?Table=invoiceheader");
//             setInvoiceheaders(response.data);

//         } catch (error) {

//         }
//     };

//     const fetchInvdetails = async () => {

//         try {
//             const response = await axios.get("https://arohanagroapi.microtechsolutions.co.in/php/get/gettable.php?Table=invoicedetail");
//             setInvoicedetails(response.data);

//         } catch (error) {

//         }
//     };

//     const [anchorEl, setAnchorEl] = useState(null);
//     const handleMenuOpen = (event, row) => {
//         setAnchorEl(event.currentTarget);
//         setCurrentRow(row);
//     };

//     const handleMenuClose = () => {
//         setAnchorEl(null);
//         handleMenuOpen(false);

//     };


//     const handleDrawerOpen = () => {
//         setIsDrawerOpen(true);

//     };


//     const handleNewClick =() => {
//         setIsDrawerOpen(true);
//         resetForm()
//         setIsEditing(false)
//     }

//     const handleDrawerClose = () => {
//         setIsDrawerOpen(false);
//     };

//     const [currentRow, setCurrentRow] = useState(null);

//     const handleDelete = () => {
//         if (!currentRow) {
//             console.error("No row selected for deletion.");
//             return;
//         }        
//         const itemId = currentRow.original.Id;  // Get the ID directly
//         console.log("Deleting item with ID:", itemId);

//         const requestOptions = {
//             method: "GET",
//             redirect: "follow"
//         };

//         fetch(`https://arohanagroapi.microtechsolutions.co.in/php/delete/deletetable.php?Table=invoiceheader&Id=${itemId}`, requestOptions)
//             .then((response) => {
//                 // Check if the response is JSON
//                 return response.json().then(text => {
//                     try {
//                         return JSON.parse(text);
//                     } catch (error) {
//                         throw new Error(`Invalid JSON response: ${text}`);
//                     }
//                 });
//             })
//             .then((result) => console.log("Delete response:", result))
//             .catch((error) => console.error("Error:", error));
//     };


//     const [editId,setEditId]=useState('')

//     // const handleEdit = () => {

//     //     if (currentRow) {
//     //         console.log("Editing item with ID:", currentRow.original.Id);
//     //         setEditId(currentRow.original.Id)
//     //       }




//     //     const invheader = invoiceheaders[currentRow.index];
//     //     const invdetail = invoicedetails.filter(detail => detail.InvoiceId === invheader.Id);


//     //     console.log('header', invheader)
//     //     console.log('detail', invdetail)

//     //     // Convert date strings to DD-MM-YYYY format
//     //     const convertDateForInput = (dateStr) => {
//     //         if (typeof dateStr === 'string' && dateStr.includes('-')) {
//     //             const [year, month, day] = dateStr.split(' ')[0].split('-');
//     //             return `${year}-${month}-${day}`;
//     //         } else {
//     //             toast.error(`Invalid date format: ${dateStr}`);
//     //             return ''; // Return an empty string or handle it as needed
//     //         }
//     //     }; 

//     //     // Map the details to rows
//     //     const mappedRows = invdetail.map(detail => ({
//     //         InvoiceId: detail.InvoiceId,
//     //         ProductId: detail.ProductId,
//     //         Quantity: detail.Quantity,
//     //         Rate: detail.Rate,
//     //         Amount: detail.Amount,
//     //         CGSTPercentage: detail.CGSTPercentage,
//     //         CGSTAmount: detail.CGSTAmount,
//     //         SGSTPercentage: detail.SGSTPercentage,
//     //         SGSTAmount: detail.SGSTAmount,
//     //         IGSTPercentage: detail.IGSTPercentage,
//     //         IGSTAmount: detail.IGSTAmount,
//     //         Id: detail.Id,
//     //     }));

//     //     const invoiceDate = convertDateForInput(invheader.InvoiceDate?.date);

//     //     const orderdate = convertDateForInput(invheader.OrderDate?.date);


//     //     // Set the form fields
//     //     setInvoiceNo(invheader.InvoiceNo);
//     //     setInvoiceDate(invoiceDate);
//     //     setSelectedAccount(invheader.AccountId);
//     //     setPhone(invheader.ContactNo);
//     //     setOrderNo(invheader.OrderNo)
//     //     setOrderDate(orderdate);
//     //     setSelectedProduct(invheader.ProductId);
//     //     setQuantity(invheader.Quantity);
//     //     setRate(invheader.Rate);
//     //     SetAmount(invheader.Amount);
//     //     setCGST(invheader.CGSTPercentage);
//     //     setCGSTAmount(invheader.CGSTAmount);
//     //     setSGST(invheader.SGSTPercentage);
//     //     setSGSTAmount(invheader.SGSTAmount);
//     //     setIGST(invheader.IGSTPercentage);
//     //     setIGSTAmount(invheader.IGSTAmount);
//     //     setPaymentMode(invheader.PaymentMode);
//     //     setTransport(invheader.Transport)
//     //     // Set the rows for the table with all the details
//     //     setRows(mappedRows);
//     //     // Set editing state
//     //     setEditingIndex(currentRow.index);
//     //     setIsDrawerOpen(true);
//     //     handleMenuClose()
//     //     setIsEditing(true);
//     //     setEditId(currentRow.original.Id)


//     //     const specificDetail = invdetail.find(detail => detail.Id === currentRow.original.Id);
//     //     if (specificDetail) {
//     //       setInvdetailId(specificDetail.Id); // Set the specific detail Id
//     //     }


//     //     fetchInvoiceHeader();
//     // };

//     //table




//     const handleEdit = () => {
//         if (!currentRow) {
//             console.error("No row selected for editing.");
//             toast.error("No row selected!");
//             return;
//         }

//         console.log("Editing item with ID:", currentRow.original?.Id);
//         setEditId(currentRow.original?.Id);

//         // Ensure currentRow.index exists
//         if (typeof currentRow.index !== "number") {
//             console.error("Invalid row index:", currentRow.index);
//             toast.error("Invalid row index.");
//             return;
//         }

//         const invheader = invoiceheaders[currentRow.index];

//         if (!invheader) {
//             console.error("No invoice header found for the selected row.");
//             toast.error("Invoice header not found.");
//             return;
//         }

//         const invdetail = invoicedetails.filter(detail => detail.InvoiceId === invheader.Id);

//         console.log("header", invheader);
//         console.log("detail", invdetail);

//         // Convert date strings to DD-MM-YYYY format
//         const convertDateForInput = (dateStr) => {
//             if (typeof dateStr === "string" && dateStr.includes("-")) {
//                 const [year, month, day] = dateStr.split(" ")[0].split("-");
//                 return `${year}-${month}-${day}`;
//             } else {
//                 toast.error(`Invalid date format: ${dateStr}`);
//                 return ""; // Return an empty string or handle it as needed
//             }
//         };

//         // Map the details to rows
//         const mappedRows = invdetail.map(detail => ({
//             InvoiceId: detail.InvoiceId,
//             ProductId: detail.ProductId,
//             Quantity: detail.Quantity,
//             Rate: detail.Rate,
//             Amount: detail.Amount,
//             CGSTPercentage: detail.CGSTPercentage,
//             CGSTAmount: detail.CGSTAmount,
//             SGSTPercentage: detail.SGSTPercentage,
//             SGSTAmount: detail.SGSTAmount,
//             IGSTPercentage: detail.IGSTPercentage,
//             IGSTAmount: detail.IGSTAmount,
//             Id: detail.Id,
//         }));

//         const invoiceDate = convertDateForInput(invheader.InvoiceDate?.date);
//         const orderdate = convertDateForInput(invheader.OrderDate?.date);

//         // Set form fields
//         setInvoiceNo(invheader.InvoiceNo);
//         setInvoiceDate(invoiceDate);
//         setSelectedAccount(invheader.AccountId);
//         setPhone(invheader.ContactNo);
//         setOrderNo(invheader.OrderNo);
//         setOrderDate(orderdate);
//         setSelectedProduct(invheader.ProductId);
//         setQuantity(invheader.Quantity);
//         setRate(invheader.Rate);
//         SetAmount(invheader.Amount);
//         setCGST(invheader.CGSTPercentage);
//         setCGSTAmount(invheader.CGSTAmount);
//         setSGST(invheader.SGSTPercentage);
//         setSGSTAmount(invheader.SGSTAmount);
//         setIGST(invheader.IGSTPercentage);
//         setIGSTAmount(invheader.IGSTAmount);
//         setPaymentMode(invheader.PaymentMode);
//         setTransport(invheader.Transport);

//         // Set the rows for the table with all the details
//         setRows(mappedRows);

//         // Set editing state
//         setEditingIndex(currentRow.index);
//         setIsDrawerOpen(true);
//         handleMenuClose();
//         setIsEditing(true);
//         setEditId(currentRow.original?.Id);

//         // Find the specific invoice detail
//         const specificDetail = invdetail.find(detail => detail.Id === currentRow.original?.Id);
//         if (specificDetail) {
//             setInvdetailId(specificDetail.Id);
//         }

//         fetchInvoiceHeader();
//     };


//     const columns = useMemo(
//         () => [

//             {
//                 accessorKey: 'SrNo',
//                 header: "Sr.No",
//                 size: 50,
//                 Cell: ({ row }) => row.index + 1,
//             },

//             {
//                 accessorKey: "InvoiceNo",
//                 header: "Invoice No",
//                 size: 50,
//             },
//             {
//                 accessorKey: "InvoiceDate.date",
//                 header: "Invoice Date",
//                 size: 50,
//                 Cell: ({ cell }) => {

//                     const date = moment(cell.getValue()).format('DD-MM-YYYY');
//                     return <span>{date}</span>;
//                 },
//             },
//             {
//                 accessorKey: "AccountId",
//                 header: "Account Id",
//                 size: 50,
//             },

//             {
//                 accessorKey: "OrderNo",
//                 header: "Order No",
//                 size: 50,
//             },

//             {
//                 accessorKey: "OrderDate.date",
//                 header: "Order Date",
//                 size: 50,

//                 Cell: ({ cell }) => {
//                     // Using moment.js to format the date
//                     const date = moment(cell.getValue()).format('DD-MM-YYYY');
//                     return <span>{date}</span>;
//                 },
//             },


//             {
//                 accessorKey: "ContactNo",
//                 header: "Contact No",
//                 size: 50,
//             },

//             {
//                 accessorKey: "Transport",
//                 header: "Transport",
//                 size: 50,
//             },


//             {
//                 accessorKey: "CGSTAmount",
//                 header: "CGST Amount",
//                 size: 50,
//             },

//             {
//                 accessorKey: "SGSTAmount",
//                 header: "SGST Amount",
//                 size: 50,
//             },




//             {
//                 accessorKey: "IGSTAmount",
//                 header: "IGST Amount",
//                 size: 50,
//             },

//             {
//                 accessorKey: "Total",
//                 header: "Total",
//                 size: 50,
//             },
//             {
//                 accessorKey: "PaymentMode",
//                 header: "Payment Mode",
//                 size: 50,
//             },



//             {
//                 accessorKey: "actions",
//                 header: "Actions",
//                 size: 150,
//                 Cell: ({ row }) => {
//                     const [anchorEl, setAnchorEl] = useState(null);
//                     const open = Boolean(anchorEl);

//                     const handleMenuOpen = (event) => {
//                         setAnchorEl(event.currentTarget);
//                         setCurrentRow(row);
//                     };

//                     const handleMenuClose = () => {
//                         setAnchorEl(null);
//                     };

//                     return (
//                         <div>
//                             <IconButton onClick={handleMenuOpen}>
//                                 <MoreVertIcon />
//                             </IconButton>
//                             <Menu
//                                 anchorEl={anchorEl}
//                                 open={Boolean(anchorEl)}
//                                 onClose={handleMenuClose}
//                             >
//                                 <MenuItem onClick={handleEdit}>
//                                     Edit
//                                 </MenuItem>
//                                 <MenuItem
//                                     //  onClick={() => handleDelete(row.index, row.original.Id)}
//                                     onClick={handleDelete}

//                                 >

//                                     Delete
//                                 </MenuItem>
//                             </Menu>
//                         </div>
//                     );
//                 },
//             }
//         ],
//         [invoiceheaders]
//     );


//     const table = useMaterialReactTable({
//         columns,
//         data: invoiceheaders,
//         muiTableHeadCellProps: {
//             style: {
//                 backgroundColor: "#E9ECEF", // Replace with your desired color
//                 color: "black", fontSize: '16px'
//             },
//         },
//     });

//     // Integration
//     const [invoiceNo, setInvoiceNo] = useState('')
//     const [invoiceDate, setInvoiceDate] = useState(null)

//     const [phone, setPhone] = useState("");
//     const [orderNo, setOrderNo] = useState('')
//     const [orderDate, setOrderDate] = useState(null)
//     const [product, setProduct] = useState('')
//     const [quantity, setQuantity] = useState('')
//     const [rate, setRate] = useState('')
//     const [amount, SetAmount] = useState('')
//     const [cgst, setCGST] = useState('')
//     const [cgstAmount, setCGSTAmount] = useState('')
//     const [sgst, setSGST] = useState('')
//     const [sgstAmount, setSGSTAmount] = useState('')
//     const [igst, setIGST] = useState('')
//     const [igstAmount, setIGSTAmount] = useState('')
//     const [paymentMode, setPaymentMode] = useState('')
//     const [transport, setTransport] = useState('')


//     //fetch customer from  account table
//     const [accountOptions, setAccountOptions] = useState([]);
//     const [selectedAccount, setSelectedAccount] = useState("");



//     const fetchAccounts = async () => {
//         try {
//             const response = await axios.get("https://arohanagroapi.microtechsolutions.co.in/php/get/gettable.php?Table=account");
//             const accOptions = response.data.map((acc) => ({
//                 value: acc.Id,
//                 label: acc.AccountName,
//             }));
//             setAccountOptions(accOptions);
//         } catch (error) {

//         }
//     };

//     useEffect(() => {
//         fetchAccounts();
//         fetchProduct();
//         fetchInvoiceHeader();
//     }, []);


//     //fetch customer from  account table
//     const [productOptions, setProductOptions] = useState([]);
//     const [loadingProduct, setLoadingProduct] = useState(false);
//     const [selectedProduct, setSelectedProduct] = useState(null);

//     const fetchProduct = async () => {
//         setSelectedProduct(true);
//         try {
//             const response = await fetch(
//                 "https://arohanagroapi.microtechsolutions.co.in/php/get/gettable.php?Table=productmaster"
//             );

//             const data = await response.json();
//             console.log("API Response:", data);

//             if (Array.isArray(data)) {
//                 const options = data.map((account) => ({
//                     value: account?.Id || "",
//                     label: account?.ProductName || "Unknown",
//                 }));
//                 setProductOptions(options);
//             } else {
//                 console.error("Unexpected API response format:", data);
//             }
//         } catch (error) {
//             console.error("Error fetching accounts:", error);
//         }
//         setLoadingProduct(false);
//     };

//     const resetForm = () => {
//         setInvoiceNo('')
//         setInvoiceDate('')
//         setPhone('')
//         setOrderDate('')
//         setOrderNo('')
//         setProduct('')
//         setQuantity('')
//         setRate('')
//         SetAmount('')
//         setCGST('')
//         setCGSTAmount('')
//         setSGST('')
//         setSGSTAmount('')
//         setIGST('')
//         setIGSTAmount('')
//         setPaymentMode('')
//     };




//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // if (!validateForm()) return;

//         const formattedInvoicedate = moment(invoiceDate).format('YYYY-MM-DD');
//         const formattedorderdate = moment(orderDate).format('YYYY-MM-DD');

//         const invoiceheaderdata = {
//             Id: isEditing ? editId : '',
//             InvoiceNo: invoiceNo,
//             InvoiceDate: formattedInvoicedate,
//             AccountId: selectedAccount,
//             OrderNo: orderNo,
//             OrderDate: formattedorderdate,
//             ContactNo: phone,
//             Transport: transport,
//             CGSTAmount: cgstAmount,
//             SGSTAmount: sgstAmount,
//             IGSTAmount: igstAmount,
//             Total: grandTotal,
//             PaymentMode: paymentMode,
//             SubTotal: subtotal
//         };

//         try {
//             const invoiceurl = isEditing
//                 ? "https://arohanagroapi.microtechsolutions.co.in/php/updateinvoiceheader.php"
//                 : "https://arohanagroapi.microtechsolutions.co.in/php/postinvoiceheader.php";


//             const response = await axios.post(invoiceurl, qs.stringify(invoiceheaderdata), {
//                 headers: { "Content-Type": "application/x-www-form-urlencoded" },
//             });

//             const invoiceId = isEditing ? id : parseInt(response.data.Id, 10);

//             for (const row of rows) {
//                 const rowData = {
//                     InvoiceId: invoiceId,
//                     SerialNo: rows.indexOf(row) + 1,
//                     ProductId: parseInt(row.ProductId, 10),
//                     Quantity: parseFloat(row.Quantity),
//                     Rate: parseFloat(row.Rate),
//                     Amount: parseFloat(row.Amount),
//                     CGSTPercentage: parseFloat(row.CGSTPercentage),
//                     CGSTAmount: parseFloat(row.CGSTAmount),
//                     SGSTPercentage: parseFloat(row.SGSTPercentage),
//                     SGSTAmount: parseFloat(row.SGSTAmount),
//                     IGSTPercentage: parseFloat(row.IGSTPercentage),
//                     IGSTAmount: parseFloat(row.IGSTAmount),
//                 };



//                 const invoicdedetailurl = isEditing && row.Id
//                     ? "https://arohanagroapi.microtechsolutions.co.in/php/updateinvoicedetail.php"
//                     : "https://arohanagroapi.microtechsolutions.co.in/php/postinvoicedetail.php";

//                 await axios.post(invoicdedetailurl, qs.stringify(rowData), {
//                     headers: {
//                         "Content-Type": "application/x-www-form-urlencoded",
//                     },
//                 });
//             }

//             setIsDrawerOpen(false);
//             toast.success(isEditing ? 'Sales Entry updated successfully!' : 'Sales Entry Created successfully!');
//             resetForm();
//             console.log("Invoice Header Data:", invoiceheaderdata);
//         } catch (error) {

//         }
//     };

//     const handleQuantityChange = (e) => {
//         const qty = e.target.value;
//         setQuantity(qty);
//         calculateAmount(qty, rate);
//     };
//     const handleRateChange = (e) => {
//         const rt = e.target.value;
//         setRate(rt);
//         calculateAmount(quantity, rt);
//     };
//     const calculateAmount = (qty, rt) => {
//         const qtyNum = parseFloat(qty) || 0;
//         const rateNum = parseFloat(rt) || 0;
//         const amt = qtyNum * rateNum;
//         SetAmount(amt);
//         calculateCgstAmount(cgst, amt);
//         calculateSgstAmount(sgst, amt)
//         calculateIgstAmount(igst, amt)
//     };

//     const handleCgstChange = (e) => {
//         const cgstValue = e.target.value;
//         setCGST(cgstValue);
//         calculateCgstAmount(cgstValue, amount)

//     };

//     const calculateCgstAmount = (cgstValue, amt) => {
//         const cgstNum = parseFloat(cgstValue) || 0;
//         const cgstAmt = (cgstNum * amt) / 100;
//         console.log(cgstAmt, 'cgst cal')
//         setCGSTAmount(cgstAmt);

//         console.log(cgstAmount, 'cgst after')
//     };

//     const handleSgstChange = (e) => {
//         const sgstValue = e.target.value;
//         setSGST(sgstValue);
//         calculateSgstAmount(sgstValue, amount)
//     };

//     // const calculateSgstAmount = (sgstValue, amt) => {
//     //     const sgstNum = parseFloat(sgstValue) || 0;
//     //     const sgstAmt = (sgstNum * amt) / 100;
//     //     console.log(sgstAmt,'sgst cal')
//     //     setSGSTAmount(sgstAmt);
//     //     console.log(sgstAmount,'sgst after')
//     // };
//     const calculateSgstAmount = (sgstValue, amt) => {
//         const sgstNum = parseFloat(sgstValue) || 0;
//         const sgstAmt = (sgstNum * amt) / 100;

//         console.log(sgstAmt, 'sgst cal'); // Log the calculated amount before setting state
//         setSGSTAmount(sgstAmt); // Update state

//         // Instead of relying on the state, log the value directly
//         console.log(sgstAmt, 'sgst after (same value)');
//     }
//     const handleIgstChange = (e) => {
//         const igstValue = e.target.value;
//         setIGST(igstValue);
//         calculateIgstAmount(igstValue, amount)
//     };

//     const calculateIgstAmount = (igstValue, amt) => {
//         const igstNum = parseFloat(igstValue) || 0;
//         const igstAmt = (igstNum * amt) / 100;
//         setIGSTAmount(igstAmt);
//     };




//     const handleAddRow = () => {
//         if (!selectedProduct || !quantity || !rate) {
//             alert("Please fill in required fields");
//             return;
//         }

//         const newRow = {
//             id: rows.length + 1,
//             InvoiceId: "",
//             ProductId: selectedProduct.value,
//             ProductName: selectedProduct.label,
//             Quantity: quantity,
//             Rate: rate,
//             Amount: amount,
//             CGSTPercentage: cgst,
//             CGSTAmount: cgstAmount,
//             SGSTPercentage: sgst,
//             SGSTAmount: sgstAmount,
//             IGSTPercentage: igst,
//             IGSTAmount: igstAmount,
//         };

//         setRows([...rows, newRow]);

//         // Reset form fields after adding
//         setSelectedProduct(null);
//         setQuantity("");
//         setRate("");
//         SetAmount("");
//         setCGST("");
//         // setCGSTAmount("");
//         setSGST("");
//         // setSGSTAmount("");
//         setIGST("");
//         // setIGSTAmount("");
//     };


//     const subtotal = rows.reduce((acc, row) => acc + (parseFloat(row.Amount) || 0), 0);
//     const totalCGST = rows.reduce((acc, row) => acc + (parseFloat(row.CGSTAmount) || 0), 0);
//     const totalSGST = rows.reduce((acc, row) => acc + (parseFloat(row.SGSTAmount) || 0), 0);
//     const totalIGST = rows.reduce((acc, row) => acc + (parseFloat(row.IGSTAmount) || 0), 0);
//     const grandTotal = subtotal + totalCGST + totalSGST + totalIGST + (parseFloat(transport) || 0);

//     return (
//         <Box>
//             <Box sx={{ background: 'rgb(238, 246, 252)', borderRadius: '10px', p: 5, height: 'auto' }}>
//                 <Box textAlign={'center'}>
//                     <Typography variant='h4'><b>Sales Entry</b></Typography>
//                 </Box>

//                 <Box sx={{ display: 'flex', gap: 3 }}>
//                     <Button variant="contained" onClick={handleNewClick}>
//                     Create Sales Entry
//                     </Button>
//                 </Box>


//                 <Box mt={3} className="bookpurchasetable-container">
//                     <MaterialReactTable table={table} />
//                 </Box>




//                 <Drawer
//                     anchor="right"
//                     open={isDrawerOpen}
//                     onClose={handleDrawerClose}
//                     PaperProps={{
//                         sx: {
//                             borderRadius: isSmallScreen ? "0" : "10px 0 0 10px",
//                             width: isSmallScreen ? "100%" : "65%",
//                             zIndex: 1000,
//                         },
//                     }}
//                 >
//                     <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                         <Typography m={2} fontWeight="bold" variant="h6">
//                             {isEditing ? "Update Sales Entry" : "Create Sales Entry"}
//                         </Typography>


//                         <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleDrawerClose} />
//                     </Box>
//                     <Divider />



//                     <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, m: 1 }}>

//                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                             <Box flex={1}>
//                                 <Typography variant="body2">Invoice No</Typography>
//                                 <TextField value={invoiceNo} onChange={(e) => setInvoiceNo(e.target.value)} size="small" margin="none" placeholder="Invoice No" fullWidth />
//                             </Box>



//                             <Box flex={1}>
//                                 <Typography variant="body2">Invoice Date</Typography>
//                                 <LocalizationProvider dateAdapter={AdapterDateFns}>
//                                     <DatePicker
//                                         value={invoiceDate}
//                                         onChange={(newDate) => setInvoiceDate(newDate)}
//                                         format="dd/MM/yyyy"
//                                         slotProps={{ textField: { size: 'small', fullWidth: true, } }}
//                                     />
//                                 </LocalizationProvider>
//                             </Box>

//                         </Box>


//                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                             <Box flex={1}>
//                                 <Typography variant="body2">Customer</Typography>
//                                 <Select
//                                     fullWidth
//                                     size='small'
//                                     value={selectedAccount || ""}
//                                     onChange={(event) => setSelectedAccount(event.target.value)}

//                                 >
//                                     {accountOptions.map((option) => (
//                                         <MenuItem key={option.value} value={option.value}>
//                                             {option.label}
//                                         </MenuItem>
//                                     ))}
//                                 </Select>
//                             </Box>
//                             <Box flex={1}>
//                                 <Typography variant="body2">Contact Number</Typography>
//                                 <PhoneInput
//                                     country={"in"}
//                                     value={phone}
//                                     onChange={(phone) => setPhone(phone)}
//                                     inputProps={{ name: "phone", required: true }}
//                                     inputStyle={{ width: "100%", height: "40px", fontSize: "16px", borderRadius: "5px" }}
//                                     buttonStyle={{ borderRadius: "5px" }}
//                                 />
//                             </Box>

//                         </Box>


//                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                             <Box flex={1}>
//                                 <Typography variant="body2">Order No</Typography>
//                                 <TextField
//                                     value={orderNo}
//                                     onChange={(e) => setOrderNo(e.target.value)}
//                                     size="small" margin="none" placeholder="Order No" fullWidth />
//                             </Box>

//                             <Box flex={1}>
//                                 <Typography variant="body2">Order Date</Typography>
//                                 <LocalizationProvider dateAdapter={AdapterDateFns}>
//                                     <DatePicker
//                                         value={orderDate}

//                                         // onChange={(e) => setInvoiceDate(e.target.value)}
//                                         onChange={(newDate) => setOrderDate(newDate)}
//                                         format="dd/MM/yyyy"
//                                         slotProps={{ textField: { size: 'small', fullWidth: true, } }}
//                                     />
//                                 </LocalizationProvider>
//                             </Box>

//                         </Box>


//                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
//                             <Box flex={1}>
//                                 <Typography variant="body2">Product</Typography>
//                                 <Autocomplete
//                                     options={productOptions}
//                                     getOptionLabel={(option) => option.label}
//                                     value={selectedProduct}
//                                     onChange={(event, newValue) => setSelectedProduct(newValue)}
//                                     loading={loadingProduct}
//                                     renderInput={(params) => (
//                                         <TextField
//                                             {...params}
//                                             size="small"
//                                             variant="outlined"
//                                             InputProps={{
//                                                 ...params.InputProps,
//                                                 endAdornment: (
//                                                     <>

//                                                         {params.InputProps.endAdornment}
//                                                     </>
//                                                 ),
//                                             }}
//                                         />
//                                     )}
//                                 />
//                             </Box>
//                             <Box flex={1}>
//                                 <Typography variant="body2">Quantity</Typography>
//                                 <TextField
//                                     value={quantity}
//                                     onChange={handleQuantityChange}
//                                     size="small" margin="none" placeholder="Quantity" fullWidth />
//                             </Box>
//                             <Box flex={1}>
//                                 <Typography variant="body2">Rate</Typography>
//                                 <TextField
//                                     value={rate}
//                                     onChange={handleRateChange}
//                                     size="small" margin="none" placeholder="Rate" fullWidth />
//                             </Box>
//                             <Box flex={1}>
//                                 <Typography variant="body2">Amount</Typography>
//                                 <TextField value={amount} size="small" margin="none" placeholder="Amount" fullWidth />
//                             </Box>
//                         </Box>


//                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
//                             <Box flex={1}>
//                                 <Typography variant="body2">CGST%</Typography>
//                                 <TextField
//                                     value={cgst}
//                                     onChange={handleCgstChange}
//                                     size="small" margin="none" placeholder="CGST" fullWidth />
//                             </Box>
//                             <Box flex={1}>
//                                 <Typography variant="body2">CGST Amount</Typography>
//                                 <TextField
//                                     value={cgstAmount}
//                                     size="small" margin="none" placeholder="CGST Amount" fullWidth />
//                             </Box>
//                             <Box flex={1}>
//                                 <Typography

//                                     variant="body2">SGST%</Typography>
//                                 <TextField
//                                     value={sgst}
//                                     onChange={handleSgstChange}
//                                     size="small" margin="none" placeholder="SGST" fullWidth />
//                             </Box>
//                             <Box flex={1}>
//                                 <Typography variant="body2">SGST Amount</Typography>
//                                 <TextField value={sgstAmount} size="small" margin="none" placeholder="SGST Amount" fullWidth />
//                             </Box>
//                             <Box flex={1}>
//                                 <Typography variant="body2">IGST %</Typography>
//                                 <TextField
//                                     value={igst}
//                                     onChange={handleIgstChange}
//                                     size="small" margin="none" placeholder="IGST%" fullWidth />
//                             </Box>
//                             <Box flex={1}>
//                                 <Typography variant="body2">IGST Amount</Typography>
//                                 <TextField
//                                     value={igstAmount}
//                                     size="small" margin="none" placeholder=" IGST Amount" fullWidth />
//                             </Box>
//                         </Box>
//                     </Box>


//                     <Box m={1}>
//                         <Button variant="contained" color="primary"
//                             onClick={handleAddRow}
//                             sx={{ mb: 2, gap: 1 }}>
//                             <AddCircleOutlineIcon />
//                             Add to table
//                         </Button>

//                         <TableContainer component={Paper}>
//                             <Table>
//                                 <TableHead>
//                                     <TableRow>
//                                         <TableCell>Sr No</TableCell>
//                                         <TableCell>Product</TableCell>
//                                         <TableCell>Quantity</TableCell>
//                                         <TableCell>Rate</TableCell>
//                                         <TableCell>Amount</TableCell>
//                                         <TableCell>CGST %</TableCell>
//                                         <TableCell>CGST Amount</TableCell>
//                                         <TableCell>SGST %</TableCell>
//                                         <TableCell>SGST Amount</TableCell>
//                                         <TableCell>IGST %</TableCell>
//                                         <TableCell>IGST Amount</TableCell>
//                                     </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                     {rows.slice(1).map((row, index) => (
//                                         <TableRow key={index}>
//                                             <TableCell>{index + 1}</TableCell>
//                                             <TableCell>
//                                                 <Autocomplete
//                                                     options={productOptions}
//                                                     getOptionLabel={(option) => option.label}
//                                                     value={productOptions.find((option) => option.value === row.ProductId) || null}
//                                                     onChange={(event, newValue) => handleInputChange(index, "ProductId", newValue ? newValue.value : null)}
//                                                     loading={loadingProduct}
//                                                     renderInput={(params) => (
//                                                         <TextField {...params} size="small" variant="outlined" placeholder="Select Product" />
//                                                     )}
//                                                 />
//                                             </TableCell>
//                                             <TableCell>
//                                                 <TextField value={row.Quantity || ""} onChange={handleQuantityChange} size="small" fullWidth />
//                                             </TableCell>
//                                             <TableCell>
//                                                 <TextField value={row.Rate || ""} onChange={handleRateChange} size="small" fullWidth />
//                                             </TableCell>
//                                             <TableCell>
//                                                 <TextField value={row.Amount || ""} size="small" fullWidth disabled />
//                                             </TableCell>
//                                             <TableCell>
//                                                 <TextField value={row.CGSTPercentage || ""} onChange={handleCgstChange} size="small" fullWidth />
//                                             </TableCell>
//                                             <TableCell>
//                                                 <TextField value={row.CGSTAmount || ""} size="small" fullWidth disabled />
//                                             </TableCell>
//                                             <TableCell>
//                                                 <TextField value={row.SGSTPercentage || ""} onChange={handleSgstChange} size="small" fullWidth />
//                                             </TableCell>
//                                             <TableCell>
//                                                 <TextField value={row.SGSTAmount || ""} size="small" fullWidth disabled />
//                                             </TableCell>
//                                             <TableCell>
//                                                 <TextField value={row.IGSTPercentage || ""} onChange={handleIgstChange} size="small" fullWidth />
//                                             </TableCell>
//                                             <TableCell>
//                                                 <TextField value={row.IGSTAmount || ""} size="small" fullWidth disabled />
//                                             </TableCell>
//                                         </TableRow>
//                                     ))}
//                                 </TableBody>
//                             </Table>
//                         </TableContainer>
//                     </Box>


//                     <Box sx={{ display: 'flex', justifyContent: 'space-between', m: 2 }}>

//                         <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, }}>
//                             <Box>
//                                 <Typography variant="body2">Payment Mode</Typography>
//                                 <TextField value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)} size="small" placeholder="Payment Mode" fullWidth />
//                             </Box>
//                         </Box>


//                         <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, }}>
//                             <Box>
//                                 <Typography variant="body2">SubTotal</Typography>
//                                 <TextField value={subtotal.toFixed(2)} disabled size="small" placeholder="SubTotal" fullWidth />
//                             </Box>
//                             <Box>
//                                 <Typography variant="body2">CGST</Typography>
//                                 <TextField value={totalCGST.toFixed(2)} disabled size="small" placeholder="CGST" fullWidth />
//                             </Box>
//                             <Box>
//                                 <Typography variant="body2">SGST</Typography>
//                                 <TextField value={totalSGST.toFixed(2)} disabled size="small" placeholder="SGST" fullWidth />
//                             </Box>
//                             <Box>
//                                 <Typography variant="body2">IGST</Typography>
//                                 <TextField value={totalIGST.toFixed(2)} disabled size="small" placeholder="IGST" fullWidth />
//                             </Box>
//                             <Box>
//                                 <Typography variant="body2">Transport</Typography>
//                                 <TextField
//                                     value={transport}
//                                     onChange={(e) => setTransport(e.target.value)}
//                                     size="small" placeholder="Transport" fullWidth />
//                             </Box>
//                             <Box>
//                                 <Typography variant="body2">Total</Typography>
//                                 <TextField value={grandTotal.toFixed(2)} disabled size="small" placeholder="Total" fullWidth />
//                             </Box>
//                         </Box>
//                     </Box>






//                     <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2} mb={5}>
//                         <Box>
//                             <Button onClick={handleSubmit} variant='contained'>
//                                 {isEditing ? 'update' : 'save'} </Button>
//                         </Box>

//                         <Box>
//                             <Button onClick={handleDrawerClose} variant='outlined'>Cancel </Button>
//                         </Box>
//                     </Box>
//                 </Drawer>

//             </Box>

//         </Box>
//     )
// }

// export default SalesEntry






import React, { useMemo, useState, useEffect } from 'react'
import { IconButton, Menu, Table, Autocomplete, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Alert, Box, useMediaQuery, Button, Typography, TextField, Drawer, Divider, FormControl, Select, MenuItem, FormControlLabel, Checkbox } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "react-phone-input-2/lib/style.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PhoneInput from "react-phone-input-2";

import axios from 'axios';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import qs from 'qs';
import moment from 'moment';
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SalesEntry = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [editingIndex, setEditingIndex] = useState(-1);
    const [isEditing, setIsEditing] = useState(false);
    const [invoiceheaders, setInvoiceheaders] = useState([]);
    const [invoicedetails, setInvoicedetails] = useState([]);
    const [id, setId] = useState('');
    const [invdetailId, setInvdetailId] = useState('')
    const [rows, setRows] = useState([
        {
            InvoiceId: '',
            ProductId: '',
            Quantity: 0,
            Rate: '',
            Amount: 0,
            CGSTPercentage: 0,
            CGSTAmount: 0,
            SGSTPercentage: 0,
            SGSTAmount: 0,
            IGSTPercentage: 0,
            IGSTAmount: 0
        },
    ]);

    const handleInputChange = (index, field, value) => {
        const updatedRows = [...rows];
        updatedRows[index][field] = value;
        // Auto-calculate Amount when Quantity or Rate is updated
        if (field === "Quantity" || field === "Rate") {
            const quantity = parseFloat(updatedRows[index].Quantity) || 0;
            const rate = parseFloat(updatedRows[index].Rate) || 0;
            updatedRows[index].Amount = quantity * rate;
        }

        // Auto-calculate CGST Amount when CGSTPercentage is updated
        if (field === "CGSTPercentage" || field === "Quantity" || field === "Rate") {
            const amount = parseFloat(updatedRows[index].Amount) || 0;
            const cgstPercentage = parseFloat(updatedRows[index].CGSTPercentage) || 0;
            updatedRows[index].CGSTAmount = (amount * cgstPercentage) / 100;
        }

        // Auto-calculate SGST Amount when SGSTPercentage is updated
        if (field === "SGSTPercentage" || field === "Quantity" || field === "Rate") {
            const amount = parseFloat(updatedRows[index].Amount) || 0;
            const sgstPercentage = parseFloat(updatedRows[index].SGSTPercentage) || 0;
            updatedRows[index].SGSTAmount = (amount * sgstPercentage) / 100;
        }

        // Auto-calculate IGST Amount when IGSTPercentage is updated
        if (field === "IGSTPercentage" || field === "Quantity" || field === "Rate") {
            const amount = parseFloat(updatedRows[index].Amount) || 0;
            const igstPercentage = parseFloat(updatedRows[index].IGSTPercentage) || 0;
            updatedRows[index].IGSTAmount = (amount * igstPercentage) / 100;
        }

        // Update the state
        setRows(updatedRows);
    };

    useEffect(() => {
        fetchInvoiceHeader()
        fetchInvdetails()
    }, [])

    //get of Invoice header
    const fetchInvoiceHeader = async () => {
        try {
            const response = await axios.get("https://arohanagroapi.microtechsolutions.co.in/php/get/gettable.php?Table=invoiceheader");
            setInvoiceheaders(response.data);

        } catch (error) {

        }
    };

    const fetchInvdetails = async () => {

        try {
            const response = await axios.get("https://arohanagroapi.microtechsolutions.co.in/php/get/gettable.php?Table=invoicedetail");
            setInvoicedetails(response.data);

        } catch (error) {

        }
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenuOpen = (event, row) => {
        setAnchorEl(event.currentTarget);
        setCurrentRow(row);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMenuOpen(false);

    };


    const handleNewClick = () => {
        setIsDrawerOpen(true);
        resetForm()
        setIsEditing(false)
    }

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    const [currentRow, setCurrentRow] = useState(null);

    const handleDelete = () => {
        if (!currentRow) {
            console.error("No row selected for deletion.");
            return;
        }
        const itemId = currentRow.original.Id;  // Get the ID directly
        console.log("Deleting item with ID:", itemId);

        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch(`https://arohanagroapi.microtechsolutions.co.in/php/delete/deletetable.php?Table=invoiceheader&Id=${itemId}`, requestOptions)
            .then((response) => {
                // Check if the response is JSON
                return response.json().then(text => {
                    try {
                        return JSON.parse(text);
                    } catch (error) {
                        throw new Error(`Invalid JSON response: ${text}`);
                    }
                });
            })
            .then((result) => console.log("Delete response:", result))
            .catch((error) => console.error("Error:", error));
    };


    const [editId, setEditId] = useState('')

    // const handleEdit = () => {

    //     if (currentRow) {
    //         console.log("Editing item with ID:", currentRow.original.Id);
    //         setEditId(currentRow.original.Id)
    //       }

    //     const invheader = invoiceheaders[currentRow.index];
    //     const invdetail = invoicedetails.filter(detail => detail.InvoiceId === invheader.Id);

    //     console.log('header', invheader)
    //     console.log('detail', invdetail)

    //     // Convert date strings to DD-MM-YYYY format
    //     const convertDateForInput = (dateStr) => {
    //         if (typeof dateStr === 'string' && dateStr.includes('-')) {
    //             const [year, month, day] = dateStr.split(' ')[0].split('-');
    //             return `${year}-${month}-${day}`;
    //         } else {
    //             toast.error(`Invalid date format: ${dateStr}`);
    //             return ''; // Return an empty string or handle it as needed
    //         }
    //     }; 

    //     // Map the details to rows
    //     const mappedRows = invdetail.map(detail => ({
    //         InvoiceId: detail.InvoiceId,
    //         ProductId: detail.ProductId,
    //         Quantity: detail.Quantity,
    //         Rate: detail.Rate,
    //         Amount: detail.Amount,
    //         CGSTPercentage: detail.CGSTPercentage,
    //         CGSTAmount: detail.CGSTAmount,
    //         SGSTPercentage: detail.SGSTPercentage,
    //         SGSTAmount: detail.SGSTAmount,
    //         IGSTPercentage: detail.IGSTPercentage,
    //         IGSTAmount: detail.IGSTAmount,
    //         Id: detail.Id,
    //     }));

    //     const invoiceDate = convertDateForInput(invheader.InvoiceDate?.date);

    //     const orderdate = convertDateForInput(invheader.OrderDate?.date);

    //     // Set the form fields
    //     setInvoiceNo(invheader.InvoiceNo);
    //     setInvoiceDate(invoiceDate);
    //     setSelectedAccount(invheader.AccountId);
    //     setPhone(invheader.ContactNo);
    //     setOrderNo(invheader.OrderNo)
    //     setOrderDate(orderdate);
    //     setSelectedProduct(invheader.ProductId);
    //     setQuantity(invheader.Quantity);
    //     setRate(invheader.Rate);
    //     SetAmount(invheader.Amount);
    //     setCGST(invheader.CGSTPercentage);
    //     setCGSTAmount(invheader.CGSTAmount);
    //     setSGST(invheader.SGSTPercentage);
    //     setSGSTAmount(invheader.SGSTAmount);
    //     setIGST(invheader.IGSTPercentage);
    //     setIGSTAmount(invheader.IGSTAmount);
    //     setPaymentMode(invheader.PaymentMode);
    //     setTransport(invheader.Transport)
    //     // Set the rows for the table with all the details
    //     setRows(mappedRows);
    //     // Set editing state
    //     setEditingIndex(currentRow.index);
    //     setIsDrawerOpen(true);
    //     handleMenuClose()
    //     setIsEditing(true);
    //     setEditId(currentRow.original.Id)

    //     const specificDetail = invdetail.find(detail => detail.Id === currentRow.original.Id);
    //     if (specificDetail) {
    //       setInvdetailId(specificDetail.Id); // Set the specific detail Id
    //     }


    //     fetchInvoiceHeader();
    // };



    const handleEdit = () => {
        if (!currentRow) {
            console.error("No row selected for editing.");
            // toast.error("No row selected!");
            return;
        }

        console.log("Editing item with ID:", currentRow.original?.Id);

        // Ensure currentRow.index exists
        if (typeof currentRow.index !== "number") {
            console.error("Invalid row index:", currentRow.index);
            toast.error("Invalid row index.");
            return;
        }

        const invheader = invoiceheaders[currentRow.index];

        if (!invheader) {
            console.error("No invoice header found for the selected row.");
            toast.error("Invoice header not found.");
            return;
        }

        const invdetail = invoicedetails.filter(detail => detail.InvoiceId === invheader.Id);

        console.log("header", invheader);
        console.log("detail", invdetail);

        // Convert date strings to DD-MM-YYYY format
        const convertDateForInput = (dateStr) => {
            if (typeof dateStr === "string" && dateStr.includes("-")) {
                const [year, month, day] = dateStr.split(" ")[0].split("-");
                return `${year}-${month}-${day}`;
            } else {
                toast.error(`Invalid date format: ${dateStr}`);
                return ""; // Return an empty string or handle it as needed
            }
        };

        // Map the details to rows
        // const mappedRows = invdetail.map(detail => ({
        //     InvoiceId: detail.InvoiceId,
        //     ProductId: detail.ProductId,
        //     Quantity: detail.Quantity,
        //     Rate: detail.Rate,
        //     Amount: detail.Amount,
        //     CGSTPercentage: detail.CGSTPercentage,
        //     CGSTAmount: detail.CGSTAmount,
        //     SGSTPercentage: detail.SGSTPercentage,
        //     SGSTAmount: detail.SGSTAmount,
        //     IGSTPercentage: detail.IGSTPercentage,
        //     IGSTAmount: detail.IGSTAmount,
        //     Id: detail.Id,
        // }));
        const mappedRows = invdetail.map(detail => ({
            Id: detail.Id,
            InvoiceId: detail.InvoiceId,
            ProductId: detail.ProductId,
            Quantity: parseFloat(detail.Quantity) || 0,
            Rate: parseFloat(detail.Rate) || 0,
            Amount: parseFloat(detail.Amount) || 0,
            CGSTPercentage: parseFloat(detail.CGSTPercentage) || 0,
            CGSTAmount: parseFloat(detail.CGSTAmount) || 0,
            SGSTPercentage: parseFloat(detail.SGSTPercentage) || 0,
            SGSTAmount: parseFloat(detail.SGSTAmount) || 0,
            IGSTPercentage: parseFloat(detail.IGSTPercentage) || 0,
            IGSTAmount: parseFloat(detail.IGSTAmount) || 0,
        }));


        const invoiceDate = convertDateForInput(invheader.InvoiceDate?.date);
        const orderdate = convertDateForInput(invheader.OrderDate?.date);
        // Set form fields
        setInvoiceNo(invheader.InvoiceNo);
        setInvoiceDate(invoiceDate);
        setSelectedAccount(invheader.AccountId);
        setPhone(invheader.ContactNo);
        setOrderNo(invheader.OrderNo);
        setOrderDate(orderdate);
        setSelectedProduct(invheader.ProductId);
        setQuantity(invheader.Quantity);
        setRate(invheader.Rate);
        SetAmount(invheader.Amount);
        setCGST(invheader.CGSTPercentage);
        setCGSTAmount(invheader.CGSTAmount);
        setSGST(invheader.SGSTPercentage);
        setSGSTAmount(invheader.SGSTAmount);
        setIGST(invheader.IGSTPercentage);
        setIGSTAmount(invheader.IGSTAmount);
        setPaymentMode(invheader.PaymentMode);
        setTransport(invheader.Transport);

        // Set the rows for the table with all the details
        setRows(mappedRows);

        // Set editing state
        setEditingIndex(currentRow.index);
        setIsDrawerOpen(true);
        handleMenuClose();
        setIsEditing(true);
        setEditId(currentRow.original?.Id);

        // Find the specific invoice detail
        const specificDetail = invdetail.find(detail => detail.Id === currentRow.original?.Id);
        if (specificDetail) {
            setInvdetailId(specificDetail.Id);
        }

        fetchInvoiceHeader();
    };

    //table
    const columns = useMemo(() => [
        {
            accessorKey: 'SrNo',
            header: "Sr.No",
            size: 50,
            Cell: ({ row }) => row.index + 1,
        },
        {
            accessorKey: "InvoiceNo",
            header: "Invoice No",
            size: 50,
        },
        {
            accessorKey: "InvoiceDate.date",
            header: "Invoice Date",
            size: 50,
            Cell: ({ cell }) => <span>{moment(cell.getValue()).format('DD-MM-YYYY')}</span>,
        },
        {
            accessorKey: "AccountId",
            header: "Account Id",
            size: 50,
        },
        {
            accessorKey: "OrderNo",
            header: "Order No",
            size: 50,
        },
        {
            accessorKey: "OrderDate.date",
            header: "Order Date",
            size: 50,
            Cell: ({ cell }) => <span>{moment(cell.getValue()).format('DD-MM-YYYY')}</span>,
        },
        {
            accessorKey: "ContactNo",
            header: "Contact No",
            size: 50,
        },
        {
            accessorKey: "Transport",
            header: "Transport",
            size: 50,
        },
        {
            accessorKey: "CGSTAmount",
            header: "CGST Amount",
            size: 50,
        },
        {
            accessorKey: "SGSTAmount",
            header: "SGST Amount",
            size: 50,
        },
        {
            accessorKey: "IGSTAmount",
            header: "IGST Amount",
            size: 50,
        },
        {
            accessorKey: "Total",
            header: "Total",
            size: 50,
        },
        {
            accessorKey: "PaymentMode",
            header: "Payment Mode",
            size: 50,
        },
        {
            accessorKey: "actions",
            header: "Actions",
            size: 150,
            Cell: ({ row }) => (
                <div>
                    <IconButton onClick={(event) => handleMenuOpen(event, row)}>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            ),
        },
    ], [invoiceheaders]);

    const table = useMaterialReactTable({
        columns,
        data: invoiceheaders,
        muiTableHeadCellProps: {
            style: {
                backgroundColor: "#E9ECEF",
                color: "black",
                fontSize: '16px'
            },
        },
    });

    // const columns = useMemo(
    //     () => [

    //         {
    //             accessorKey: 'SrNo',
    //             header: "Sr.No",
    //             size: 50,
    //             Cell: ({ row }) => row.index + 1,
    //         },

    //         {
    //             accessorKey: "InvoiceNo",
    //             header: "Invoice No",
    //             size: 50,
    //         },
    //         {
    //             accessorKey: "InvoiceDate.date",
    //             header: "Invoice Date",
    //             size: 50,
    //             Cell: ({ cell }) => {

    //                 const date = moment(cell.getValue()).format('DD-MM-YYYY');
    //                 return <span>{date}</span>;
    //             },
    //         },
    //         {
    //             accessorKey: "AccountId",
    //             header: "Account Id",
    //             size: 50,
    //         },

    //         {
    //             accessorKey: "OrderNo",
    //             header: "Order No",
    //             size: 50,
    //         },

    //         {
    //             accessorKey: "OrderDate.date",
    //             header: "Order Date",
    //             size: 50,

    //             Cell: ({ cell }) => {
    //                 // Using moment.js to format the date
    //                 const date = moment(cell.getValue()).format('DD-MM-YYYY');
    //                 return <span>{date}</span>;
    //             },
    //         },


    //         {
    //             accessorKey: "ContactNo",
    //             header: "Contact No",
    //             size: 50,
    //         },

    //         {
    //             accessorKey: "Transport",
    //             header: "Transport",
    //             size: 50,
    //         },


    //         {
    //             accessorKey: "CGSTAmount",
    //             header: "CGST Amount",
    //             size: 50,
    //         },

    //         {
    //             accessorKey: "SGSTAmount",
    //             header: "SGST Amount",
    //             size: 50,
    //         },




    //         {
    //             accessorKey: "IGSTAmount",
    //             header: "IGST Amount",
    //             size: 50,
    //         },

    //         {
    //             accessorKey: "Total",
    //             header: "Total",
    //             size: 50,
    //         },
    //         {
    //             accessorKey: "PaymentMode",
    //             header: "Payment Mode",
    //             size: 50,
    //         },



    //         {
    //             accessorKey: "actions",
    //             header: "Actions",
    //             size: 150,
    //             Cell: ({ row }) => {
    //                 const [anchorEl, setAnchorEl] = useState(null);
    //                 const open = Boolean(anchorEl);

    //                 const handleMenuOpen = (event) => {
    //                     setAnchorEl(event.currentTarget);
    //                     setCurrentRow(row);
    //                 };

    //                 const handleMenuClose = () => {
    //                     setAnchorEl(null);
    //                 };

    //                 return (
    //                     <div>
    //                         <IconButton onClick={handleMenuOpen}>
    //                             <MoreVertIcon />
    //                         </IconButton>
    //                         <Menu
    //                             anchorEl={anchorEl}
    //                             open={Boolean(anchorEl)}
    //                             onClose={handleMenuClose}
    //                         >
    //                             <MenuItem onClick={handleEdit}>
    //                                 Edit
    //                             </MenuItem>
    //                             <MenuItem
    //                                 //  onClick={() => handleDelete(row.index, row.original.Id)}
    //                                 onClick={handleDelete}

    //                             >

    //                                 Delete
    //                             </MenuItem>
    //                         </Menu>
    //                     </div>
    //                 );
    //             },
    //         }
    //     ],
    //     [invoiceheaders]
    // );


    // const table = useMaterialReactTable({
    //     columns,
    //     data: invoiceheaders,
    //     muiTableHeadCellProps: {
    //         style: {
    //             backgroundColor: "#E9ECEF", // Replace with your desired color
    //             color: "black", fontSize: '16px'
    //         },
    //     },
    // });

    // Integration
    const [invoiceNo, setInvoiceNo] = useState('')
    const [invoiceDate, setInvoiceDate] = useState(null)

    const [phone, setPhone] = useState("");
    const [orderNo, setOrderNo] = useState('')
    const [orderDate, setOrderDate] = useState(null)
    const [product, setProduct] = useState('')
    const [quantity, setQuantity] = useState('')
    const [rate, setRate] = useState('')
    const [amount, SetAmount] = useState('')
    const [cgst, setCGST] = useState('')
    const [cgstAmount, setCGSTAmount] = useState('')
    const [sgst, setSGST] = useState('')
    const [sgstAmount, setSGSTAmount] = useState('')
    const [igst, setIGST] = useState('')
    const [igstAmount, setIGSTAmount] = useState('')
    const [paymentMode, setPaymentMode] = useState('')
    const [transport, setTransport] = useState('')


    //fetch customer from  account table
    const [accountOptions, setAccountOptions] = useState([]);
    const [selectedAccount, setSelectedAccount] = useState("");



    const fetchAccounts = async () => {
        try {
            const response = await axios.get("https://arohanagroapi.microtechsolutions.co.in/php/get/gettable.php?Table=account");
            const accOptions = response.data.map((acc) => ({
                value: acc.Id,
                label: acc.AccountName,
            }));
            setAccountOptions(accOptions);
        } catch (error) {

        }
    };

    useEffect(() => {
        fetchAccounts();
        fetchProduct();
        fetchInvoiceHeader();
    }, []);


    //fetch customer from  account table
    const [productOptions, setProductOptions] = useState([]);
    const [loadingProduct, setLoadingProduct] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const fetchProduct = async () => {
        setSelectedProduct(true);
        try {
            const response = await fetch(
                "https://arohanagroapi.microtechsolutions.co.in/php/get/gettable.php?Table=productmaster"
            );

            const data = await response.json();
            console.log("API Response:", data);

            if (Array.isArray(data)) {
                const options = data.map((account) => ({
                    value: account?.Id || "",
                    label: account?.ProductName || "Unknown",
                }));
                setProductOptions(options);
            } else {
                console.error("Unexpected API response format:", data);
            }
        } catch (error) {
            console.error("Error fetching accounts:", error);
        }
        setLoadingProduct(false);
    };

    const resetForm = () => {
        setInvoiceNo('')
        setInvoiceDate('')
        setPhone('')
        setSelectedAccount('')
        setOrderDate('')
        setOrderNo('')
        setProduct('')
        setQuantity('')
        setRate('')
        SetAmount('')
        setCGST('')
        setCGSTAmount('')
        setSGST('')
        setSGSTAmount('')
        setIGST('')
        setIGSTAmount('')
        setPaymentMode('')
        setTransport('')

        setRows([]);
    };




    const handleSubmit = async (e) => {
        e.preventDefault();


        const formattedInvoicedate = moment(invoiceDate).format('YYYY-MM-DD');
        const formattedorderdate = moment(orderDate).format('YYYY-MM-DD');

        const invoiceheaderdata = {
            Id: isEditing ? editId : '',
            InvoiceNo: invoiceNo,
            InvoiceDate: formattedInvoicedate,
            AccountId: selectedAccount,
            OrderNo: orderNo,
            OrderDate: formattedorderdate,
            ContactNo: phone,
            Transport: transport,
            CGSTAmount: cgstAmount,
            SGSTAmount: sgstAmount,
            IGSTAmount: igstAmount,
            Total: grandTotal,
            PaymentMode: paymentMode,
            SubTotal: subtotal
        };

        try {
            const invoiceurl = isEditing
                ? "https://arohanagroapi.microtechsolutions.co.in/php/updateinvoiceheader.php"
                : "https://arohanagroapi.microtechsolutions.co.in/php/postinvoiceheader.php";


            const response = await axios.post(invoiceurl, qs.stringify(invoiceheaderdata), {
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            });

            const invoiceId = isEditing ? id : parseInt(response.data.Id, 10);

            for (const row of rows) {
                const rowData = {
                    InvoiceId: invoiceId,
                    SerialNo: rows.indexOf(row) + 1,
                    ProductId: parseInt(row.ProductId, 10),
                    Quantity: parseFloat(row.Quantity),
                    Rate: parseFloat(row.Rate),
                    Amount: parseFloat(row.Amount),
                    CGSTPercentage: parseFloat(row.CGSTPercentage),
                    CGSTAmount: parseFloat(row.CGSTAmount),
                    SGSTPercentage: parseFloat(row.SGSTPercentage),
                    SGSTAmount: parseFloat(row.SGSTAmount),
                    IGSTPercentage: parseFloat(row.IGSTPercentage),
                    IGSTAmount: parseFloat(row.IGSTAmount),
                };



                const invoicdedetailurl = isEditing && row.Id
                    ? "https://arohanagroapi.microtechsolutions.co.in/php/updateinvoicedetail.php"
                    : "https://arohanagroapi.microtechsolutions.co.in/php/postinvoicedetail.php";

                await axios.post(invoicdedetailurl, qs.stringify(rowData), {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                });
            }

            setIsDrawerOpen(false);
            toast.success(isEditing ? 'Sales Entry updated successfully!' : 'Sales Entry Created successfully!');
            resetForm();
            console.log("Invoice Header Data:", invoiceheaderdata);
        } catch (error) {

        }
    };

    const handleQuantityChange = (e) => {
        const qty = e.target.value;
        setQuantity(qty);
        calculateAmount(qty, rate);
    };

    const handleRateChange = (e) => {
        const rt = e.target.value;
        setRate(rt);
        console.log("rateee", rate)
        calculateAmount(quantity, rt);
    };
    const calculateAmount = (qty, rt) => {
        const qtyNum = parseFloat(qty) || 0;
        const rateNum = parseFloat(rt) || 0;
        const amt = qtyNum * rateNum;
        SetAmount(amt);
        calculateCgstAmount(cgst, amt);
        calculateSgstAmount(sgst, amt)
        calculateIgstAmount(igst, amt)
    };

    const handleCgstChange = (e) => {
        const cgstValue = e.target.value;
        setCGST(cgstValue);
        calculateCgstAmount(cgstValue, amount)

    };

    const calculateCgstAmount = (cgstValue, amt) => {
        const cgstNum = parseFloat(cgstValue) || 0;
        const cgstAmt = (cgstNum * amt) / 100;
        console.log(cgstAmt, 'cgst cal')
        setCGSTAmount(cgstAmt);

        console.log(cgstAmount, 'cgst after')
    };

    const handleSgstChange = (e) => {
        const sgstValue = e.target.value;
        setSGST(sgstValue);
        calculateSgstAmount(sgstValue, amount)
    };

    // const calculateSgstAmount = (sgstValue, amt) => {
    //     const sgstNum = parseFloat(sgstValue) || 0;
    //     const sgstAmt = (sgstNum * amt) / 100;
    //     console.log(sgstAmt,'sgst cal')
    //     setSGSTAmount(sgstAmt);
    //     console.log(sgstAmount,'sgst after')
    // };
    const calculateSgstAmount = (sgstValue, amt) => {
        const sgstNum = parseFloat(sgstValue) || 0;
        const sgstAmt = (sgstNum * amt) / 100;

        console.log(sgstAmt, 'sgst cal'); // Log the calculated amount before setting state
        setSGSTAmount(sgstAmt); // Update state

        // Instead of relying on the state, log the value directly
        console.log(sgstAmt, 'sgst after (same value)');
    }
    const handleIgstChange = (e) => {
        const igstValue = e.target.value;
        setIGST(igstValue);
        calculateIgstAmount(igstValue, amount)
    };

    const calculateIgstAmount = (igstValue, amt) => {
        const igstNum = parseFloat(igstValue) || 0;
        const igstAmt = (igstNum * amt) / 100;
        setIGSTAmount(igstAmt);
    };




    // const handleAddRow = () => {
    //     if (!selectedProduct || !quantity || !rate) {
    //         alert("Please fill in required fields");
    //         return;
    //     }

    //     const newRow = {
    //         id: rows.length + 1,
    //         InvoiceId: "",
    //         ProductId: selectedProduct.value,
    //         ProductName: selectedProduct.label,
    //         Quantity: quantity,
    //         Rate: rate,
    //         Amount: amount,
    //         CGSTPercentage: cgst,
    //         CGSTAmount: cgstAmount,
    //         SGSTPercentage: sgst,
    //         SGSTAmount: sgstAmount,
    //         IGSTPercentage: igst,
    //         IGSTAmount: igstAmount,
    //     };

    //     setRows([...rows, newRow]);

    //     // Reset form fields after adding
    //     setSelectedProduct(null);
    //     setQuantity("");
    //     setRate("");
    //     SetAmount("");
    //     setCGST("");
    //     // setCGSTAmount("");
    //     setSGST("");
    //     // setSGSTAmount("");
    //     setIGST("");
    //     // setIGSTAmount("");
    // };
    const handleAddRow = () => {
        if (!selectedProduct || !quantity || !rate) {
            alert("Please fill in required fields");
            return;
        }

        const newRow = {
            id: rows.length + 1,
            InvoiceId: "",
            ProductId: selectedProduct.value,
            ProductName: selectedProduct.label,
            Quantity: quantity,
            Rate: rate,
            Amount: amount,
            CGSTPercentage: cgst,
            CGSTAmount: cgstAmount,
            SGSTPercentage: sgst,
            SGSTAmount: sgstAmount,
            IGSTPercentage: igst,
            IGSTAmount: igstAmount,
        };

        // Update rows state and ensure the new row is added to the table
        setRows((prevRows) => [...prevRows, newRow]);

        // Reset form fields after adding
        setSelectedProduct(null);
        setQuantity("");
        setRate("");
        SetAmount("");
        setCGST("");
        setSGST("");
        setIGST("");
    };

    const subtotal = rows.reduce((acc, row) => acc + (parseFloat(row.Amount) || 0), 0);
    const totalCGST = rows.reduce((acc, row) => acc + (parseFloat(row.CGSTAmount) || 0), 0);
    const totalSGST = rows.reduce((acc, row) => acc + (parseFloat(row.SGSTAmount) || 0), 0);
    const totalIGST = rows.reduce((acc, row) => acc + (parseFloat(row.IGSTAmount) || 0), 0);
    const grandTotal = subtotal + totalCGST + totalSGST + totalIGST + (parseFloat(transport) || 0);

    return (
        <Box>
            <Box sx={{ background: 'rgb(238, 246, 252)', borderRadius: '10px', p: 5, height: 'auto' }}>
                <Box textAlign={'center'}>
                    <Typography variant='h4'><b>Sales Entry</b></Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 3 }}>
                    <Button variant="contained" onClick={handleNewClick}>
                        Create Sales Entry
                    </Button>
                </Box>


                {/* <Box mt={3} className="bookpurchasetable-container">
                    <MaterialReactTable table={table} />
                </Box> */}

                <MaterialReactTable
                    table={table}

                />
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem

                        onClick={handleEdit}

                    >Edit</MenuItem>
                    <MenuItem onClick={handleDelete}>Delete</MenuItem>

                    {/* <MenuItem onClick={handlePrint}>Print</MenuItem> */}

                </Menu>


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
                        <Typography m={2} fontWeight="bold" variant="h6">
                            {isEditing ? "Update Sales Entry" : "Create Sales Entry"}
                        </Typography>


                        <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleDrawerClose} />
                    </Box>
                    <Divider />



                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, m: 1 }}>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box flex={1}>
                                <Typography variant="body2">Invoice No</Typography>
                                <TextField value={invoiceNo} onChange={(e) => setInvoiceNo(e.target.value)} size="small" margin="none" placeholder="Invoice No" fullWidth />
                            </Box>



                            <Box flex={1}>
                                <Typography variant="body2">Invoice Date</Typography>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    {/* <DatePicker
                                        value={invoiceDate}
                                        onChange={(newDate) => setInvoiceDate(newDate)}
                                        format="dd/MM/yyyy"
                                        slotProps={{ textField: { size: 'small', fullWidth: true, } }}
                                    /> */}

                                    <DatePicker
                                        value={invoiceDate ? new Date(invoiceDate) : null} // Convert to Date object
                                        onChange={(newValue) => setInvoiceDate(newValue)}
                                        slotProps={{ textField: { size: 'small', fullWidth: true, } }}
                                        renderInput={(params) => <TextField />}
                                    />
                                </LocalizationProvider>
                            </Box>

                        </Box>


                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box flex={1}>
                                <Typography variant="body2">Customer</Typography>
                                <Select
                                    fullWidth
                                    size='small'
                                    value={selectedAccount || ""}
                                    onChange={(event) => setSelectedAccount(event.target.value)}

                                >
                                    {accountOptions.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Box>
                            <Box flex={1}>
                                <Typography variant="body2">Contact Number</Typography>
                                <PhoneInput
                                    country={"in"}
                                    value={phone}
                                    onChange={(phone) => setPhone(phone)}
                                    inputProps={{ name: "phone", required: true }}
                                    inputStyle={{ width: "100%", height: "40px", fontSize: "16px", borderRadius: "5px" }}
                                    buttonStyle={{ borderRadius: "5px" }}
                                />
                            </Box>

                        </Box>


                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box flex={1}>
                                <Typography variant="body2">Order No</Typography>
                                <TextField
                                    value={orderNo}
                                    onChange={(e) => setOrderNo(e.target.value)}
                                    size="small" margin="none" placeholder="Order No" fullWidth />
                            </Box>

                            <Box flex={1}>
                                <Typography variant="body2">Order Date</Typography>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    {/* <DatePicker
                                        value={orderDate}

                                        // onChange={(e) => setInvoiceDate(e.target.value)}
                                        onChange={(newDate) => setOrderDate(newDate)}
                                        format="dd/MM/yyyy"
                                        slotProps={{ textField: { size: 'small', fullWidth: true, } }}
                                    /> */}

                                    <DatePicker
                                        value={orderDate ? new Date(orderDate) : null} // Convert to Date object
                                        onChange={(newValue) => setOrderDate(newValue)}
                                        slotProps={{ textField: { size: 'small', fullWidth: true, } }}
                                        renderInput={(params) => <TextField />}
                                    />
                                </LocalizationProvider>
                            </Box>

                        </Box>


                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
                            <Box flex={1}>
                                <Typography variant="body2">Product</Typography>
                                <Autocomplete
                                    options={productOptions}
                                    getOptionLabel={(option) => option.label}
                                    value={selectedProduct}
                                    onChange={(event, newValue) => setSelectedProduct(newValue)}
                                    loading={loadingProduct}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            size="small"
                                            variant="outlined"
                                            InputProps={{
                                                ...params.InputProps,
                                                endAdornment: (
                                                    <>

                                                        {params.InputProps.endAdornment}
                                                    </>
                                                ),
                                            }}
                                        />
                                    )}
                                />
                            </Box>
                            <Box flex={1}>
                                <Typography variant="body2">Quantity</Typography>
                                <TextField
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                    size="small" margin="none" placeholder="Quantity" fullWidth />
                            </Box>
                            <Box flex={1}>
                                <Typography variant="body2">Rate</Typography>
                                <TextField
                                    value={rate}
                                    onChange={handleRateChange}
                                    size="small" margin="none" placeholder="Rate" fullWidth />
                            </Box>
                            <Box flex={1}>
                                <Typography variant="body2">Amount</Typography>
                                <TextField value={amount} size="small" margin="none" placeholder="Amount" fullWidth />
                            </Box>
                        </Box>


                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
                            <Box flex={1}>
                                <Typography variant="body2">CGST%</Typography>
                                <TextField
                                    value={cgst}
                                    onChange={handleCgstChange}
                                    size="small" margin="none" placeholder="CGST" fullWidth />
                            </Box>
                            <Box flex={1}>
                                <Typography variant="body2">CGST Amount</Typography>
                                <TextField
                                    value={cgstAmount}
                                    size="small" margin="none" placeholder="CGST Amount" fullWidth />
                            </Box>
                            <Box flex={1}>
                                <Typography

                                    variant="body2">SGST%</Typography>
                                <TextField
                                    value={sgst}
                                    onChange={handleSgstChange}
                                    size="small" margin="none" placeholder="SGST" fullWidth />
                            </Box>
                            <Box flex={1}>
                                <Typography variant="body2">SGST Amount</Typography>
                                <TextField value={sgstAmount} size="small" margin="none" placeholder="SGST Amount" fullWidth />
                            </Box>
                            <Box flex={1}>
                                <Typography variant="body2">IGST %</Typography>
                                <TextField
                                    value={igst}
                                    onChange={handleIgstChange}
                                    size="small" margin="none" placeholder="IGST%" fullWidth />
                            </Box>
                            <Box flex={1}>
                                <Typography variant="body2">IGST Amount</Typography>
                                <TextField
                                    value={igstAmount}
                                    size="small" margin="none" placeholder=" IGST Amount" fullWidth />
                            </Box>
                        </Box>
                    </Box>


                    <Box m={1}>
                        <Button variant="contained" color="primary"
                            onClick={handleAddRow}
                            sx={{ mb: 2, gap: 1 }}>
                            <AddCircleOutlineIcon />
                            Add to table
                        </Button>

                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Sr No</TableCell>
                                        <TableCell>InvoiceID</TableCell>
                                        <TableCell>Product</TableCell>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell>Rate</TableCell>
                                        <TableCell>Amount</TableCell>
                                        <TableCell>CGST %</TableCell>
                                        <TableCell>CGST Amount</TableCell>
                                        <TableCell>SGST %</TableCell>
                                        <TableCell>SGST Amount</TableCell>
                                        <TableCell>IGST %</TableCell>
                                        <TableCell>IGST Amount</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell><TextField value={row.InvoiceId || ""} size="small" fullWidth /></TableCell>
                                            <TableCell>
                                                <Autocomplete
                                                    options={productOptions}
                                                    getOptionLabel={(option) => option.label}
                                                    value={productOptions.find((option) => option.value === row.ProductId) || null}
                                                    onChange={(event, newValue) => handleInputChange(index, "ProductId", newValue ? newValue.value : null)}
                                                    loading={loadingProduct}
                                                    renderInput={(params) => (
                                                        <TextField {...params} size="small" variant="outlined" placeholder="Select Product" />
                                                    )}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <TextField value={row.Quantity || ""} onChange={handleQuantityChange} size="small" fullWidth />
                                            </TableCell>
                                            <TableCell>
                                                <TextField value={row.Rate || ""} onChange={handleRateChange} size="small" fullWidth />
                                            </TableCell>
                                            <TableCell>
                                                <TextField value={row.Amount || ""} size="small" fullWidth disabled />
                                            </TableCell>
                                            <TableCell>
                                                <TextField value={row.CGSTPercentage || ""} onChange={handleCgstChange} size="small" fullWidth />
                                            </TableCell>
                                            <TableCell>
                                                <TextField value={row.CGSTAmount || ""} size="small" fullWidth disabled />
                                            </TableCell>
                                            <TableCell>
                                                <TextField value={row.SGSTPercentage || ""} onChange={handleSgstChange} size="small" fullWidth />
                                            </TableCell>
                                            <TableCell>
                                                <TextField value={row.SGSTAmount || ""} size="small" fullWidth disabled />
                                            </TableCell>
                                            <TableCell>
                                                <TextField value={row.IGSTPercentage || ""} onChange={handleIgstChange} size="small" fullWidth />
                                            </TableCell>
                                            <TableCell>
                                                <TextField value={row.IGSTAmount || ""} size="small" fullWidth disabled />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>


                    <Box sx={{ display: 'flex', justifyContent: 'space-between', m: 2 }}>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, }}>
                            <Box>
                                <Typography variant="body2">Payment Mode</Typography>
                                <TextField value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)} size="small" placeholder="Payment Mode" fullWidth />
                            </Box>
                        </Box>


                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, }}>
                            <Box>
                                <Typography variant="body2">SubTotal</Typography>
                                <TextField value={subtotal.toFixed(2)} disabled size="small" placeholder="SubTotal" fullWidth />
                            </Box>
                            <Box>
                                <Typography variant="body2">CGST</Typography>
                                <TextField value={totalCGST.toFixed(2)} disabled size="small" placeholder="CGST" fullWidth />
                            </Box>
                            <Box>
                                <Typography variant="body2">SGST</Typography>
                                <TextField value={totalSGST.toFixed(2)} disabled size="small" placeholder="SGST" fullWidth />
                            </Box>
                            <Box>
                                <Typography variant="body2">IGST</Typography>
                                <TextField value={totalIGST.toFixed(2)} disabled size="small" placeholder="IGST" fullWidth />
                            </Box>
                            <Box>
                                <Typography variant="body2">Transport</Typography>
                                <TextField
                                    value={transport}
                                    onChange={(e) => setTransport(e.target.value)}
                                    size="small" placeholder="Transport" fullWidth />
                            </Box>
                            <Box>
                                <Typography variant="body2">Total</Typography>
                                <TextField value={grandTotal.toFixed(2)} disabled size="small" placeholder="Total" fullWidth />
                            </Box>
                        </Box>
                    </Box>






                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2} mb={5}>
                        <Box>
                            <Button onClick={handleSubmit} variant='contained'>
                                {isEditing ? 'update' : 'save'} </Button>
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

export default SalesEntry


