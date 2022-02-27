import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { forwardRef } from 'react';
import { Avatar, Box, ListItem } from '@mui/material';
import axios from '../../../config/axios';
import { AuthContext } from '../../../context/AuthContext';
import { updateProfile } from '../../../apis/user';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const UserOwnerSlideDialog = ({ open, handleCloseDialog }) => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const [media, setMedia] = useState('');
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);
  const [username, setUsername] = useState(user.username);
  const [publicStatus, setPublicStatus] = useState(user.publicStatus);

  console.log(publicStatus);

  const fileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMedia(file);
      // setUpload(e.target.files);

      const formData = new FormData();
      formData.append('media', e.target.files[0]);
      console.log(formData);
      axios.patch('/users/' + user.id + '/profileImg', formData).then((res) => {
        console.log(res);
      });
    }
  };

  const handleCancelMedia = () => {
    setMedia('');
    const formData = new FormData();
    axios.patch('/users/' + user.id + '/profileImg', formData).then((res) => {
      console.log(res);
    });
  };

  const updateUserInfo = async () => {
    try {
      const res = await updateProfile(
        user.id,
        name,
        bio,
        username,
        user.email,
        user.phoneNumber,
        publicStatus
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitUpdateUserInfo = (e) => {
    updateUserInfo();
    handleCloseDialog();
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle sx={{ textAlign: 'center' }}>
          {user.profilePic}
        </DialogTitle>
        <DialogContent sx={{ width: '300px', height: '350px' }}>
          <Box
            sx={{
              width: '300px',
              height: '100px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar
              sx={{ height: '70px', width: '70px' }}
              src={
                (media && URL.createObjectURL(media)) ||
                (user && user.profileImg)
              }
            />
            <button
              type='button'
              style={{
                display: `${media ? '' : 'none'}`,
                borderRadius: '50px',
                width: '25px',
                height: '25px',
                position: 'absolute',
                right: '135px',
                textAlign: 'center',
                background: 'white',
                border: '1px solid black',
              }}
              onClick={handleCancelMedia}
            >
              {' '}
              X{' '}
            </button>

            {/* input profile */}
            <input
              type='file'
              accept='image/*'
              placeholder='select video from device'
              onChange={fileUpload}
              style={{
                color: '#bd6efb',
                fontSize: '14px',
                padding: '5px',
                fontWeight: 'bold',
                display: `${FormData ? 'block' : 'none'}`,
                // `${FormData ? (display: 'none') : ''}`
              }}
            ></input>
            {/* <typography sx={{ fontSize: '8px' }}>Change profile photo</typography> */}
          </Box>
          <DialogContentText id='alert-dialog-slide-description'>
            <form onSubmit={handleSubmitUpdateUserInfo}>
              <Box sx={{ width: '100px' }}>
                <ListItem sx={{ color: 'black' }}>
                  <label>Name</label>
                  <input
                    type='text'
                    style={{
                      marginLeft: '35px',
                      border: 'none',
                      borderBottom: '1px solid gray',
                    }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </ListItem>
                <ListItem sx={{ color: 'black' }}>
                  <label>Username</label>
                  <input
                    type='text'
                    style={{
                      marginLeft: '5px',
                      border: 'none',
                      borderBottom: '1px solid gray',
                    }}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  ></input>
                </ListItem>
                <ListItem sx={{ color: 'black', width: '280px' }}>
                  <label>Bio</label>
                  <textarea
                    type='text'
                    style={{
                      marginLeft: '55px',
                      border: 'none',
                      borderBottom: '1px solid gray',
                    }}
                    cols='30'
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  ></textarea>
                </ListItem>
                <ListItem sx={{ color: 'black' }}>
                  <label>Privacy</label>
                  <input
                    type='radio'
                    checked={publicStatus === 'PRIVATE'}
                    value='PRIVATE'
                    onClick={(e) => setPublicStatus('PRIVATE')}
                  />
                  <label for='private'>Private</label>
                  <input
                    type='radio'
                    checked={publicStatus === 'PUBLIC'}
                    value='PUBLIC'
                    onClick={(e) => setPublicStatus('PUBLIC')}
                  />
                  <label for='public'>Public</label>

                  {/* <FormGroup sx={{ marginLeft: '15px' }}>
                    <FormControlLabel
                      control={<Switch  color='secondary' />}
                      label='private'
                      value={publicStatus}
                      defaultValue='PRIVATE'
                      onChange={(e) => setPublicStatus('PUBLIC')}
                    />
                  </FormGroup> */}
                </ListItem>
              </Box>
            </form>
          </DialogContentText>
          <DialogActions>
            <Button onClick={handleCloseDialog} sx={{ color: 'gray' }}>
              Cancle
            </Button>
            <Button
              onClick={handleSubmitUpdateUserInfo}
              sx={{ color: '#bd6efb' }}
            >
              Done
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserOwnerSlideDialog;
