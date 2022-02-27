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
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import axios from '../../../config/axios';
import { AuthContext } from '../../../context/AuthContext';
import { updateProfile } from '../../../apis/user';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const UserOwnerSlideDialog = ({ open, handleCloseDialog }) => {
  const { user } = useContext(AuthContext);
  console.log(user)

  const [media, setMedia] = useState('');
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);
  const [username, setUsername] = useState(user.username);
  const [publicStatus, setPublicStatus] = useState(user.publicStatus)

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

  const updateInfo = async () => {
    try {
      const res = await updateProfile(user.id);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
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
        <form>
          <DialogContent sx={{ width: '300px', height: '300px' }}>
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
                  (user && user.profilePic)
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
                  // display: `${FormData ? 'none' : 'block' }`
                  // `${FormData ? (display: 'none') : ''}`
                }}
              />
              {/* <typography sx={{ fontSize: '8px' }}>Change profile photo</typography> */}
            </Box>
            <DialogContentText id='alert-dialog-slide-description'>
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
                  ></input>
                </ListItem>
                <ListItem sx={{ color: 'black' }}>
                  <label>Bio</label>
                  <input
                    type='text'
                    style={{
                      marginLeft: '55px',
                      border: 'none',
                      borderBottom: '1px solid gray',
                    }}
                  ></input>
                </ListItem>
                <ListItem sx={{ color: 'black' }}>
                  <label>Privacy</label>
                  <FormGroup sx={{ marginLeft: '15px' }}>
                    <FormControlLabel
                      control={<Switch defaultChecked color='secondary' />}
                      label='private'
                    />
                  </FormGroup>
                </ListItem>
              </Box>
            </DialogContentText>
            <DialogActions>
              <Button onClick={handleCloseDialog} sx={{ color: 'gray' }}>
                Cancle
              </Button>
              <Button onClick={handleCloseDialog} sx={{ color: '#bd6efb' }}>
                Done
              </Button>
            </DialogActions>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};

export default UserOwnerSlideDialog;
