import Box from '@mui/material/Box'
import { Button, SvgIcon, Typography, Icon } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';

const listStyle = theme => ({
        fontSize:'1rem',
        fontFamily: "'Open Sans',sans-serif",
        fontWeight: '400',
        lineHeight: '1.5',
        color: '#252525',
        display: 'block',
    [theme.breakpoints.down('md')]: {
        fontSize: '14px !important'
    },
});

const flexStyle =  theme => ({   
    position:'relative',
    display:'flex',
    justifyContent:'center',
    margin:'auto',
    width:'100%',
    [theme.breakpoints.down('sm')]: {
    flexDirection:'column-reverse',
    alignItems:'center'
    },
});

export default () => {
  return (
    <div>
    <Box sx={flexStyle}>        
        <Box sx={{maxWidth:'438px', width:'100%', m:3, boxShadow:'0px 4px 22px 0px #00000033', borderRadius: '10px'}}>
            <Box sx={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                px: 2,
                background: '#499557',
                alignItems: 'center'
            }}>
            <Typography sx={{
                fontSize: '22px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                py:1,
                textAlign: 'left',
                color:'#fff',
                letterSpacing:'1.5px'
            }}>Free</Typography>
            </Box>
            <a href='https://quillbot.com/signup?returnUrl=/premium&referrer=premiumPage' style={{textDecoration:'none'}}>
            <Button variant='contained' sx={{
                alignItems: 'center',
                width: '90%',
                m: 2,
                borderRadius: '20px',
                minHeight: '44px',
                textTransform:'capitalize',
                fontWeight: '600',
                fontSize: '17px'
            }}>Sign Up - It's Free</Button>
            </a>
            <List sx={{p:0}}>
                <ListItem sx={{borderBottomWidth:'1px', borderBottomStyle:'solid', borderColor:'#DEE1E3', maxHeight:'45px'}}>
                    <ListItemIcon>
                        <SvgIcon>
                        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" color='#499557'></path>
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary='125 words in the Paraphraser' disableTypography sx={listStyle}></ListItemText>
                </ListItem>
                <ListItem sx={{borderBottomWidth:'1px', borderBottomStyle:'solid', borderColor:'#DEE1E3', maxHeight:'45px'}}>
                    <ListItemIcon>
                        <SvgIcon>
                        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" color='#499557'></path>
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary='Standard and Fluency modes' disableTypography sx={listStyle}></ListItemText>
                </ListItem>
                <ListItem sx={{borderBottomWidth:'1px', borderBottomStyle:'solid', borderColor:'#DEE1E3', maxHeight:'45px'}}>
                    <ListItemIcon>
                        <SvgIcon>
                        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" color='#499557'></path>
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary='125 words in the Paraphraser' disableTypography sx={listStyle}></ListItemText>
                </ListItem>
                <ListItem sx={{borderBottomWidth:'1px', borderBottomStyle:'solid', borderColor:'#DEE1E3', maxHeight:'45px'}}>
                    <ListItemIcon>
                        <SvgIcon>
                        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" color='#499557'></path>
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary='3 synonym options' disableTypography sx={listStyle}></ListItemText>
                </ListItem>
                <ListItem sx={{borderBottomWidth:'1px', borderBottomStyle:'solid', borderColor:'#DEE1E3', maxHeight:'45px'}}>
                    <ListItemIcon>
                        <SvgIcon>
                        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" color='#499557'></path>
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary='1 Freeze word or phrase' disableTypography sx={listStyle}></ListItemText>
                </ListItem>
                <ListItem sx={{borderBottomWidth:'1px', borderBottomStyle:'solid', borderColor:'#DEE1E3', maxHeight:'45px'}}>
                    <ListItemIcon>
                        <SvgIcon>
                        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" color='#499557'></path>
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary='1200 words in the Summarizer' disableTypography sx={listStyle}></ListItemText>
                </ListItem>
                <ListItem sx={{borderBottomWidth:'1px', borderBottomStyle:'solid', borderColor:'#DEE1E3', maxHeight:'45px'}}>
                    <ListItemIcon>
                        <SvgIcon>
                        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" color='#FB3F4B'></path>
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary='Faster processing speed' disableTypography sx={listStyle}></ListItemText>
                </ListItem>
                <ListItem sx={{borderBottomWidth:'1px', borderBottomStyle:'solid', borderColor:'#DEE1E3', maxHeight:'45px'}}>
                    <ListItemIcon>
                        <SvgIcon>
                        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" color='#FB3F4B'></path>
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary='Advanced grammar rewrites' disableTypography sx={listStyle}></ListItemText>
                </ListItem>
                <ListItem sx={{borderBottomWidth:'1px', borderBottomStyle:'solid', borderColor:'#DEE1E3', maxHeight:'45px'}}>
                    <ListItemIcon>
                        <SvgIcon>
                        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" color='#FB3F4B'></path>
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary='Compare Modes (Desktop only)' disableTypography sx={listStyle}></ListItemText>
                </ListItem>
                <ListItem sx={{borderBottomWidth:'1px', borderBottomStyle:'solid', borderColor:'#DEE1E3', maxHeight:'45px'}}>
                    <ListItemIcon>
                        <SvgIcon>
                        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" color='#FB3F4B'></path>
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary='Plagiarism Checker*' disableTypography sx={listStyle}></ListItemText>
                </ListItem>
                <ListItem sx={{borderBottomWidth:'1px', borderBottomStyle:'solid', borderColor:'#DEE1E3', maxHeight:'45px'}}>
                    <ListItemIcon>
                        <SvgIcon>
                        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" color='#FB3F4B'></path>
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary='Tone detection' disableTypography sx={listStyle}></ListItemText>
                </ListItem>
            </List>
            <Box sx={{
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                px: 2,
                background: '#EEEEEE',
                alignItems: 'center'
            }}>
            <Typography sx={{
                fontSize: '15px',
                fontWeight: '600',
                textTransform: 'capitalize',
                py:2
            }}>No Credit Card Required</Typography>
            </Box>
        </Box>       
        <Box sx={{maxWidth:'438px', width:'100%', m:3, boxShadow:'0px 4px 22px 0px #00000033', borderRadius: '10px'}}>
            <Box sx={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                px: 2,
                background: '#DC9E00',
                alignItems: 'center',
                display:'flex'
            }}>
            <Icon sx={{marginRight:'5px'}}>
                <DiamondOutlinedIcon style={{ color: "white" }}/>
            </Icon>
            <Typography sx={{
                fontSize: '22px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                py:1,
                textAlign: 'left',
                color:'#fff',
                letterSpacing:'1.5px'
            }}>Premium</Typography>
            </Box>
            <a href='https://quillbot.com/upgrade?referrer=premiumPage' style={{textDecoration:'none'}}>
            <Button variant='contained' color='secondary' sx={{
                alignItems: 'center',
                width: '90%',
                m: 2,
                borderRadius: '20px',
                minHeight: '44px',
                textTransform:'none',
                fontWeight: '600',
                fontSize: '17px',
                color: '#fff'
            }}>Upgrade to Premium</Button>
            </a>
            <List sx={{p:0}}>
                <ListItem sx={{borderBottomWidth:'1px', borderBottomStyle:'solid', borderColor:'#DEE1E3', maxHeight:'45px'}}>
                    <ListItemIcon>
                        <SvgIcon>
                        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" color='#DC9E00'></path>
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary='125 words in the Paraphraser' disableTypography sx={listStyle}></ListItemText>
                    <ListItemIcon sx={{minWidth: 'auto'}}>
                        <SvgIcon>
                        <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" color='#C2C2C2'></path>
                        </SvgIcon>
                    </ListItemIcon>
                </ListItem>
                <ListItem sx={{borderBottomWidth:'1px', borderBottomStyle:'solid', borderColor:'#DEE1E3', maxHeight:'45px'}}>
                    <ListItemIcon>
                        <SvgIcon>
                        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" color='#DC9E00'></path>
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary='Standard and Fluency modes' disableTypography sx={listStyle}></ListItemText>
                    <ListItemIcon sx={{minWidth: 'auto'}}>
                        <SvgIcon>
                        <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" color='#C2C2C2'></path>
                        </SvgIcon>
                    </ListItemIcon>
                </ListItem>
                <ListItem sx={{borderBottomWidth:'1px', borderBottomStyle:'solid', borderColor:'#DEE1E3', maxHeight:'45px'}}>
                    <ListItemIcon>
                        <SvgIcon>
                        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" color='#DC9E00'></path>
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary='125 words in the Paraphraser' disableTypography sx={listStyle}></ListItemText>
                    <ListItemIcon sx={{minWidth: 'auto'}}>
                        <SvgIcon>
                        <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" color='#C2C2C2'></path>
                        </SvgIcon>
                    </ListItemIcon>
                </ListItem>
                <ListItem sx={{borderBottomWidth:'1px', borderBottomStyle:'solid', borderColor:'#DEE1E3', maxHeight:'45px'}}>
                    <ListItemIcon>
                        <SvgIcon>
                        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" color='#DC9E00'></path>
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary='3 synonym options' disableTypography sx={listStyle}></ListItemText>
                    <ListItemIcon sx={{minWidth: 'auto'}}>
                        <SvgIcon>
                        <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" color='#C2C2C2'></path>
                        </SvgIcon>
                    </ListItemIcon>
                </ListItem>
                <ListItem sx={{borderBottomWidth:'1px', borderBottomStyle:'solid', borderColor:'#DEE1E3', maxHeight:'45px'}}>
                    <ListItemIcon>
                        <SvgIcon>
                        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" color='#DC9E00'></path>
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary='1 Freeze word or phrase' disableTypography sx={listStyle}></ListItemText>
                    <ListItemIcon sx={{minWidth: 'auto'}}>
                        <SvgIcon>
                        <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" color='#C2C2C2'></path>
                        </SvgIcon>
                    </ListItemIcon>
                </ListItem>
                <ListItem sx={{borderBottomWidth:'1px', borderBottomStyle:'solid', borderColor:'#DEE1E3', maxHeight:'45px'}}>
                    <ListItemIcon>
                        <SvgIcon>
                        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" color='#DC9E00'></path>
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary='1200 words in the Summarizer' disableTypography sx={listStyle}></ListItemText>
                    <ListItemIcon sx={{minWidth: 'auto'}}>
                        <SvgIcon>
                        <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" color='#C2C2C2'></path>
                        </SvgIcon>
                    </ListItemIcon>
                </ListItem>
                <ListItem sx={{borderBottomWidth:'1px', borderBottomStyle:'solid', borderColor:'#DEE1E3', maxHeight:'45px'}}>
                    <ListItemIcon>
                        <SvgIcon>
                        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" color='#DC9E00'></path>
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary='Faster processing speed' disableTypography sx={listStyle}></ListItemText>
                    <ListItemIcon sx={{minWidth: 'auto'}}>
                        <SvgIcon>
                        <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" color='#C2C2C2'></path>
                        </SvgIcon>
                    </ListItemIcon>
                </ListItem>
                <ListItem sx={{borderBottomWidth:'1px', borderBottomStyle:'solid', borderColor:'#DEE1E3', maxHeight:'45px'}}>
                    <ListItemIcon>
                        <SvgIcon>
                        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" color='#DC9E00'></path>
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary='Advanced grammar rewrites' disableTypography sx={listStyle}></ListItemText>
                    <ListItemIcon sx={{minWidth: 'auto'}}>
                        <SvgIcon>
                        <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" color='#C2C2C2'></path>
                        </SvgIcon>
                    </ListItemIcon>
                </ListItem>
                <ListItem sx={{borderBottomWidth:'1px', borderBottomStyle:'solid', borderColor:'#DEE1E3', maxHeight:'45px'}}>
                    <ListItemIcon>
                        <SvgIcon>
                        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" color='#DC9E00'></path>
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary='Compare Modes (Desktop only)' disableTypography sx={listStyle}></ListItemText>
                    <ListItemIcon sx={{minWidth: 'auto'}}>
                        <SvgIcon>
                        <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" color='#C2C2C2'></path>
                        </SvgIcon>
                    </ListItemIcon>
                </ListItem>
                <ListItem sx={{borderBottomWidth:'1px', borderBottomStyle:'solid', borderColor:'#DEE1E3', maxHeight:'45px'}}>
                    <ListItemIcon>
                        <SvgIcon>
                        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" color='#DC9E00'></path>
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary='Plagiarism Checker*' disableTypography sx={listStyle}></ListItemText>
                    <ListItemIcon sx={{minWidth: 'auto'}}>
                        <SvgIcon>
                        <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" color='#C2C2C2'></path>
                        </SvgIcon>
                    </ListItemIcon>
                </ListItem>
                <ListItem sx={{borderBottomWidth:'1px', borderBottomStyle:'solid', borderColor:'#DEE1E3', maxHeight:'45px'}}>
                    <ListItemIcon>
                        <SvgIcon>
                        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" color='#DC9E00'></path>
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary='Tone detection' disableTypography sx={listStyle}></ListItemText>
                    <ListItemIcon sx={{minWidth: 'auto'}}>
                        <SvgIcon>
                        <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" color='#C2C2C2'></path>
                        </SvgIcon>
                    </ListItemIcon>
                </ListItem>
            </List>
            <Box sx={{
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                px: 2,
                background: '#EEEEEE',
                alignItems: 'center'
            }}>
            <Typography sx={{
                fontSize: '15px',
                fontWeight: '600',
                textTransform: 'capitalize',
                py:2
            }}>3-Day Money-Back Guarantee</Typography>
            </Box>
        </Box>        
    </Box>
    <div style={{width:'100%', textAlign:'center'}}>*Scan up to 20 pages a month</div>
    </div>
  );
};