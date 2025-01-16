import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import './tabs.css'
import { borderRadius } from '@mui/system';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function FullWidthTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        
        <Box  style={ {backgroundImage: "linear-gradient(to bottom, #CCEEFF, #00AAFF, #0088CC, #006699, #004466)",boxShadow:'0px 5px 7px white' , borderRadius:'0px 0px 30px 30px'}} sx={{  width: 1220,  }}>
            <AppBar style={{backgroundImage: "linear-gradient(to bottom, #CCEEFF, #00AAFF, #0088CC, #006699, #004466)", borderRadius:'0px 0px 30px 30px',}}  position="static">
                <Tabs 
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="UG Programs" {...a11yProps(0)} />
                    <Tab label="PG Programs" {...a11yProps(1)} />
                    <Tab label="Top Courses" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel  value={value} index={0} dir={theme.direction}>
                <h1>Under Gradute</h1>
                <div className='icontext1' >
              <VerifiedUserIcon style={{color:'yellowgreen'}}  /> <h3>BA English (Media Studies)</h3> 

               <VerifiedUserIcon style={{color:'yellowgreen'}}/><h3>BCom (Finance and Taxation)</h3>
              <VerifiedUserIcon style={{color:'yellowgreen'}}/> <h3>BSc (Biotechnology)</h3>
              <VerifiedUserIcon style={{color:'yellowgreen'}}/>  <h3>BSc Computer Science (Data Science and Analytics)</h3>
               <VerifiedUserIcon style={{color:'yellowgreen'}}/> <h3>BTTM (Aviation Management and Tour Management)</h3>
               <VerifiedUserIcon style={{color:'yellowgreen'}}/> <h3>BBA (AICTE)</h3>
               <VerifiedUserIcon style={{color:'yellowgreen'}}/> <h3>BCA (AICTE)</h3>
               <VerifiedUserIcon style={{color:'yellowgreen'}}/> <h3>B.Voc Sound Engineering (Three year)</h3>
              </div>
                
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
            <h1>Post Graduate</h1>

            <div className='icontext' >
                <div>
              <VerifiedUserIcon style={{color:'yellowgreen'}}  /> <h3>MA English </h3> 

               <VerifiedUserIcon style={{color:'yellowgreen'}}/><h3>MCom (Finance and Taxation)</h3>
              <VerifiedUserIcon style={{color:'yellowgreen'}}/> <h3>MSc (Biotechnology)</h3>
              <VerifiedUserIcon style={{color:'yellowgreen'}}/>  <h3>MSc Computer Science </h3>
               <VerifiedUserIcon style={{color:'yellowgreen'}}/> <h3>MBA (AICTE)</h3>
               <VerifiedUserIcon style={{color:'yellowgreen'}}/> <h3>MCA (AICTE)</h3>
               <VerifiedUserIcon style={{color:'yellowgreen'}}/> <h3>Msc Physics</h3>
               </div>
               <div className='sts'>
    
    <img style={{borderRadius:20, boxShadow:'0px 0px 8px white', height:'400px'} } src="https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/default/public/istock-483479827.jpg?itok=lNJYPIwF" alt="students" />
            </div>
              </div>
                
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus amet accusantium totam, blanditiis iste non illo. Non consectetur mollitia quo dicta modi cupiditate aliquam eos impedit, eius quibusdam nesciunt.

                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ad distinctio adipisci molestiae eveniet magnam ullam reprehenderit nam molestias esse, pariatur sint eum numquam ut consequuntur nemo facilis sapiente fugit accusamus eaque aliquid veritatis unde facere. Voluptates repudiandae, aspernatur voluptatum laudantium quisquam nemo fugiat et dolor provident accusantium velit impedit quas ipsum sapiente ullam fugit a debitis. Quasi aliquam aspernatur beatae. Maiores inventore odio similique dignissimos facere voluptate tenetur quasi?</h1>
            </TabPanel>

        </Box>
       
    );
}
