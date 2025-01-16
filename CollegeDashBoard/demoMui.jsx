import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import InputIcon from '@mui/icons-material/Input';
import HomeIcon from '@mui/icons-material/Home';
import { Link, Route, Routes } from 'react-router-dom';
import Management from './Management/Management';
import HomePage from './collegeHome/CollegeHome';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SelectActionCard from './Examination/Examination';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import './body.css'
import AmeenLogo from '../CollegeDashBoard/asset/Al-Ameen_Logo.png'
import StickyHeadTable from './Management/Management';
import BrandingSignInPage from './StudentsLogin/Login';
import FeedbackForm from './Feedback/FeedBackPage';
import FeedbackIcon from '@mui/icons-material/Feedback';
import PostAddIcon from '@mui/icons-material/PostAdd';
import RegistrationForm from './Admission/admission';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import SportsCard from './Sports/sports';


const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar style={{ backgroundImage: 'linear-gradient(to right, #0072FF, #00CFFF)' }} position="fixed" open={open}>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap component="div">

            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <Link to={'/Home'}>
                <div>
                  <img src={AmeenLogo} style={{ width: '40px' }} alt="Logo" />
                </div>
              </Link>
              <div style={{ marginTop: '18px', fontFamily: 'cursive', marginLeft: '20px', textShadow: '1px 1px 5px black', }}> Al Ameen College of Arts and Science</div>
            </div>

          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader style={{ backgroundColor: '#007FFF' }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List style={{ backgroundColor: '#007FFF' }}>
          {['Home', 'Students Login',].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>

              <Link to={text}>

                <ListItemButton 
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                        justifyContent: 'initial',

                      }
                      : {
                        justifyContent: 'center',
                      },
                  ]}
                >
                  <ListItemIcon
                  
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: 'center',
                      },
                      open
                        ? {
                          mr: 3,
                        }
                        : {
                          mr: 'auto',
                        },
                    ]}
                  >
                    {index % 2 === 0 ?  <HomeIcon  style={{ color: 'white' }} /> : <InputIcon style={{ color: 'white' }} />}


                  </ListItemIcon>

                  <ListItemText
                    primary={text}
                    
                    sx={[
                      open
                        ? {
                          opacity: 1,
                          color: 'black',
                          


                        }
                        : {
                          opacity: 0,
                        },
                    ]}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>

        <List style={{ backgroundColor: '#007FFF' }}>
          {['Examination', 'Management'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>

              <Link to={text}>

                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                        justifyContent: 'initial',

                      }
                      : {
                        justifyContent: 'center',
                      },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: 'center',
                      },
                      open
                        ? {
                          mr: 3,
                        }
                        : {
                          mr: 'auto',
                        },
                    ]}
                  >
                    {index % 2 === 0 ? <EditNoteIcon style={{ color: 'white' }} /> : <AdminPanelSettingsIcon style={{ color: 'white' }} />}


                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={[
                      open
                        ? {
                          opacity: 1,
                          color: 'black',


                        }
                        : {
                          opacity: 0,
                        },
                    ]}
                  />
                </ListItemButton>
              </Link> {/*  link closing */}

            </ListItem>
          ))}
        </List>
        <Divider />
        <List style={{ backgroundColor: '#007FFF' }}>
          {['Admission', 'Feedback'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>

              <Link to={text}>

                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                        justifyContent: 'initial',

                      }
                      : {
                        justifyContent: 'center',
                      },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: 'center',
                      },
                      open
                        ? {
                          mr: 3,
                        }
                        : {
                          mr: 'auto',
                        },
                    ]}
                  >
                    {index % 2 === 0 ? <PostAddIcon style={{ color: 'white' }} /> : <FeedbackIcon style={{ color: 'white' }} />}


                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={[
                      open
                        ? {
                          opacity: 1,
                          color: 'black',


                        }
                        : {
                          opacity: 0,
                        },
                    ]}
                  />
                </ListItemButton>
              </Link> {/*  link closing */}

            </ListItem>
          ))}
        </List>

        <Divider />
        <List style={{ backgroundColor: '#007FFF' }}>
          {['Sports', ''].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>

              <Link to={text}>

                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                        justifyContent: 'initial',

                      }
                      : {
                        justifyContent: 'center',
                      },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: 'center',
                      },
                      open
                        ? {
                          mr: 3,
                        }
                        : {
                          mr: 'auto',
                        },
                    ]}
                  >
                    {index % 2 === 0 ? <SportsHandballIcon style={{ color: 'white' }} /> : <FeedbackIcon style={{ color: 'white' }} />}


                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={[
                      open
                        ? {
                          opacity: 1,
                          color: 'black',


                        }
                        : {
                          opacity: 0,
                        },
                    ]}
                  />
                </ListItemButton>
              </Link> {/*  link closing */}

            </ListItem>
          ))}
        </List>
      </Drawer>
      
      

      <DrawerHeader />


      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

        <Routes>

          <Route path='/' element={<BrandingSignInPage />} />

          <Route path='/Home' element={<HomePage />} />
          <Route path='/Examination' element={<SelectActionCard />} />
          <Route path='/Management' element={<StickyHeadTable />} />
          <Route path='/Feedback' element={<FeedbackForm />} />
          <Route path='/Admission' element={<RegistrationForm/>} />
          <Route path='/Sports' element={<SportsCard/>} />




        </Routes>

      </Box>
    </Box>
  );
}

