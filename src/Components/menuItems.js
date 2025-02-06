



import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
export const menuItems = [

  // {

  //   title: "Masters",
  //   path: '/master/customermaster',
  //   icon: <LibraryBooksIcon />,
  //   submenus: [],
  // },
  {
    title: "Masters",
    path: '/master',
    icon: <ReceiptLongIcon />,
    submenus: [
      {
        title: "Customer Master",
        path: "/customermaster",
        icon: <FiberManualRecordIcon />,
      },
      {
        title: "Supplier Master",
        path: "/suppliermaster",
        icon: <FiberManualRecordIcon />,
      },
      {
        title: "Product Master",
        path: "/productmaster",
        icon: <FiberManualRecordIcon />,
      },
      {
        title: "Material Master",
        path: "materialmaster",
        icon: <FiberManualRecordIcon />,
      },
      {
        title: "Account Master",
        path: "/accountmaster",
        icon: <FiberManualRecordIcon />,
      },

    ],
  },
  {
    title: "Transaction",
    path: '/transaction',
    icon: <ReceiptLongIcon />,
    submenus: [
      {
        title: "Sales",
        path: "/sales",
        icon: <FiberManualRecordIcon />,
      },
      {
        title: "Purchase",
        path: "Purchase",
        icon: <FiberManualRecordIcon />,
      },
      {
        title: "Delivery Challan at godwon",
        path: "deliverychallan",
        icon: <FiberManualRecordIcon />,
      },
      {
        title: "Inword at store",
        path: "inwordstore",
        icon: <FiberManualRecordIcon />,
      },
      {
        title: "Planning",
        path: "planning",
        icon: <FiberManualRecordIcon />,
      },
      {
        title: "Receipts",
        path: "receipts",
        icon: <FiberManualRecordIcon />,
      },
      {
        title: "Payments",
        path: "payments",
        icon: <FiberManualRecordIcon />,
      },
    ],
  },

  {
    title: "Reports",
    path: '/reports',
    icon: <AttachMoneyIcon />,
    submenus: [
      {
        title: "Productwise Sales",
        path: "/productwisesales",
        icon: <FiberManualRecordIcon />,
      },
      {
        title: "Customerwise Sales",
        path: "/customerwisesales",
        icon: <FiberManualRecordIcon />,
      },
      {
        title: "Stock Report",
        path: "/stockreport",
        icon: <FiberManualRecordIcon />,
      },

      {
        title: "Account Receivable",
        path: "/accountreceivable",
        icon: <FiberManualRecordIcon />,
      },


      {
        title: "Account Payable",
        path: "/accountpayable",
        icon: <FiberManualRecordIcon />,
      },
    ],
  },




  {
    title: "Company Information",
    path: "/companyinfo",
    icon: <PermIdentityIcon />,
    submenus: [],
  },

];
