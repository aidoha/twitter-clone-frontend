import React, { useState } from 'react';
import classNames from 'classnames';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Box from '@material-ui/core/Box';

import Alert from '@material-ui/lab/Alert';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';

import { useStylesHome } from '../pages/home/style';

interface AddTweetFormProps {
  classes: ReturnType<typeof useStylesHome>;
  maxRows?: number;
}

const MAX_LENGTH = 280;

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  classes,
  maxRows,
}: AddTweetFormProps): React.ReactElement => {
  const [text, setText] = useState<string>('');

  const textLimitPercent = Math.round((text.length / 280) * 100);
  const textCount = MAX_LENGTH - text.length;

  const handleChangeTextarea = (
    e: React.FormEvent<HTMLTextAreaElement>
  ): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  const handleClickAddTweet = (): void => {
    setText('');
  };

  return (
    <Box>
      <Box display='flex' width='100%'>
        <Avatar
          className={classes.tweetAvatar}
          alt={`Аватарка пользователя UserAvatar`}
          src='https://pbs.twimg.com/profile_images/1301947131553513473/G9gTgPfP_400x400.jpg'
        />
        <TextareaAutosize
          onChange={handleChangeTextarea}
          className={classes.addFormTextarea}
          placeholder='Что происходит?'
          value={text}
          rowsMax={maxRows}
        />
      </Box>
      <div className={classes.addFormBottom}>
        <div
          className={classNames(
            classes.tweetFooter,
            classes.addFormBottomActions
          )}
        >
          <IconButton color='primary'>
            <ImageOutlinedIcon style={{ fontSize: 26 }} />
          </IconButton>
          <IconButton color='primary'>
            <EmojiIcon style={{ fontSize: 26 }} />
          </IconButton>
        </div>
        <div className={classes.addFormBottomRight}>
          {text && (
            <>
              <span>{textCount}</span>
              <div className={classes.addFormCircleProgress}>
                <CircularProgress
                  variant='static'
                  size={20}
                  thickness={5}
                  value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                  style={
                    text.length >= MAX_LENGTH ? { color: 'red' } : undefined
                  }
                />
                <CircularProgress
                  style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                  variant='static'
                  size={20}
                  thickness={5}
                  value={100}
                />
              </div>
            </>
          )}
          <Button
            onClick={handleClickAddTweet}
            disabled={
              // addFormState === AddFormState.LOADING ||
              !text || text.length >= MAX_LENGTH
            }
            color='primary'
            variant='contained'
          >
            {/* {addFormState === AddFormState.LOADING ? ( */}
            {/* <CircularProgress color='inherit' size={16} /> */}
            {/* ) : ( */}
            'Твитнуть'
            {/* )} */}
          </Button>
        </div>
      </div>
      {/* {addFormState === AddFormState.ERROR && ( */}
      {/* <Alert severity='error'>
        Ошибка при добавлении твита{' '}
        <span aria-label='emoji-plak' role='img'>
          😞
        </span>
      </Alert> */}
      {/* )} */}
    </Box>
  );
};
