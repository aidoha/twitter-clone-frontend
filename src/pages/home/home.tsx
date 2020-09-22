import React from 'react';
import {
  Grid,
  Paper,
  Hidden,
  Box,
  Container,
  IconButton,
  Typography,
  TextField,
  withStyles,
  createStyles,
  InputBase,
  Avatar,
} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/HomeRounded';
import SearchIcon from '@material-ui/icons/SearchRounded';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import MailIcon from '@material-ui/icons/MailOutline';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/ListAltRounded';
import PersonIcon from '@material-ui/icons/PersonOutlineRounded';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteNotLikedIcon from '@material-ui/icons/FavoriteBorderSharp';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import { useStylesHome } from './style';

const SearchTextField = withStyles(() => {
  return createStyles({
    input: {
      borderRadius: 50,
      backgroundColor: '#E6ECF0',
      height: 45,
      padding: 0,
    },
  });
})(InputBase);

export const Home = () => {
  const classes = useStylesHome();
  return (
    <Container className={classes.wrapper} maxWidth='lg'>
      <Grid container spacing={3}>
        <Grid item xs={2} lg={3} md={2}>
          <Box padding='0' margin='0'>
            <Box display='flex' alignItems='center'>
              <IconButton color='primary' className={classes.logo}>
                <TwitterIcon className={classes.logoIcon} />
              </IconButton>
            </Box>

            <Box display='flex' alignItems='center'>
              <IconButton>
                <HomeIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Hidden mdDown>
                <Typography
                  className={classes.sideMenuListItemLabel}
                  variant='h6'
                >
                  Главная
                </Typography>
              </Hidden>
            </Box>

            <Box display='flex' alignItems='center'>
              <IconButton>
                <SearchIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Hidden mdDown>
                <Typography
                  className={classes.sideMenuListItemLabel}
                  variant='h6'
                >
                  Поиск
                </Typography>
              </Hidden>
            </Box>

            <Box display='flex' alignItems='center'>
              <IconButton>
                <NotificationsIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Hidden mdDown>
                <Typography
                  className={classes.sideMenuListItemLabel}
                  variant='h6'
                >
                  Уведомления
                </Typography>
              </Hidden>
            </Box>

            <Box display='flex' alignItems='center'>
              <IconButton>
                <MailIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Hidden mdDown>
                <Typography
                  className={classes.sideMenuListItemLabel}
                  variant='h6'
                >
                  Сообщения
                </Typography>
              </Hidden>
            </Box>

            <Box display='flex' alignItems='center'>
              <IconButton>
                <BookmarkIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Hidden mdDown>
                <Typography
                  className={classes.sideMenuListItemLabel}
                  variant='h6'
                >
                  Закладки
                </Typography>
              </Hidden>
            </Box>

            <Box display='flex' alignItems='center'>
              <IconButton>
                <ListIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Hidden mdDown>
                <Typography
                  className={classes.sideMenuListItemLabel}
                  variant='h6'
                >
                  Списки
                </Typography>
              </Hidden>
            </Box>

            <Box display='flex' alignItems='center'>
              <IconButton>
                <PersonIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Hidden mdDown>
                <Typography
                  className={classes.sideMenuListItemLabel}
                  variant='h6'
                >
                  Профиль
                </Typography>
              </Hidden>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={10} lg={6} md={6}>
          <Paper variant='outlined' className={classes.tweetsWrapper}>
            <Paper variant='outlined' className={classes.tweetsHeader}>
              <Typography variant='h6'>Главная</Typography>
            </Paper>
            <Paper variant='outlined' className={classes.tweetsHeader}>
              <Grid container spacing={3}>
                <Grid item xs={2} lg={1}>
                  <Avatar
                    alt='user avatar'
                    src='https://pbs.twimg.com/profile_images/1301947131553513473/G9gTgPfP_400x400.jpg'
                    sizes='40px'
                  />
                </Grid>
                <Grid item xs={10} lg={11}>
                  <Box display='flex' alignItems='center'>
                    <Box fontWeight='bold'>aidoha</Box>
                    <Box color='gray' marginLeft='5px'>
                      @aidoha7232
                    </Box>
                  </Box>
                  <Typography variant='body1' gutterBottom>
                    Я хочу движений Я хочу, чтобы тряслись девки, разливали
                    хэнни Всё ради движухи вокруг, ради денег
                  </Typography>
                  <Grid container justify='space-between' item lg={10}>
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
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Paper>
        </Grid>
        <Grid item lg={3} md={3}>
          <Hidden mdDown>
            <SearchTextField
              fullWidth
              placeholder='Поиск в твиттере'
              // startAdornment={<SearchIcon />}
            />
          </Hidden>
        </Grid>
      </Grid>
    </Container>
  );
};
