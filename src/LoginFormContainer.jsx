import { useDispatch } from 'react-redux';

import LoginForm from './LoginForm';

import {
  requestLogin,
  changeLoginField,
} from './actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    dispatch(requestLogin());
  }

  return (
    <LoginForm
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
