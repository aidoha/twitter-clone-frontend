import { makeStyles } from '@material-ui/core';

export const useStylesHome = makeStyles((theme) => ({
  wrapper: {
    height: '100vh',
  },
  logo: {
    margin: '10px 0',
  },
  logoIcon: {
    fontSize: 36,
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 18,
    marginLeft: 15,
  },
  sideMenuListItem: {
    cursor: 'pointer',
    padding: '0 10px',
    height: 50,
    marginBottom: 10,
    transition: 'background-color 0.15s ease-in-out',
    borderRadius: 25,
    '&:hover': {
      '& h6': {
        color: 'rgba(29,161,242,1.00)',
      },
      '& svg': {
        color: 'rgba(29,161,242,1.00)',
      },
      backgroundColor: 'rgba(29, 161, 242, 0.1)',
    },
  },
  sideMenuListItemIcon: {
    fontSize: 28,
  },
  sideMenuTweetButton: {
    padding: theme.spacing(2.5),
    marginTop: theme.spacing(2),
  },
  tweet: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgb(245, 248, 250)',
    },
  },
  tweetsWrapper: {
    borderRadius: 0,
    height: '100%',
    borderTop: 0,
    borderBottom: 0,
  },
  tweetsHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderRadius: 0,
    padding: '10px 15px',
    '& h6': {
      fontWeight: 700,
    },
  },
}));
