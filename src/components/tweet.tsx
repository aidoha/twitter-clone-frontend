import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import {
  Grid,
  Paper,
  Box,
  IconButton,
  Typography,
  Avatar,
} from '@material-ui/core';

import CommentIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteNotLikedIcon from '@material-ui/icons/FavoriteBorderSharp';
import ShareIcon from '@material-ui/icons/ReplyOutlined';

import { useStylesHome } from '../pages/home/style';

interface TweetProps {
  _id: string;
  text: string;
  classes: ReturnType<typeof useStylesHome>;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}

export const Tweet: React.FC<TweetProps> = ({
  classes,
  text,
  user,
  _id,
}: TweetProps): React.ReactElement => {
  return (
    <Link to={`/home/tweet/${_id}`} className={classes.tweetWrapper}>
      <Paper
        variant='outlined'
        className={classNames(classes.tweet, classes.tweetsHeader)}
      >
        <Grid container spacing={3}>
          <Grid item xs={2} lg={1}>
            <Avatar
              alt={`Аватар пользователя ${user?.fullname}`}
              src={user?.avatarUrl}
            />
          </Grid>
          <Grid item xs={10} lg={11}>
            <Box display='flex' alignItems='center'>
              <Box fontWeight='bold'>{user?.fullname}</Box>&nbsp;
              <Box color='gray'>@{user?.username}</Box>&nbsp;
              <Box color='gray'>·</Box>&nbsp;
              <Box color='gray'>13 сент.</Box>
            </Box>
            <Typography variant='body1' gutterBottom>
              {text}
            </Typography>
            <Grid item lg={10} xs={10}>
              <Box
                display='flex'
                justifyContent='space-between'
                position='relative'
                left={-12}
              >
                <Box display='flex' alignItems='center'>
                  <IconButton>
                    <CommentIcon style={{ fontSize: 20 }} />
                  </IconButton>
                  <span>1</span>
                </Box>
                <Box display='flex' alignItems='center'>
                  <IconButton>
                    <RepostIcon style={{ fontSize: 20 }} />
                  </IconButton>
                  <span>1</span>
                </Box>
                <Box display='flex' alignItems='center'>
                  <IconButton>
                    <FavoriteNotLikedIcon style={{ fontSize: 20 }} />
                  </IconButton>
                  <span>1</span>
                </Box>
                <Box display='flex' alignItems='center'>
                  <IconButton>
                    <ShareIcon style={{ fontSize: 20 }} />
                  </IconButton>
                  <span>1</span>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Link>
  );
};
