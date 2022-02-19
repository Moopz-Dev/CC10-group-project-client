import React from "react";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import user1 from '../../images/profiles/pro1.jpg'
import user2 from '../../images/profiles/pro2.jpg'
import user3 from '../../images/profiles/pro3.jpg'
import '../../styles/home/sliderStory.css';

const SliderStory = () => {
  return (
    <>
    <div className="container-story">
        <ul>
          <li>
            <div className="outer-layer">
              <Link to='/story'>
                <Avatar sx={{ width: 55, height: 55 }} src={user1} />
              </Link>
              <button className="btn-add-story">+</button>
              <div className="username">
                Your story
              </div>
            </div>
          </li>

          <li>
          <div className="outer-layer">
              <Link to=''>
                <Avatar sx={{ width: 55, height: 55 }} src={user2} />
              </Link>
              <div className="username-f">
                username1
              </div>
            </div>
          </li>

          <li>
          <div className="outer-layer">
              <Link to=''>
                <Avatar sx={{ width: 55, height: 55 }} src={user3} />
              </Link>
              <div className="username-f">
                username2
              </div>
            </div>
          </li>

          <li>
          <div className="outer-layer">
              <Link to=''>
                <Avatar sx={{ width: 55, height: 55 }} />
              </Link>
              <div className="username-f">
                username3
              </div>
            </div>
          </li>
          <li>
          <div className="outer-layer">
              <Link to=''>
                <Avatar sx={{ width: 55, height: 55 }} />
              </Link>
              <div className="username-f">
                username4
              </div>
            </div>
          </li>

        </ul>
    </div>
    
    </>
    // <Carousel>
    //   <Box
    //     sx={{
    //       height: "10vh",
    //       padding: "40px 15px",
    //       display: "flex",
    //       alignItems: "center",
    //       gap: "35px",
    //     }}
    //   >
    //     <Box
    //       sx={{
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "center",
    //       }}
    //     >
    //       <Avatar sx={{ width: 55, height: 55 }} />
    //       <Typography>user1</Typography>
    //     </Box>
    //     <Box
    //       sx={{
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "center",
    //       }}
    //     >
    //       <Avatar sx={{ width: 55, height: 55 }} />
    //       <Typography>user2</Typography>
    //     </Box>
    //     <Box
    //       sx={{
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "center",
    //       }}
    //     >
    //       <Avatar sx={{ width: 55, height: 55 }} />
    //       <Typography>user3</Typography>
    //     </Box>
    //     <Box
    //       sx={{
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "center",
    //       }}
    //     >
    //       <Avatar sx={{ width: 55, height: 55 }} />
    //       <Typography>user4</Typography>
    //     </Box>
    //     <Box
    //       sx={{
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "center",
    //       }}
    //     >
    //       <Avatar sx={{ width: 55, height: 55 }} />
    //       <Typography>user5</Typography>
    //     </Box>
    //   </Box>
    // </Carousel>
  );
};

export default SliderStory;
