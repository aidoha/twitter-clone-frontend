import React from 'react';
import {
  Grid,
  Paper,
  Hidden,
  Container,
  Typography,
  withStyles,
  createStyles,
  InputBase,
} from '@material-ui/core';
import { Tweet } from '../../components/tweet';
import { SideMenu } from '../../components/sideMenu';
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
