import React from 'react'
import './footer.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
  }));

function Footer() {
  return (
    <div className='footer__main'>
        <footer>
         <Grid className='footer__grid' container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
                <Item className='footer__contact' style={{boxShadow:'none', background:'none', color:"white"}}>
                    <div className='footer__contact__logo'>
                    <LocationOnIcon sx={{ color:"red", height:"100%" }} /> 
                    </div>
                    <div  className='footer__contact__text'>
                        <b> Find us</b>
                        <p>City Vista, Kharadi, Pune Maharashtra 413304</p>
                    </div>
                </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <Item className='footer__contact' style={{boxShadow:'none' , background:'none', color:"white"}}>
                    <div className='footer__contact__logo' >
                    <CallIcon sx={{ color:"red", height:"100%" }} /> 
                    </div>
                    <div  className='footer__contact__text'>
                        <b> Call us</b>
                        <p>+91 9172912622</p>
                    </div>
                </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <Item className='footer__contact' style={{boxShadow:'none', background:'none', color:"white"}}>
                    <div className='footer__contact__logo'>
                    <EmailOutlinedIcon sx={{ color:"red", height:"100%" }} /> 
                    </div>
                    <div  className='footer__contact__text'>
                        <b> Mail us</b>
                        <p>contact@careerphoenix.in</p>
                    </div>
                </Item>
            </Grid>
      </Grid>
        </footer>

        <footer>
        <Grid container spacing={1}>
            <Grid item xs={12} md={6} lg={4}>
                <Item className='footer__contact' style={{boxShadow:'none', background:'none', color:"white"}}>
                   <div className="column1">
                    <h2>REDPHANTOM</h2>
                    <p>Lets Fly High</p>
                    <b>Follow Us:</b>
                    <p className='icons'><LinkedInIcon/> <TwitterIcon/> <FacebookIcon/> <InstagramIcon/> <YouTubeIcon/></p>
                   </div>
                </Item>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
                <Item className='footer__contact' style={{boxShadow:'none', background:'none', color:"white"}}>
                   <div className="column2">
                    <h2>Useful Links</h2>
                    <div className='links__wrap'>
                    <div className="left_links">
                        <a href="https://careerphoenix.in/index.php">Career Phoenix</a>
                        <a href="https://careerphoenix.in/youth.php">Youth</a>
                        <a href="https://careerphoenix.in/research_pgm.php">R & D</a>
                        <a href="https://careerphoenix.in/internship.php">Internship</a>
                    </div>
                    <div className="right_links">
                        <a href="https://careerphoenix.in/index.php">Career Phoenix</a>
                        <a href="https://careerphoenix.in/youth.php">Youth</a>
                        <a href="https://careerphoenix.in/research_pgm.php">R & D</a>
                        <a href="https://careerphoenix.in/internship.php">Internship</a>
                    </div>
                    </div>
                   </div>
                </Item>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
                <Item className='footer__contact' style={{boxShadow:'none', background:'none', color:"white"}}>
                   <div className="column3">
                    <h2>Subscribe</h2>
                    <p>Dont miss to subscribe to our news feed, kindly fill the form below</p>
                    <form>
                        <input type="text" placeholder='Email address'/>
                        <button><SendOutlinedIcon style={{color:'white', height:"1.5rem", padding:"2px 10px 2px 10px"}}/></button>
                    </form>
                   </div>
                </Item>
            </Grid>
        </Grid>
        </footer>
    </div>
  )
}

export default Footer