import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';
import { green } from '@mui/material/colors';

const ApprovedCard = () => {
  return (
    <Card sx={{ maxWidth: 400, mx: 'auto', mt: 5, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <CheckCircleOutline sx={{ fontSize: 50, color: green[500], mb: 2 }} />
        <Typography variant="h5" component="div" color="text.primary" gutterBottom>
          Congratulations!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Your admission has been approved.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" variant="contained">
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ApprovedCard;
