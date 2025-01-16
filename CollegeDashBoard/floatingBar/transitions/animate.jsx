import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';

const icon = (
  <Paper sx={{ m: 1, width: 500, height: 500, p: 2 }} elevation={4}>
    <Box sx={{ textAlign: 'center' }}>
      <h2>Dynamic Content</h2>
      <p>This content appears inside the box when it grows.</p>
    </Box>
  </Paper>
);

export default function SimpleGrow() {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setChecked(true);
    }, 500); // Automatically grow after 500ms

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <Box
      sx={{
        height: 600,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grow in={checked}>{icon}</Grow>
    </Box>
  );
}
