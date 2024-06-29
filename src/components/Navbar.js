import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom'; // Import Link component
import Fade from '@mui/material/Fade';

const pages = [
 // { name: 'HOME', route: '/' }, // Define routes for each page
  //{ name: 'CATEGORIES', route: '/tests' }, // Adjust routes according to your application structure
 // { name: 'ADD A POST', route: '/addaposttoblog123' },
  { name: 'BLOG', route: '/blogs' },
  //{ name: 'RESENT BLOGS', route: '/qa' },
];

const pages2 = [
  { name: 'ADD A POST', route: '/addaposttoblog123' },
   { name: 'Agriculture', route: '/agriculture' },
   { name: 'News', route: '/news' },
 ];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  
  return (
    <AppBar position="static" style={{backgroundColor:'#1e1b4b'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
        
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={page.route} style={{ textDecoration: 'none', color: 'inherit' }}>{page.name}</Link>
                  </Typography>
                </MenuItem>
              ))}

              {pages2.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={page.route} style={{ textDecoration: 'none', color: 'inherit' }}>{page.name}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
               // key={page.name}
                component={Link} // Use Link component
                to={'/'} // Specify route for each page
                sx={{ my: 2, color: 'white', display: 'block' }}
                style={{fontWeight:'600', fontSize:'18px'}}
            >
               HOME
            </Button>

            <Button
              id="fade-button"
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              style={{fontWeight:'600', fontSize:'18px',color:'white'}}
            >
            CATEGORIES
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            component={Link} // Use Link component
                to={'/'} 
          >
            <MenuItem to ={'/agriculture'} component={Link} onClick={handleClose}>Agriculture</MenuItem>
            <MenuItem to ={'/agriculture'} component={Link} onClick={handleClose}>Alternative topics</MenuItem>
            <MenuItem onClick={handleClose}>Automotive</MenuItem>
            <MenuItem onClick={handleClose}>Beauty</MenuItem>
            <MenuItem onClick={handleClose}>Business</MenuItem>
            <MenuItem onClick={handleClose}>Education</MenuItem>
            <MenuItem onClick={handleClose}>Entertainment</MenuItem>
            <MenuItem onClick={handleClose}>Fashion</MenuItem>
            <MenuItem onClick={handleClose}>Finance</MenuItem>
            <MenuItem onClick={handleClose}>Fitness</MenuItem>
            <MenuItem onClick={handleClose}>Food and Recipe</MenuItem>
            <MenuItem onClick={handleClose}>Green living</MenuItem>
            <MenuItem onClick={handleClose}>Health</MenuItem>
            <MenuItem onClick={handleClose}>Hobbies</MenuItem>
            <MenuItem onClick={handleClose}>Internet services</MenuItem>
            <MenuItem onClick={handleClose}>Lifestyle</MenuItem>
            <MenuItem onClick={handleClose}>Love and Relationships</MenuItem>
            <MenuItem onClick={handleClose}>Marketing</MenuItem>
            <MenuItem onClick={handleClose}>Music</MenuItem>
            <MenuItem to ={'/news'} component={Link}  onClick={handleClose}>News</MenuItem>
            <MenuItem onClick={handleClose}>Parenting</MenuItem>
            <MenuItem onClick={handleClose}>Pets</MenuItem>
            <MenuItem onClick={handleClose}>Photography</MenuItem>
            <MenuItem onClick={handleClose}>Productivity</MenuItem>
            <MenuItem onClick={handleClose}>Sports</MenuItem>
            <MenuItem onClick={handleClose}>Tech</MenuItem>
            <MenuItem onClick={handleClose}>Travel</MenuItem>
            <MenuItem onClick={handleClose}>Wellness</MenuItem>
          </Menu>

            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link} // Use Link component
                to={page.route} // Specify route for each page
                sx={{ my: 2, color: 'white', display: 'block' }}
                style={{fontWeight:'600', fontSize:'18px'}}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;