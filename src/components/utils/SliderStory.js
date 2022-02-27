import React from 'react';
import { Avatar, Card } from '@mui/material';
import { Link } from 'react-router-dom';
import user1 from '../../images/profiles/pro1.jpg';
import user2 from '../../images/profiles/pro2.jpg';
import user3 from '../../images/profiles/pro3.jpg';
import '../../styles/home/sliderStory.css';

const SliderStory = () => {
  return (
    <>
      <Card sx={{ width: '390px' }}>
        <div className='container-story'>
          <ul>
            <li>
              <div className='outer-layer'>
                <Link to='/story'>
                  <Avatar sx={{ width: 50, height: 50 }} src={user1} />
                </Link>
                {/* <button className='btn-add-story'>+</button> */}
                <div className='username'>Your story</div>
              </div>
            </li>

            <li>
              <div className='outer-layer'>
                <Link to=''>
                  <Avatar sx={{ width: 50, height: 50 }} src={user2} />
                </Link>
                <div className='username-f'>username1</div>
              </div>
            </li>

            <li>
              <div className='outer-layer'>
                <Link to='/story'>
                  <Avatar sx={{ width: 50, height: 50 }} src={user3} />
                </Link>
                <div className='username-f'>username2</div>
              </div>
            </li>

            <li>
              <div className='outer-layer'>
                <Link to='/story'>
                  <Avatar sx={{ width: 50, height: 50 }} />
                </Link>
                <div className='username-f'>username3</div>
              </div>
            </li>
            <li>
              <div className='outer-layer'>
                <Link to='story'>
                  <Avatar sx={{ width: 50, height: 50 }} />
                </Link>
                <div className='username-f'>username4</div>
              </div>
            </li>
          </ul>
        </div>
      </Card>
    </>
  );
};

export default SliderStory;
