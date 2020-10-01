import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Paper, Typography } from '@material-ui/core';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import Divider from '@material-ui/core/Divider/Divider';

import { selectIsTagsLoading, selectTagsItems } from '../store/tags/selectors';

import { useStylesHome } from '../pages/home/style';

interface TagsProps {
  classes: ReturnType<typeof useStylesHome>;
}

export const Tags: React.FC<TagsProps> = ({
  classes,
}: TagsProps): React.ReactElement | null => {
  const tags = useSelector(selectTagsItems);
  const isLoading = useSelector(selectIsTagsLoading);

  if (isLoading) {
    return null;
  }

  return (
    <Paper className={classes.rightSideBlock}>
      <Paper className={classes.rightSideBlockHeader} variant='outlined'>
        <b>Актуальные темы</b>
      </Paper>
      <List>
        {tags.map(({ _id, name, count }) => (
          <React.Fragment key={_id}>
            <ListItem className={classes.rightSideBlockItem}>
              <Link to={`/home/search?q=${name}`}>
                <ListItemText
                  primary={name}
                  secondary={
                    <Typography
                      component='span'
                      variant='body2'
                      color='textSecondary'
                    >
                      Твитов: {count}
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
