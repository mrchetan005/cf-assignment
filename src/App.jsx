import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { getLocalData } from './store/slices/testSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocalData());
  }, []);
  return (
    <RouterProvider router={router} />
  )
}

export default App
