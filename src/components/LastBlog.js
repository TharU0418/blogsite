import React, { useEffect, useRef, useState } from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BlogContainer from './BlogContainer';
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { useNavigate } from 'react-router-dom';


function LastBlog() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

      const [postLists, setPostList] = React.useState([]);
  const postsCollectionRef = collection(db, "posts");


  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      // setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setPostList(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp.toDate() // Convert Firestore timestamp to JavaScript Date object
        }))
      )
    };
  
    getPosts();
  }, [deletePost]); // deletePost added to dependency arr

  console.log(postLists)
  
      
  let navigate = useNavigate();

  const handleGridItemClick = (postId) => {
    // Navigate to the BlogPage.js page with the postId parameter
    //navigateToBlogPage(postId);
    navigate('/blog', { state: postId });
  };

  
  const navigateToBlogPage = (postId) => {
    // Navigate to the BlogPage component with the postId parameter
    navigate('/blog', { postId });
  };

  // Define styles for the h4 element
const h4Styles = {
  backgroundColor: 'black',
  padding: '2px',
  width: '30%',
  fontSize: '26px',
  marginBottom: '2rem',
  animation: 'flipHorizontalTop 0.5s ease', // Apply the animation
};



const ref = React.useRef();

window.addEventListener('scroll', function() {
  var heading = document.getElementById('animated-heading');
  var bounding = heading.getBoundingClientRect();
  var heading1 = document.getElementById('animated-box');
  var bounding1 = heading.getBoundingClientRect();
  

  if (
    bounding.top >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  ) {
    heading.classList.add('flip-in');
    heading.classList.remove('flip-out');
  } else {
    heading.classList.add('flip-out');
    heading.classList.remove('flip-in');
  }

  if (
    bounding1.top >= 0 &&
    bounding1.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  ) {
    heading1.classList.add('slide-in');
    //heading1.classList.remove('slide-out');
  } else {
    //heading1.classList.add('slide-out');
    heading1.classList.remove('slide-in');
  }
});

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

export default LastBlog