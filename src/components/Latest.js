import React from 'react'
import BlogContainer from './BlogContainer'
import { Container, Grid, Box} from '@mui/material'

function Latest() {
  return (
    <div style={{marginTop:'2rem'}}>
        <h4 style={{backgroundColor:'black', padding:'2px', width:'30%', fontSize:'26px', marginBottom:'2rem'}}>LATEST POSTS</h4>

        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                <Grid item xs={8} md={6}>
                <div className="blog-container-main">
                    <img src={"https://blogdoiphone.com/wp-content/uploads/2024/02/Apple-Vision-Pro.jpg"} alt="Blog Post" className="blog-image" />
                    <div className="category">Tech</div>
                    <h2 className="post-title">Apple Vision Pro</h2>
                </div> 
                </Grid>      
            {/* </Grid>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
            <Grid item xs={10} md={6}>
                <Grid container rowSpacing={1}>
                    
                    <Grid item xs={14}>
                        <BlogContainer
                            imageUrl="https://people.com/thmb/BE1G4CQ1uE1hF_w74a0n8mZutec=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1179x637:1181x639)/sydney-sweeney-2000-c4151ee928394b28b81ecd63f86c8a84.jpg"
                            category="Sydney Sweeney"
                            title="Sydney Sweeney talk about her new film - Madam Web"
                        />    
                    </Grid>   
                    <Grid item xs={14}>
                        <BlogContainer
                            imageUrl="https://4.bp.blogspot.com/-9pRFHeMXCiM/WtimrKY-XSI/AAAAAAAABMI/1EiHwH96pS0GZ2ghBRQRO49jgWHhr8tKQCLcBGAs/w1200-h900-p-k-no-nu/pexels-photo-915972.jpeg"
                            category="Travel"
                            title="How to plan a vacation on a budget"
                        />    
                    </Grid>
  
            </Grid>
            </Grid>
      </Grid>

        </Box>

     
    </div>
  )
}

export default Latest