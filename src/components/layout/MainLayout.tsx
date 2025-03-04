import { ReactNode, useState } from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Toolbar from './Toolbar';
import ContentArea from './ContentArea';
import ChatInput from '../chat/ChatInput';

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const [mode, setMode] = useState<'projects' | 'data' | 'chat' | 'analysis' | 'synthesis'>('data');
  const [navbarWidth, setNavbarWidth] = useState(240);
  
  // This would handle messages sent from the chat input
  const handleSendMessage = (message: string) => {
    console.log('Message sent:', message);
    // In a real app, you would process the message here
  };

  // Get title based on current mode
  const getTitle = () => {
    switch (mode) {
      case 'projects':
        return 'Projects';
      case 'data':
        return 'Data Tables';
      case 'chat':
        return 'Chat';
      case 'analysis':
        return 'Analysis';
      case 'synthesis':
        return 'Synthesis';
      default:
        return 'MagicData';
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <Navbar />
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          m: 0,
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          overflow: 'hidden',
          position: 'relative',
          left: 0
        }}
      >
        <Toolbar title={getTitle()} mode={mode} />
        
        <Box sx={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 0, 
          overflow: 'hidden',
          p: 0,
          m: 0
        }}>
          <ContentArea>
            {children}
          </ContentArea>
          
          <ChatInput onSendMessage={handleSendMessage} mode="chat" />
        </Box>
      </Box>
    </Box>
  );
} 