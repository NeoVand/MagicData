import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material';
import {
  AddCircleOutline,
  DeleteOutline,
  SaveOutlined,
  UndoOutlined,
  RedoOutlined,
  DownloadOutlined,
  ShareOutlined
} from '@mui/icons-material';

type ToolbarProps = {
  title: string;
  mode: 'projects' | 'data' | 'chat' | 'analysis' | 'synthesis';
};

export default function Toolbar({ title, mode }: ToolbarProps) {
  // Different actions based on the current mode
  const renderActions = () => {
    switch (mode) {
      case 'projects':
        return (
          <>
            <Tooltip title="New Project">
              <IconButton size="small">
                <AddCircleOutline />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete Project">
              <IconButton size="small">
                <DeleteOutline />
              </IconButton>
            </Tooltip>
          </>
        );
      case 'data':
        return (
          <>
            <Tooltip title="Add Table">
              <IconButton size="small">
                <AddCircleOutline />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete Table">
              <IconButton size="small">
                <DeleteOutline />
              </IconButton>
            </Tooltip>
            <Tooltip title="Save">
              <IconButton size="small">
                <SaveOutlined />
              </IconButton>
            </Tooltip>
            <Tooltip title="Undo">
              <IconButton size="small">
                <UndoOutlined />
              </IconButton>
            </Tooltip>
            <Tooltip title="Redo">
              <IconButton size="small">
                <RedoOutlined />
              </IconButton>
            </Tooltip>
          </>
        );
      // Add more cases for other modes
      default:
        return (
          <>
            <Tooltip title="Export">
              <IconButton size="small">
                <DownloadOutlined />
              </IconButton>
            </Tooltip>
            <Tooltip title="Share">
              <IconButton size="small">
                <ShareOutlined />
              </IconButton>
            </Tooltip>
          </>
        );
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fbe8cc', // Light orange from UI image
        padding: '0.5rem 1rem',
        justifyContent: 'space-between',
        height: '48px',
        width: '100%',
        margin: 0,
        borderRadius: 0
      }}
    >
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        {renderActions()}
      </Box>
    </Box>
  );
} 