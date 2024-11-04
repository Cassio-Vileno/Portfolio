import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../screens/Home';
import PrivacyPolicy from '../screens/PrivacyPolicy';

const AppRoutes = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;