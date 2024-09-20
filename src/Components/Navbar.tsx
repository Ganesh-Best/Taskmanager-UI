import React, { ReactNode } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userInfo } from './Store/user';
import { email, name } from './Selectors/user';
import Button from '@mui/material/Button'
import { useNavigate} from 'react-router-dom';
import useSetDetails from './useSetDetails';
import { darkMode } from './Store/theme';
import { ThemeProvider, createTheme } from '@mui/material/styles';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: 'white',   //#fff 
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          'white', //#fff
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: 'white', //#aab4be
        ...theme.applyStyles('dark', {
          backgroundColor: 'white', //#8796A5
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#27d', //#001e3c#001e3c
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '', //#003892
    }),
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#28d', // #aab4be
    borderRadius: 20 / 2,
    ...theme.applyStyles('dark', {
      backgroundColor: '#8796A5',
    }),
  },
}));


function Navbar() {
  // If we refesh set user details with vanished , so we need to set it if page got refreshed  
    useSetDetails(); 
   const  setMode = useSetRecoilState(darkMode);
   const navigate =  useNavigate()    
   const Email = useRecoilValue(email);
   const Name = useRecoilValue(name);
 
   const signOutHandler = ()=>{

       localStorage.removeItem('userInfo');
       navigate('/signin')

   }

  const mode = useRecoilValue(darkMode)

  const darkTheme =createTheme({
    palette: {
      mode: (mode)?'dark':'light',
      primary: {
        main: '#1976d2',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            // fontSize: "1.2rem", // Increase button font size
             padding: "10px 20px", // Custom padding
             borderRadius: 20, // Rounded corners for the button
            backgroundColor: mode ? 'black' : '#1976d2', // Dark mode and light mode background
            color:  mode ? '#ffffff' : '#ffffff', // White text for both modes
            transition: '0.3s', // Smooth transition on hover
            '&:hover': {
             backgroundColor: mode ? 'lightblack' : '#1565c0', // Different hover color based on mode
             boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)'
            },
          })
        }
      }

    }
    
  })

  const changeMode = ()=>{
    setMode(prev=>!prev);
    
    if(!mode)
    document.body.style.backgroundColor="#171717";
    else
    document.body.style.backgroundColor="white";
  
  }

  return (
    <div>
      <ThemeProvider theme={darkTheme}>  
       <AppBar position="static">
        <Toolbar sx={{display:"flex",flexWrap:"wrap"}}>
            
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
          >
            Task Manager 
          </Typography>
          <Typography
            variant="h6"
            component={"div"}
          > Welcome ,
            {Name}
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <FormGroup>
            <FormControlLabel
            control={<MaterialUISwitch onClick={changeMode} sx={{ m: 1 }}  />}
            label=""
            />
            
          </FormGroup>
          <Button variant="contained"  onClick={signOutHandler} color="primary">
             Sign out
          </Button>

        </Toolbar>
       </AppBar>
      </ThemeProvider>
    </div>
  )
}

export default Navbar
