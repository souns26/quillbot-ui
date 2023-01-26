import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import ImageAutoplay from './content/ImageAutoplay';
import ComparisonTable from './content/ComparisonTable';
import CircularAnalysis from './content/CircularAnalysis';
import ImageAutoplayContent from './content/ImageAutoplayContent';
const bgstyleOne = {
    backgroundImage: 'url(https://assets.quillbot.com/images/theme/light/premiumPage/topBg.svg)',
    backgroundSize: 'auto 99%',
    backgroundPosition: 'left top',
    backgroundRepeat: 'no-repeat',
    paddingBottom:'20px'
}
const bgStyleTwo = {
    backgroundImage: 'url(https://assets.quillbot.com/images/theme/light/premiumPage/bottomBg.svg)',
    backgroundSize: '100%',
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
    pb: 4
}

export default () => {
    return (
        // sx={{ mx: 6.25 }}
        <Grid container style={{textAlign: "center"}}>
        {/* Premium Button Section */}
            <Grid container>
                <Grid item xs='12' justify="center">
                    <Typography sx={{fontSize:'30px', mt:5, mb:3}}>Save time and write with confidence</Typography>
                </Grid>
                <Grid item  xs='12'>
                    <a href='https://quillbot.com/upgrade?referrer=premiumPage' style={{textDecoration:'none'}}>
                        <Button variant="contained" sx={{borderRadius:'20px', textTransform:'none', fontWeight:'600', mb:10, minHeight:'44px', px:3, fontSize:'17px'}}>Upgrade to QuillBot Premium</Button>
                    </a>
                </Grid>
            </Grid>
        {/* Image Autoplay Section */}
            <Grid container sx={bgstyleOne}>
                <Grid item xs='12' sm='6' md='6'>
                    <ImageAutoplay/>
                </Grid>
                <Grid item xs='12' sm='6' md='6'>
                    <ImageAutoplayContent/>         
                </Grid>
            </Grid>
        {/* Table Comparison Section */}
            <Grid container>
                <Grid item xs='12'>
                    <Typography sx={{fontSize:'30px', mt:8, mb:3}}>Experience the full power of QuillBot </Typography>
                </Grid>
                <Grid item xs='12' sm={12} md={12} lg={12}>
                    <ComparisonTable/>
                </Grid>
            </Grid>
        {/* Circular Analysis Section */}
            <Grid container sx={bgStyleTwo}>
                <Grid item xs='12'>
                    <Typography variant="h1" sx={{fontWeight:'400', fontSize:'26px', mt:15, mb:2}}>Write better, faster, and clearer instantly</Typography>
                    <Typography sx={{fontWeight:'400', fontSize:'16px', m:'auto', maxWidth:'470px',mb: 8}}>QuillBot is trusted by students, professional writers, and business people who want to write more effectively.</Typography>
                </Grid>
                <Grid item  xs='12'>
                    <CircularAnalysis/>
                </Grid>
                <Grid item  xs='12'>
                    <Button variant='contained' sx={{
                        alignItems: 'center',
                        m: 2,
                        px: 3,
                        borderRadius: '50px',
                        minHeight: '44px',
                        textTransform:'capitalize',
                        fontWeight: '600',
                        fontSize: '17px'
                    }}>Upgrade to Premium</Button>
                </Grid>
            </Grid>
        </Grid>
      
    );
}


 