



import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SettingsIcon from '@mui/icons-material/Settings';



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
        path: "/salesentry",
        icon: <FiberManualRecordIcon />,
      },
      {
        title: "Purchase",
        path: "Purchase",
        icon: <FiberManualRecordIcon />,
      },

      {
        title: "Production Entry",
        path: "productionentry",
        icon: <FiberManualRecordIcon />,
      },
      {
        title: "Delivery Challan at godwon",
        path: "commonpage",
        icon: <FiberManualRecordIcon />,
      },
      {
        title: "Inword at store",
        path: "commonpage",
        icon: <FiberManualRecordIcon />,
      },
      {
        title: "Planning",
        path: "commonpage",
        icon: <FiberManualRecordIcon />,
      },
      {
        title: "Receipts",
        path: "commonpage",
        icon: <FiberManualRecordIcon />,
      },
      {
        title: "Payments",
        path: "commonpage",
        icon: <FiberManualRecordIcon />,
      },
    ],
  },

  {
    title: "Reports",
    path: '/commonpage',
    icon: <AttachMoneyIcon />,
    submenus: [
      {
        title: "Productwise Sales",
        path: "commonpage",
        icon: <FiberManualRecordIcon />,
      },
      {
        title: "Customerwise Sales",
        path: "commonpage",
        icon: <FiberManualRecordIcon />,
      },
      {
        title: "Stock Report",
        path: "commonpage",
        icon: <FiberManualRecordIcon />,
      },

      {
        title: "Account Receivable",
        path: "commonpage",
        icon: <FiberManualRecordIcon />,
      },


      {
        title: "Account Payable",
        path: "commonpage",
        icon: <FiberManualRecordIcon />,
      },
    ],
  },




  {
    title: "Company Information",
    path: "commonpage",
    icon: <PermIdentityIcon />,
    submenus: [],
  },

  {
    title: "Settings",
    path: "/setting",
    icon: <SettingsIcon />,
    submenus: [],
  },

];
