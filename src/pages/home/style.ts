import { makeStyles, Theme } from '@material-ui/core';

export const useStylesHome = makeStyles((theme: Theme) => ({
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
  tweetWrapper: {
    color: 'inherit',
    textDecoration: 'none',
  },
  tweetAvatar: {
    width: theme.spacing(6.5),
    height: theme.spacing(6.5),
    marginRight: 15,
  },
  tweetFooter: {
    display: 'flex',
    position: 'relative',
    left: -13,
    justifyContent: 'space-between',
    maxWidth: 450,
  },
  tweetsHeader: {
    display: 'flex',
    alignItems: 'center',
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderRadius: 0,
    padding: '10px 15px',
    '& h6': {
      fontWeight: 700,
    },
  },
  rightSideBlock: {
    backgroundColor: '#F5F8FA',
    borderRadius: 15,
    marginTop: 20,
    '& .MuiList-root': {
      paddingTop: 0,
    },
  },
  rightSideBlockHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    backgroundColor: 'transparent',
    padding: '13px 18px',
    '& b': {
      fontSize: 20,
      fontWeight: 800,
    },
  },
  rightSideBlockItem: {
    cursor: 'pointer',
    '& .MuiTypography-body1': {
      fontWeight: 700,
    },
    '& .MuiListItemAvatar-root': {
      minWidth: 50,
    },
    '& .MuiListItemText-root': {
      margin: 0,
    },
    '&:hover': {
      backgroundColor: '#edf3f6',
    },
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
    },
  },
  addFormBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addFormBottomActions: {
    marginTop: 10,
    paddingLeft: 70,
  },
  addFormTextarea: {
    width: '100%',
    border: 0,
    fontSize: 20,
    outline: 'none',
    fontFamily: 'inherit',
    resize: 'none',
  },
  addFormCircleProgress: {
    position: 'relative',
    width: 20,
    height: 20,
    margin: '0 10px',
    '& .MuiCircularProgress-root': {
      position: 'absolute',
    },
  },
  addFormBottomRight: {
    display: 'flex',
    alignItems: 'center',
  },
}));
