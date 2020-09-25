import React from 'react';
import {
  Grid,
  Paper,
  Hidden,
  Container,
  Typography,
  InputAdornment,
  Box,
} from '@material-ui/core';
import { Tweet } from '../../components/tweet';
import { SideMenu } from '../../components/sideMenu';
import { SearchTextField } from '../../components/searchTextFiled';
import { Tags } from '../../components/tags';

import SearchIcon from '@material-ui/icons/SearchOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
import ListItem from '@material-ui/core/ListItem/ListItem';
import Divider from '@material-ui/core/Divider/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar/Avatar';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import List from '@material-ui/core/List/List';
import Button from '@material-ui/core/Button/Button';

import { useStylesHome } from './style';

export const Home = () => {
  const classes = useStylesHome();
  return (
    <Container className={classes.wrapper} maxWidth='lg'>
      <Grid container spacing={3}>
        <Grid item xs={2} lg={3} md={2}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item xs={10} lg={6} md={6}>
          <Paper variant='outlined' className={classes.tweetsWrapper}>
            <Paper variant='outlined' className={classes.tweetsHeader}>
              <Typography variant='h6'>Главная</Typography>
            </Paper>
            {[
              ...new Array(20).fill(
                <Tweet
                  classes={classes}
                  text='ну же разденься побыстрее'
                  user={{
                    username: 'aidoha7232',
                    fullname: 'Aidyn Ibrayev',
                    avatartUrl:
                      'https://pbs.twimg.com/profile_images/1301947131553513473/G9gTgPfP_400x400.jpg',
                  }}
                />
              ),
            ]}
          </Paper>
        </Grid>
        <Grid item lg={3} md={3}>
          <Hidden mdDown>
            <Box position='sticky' top={0} paddingTop='20px'>
              <SearchTextField
                variant='outlined'
                placeholder='Поиск по Твиттеру'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
              <Tags classes={classes} />
              <Paper className={classes.rightSideBlock}>
                <Paper
                  className={classes.rightSideBlockHeader}
                  variant='outlined'
                >
                  <b>Кого читать</b>
                </Paper>
                <List>
                  <ListItem className={classes.rightSideBlockItem}>
                    <ListItemAvatar>
                      <Avatar
                        alt='Remy Sharp'
                        src='https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg'
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary='Dock Of Shame'
                      secondary={
                        <Typography
                          component='span'
                          variant='body2'
                          color='textSecondary'
                        >
                          @FavDockOfShame
                        </Typography>
                      }
                    />
                    <Button color='primary'>
                      <PersonAddIcon />
                    </Button>
                  </ListItem>
                  <Divider component='li' />
                </List>
              </Paper>
            </Box>
          </Hidden>
        </Grid>
      </Grid>
    </Container>
  );
};
