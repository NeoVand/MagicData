import { Box, Typography, Paper, Button, Grid } from '@mui/material';
import {
  Search,
  Storage,
  ChatBubbleOutline,
  BarChart,
  Code,
  AutoAwesome
} from '@mui/icons-material';

const features = [
  {
    icon: <Search fontSize="large" color="primary" />,
    title: 'Semantic Search and RAG',
    description: 'Search through your data semantically and use Retrieval Augmented Generation for better results.'
  },
  {
    icon: <Code fontSize="large" color="primary" />,
    title: 'NL2SQL',
    description: 'Convert natural language questions into SQL queries for efficient data querying.'
  },
  {
    icon: <BarChart fontSize="large" color="primary" />,
    title: 'Plots and Diagrams',
    description: 'Visualize your data with beautiful charts and diagrams automatically generated from your data.'
  },
  {
    icon: <Storage fontSize="large" color="primary" />,
    title: 'Report Generator',
    description: 'Generate comprehensive reports from your data with just a few clicks.'
  },
  {
    icon: <ChatBubbleOutline fontSize="large" color="primary" />,
    title: 'Chat and Completion',
    description: 'Interact with your data through natural language conversations and get AI-powered completions.'
  },
  {
    icon: <AutoAwesome fontSize="large" color="primary" />,
    title: 'Dataset Generator',
    description: 'Generate synthetic datasets for testing or augmenting your existing data.'
  }
];

export default function LandingPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Paper 
        elevation={3}
        sx={{ 
          p: 4, 
          mb: 4, 
          backgroundColor: '#e8f5e9',
          textAlign: 'center'
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to MagicData
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
          An AI-first data processing tool
        </Typography>
        <Typography variant="body1" paragraph>
          MagicData allows you to turn any document into tables and analyze it. 
          You can synthesize new data with or without documents.
          A powerful AI-first tool that doesn't require coding but gives you freedom to perform complex tasks.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
          <Button variant="contained" color="primary" size="large">
            Create New Project
          </Button>
          <Button variant="outlined" color="primary" size="large">
            Learn More
          </Button>
        </Box>
      </Paper>

      <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
        Features
      </Typography>

      <Grid container spacing={3}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper 
              elevation={2} 
              sx={{ 
                p: 3, 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)'
                }
              }}
            >
              <Box sx={{ mb: 2 }}>
                {feature.icon}
              </Box>
              <Typography variant="h6" component="h3" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
} 