import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupIcon from '@mui/icons-material/Group';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const primaryColor = '#E53935';
const secondaryColor = '#43A047';
const bgColor = '#f9f9f9';

const features = [
  {
    icon: <BloodtypeIcon sx={{ fontSize: 48, color: primaryColor }} />, 
    title: 'Why Donate?',
    desc: 'A single donation can save up to 3 lives. Every drop matters.'
  },
  {
    icon: <LocalHospitalIcon sx={{ fontSize: 48, color: secondaryColor }} />, 
    title: 'Find a Center',
    desc: 'Search for donation centers near your location and schedule a visit.'
  },
  {
    icon: <VolunteerActivismIcon sx={{ fontSize: 48, color: primaryColor }} />, 
    title: 'Become a Volunteer',
    desc: 'Help raise awareness, organize camps, and support medical needs.'
  }
];

const stats = [
  { icon: <FavoriteIcon color="error" />, label: 'Donors', value: '10,000+' },
  { icon: <GroupIcon color="primary" />, label: 'Volunteers', value: '2,000+' },
  { icon: <LocalHospitalIcon color="success" />, label: 'Centers', value: '500+' }
];

export default function HomePage() {
  return (
    <Box sx={{ bgcolor: bgColor, minHeight: '100vh' }}>
      {/* AppBar */}
      <AppBar position="static" sx={{ bgcolor: primaryColor }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            RedPrime
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Help Center</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: primaryColor }}>
          Be a Hero, Be a Donor
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          One pint can save three lives. Join the movement today.
        </Typography>
        <Button variant="contained" size="large" sx={{ bgcolor: primaryColor, mt: 2 }}>
          Become a Donor
        </Button>
      </Container>

      {/* Features */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {features.map((feature, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Card sx={{ textAlign: 'center', py: 4, minHeight: 250 }} elevation={3}>
                {feature.icon}
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Stats Counter */}
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, idx) => (
            <Grid item xs={12} sm={4} key={idx}>
              <Box sx={{ textAlign: 'center' }}>
                {stat.icon}
                <Typography variant="h5" sx={{ fontWeight: 700, mt: 1 }}>
                  {stat.value}
                </Typography>
                <Typography color="text.secondary">{stat.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: primaryColor, color: '#fff', py: 3, mt: 6, textAlign: 'center' }}>
        <Typography variant="body1">
          © {new Date().getFullYear()} RedPrime. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}