import { useState } from 'react';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  IconButton,
  Box,
  Divider,
  Tooltip 
} from '@mui/material';
import {
  FolderOutlined,
  TableChartOutlined,
  ChatOutlined,
  BarChartOutlined,
  AutoAwesomeOutlined,
  FileDownloadOutlined,
  SettingsOutlined,
  AccountCircleOutlined,
  ChevronLeft,
  ChevronRight
} from '@mui/icons-material';

const menuItems = [
  { text: 'Projects', icon: <FolderOutlined /> },
  { text: 'Data', icon: <TableChartOutlined /> },
  { text: 'Chat', icon: <ChatOutlined /> },
  { text: 'Analysis', icon: <BarChartOutlined /> },
  { text: 'Synthesis', icon: <AutoAwesomeOutlined /> },
  { text: 'Export', icon: <FileDownloadOutlined /> },
  { text: 'Settings', icon: <SettingsOutlined /> },
  { text: 'Account', icon: <AccountCircleOutlined /> },
];

const drawerWidth = 240;

export default function Navbar() {
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        position: 'relative',
        width: open ? drawerWidth : 70,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          position: 'relative',
          width: open ? drawerWidth : 70,
          boxSizing: 'border-box',
          backgroundColor: '#f8e8d4', // Light beige color from UI image
          transition: 'width 0.2s ease',
          overflowX: 'hidden',
          border: 'none',
          height: '100vh',
          borderRadius: 0,
          m: 0,
          p: 0
        },
      }}
      open={open}
    >
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        p: 1, 
        justifyContent: open ? 'space-between' : 'center',
        height: '48px'
      }}>
        {open && <Box component="div" sx={{ fontSize: '1.5rem', fontWeight: 'bold', p: 1 }}>MagicData</Box>}
        <IconButton onClick={handleDrawerToggle}>
          {open ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </Box>
      <Divider />
      <List sx={{ p: 0 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
            <Tooltip title={open ? '' : item.text} placement="right">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                {open && <ListItemText primary={item.text} />}
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
} 