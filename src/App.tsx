import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onGetAllUsers } from 'redux/actions/userAction';
import { gotAllusers } from 'redux/reducers/userReducer';
import { userInfos } from 'types'

function App() {

  const users = useSelector(gotAllusers)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(onGetAllUsers())
  }, [dispatch])

  return (
    <ul>
      {users && users.map(({ id, name, email }: userInfos, i: number) => {
        return (
          <li key={i}>{id} {name} {email}</li>
        )
      })}
    </ul>
  );
}

export default App;
