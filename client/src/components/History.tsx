// @ts-nocheck

import { Box, Typography, Chip, Grid, Paper } from '@mui/material';

const skills = {
  "Frontend": ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Material UI'],
  "Backend": ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs'],
  "DevOps & Tools": ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code'],
  "Others": ['Data Structures', 'Algorithms', 'Open Source', 'Chrome Extensions']
};

const SkillsSection = () => {
  return (
    <Box sx={{ py: 6, px: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={3}>
        {Object.entries(skills).map(([category, techs]) => (
          <Grid item xs={12} md={6} key={category}>
            <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom>{category}</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {techs.map(skill => (
                  <Chip key={skill} label={skill} color="primary" variant="outlined" />
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillsSection;
