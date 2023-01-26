import { Typography } from '@mui/material';
import Box from '@mui/material/Box'

export default () => {
    return (
        <Box sx={{mx:5, textAlign:'left'}}>
            <Box sx={{mb:3}}>
                <Typography variant='h3' sx={{fontWeight:'bold',fontSize:'18px', color:'#499557'}}>Increase your productivity</Typography>
                <Typography sx={{fontSize:'1rem', color:'#505050', my:1}}>Paraphrase more text at once to finish writing faster.</Typography>
                <div style={{width:'100%', position:'relative', height:'3px', backgroundColor:'rgb(222, 225, 227)', margin:'8px 0'}}></div>
            </Box>
            <Box sx={{mb:3}}>
                <Typography variant='h3' sx={{fontWeight:'bold',fontSize:'18px', color:'#499557'}}>Access all modes</Typography>
                <Typography sx={{fontSize:'1rem', color:'#505050', my:1}}>Get maximum control over how you paraphrase.</Typography>
                <div style={{width:'100%', position:'relative', height:'3px', backgroundColor:'rgb(222, 225, 227)', margin:'8px 0'}}></div>
                <div></div>
            </Box>
            <Box sx={{mb:3}}>
                <Typography variant='h3' sx={{fontWeight:'bold',fontSize:'18px', color:'#499557'}}>Scan for plagiarism</Typography>
                <Typography sx={{fontSize:'1rem', color:'#505050', my:1}}>Unlock the Plagiarism Checker to guarantee all sources are cited and nothing is unintentionally plagiarized.</Typography>
                <div style={{width:'100%', position:'relative', height:'3px', backgroundColor:'rgb(222, 225, 227)', margin:'8px 0'}}></div>
                <div></div>
            </Box>
            <Box sx={{mb:3}}>
                <Typography variant='h3' sx={{fontWeight:'bold',fontSize:'18px', color:'#499557'}}>Compare all mode outputs at once</Typography>
                <Typography sx={{fontSize:'1rem', color:'#505050', my:1}}>Paraphrase in and compare outputs from all seven modes.</Typography>
                <div style={{width:'100%', position:'relative', height:'3px', backgroundColor:'rgb(222, 225, 227)', margin:'8px 0'}}></div>
                <div></div>
            </Box>  
        </Box>
    )
};