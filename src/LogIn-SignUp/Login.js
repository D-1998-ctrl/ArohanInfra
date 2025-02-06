



// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Box,
//   Button,
//   FormControl,
//   InputAdornment,
//   IconButton,
//   InputLabel,
//   OutlinedInput,
//   TextField,
//   Typography,
// } from '@mui/material';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import img from '../imgs/img.jpg';
// import logo from '../imgs/logo5.PNG';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const handleClickShowPassword = () => setShowPassword(!showPassword);
//   const handleMouseDownPassword = (event) => event.preventDefault();
//   const navigate = useNavigate();

//   const handleLoginClick = (e) => {
//     e.preventDefault();
//     navigate('/customermaster');
//   };

//   return (
//     <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
//       {/* Top Bar */}
//       <Box position="static" sx={{  height: '65px',backgroundColor: 'white',justifyContent: 'center'  }}>
//         <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
//           {/* Logo Section */}
//           <Box sx={{ marginLeft: '16px' }}>
//             <img src={logo} alt="Logo" style={{ height: '60px' }} />
//           </Box>

//           {/* Text Section */}
//           <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
//             <Typography
//               variant="h6"
//               sx={{
//                 fontWeight: 'bold',
//                 color: '#137e91',
//                 fontSize: '1.5rem', // Increased font size
//               }}
//             >
//              Arohan Agro
//             </Typography>
//           </Box>
//         </Toolbar>
//       </Box>




//       {/* Main Content */}
//       <Box
//         sx={{
//           display: 'flex',
//           flexGrow: 1,
//           background: `url(${img}) no-repeat center center/cover`,
//           padding: 4,
//         }}
//       >
//         {/* Left Section */}
//         {/* <Box
//           sx={{
//             flex: 1,
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <img src={img1}
//             alt="Left Side Image"
//             style={{ width: '90%', height: 'auto' }} />
//         </Box> */}

//         {/* Right Section */}
//         <Box
//           sx={{
//             flex: 1,
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <Box
//             sx={{
//               width: '400px',
//               padding: '20px',
//               backgroundColor: 'rgba(255, 255, 255, 0.9)',
//               borderRadius: '8px',
//               boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
//             }}
//           >
//             <Typography
//               variant="h5"
//               sx={{ marginBottom: 2, fontWeight: 'bold', color: '#137e91',textAlign:'center' }}
//             >
//               Log In
//             </Typography>
//             <Box
//               component="form"
//               sx={{ '& > :not(style)': { mb: 2, width: '100%' } }}
//               noValidate
//               autoComplete="off"
//             >
//               <TextField id="user-id" label="User ID" variant="outlined" />
//             </Box>

//             <FormControl sx={{ mb: 3, width: '100%' }} variant="outlined">
//               <InputLabel htmlFor="outlined-adornment-password">
//                 Password
//               </InputLabel>
//               <OutlinedInput
//                 id="outlined-adornment-password"
//                 type={showPassword ? 'text' : 'password'}
//                 endAdornment={
//                   <InputAdornment position="end">
//                     <IconButton
//                       aria-label="toggle password visibility"
//                       onClick={handleClickShowPassword}
//                       onMouseDown={handleMouseDownPassword}
//                       edge="end"
//                     >
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 }
//                 label="Password"
//               />
//             </FormControl>

//             <Button
//               fullWidth
//               variant="contained"
//               sx={{ backgroundColor: '#137e91', color: 'white' }}
//               onClick={handleLoginClick}
//             >
//               Log In
//             </Button>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, IconButton, TextField, InputLabel, FormControl, MenuItem, Select, Checkbox, Link, Button, } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import logo from '../imgs/logo5.PNG';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import { NavLink } from "react-router-dom";
import './login.css'
import android from '../imgs/android.png';
import { useNavigate } from "react-router-dom";
import apple from '../imgs/apple.png';



// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   ...theme.applyStyles('dark', {
//     backgroundColor: '#1A2027',
//   }),
// }));
// const LeftItem = styled(Item)({
//   backgroundColor: 'rgb(58,145,245)',
//   color: '#fff',
//   height: '100vh',

// });

// const RightItem = styled(Item)({
//   backgroundColor: '#f0f0f0',
//   color: 'black',
//   minHeight: '100vh',  // Ensures it takes full height
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center', // Centers content
//   overflow: 'hidden',  // Prevents scrolling
// });


