import React from 'react';
import { Box, IconButton, Hidden, Typography, Button } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/SearchRounded';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import MailIcon from '@material-ui/icons/MailOutline';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/ListAltRounded';
import PersonIcon from '@material-ui/icons/PersonOutlineRounded';
import { useStylesHome } from '../pages/home/style';

interface SideMenuProps {
  classes: ReturnType<typeof useStylesHome>;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  classes,
}: SideMenuProps): React.ReactElement => {
  return (
    <Box padding='0' margin='0' display='inline-flex' flexDirection='column'>
      <Box display='inline-flex' alignItems='center'>
        <IconButton color='primary' className={classes.logo}>
          <TwitterIcon className={classes.logoIcon} />
        </IconButton>
      </Box>

      <Box
        display='inline-flex'
        alignItems='center'
        className={classes.sideMenuListItem}
      >
        <HomeIcon className={classes.sideMenuListItemIcon} />
        <Hidden mdDown>
          <Typography className={classes.sideMenuListItemLabel} variant='h6'>
            Главная
          </Typography>
        </Hidden>
      </Box>

      <Box
        display='inline-flex'
        alignItems='center'
        className={classes.sideMenuListItem}
      >
        <SearchIcon className={classes.sideMenuListItemIcon} />
        <Hidden mdDown>
          <Typography className={classes.sideMenuListItemLabel} variant='h6'>
            Поиск
          </Typography>
        </Hidden>
      </Box>

      <Box
        display='inline-flex'
        alignItems='center'
        className={classes.sideMenuListItem}
      >
        <NotificationsIcon className={classes.sideMenuListItemIcon} />
        <Hidden mdDown>
          <Typography className={classes.sideMenuListItemLabel} variant='h6'>
            Уведомления
          </Typography>
        </Hidden>
      </Box>

      <Box
        display='inline-flex'
        alignItems='center'
        className={classes.sideMenuListItem}
      >
        <MailIcon className={classes.sideMenuListItemIcon} />
        <Hidden mdDown>
          <Typography className={classes.sideMenuListItemLabel} variant='h6'>
            Сообщения
          </Typography>
        </Hidden>
      </Box>

      <Box
        display='inline-flex'
        alignItems='center'
        className={classes.sideMenuListItem}
      >
        <BookmarkIcon className={classes.sideMenuListItemIcon} />
        <Hidden mdDown>
          <Typography className={classes.sideMenuListItemLabel} variant='h6'>
            Закладки
          </Typography>
        </Hidden>
      </Box>

      <Box
        display='inline-flex'
        alignItems='center'
        className={classes.sideMenuListItem}
      >
        <ListIcon className={classes.sideMenuListItemIcon} />
        <Hidden mdDown>
          <Typography className={classes.sideMenuListItemLabel} variant='h6'>
            Списки
          </Typography>
        </Hidden>
      </Box>

      <Box
        display='inline-flex'
        alignItems='center'
        className={classes.sideMenuListItem}
      >
        <PersonIcon className={classes.sideMenuListItemIcon} />

        <Hidden mdDown>
          <Typography className={classes.sideMenuListItemLabel} variant='h6'>
            Профиль
          </Typography>
        </Hidden>
      </Box>

      <Box display='inline-flex' alignItems='center'>
        <Hidden mdDown>
          <Button
            className={classes.sideMenuTweetButton}
            color='primary'
            fullWidth
            variant='contained'
          >
            Твитнуть
          </Button>
        </Hidden>
      </Box>
    </Box>
  );
};
