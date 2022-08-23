import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SecondPage from '../pages/SecondPage';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="second" element={<SecondPage />} />
    </Routes>
  );
};

export default Routing;
