import { useState } from 'react';
import { Box, IconButton, TextField, Paper, Typography } from '@mui/material';
import { Send, Settings, AttachFile, Code } from '@mui/icons-material';

type ChatInputProps = {
  onSendMessage: (message: string) => void;
  label?: string;
  mode?: 'chat' | 'prompt' | 'query';
};

export default function ChatInput({ onSendMessage, label = 'Type a message...', mode = 'chat' }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const renderModeLabel = () => {
    switch (mode) {
      case 'prompt':
        return 'Prompt Composer';
      case 'query':
        return 'Query Composer';
      default:
        return 'Chatbot';
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        padding: '0.75rem',
        backgroundColor: '#f9f9f9',
        borderRadius: 0,
        width: '100%',
        margin: 0
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Typography variant="subtitle1" component="div">
          {renderModeLabel()}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton size="small">
            <Settings fontSize="small" />
          </IconButton>
          <IconButton size="small">
            <Code fontSize="small" />
          </IconButton>
        </Box>
      </Box>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', width: '100%' }}>
          <IconButton size="small">
            <AttachFile />
          </IconButton>
          <TextField
            fullWidth
            placeholder={label}
            multiline
            maxRows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            variant="outlined"
            size="small"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '18px',
              }
            }}
          />
          <IconButton 
            type="submit" 
            color="primary" 
            disabled={!message.trim()}
          >
            <Send />
          </IconButton>
        </Box>
      </form>
    </Paper>
  );
} 