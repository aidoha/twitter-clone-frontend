import React, { ReactElement, useState } from 'react';
import {
  Button,
  FormControl,
  FormGroup,
  TextField,
  Typography,
} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import { ModalBlock } from '../../components/modalBlock';
import { useStylesSignIn } from './style';

export const SignIn: React.FC = (): ReactElement => {
  const classes = useStylesSignIn();
  const [visibleModal, setVisibleModal] = useState<'signIn' | 'signUp'>();

  const handleOpenSignIn = (): void => setVisibleModal('signIn');
  const handleOpenSignUp = (): void => setVisibleModal('signUp');
  const handleCloseModal = (): void => setVisibleModal(undefined);

  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon color='primary' className={classes.blueSideBigIcon} />
        <ul className={classes.blueSideListInfo}>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant='h6'>
              <SearchIcon className={classes.blueSideListInfoIcon} />
              Читайте о том, что вам интересно.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant='h6'>
              <PeopleOutlineIcon className={classes.blueSideListInfoIcon} />
              Узнайте, о чем говорят в мире.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant='h6'>
              <MessageIcon className={classes.blueSideListInfoIcon} />
              Присоединяйтесь к общению.
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon
            color='primary'
            className={classes.loginSideTwitterIcon}
          />
          <Typography variant='h4' className={classes.loginSideTitle}>
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography>
            <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
          </Typography>
          <br />
          <Button
            style={{ marginBottom: 20 }}
            variant='contained'
            color='primary'
            fullWidth
            onClick={handleOpenSignUp}
          >
            Зарегистрироваться
          </Button>
          <Button
            variant='outlined'
            color='primary'
            fullWidth
            onClick={handleOpenSignIn}
          >
            Войти
          </Button>
          {/* Modal for SIGN IN */}
          <ModalBlock
            title='Войти в аккаунт'
            onClose={handleCloseModal}
            classes={classes}
            visible={visibleModal === 'signIn'}
          >
            <FormControl
              className={classes.loginFormControl}
              component='fieldset'
              fullWidth
            >
              <FormGroup aria-label='position' row>
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id='email'
                  label='E-Mail'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='filled'
                  type='email'
                  fullWidth
                />
                <TextField
                  className={classes.loginSideField}
                  id='password'
                  label='Пароль'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='filled'
                  type='password'
                  fullWidth
                />
                <Button
                  onClick={handleCloseModal}
                  variant='contained'
                  color='primary'
                  fullWidth
                >
                  Войти
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
          {/* Modal for SIGN UP */}
          <ModalBlock
            title='Создайте учетную запись'
            onClose={handleCloseModal}
            classes={classes}
            visible={visibleModal === 'signUp'}
          >
            <FormControl
              className={classes.loginFormControl}
              component='fieldset'
              fullWidth
            >
              <FormGroup aria-label='position' row>
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id='name'
                  label='Имя'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='filled'
                  type='text'
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  id='email'
                  label='E-Mail'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='filled'
                  type='email'
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  id='password'
                  label='Пароль'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='filled'
                  type='password'
                  fullWidth
                />
                <Button
                  onClick={handleCloseModal}
                  variant='contained'
                  color='primary'
                  fullWidth
                >
                  Далее
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
        </div>
      </section>
    </div>
  );
};
