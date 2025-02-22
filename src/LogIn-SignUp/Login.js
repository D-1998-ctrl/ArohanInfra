// import React from 'react'
// import './login.css'
// import { Box, Typography, TextField, Link, Button, } from '@mui/material';
// import BaggroundImg from '../imgs/Bagimg.jpeg'
// import { useNavigate } from "react-router-dom";
// import logo from '../imgs/logo5.jpeg';

// const Login = () => {

//   const navigate = useNavigate();
//   const handleLoginClick = (e) => {
//     e.preventDefault();
//     navigate('/customermaster');
//   };

//   return (
//     <Box
//       sx={{
//         width: '100vw',
//         height: '100vh',
//         backgroundImage: `url(${BaggroundImg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >


//       <Box>

//         <Box
//           sx={{
//             display: "flex",
//             width: "800px",
//             height: "400px",
//             borderRadius: "20px",
//             overflow: "hidden",
//             boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//             background: "rgba(250, 227, 227, 0.13)",
//           }}
//         >

//           <Box
//             sx={{
//               width: "50%",
//               background: "rgba(255, 255, 255, 0.73)",
//               backdropFilter: "blur(20px)",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <Box className="login-logo">
//               <img
//                 src={logo}
//                 alt="SNP Tax & Financials Logo"
//                 style={{ height: "150px", borderRadius: "150px" }}
//               />
//             </Box>
//           </Box>


//           <Box
//             sx={{
//               width: "50%",
//               padding: "40px",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <Typography
//               variant="h4"
//               sx={{ fontWeight: "bold", color: "white", marginBottom: 3 }}
//             >
//               LOGIN
//             </Typography>

//             <TextField
//               fullWidth
//               variant="outlined"
//               label="User Name"
//               sx={{
//                 marginBottom: 2,
//                 background: "rgba(255, 255, 255, 0.3)",
//                 borderRadius: "10px",
//               }}
//             />

//             <TextField
//               fullWidth
//               variant="outlined"
//               label="Password"
//               type="password"
//               sx={{
//                 marginBottom: 2,
//                 background: "rgba(255, 255, 255, 0.3)",
//                 borderRadius: "10px",
//               }}
//             />

//             <Button sx={{
//               background: '#9ccc63', "&:hover": {
//                 backgroundColor: "#b0d682",
//               },
//             }} fullWidth onClick={handleLoginClick} variant='contained'>
//               Login
//             </Button>

//             <Typography sx={{ marginTop: 2, color: "white" }}>
//               Don't have an account?{" "}
//               <Link href="#" sx={{ color: "#e3f2fd", textDecoration: "none" }}>
//                 Sign up
//               </Link>
//             </Typography>
//           </Box>
//         </Box>
//       </Box>



//     </Box>
//   )
// }

// export default Login



import React from 'react';
import { Box, Typography, TextField, Link, Button, useMediaQuery } from '@mui/material';
import { useNavigate } from "react-router-dom";
import BaggroundImg from '../imgs/bg7.2.jpg';
import logo from '../imgs/logo5.jpeg';

const Login = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate('/customermaster');
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${BaggroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            width: isSmallScreen ? "90vw" : "950px",
            height: isSmallScreen ? "auto" : "460px",
            borderRadius: "20px",
            overflow: "hidden",
            // boxShadow: "0 4px 10px rgba(0, 0, 0, 0.53)",
            boxShadow: "0 4px 10px rgba(32, 30, 29, 0.22)",
            background: "rgba(255, 255, 255, 0.17)",
            flexDirection: isSmallScreen ? "column" : "row",
          }}
        >

          <Box
            sx={{
              width: "100%",
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              display:isSmallScreen ?'none':'auto'
              // background: "rgba(255, 255, 255, 0.73)",
              // backdropFilter: "blur(20px)",

            }}
          >

            <Box className="login-logo">
              <img
                src={logo}
                alt="SNP Tax & Financials Logo"
                style={{ height: "460px", width: '100%' }}
              />
            </Box>

          </Box>


          <Box
            sx={{
              width: isSmallScreen ? "100%" : "100%",
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "#3A3B3C", marginBottom: 7 }}
            >
              Welcome ..
            </Typography>

            <TextField
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}

              placeholder="Username"
              sx={{
                display: 'flex',
                height: '3.5vh',
                width: '90%',
                justifyContent: 'center',
                marginBottom: 3,
                background: "rgba(255, 255, 255, 0.3)",
                borderRadius: "20px",
                p: 1,
                paddingLeft: 3

              }}
            />


            <TextField
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              placeholder="Password"
              type="password"
              sx={{
                display: 'flex',
                height: '3.5vh',
                width: '90%',
                justifyContent: 'center',
                marginBottom: 2,
                background: "rgba(255, 255, 255, 0.3)",
                borderRadius: "20px",
                p: 1,
                paddingLeft: 3
              }}
            />


            <Button
              sx={{
                mt: 6,
                fontSize: "16px",
                width: '90%',
                background: '#074e2c',
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "#08A04B",
                },
              }}
              fullWidth
              onClick={handleLoginClick}
              variant='contained'
            >
              Login
            </Button>


          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
