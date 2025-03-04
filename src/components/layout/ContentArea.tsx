import { ReactNode } from 'react';
import { Box, Paper, Typography } from '@mui/material';

type ContentAreaProps = {
  children: ReactNode;
  title?: string;
};

export default function ContentArea({ children, title }: ContentAreaProps) {
  return (
    <Paper
      elevation={1}
      sx={{
        flex: 1,
        backgroundColor: '#fff8e1', // Light yellow from UI image
        borderRadius: 0,
        padding: '0.5rem',
        overflow: 'auto',
        height: '100%',
        margin: 0,
        width: '100%'
      }}
    >
      {title && (
        <Typography variant="h6" component="div" sx={{ mb: 1 }}>
          {title}
        </Typography>
      )}
      <Box sx={{ height: title ? 'calc(100% - 2rem)' : '100%', width: '100%' }}>
        {children}
      </Box>
    </Paper>
  );
} 