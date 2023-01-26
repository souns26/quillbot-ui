import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';

const mbStyle = theme => ({
  mb: 0,
[theme.breakpoints.down('sm')]: {
  mb:'40px'
},
});

export default () => {
  return (  
    <Grid container>
        <Grid item xs={12} sm={4} md={4} lg={4} sx={mbStyle}>
          <div style={{height:'115px', width:'115px', margin:'auto auto 12px', position:'relative'}}>
            <CircularProgress variant="determinate" value={100} size='115px' color='info' sx={{position: 'absolute'}}/>
            <CircularProgress variant="determinate" value={75} size='115px' sx={{position: 'absolute'}}/>
            <span style={{fontSize:'40px', position: 'relative', top:'15%', left:'15%', fontWeight:'bold', color:'#499557'}}>75%<span style={{fontSize:'14px', display:'block'}}>time saved</span></span>
          </div>      
          <Typography sx={{fontSize:{md:'15px', lg:'18px'}}}>Average time savings per writing project.</Typography>  
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} sx={mbStyle}>
          <div style={{height:'115px', width:'115px', margin:'auto auto 12px', position:'relative'}}>
            <CircularProgress variant="determinate" value={100} size='115px' color='info' sx={{position: 'absolute'}}/>
            <CircularProgress variant="determinate" value={100} size='115px' sx={{position: 'absolute'}}/>
            <span style={{fontSize:'40px', position: 'relative', top:'15%', left:'20%', fontWeight:'bold', color:'#499557'}}>50+<span style={{fontSize:'14px', display:'block'}}>million</span></span>
          </div>      
          <Typography sx={{fontSize:{md:'15px', lg:'18px'}}}>Trusted by millions worldwide.</Typography>  
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} sx={mbStyle}>
          <div style={{height:'115px', width:'115px', margin:'auto auto 12px', position:'relative'}}>
            <CircularProgress variant="determinate" value={100} size='115px' color='info' sx={{position: 'absolute'}}/>
            <CircularProgress variant="determinate" value={75} size='115px' sx={{position: 'absolute'}}/>
            <span style={{fontSize:'40px', position: 'relative', top:'15%', left:'15%', fontWeight:'bold', color:'#499557'}}>85%<span style={{fontSize:'14px', display:'block'}}>of students</span></span>
          </div>      
          <Typography sx={{fontSize:{md:'15px', lg:'18px'}}}>Who reported their grades improved after using QuillBot.</Typography>  
        </Grid>
    </Grid>
  )
};