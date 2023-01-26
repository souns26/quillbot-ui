
import Grid from '@mui/material/Grid';
import Logo from '../logo.svg';
import { Button, IconButton, Toolbar, Typography, SvgIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
function Header() {
  return (
    <div className="App">
      <Grid container spacing={2} sx={{maxHeight:'60px', borderBottom:'1px solid', color:'#DEE1E3', boxShadow:'0px 4px 22px 0px #0000000a'}}>
        <Grid item xs={6} sm={4} md={4} sx={{maxHeight:'60px', display:'flex'}}>
            <IconButton sx={{padding:'12px'}}>
                <MenuIcon/>
            </IconButton>
           <img src={Logo} alt='logo'></img>
        </Grid>
        <Grid item xs={6} sm={4} md={4} sx={{maxHeight:'60px'}}>
            <Toolbar sx={{maxHeight:'60px', minHeight:'42px !important', justifyContent:'center'}}>
                <Typography sx={{color:'#252525', fontWeight:'700', fontSize:{xs:'14px', sm:'16px', md:'16px'}}}>
                    Quillbot Premium
                </Typography>
            </Toolbar>
        </Grid>
        <Grid item xs={4} sm={4} md={4} sx={{maxHeight:'60px', display:{xs:'none',sm:'block'}}}>
            <Toolbar sx={{maxHeight:'60px', minHeight:'42px !important', justifyContent:'flex-end'}}>
                <Button sx={{marginLeft:'10px', width:'32px', height:'32px', minWidth:'32px', padding:'0', borderRadius:'50%', background:'#f1f1f1'}}>
                    <img src='https://assets.quillbot.com/images/American.svg' style={{width:'30px', height:'30px', borderRadius:'50%'}}></img>
                </Button>
                <Button sx={{marginLeft:'10px', width:'32px', height:'32px', minWidth:'32px', padding:'0', borderRadius:'50%', background:'#f1f1f1'}}>
                    <SvgIcon sx={{transform:'rotate(150deg)',fontSize:'18px'}}>
                        <path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z" color='#5F6368'></path>
                    </SvgIcon>
                </Button>
                <Button sx={{marginLeft:'10px', width:'32px', height:'32px', minWidth:'32px', padding:'0', borderRadius:'50%', background:'#f1f1f1'}}>
                    <SvgIcon>
                        <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path>
                    </SvgIcon>
                </Button>
            </Toolbar>
        </Grid>
    </Grid>
    </div>
  );
}

export default Header;
