import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';

import { Tweet } from '../../components/tweet';
import { SideMenu } from '../../components/sideMenu';
import { SearchTextField } from '../../components/searchTextFiled';
import { Tags } from '../../components/tags';
import { AddTweetForm } from '../../components/addTweetForm';

import ListItem from '@material-ui/core/ListItem/ListItem';
import Divider from '@material-ui/core/Divider/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar/Avatar';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import List from '@material-ui/core/List/List';
import Button from '@material-ui/core/Button/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/SearchOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import {
  selectIsTweetsLoading,
  selectTweetsItems,
} from '../../store/ducks/tweets/selectors';
import { fetchTags } from '../../store/ducks/tags/actionCreators';
import { useStylesHome } from './style';

export const Home = (): React.ReactElement => {
  const classes = useStylesHome();
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsTweetsLoading);
  const history = useHistory();

  const handleTweetGoBack = () => {
    history.goBack();
  };

  useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTags());
  }, [dispatch]);
  return (
    <Container className={classes.wrapper} maxWidth='lg'>
      <Grid container spacing={3}>
        <Grid item xs={2} lg={3} md={2}>
          <SideMenu classes={classes} />
        </Grid>

        <Grid item xs={10} lg={6} md={6}>
          <Paper variant='outlined' className={classes.tweetsWrapper}>
            <Paper variant='outlined' className={classes.tweetsHeader}>
              <Route path='/home/:any'>
                <Box marginRight='20px' onClick={handleTweetGoBack}>
                  <IconButton color='primary'>
                    <ArrowBackIcon />
                  </IconButton>
                </Box>
              </Route>

              <Route path={['/home', '/home/search']} exact>
                <Typography variant='h6'>Твиты</Typography>
              </Route>

              <Route path='/home/tweet'>
                <Typography variant='h6'>Твитнуть</Typography>
              </Route>
            </Paper>
            <Route path={['/home', '/home/search']} exact>
              <Paper>
                <Box padding='20px'>
                  <AddTweetForm classes={classes} />
                </Box>
                <Box height={12} bgcolor='#E6ECF0' />
              </Paper>
            </Route>
            <Route path='/home' exact>
              {isLoading ? (
                <Box
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  margin='20px'
                >
                  <CircularProgress color='secondary' />
                </Box>
              ) : (
                tweets.map((tweet) => (
                  <Tweet key={tweet._id} classes={classes} {...tweet} />
                ))
              )}
            </Route>
          </Paper>
        </Grid>

        <Grid item lg={3} md={3}>
          <Hidden smDown>
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