export default function AdminLogin() {


  const [inpval, setInpval] = useState({
    email: "",
    password: "",
    expiryTime: "",
  });


  const setVal = (e) => {

    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  const navigate = useNavigate();
  const handleLoginClick = (e) => {
        e.preventDefault();
        navigate('/customermaster');
      };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={16} sm={8} sx={{
          backgroundColor: '#2196F3',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'center'
        }}>

          <Box className="login-logo" mt={2}>
            <img src={logo} alt="SNP Tax & Financials Logo" style={{ height: "80px" }} />
          </Box>

          <Typography variant="h3" fontWeight="bold" mt={2}>
            Welcome Back
          </Typography>

          <Box px={6} mt={3}>
            <Typography variant="body1" fontSize="18px">
              "Welcome to 'Arohan Agro', where tax management meets simplicity. Our advanced software streamlines tax processes for individuals, businesses, and professionals, ensuring accuracy and efficiency. Experience a new era of financial ease with SNP Tax & Financials."
            </Typography>
          </Box>

          <Typography variant="h6" fontWeight="medium" mt={4}>
            Please Login to access your account
          </Typography>

          <Grid container justifyContent="center" spacing={2} mt={4}>
            {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon].map((Icon, index) => (
              <Grid item key={index}>
                <IconButton color="inherit">
                  <Icon sx={{ fontSize: 30, color: '#fff' }} />
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={16} sm={8}
        sx={{ backgroundColor: '#f0f0f0',
          color: 'black',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'center'}}
        
        >
          
            <Box className="right-container"
              sx={{ textAlign: 'left', height: "100%", overflowY: "auto", padding: "10px", mt: 15,}}

            >
              <Box className="login-logo" sx={{ margin: 0 }}>
                <img src={logo} alt="" style={{ height: "95px" }} />
              </Box>

              <Box  >
                <Typography textAlign={"center"} variant='h4'>Account Login</Typography>
              </Box>

              <Box>
                <Box mt={3}>
                  <InputLabel sx={{ color: 'black' }}>Email</InputLabel>
                  <TextField

                    fullWidth
                    name="email"
                    placeholder="Enter Your Email"
                    size="small"
                    sx={{ mt: 2 }}
                    value={inpval.email}
                    onChange={setVal}

                    id="email"

                  />
                </Box>

                <Box mt={2}>
                  {/* <InputLabel sx={{ color: 'black' }}>Password</InputLabel> */}
                  <FormControl sx={{ mt: 2, width: '100%' }} variant="outlined">
                    <Typography htmlFor="outlined-adornment-password" mb={2}>Password</Typography>
                    <OutlinedInput
                      // id="outlined-adornment-password"
                      name="password"
                      placeholder="password"
                      size="small"
                      value={inpval.password}
                      onChange={setVal}
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>

                  <Box sx={{ textAlign: 'left', mb: '3%', fontSize: '12px', mt: 1 }}>
                    <Link component={NavLink} to="/forgotpass" sx={{ color: 'cornflowerblue', textDecoration: 'none' }}>
                      Forgot Password?
                    </Link>
                  </Box>
                </Box>


                <Box mt={2}>
                  <FormControl fullWidth sx={{ mt: 2 }}>
                    <Typography sx={{ color: 'black' }}>Stay signed in for</Typography>
                    <Select
                      size='small'
                      margin='normal'
                      value={inpval.expiryTime}
                      onChange={setVal}
                      name="expiryTime"
                      sx={{
                        // padding: "8px 12px",
                        border: "2px solid rgb(100, 149, 237)",
                        borderRadius: "10px"
                      }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      <MenuItem value="1min">1 minute</MenuItem>
                      <MenuItem value="30min">30 minutes</MenuItem>
                      <MenuItem value="4hours">4 hours</MenuItem>
                      <MenuItem value="8hours">8 hours</MenuItem>
                    </Select>
                  </FormControl>
                </Box>




                <Box display="flex" mt={2} alignItems={'center'}>
                  <Checkbox id="terms" />

                  <Typography fontSize="14px" color="#696969" component="label" htmlFor="terms">
                    Agree to{' '}
                    <Link href="https://policies.google.com/terms?hl=en-US" color="rgb(58, 145, 245)" underline="none">
                      Conditions
                    </Link>
                  </Typography>
                </Box>

                <Box mt={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                  <Button onClick={handleLoginClick} variant='contained'>
                    Login
                  </Button>
                </Box>

                {/* <Box mt={2} className="col-12">
                  <Typography variant="body">
                    {"Don't have a PMS solutions admin portal Account? "}
                    <Link
                      component={NavLink}
                      to="/signup"
                      sx={{ color: "rgb(100, 149, 237)", textDecoration: "none" }}
                    >
                      Admin Sign Up
                    </Link>
                  </Typography>
                  <br />
                  <Typography variant="body" sx={{ mt: 1 }}>
                    {"Don't have a PMS solutions client portal Account? "}
                    <Link
                      component={NavLink}
                      to="/signup"
                      sx={{ color: "rgb(100, 149, 237)", textDecoration: "none" }}
                    >
                      Sign Up
                    </Link>
                  </Typography>
                </Box> */}

                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", }}>
                  <Box className="storeBtn" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box className="playstore col-12">
                      <NavLink to="https://play.google.com/store/apps/details?id=com.linkedin.android&hl=en_IN&gl=US">
                        <img style={{ width: "120px" }} src={android} alt="Logo" />
                      </NavLink>
                    </Box>
                    <br />
                    <Box className="appstore col-12">
                      <NavLink to="https://apps.apple.com/us/app/linkedin-network-job-finder/id288429040">
                        <img style={{ width: "120px" }} src={apple} alt="Logo" />
                      </NavLink>
                    </Box>
                  </Box>
                </Box>

              </Box>

            </Box>

         
        </Grid>
      </Grid>
    </Box>
  );
}

