import React from 'react';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import '../../../styles/user/standardImageList.css';
import GridOnIcon from '@mui/icons-material/GridOn';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

const StandardImageList = () => {
  const handleSwitchTab = (evt, tab_id) => {
    let i, tabContent, tabMenu;
    tabContent = document.getElementsByClassName("tabs-content-item");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabMenu = document.getElementsByClassName("tab-item");
    for (i = 0; i < tabMenu.length; i++) {
        tabMenu[i].className = tabMenu[i].className.replace(" active", "");
    }
    document.getElementById(tab_id).style.display = "block";
    evt.currentTarget.className += " active";
  }

  return (
    <>
      <div class='tabs'>
        <div onClick={e => handleSwitchTab(e, 'tb_1')} className='tab-item active'>
          <GridOnIcon />
        </div>
        <div onClick={e => handleSwitchTab(e, 'tb_2')} className='tab-item'>
          <VideoLibraryIcon /> 
        </div>
      </div>

      <div className='tabs-content'>
        <div id='tb_1' className='tabs-content-item'>
          <div className='gallary-grid'>
            <div className='grid-img'>
              <div className='grid-img-icon'>
                <span>
                  <FavoriteOutlinedIcon /> 12
                </span>
                <span>
                  <ChatBubbleOutlinedIcon /> 5
                </span>
              </div>
              <img
                src='https://images.unsplash.com/photo-1516802273409-68526ee1bdd6'
                alt=''
              ></img>
            </div>

            <div className='grid-img'>
              <div className='grid-img-icon'>
                <span>
                  <FavoriteOutlinedIcon /> 12
                </span>
                <span>
                  <ChatBubbleOutlinedIcon /> 5
                </span>
              </div>
              <img src='https://picsum.photos/200/300?grayscale' alt=''></img>
            </div>

            <div className='grid-img'>
              <div className='grid-img-icon'>
                <span>
                  <FavoriteOutlinedIcon /> 12
                </span>
                <span>
                  <ChatBubbleOutlinedIcon /> 5
                </span>
              </div>
              <img
                src='https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
                alt=''
              ></img>
            </div>

            <div className='grid-img'>
              <div className='grid-img-icon'>
                <span>
                  <FavoriteOutlinedIcon /> 12
                </span>
                <span>
                  <ChatBubbleOutlinedIcon /> 5
                </span>
              </div>
              <img src='https://picsum.photos/200/300?grayscale' alt=''></img>
            </div>

            <div className='grid-img'>
              <div className='grid-img-icon'>
                <span>
                  <FavoriteOutlinedIcon /> 12
                </span>
                <span>
                  <ChatBubbleOutlinedIcon /> 5
                </span>
              </div>
              <img
                src='https://images.unsplash.com/photo-1558642452-9d2a7deb7f62'
                alt=''
              ></img>
            </div>

            <div className='grid-img'>
              <div className='grid-img-icon'>
                <span>
                  <FavoriteOutlinedIcon /> 12
                </span>
                <span>
                  <ChatBubbleOutlinedIcon /> 5
                </span>
              </div>
              <img
                src='https://images.unsplash.com/photo-1522770179533-24471fcdba45'
                alt=''
              ></img>
            </div>

            <div className='grid-img'>
              <div className='grid-img-icon'>
                <span>
                  <FavoriteOutlinedIcon /> 12
                </span>
                <span>
                  <ChatBubbleOutlinedIcon /> 5
                </span>
              </div>
              <img src='https://picsum.photos/200/300?grayscale' alt=''></img>
            </div>

            <div className='grid-img'>
              <div className='grid-img-icon'>
                <span>
                  <FavoriteOutlinedIcon /> 12
                </span>
                <span>
                  <ChatBubbleOutlinedIcon /> 5
                </span>
              </div>
              <img
                src='https://images.unsplash.com/photo-1551782450-a2132b4ba21d'
                alt=''
              ></img>
            </div>
            <div className='grid-img'>
              <div className='grid-img-icon'>
                <span>
                  <FavoriteOutlinedIcon /> 12
                </span>
                <span>
                  <ChatBubbleOutlinedIcon /> 5
                </span>
              </div>
              <img
                src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
                alt=''
              ></img>
            </div>
          </div>
        </div>

        <div id='tb_2' class='tabs-content-item tb_2'>
          no video content
        </div>
      </div>
    </>
  );
};
export default StandardImageList;

