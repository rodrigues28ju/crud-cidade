import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useDrawerContext } from '../../contexts';


interface IMenuLateralProps{
  children: React.ReactNode;
}
export const MenuLateral: React.FC<IMenuLateralProps>=({children})=>{
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const {isDrawerOpen, toggleDrawerOpen} = useDrawerContext();

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen} >
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">

          <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
            <Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12) }} alt="fantasma confuso" src="https://i.pinimg.com/564x/ab/01/33/ab013354f2caca61b6b883b6ae230ef6.jpg" />
          </Box>

          <Divider />


          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Página inicial" />
              </ListItemButton>

            </List>


          </Box>






        </Box>
     
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      
      </Box>
    </>
  );
};