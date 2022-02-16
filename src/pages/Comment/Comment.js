import React from 'react';
import HeaderComment from '../../components/comments/HeaderComment';
import CommentBody from '../../components/comments/CommentBody';
import { Container } from '@mui/material';

const Comment = () => {
  return (
    <>
      <Container maxWidth='sm'>
        <HeaderComment />
        <CommentBody />
      </Container>
    </>
  );
};

export default Comment;
