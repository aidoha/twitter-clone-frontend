import React from 'react';

import { Paper, Typography } from '@material-ui/core';
import { useStylesHome } from '../pages/home/style';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import Divider from '@material-ui/core/Divider/Divider';

import { Link } from 'react-router-dom';

interface TagsProps {
  classes: ReturnType<typeof useStylesHome>;
}
const items = [
  {
    _id: 1,
    name: 'Astana',
    count: 459,
  },
  {
    _id: 2,
    name: 'Travis Scott',
    count: 42159,
  },
];
export const Tags: React.FC<TagsProps> = ({
  classes,
}: TagsProps): React.ReactElement | null => {
  return (
    <Paper className={classes.rightSideBlock}>
      <Paper className={classes.rightSideBlockHeader} variant='outlined'>
        <b>Актуальные темы</b>
      </Paper>
      <List>
        {items.map((obj) => (
          <React.Fragment key={obj._id}>
            <ListItem className={classes.rightSideBlockItem}>
              <Link to={`/home/search?q=${obj.name}`}>
                <ListItemText
                  primary={obj.name}
                  secondary={
                    <Typography
                      component='span'
                      variant='body2'
                      color='textSecondary'
                    >
                      Твитов: {obj.count}
                    </Typography>
                  }
                />
              </Link>
            </ListItem>
            <Divider component='li' />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};
