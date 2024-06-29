import { Box, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import BlogContainer from '../components/BlogContainer'
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { useNavigate } from 'react-router-dom';

function Blogs() {

    const [postLists, setPostList] = React.useState([]);
    const postsCollectionRef = collection(db, "posts");
  
  
    const deletePost = async (id) => {
      const postDoc = doc(db, "posts", id);
      await deleteDoc(postDoc);
    };
  
    useEffect(() => {
      const getPosts = async () => {
        const data = await getDocs(postsCollectionRef);
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
    
      getPosts();
    }, [deletePost]); // deletePost added to dependency arr
    
        
    let navigate = useNavigate();
  
    const handleGridItemClick = (postId) => {
      // Navigate to the BlogPage.js page with the postId parameter
      //navigateToBlogPage(postId);
      navigate('/blog', { state: postId });
    };
  
  
    
  return (
    <div style={{marginTop:'2rem'}}>
        {/* <h4 style={{backgroundColor:'black', padding:'2px', width:'30%', fontSize:'26px', marginBottom:'2rem'}}>OTHER BLOGS</h4> */}
        <h4 id="animated-heading">OTHER BLOGS</h4>

        <Box sx={{ flexGrow: 1 }} id="animated-box">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {/* {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={6}  key={index}>
               <BlogContainer
                            imageUrl="https://people.com/thmb/BE1G4CQ1uE1hF_w74a0n8mZutec=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1179x637:1181x639)/sydney-sweeney-2000-c4151ee928394b28b81ecd63f86c8a84.jpg"
                            category="Sydney Sweeney"
                            title="Sydney Sweeney talk about her new film - Madam Web"
                        />  
          </Grid>
        ))} */}

        {postLists.map((post) => {
          return(
            <Grid item xs={6}  key={post} onClick={() => handleGridItemClick(post)}>
               <BlogContainer
                            imageUrl={post.img}
                            category={post.category}
                            title={post.title}
                        />  
          </Grid>
          )
        })}
      </Grid>
    </Box>

    </div>
  )
}

export default Blogs