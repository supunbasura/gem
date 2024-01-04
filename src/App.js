import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import LoginPage from './Login_';
import BatchUpdate from './BatchUpdate';
import Image from './Image';
import BatchQueue from './BatchQueue';
import EditDataDisplay from './DataDisplay';
import IDGenerationForm from './EditID';
import Certificate from './Certificate';

function App() {
  return (
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/batchUpdate" element={<BatchUpdate />} />
            <Route path="/Image" element={<Image />} />
            <Route path="/BatchQueue" element={<BatchQueue />} />
            <Route path="/DataDisplay" element={<EditDataDisplay />} />
            <Route path="/IDGenerationForm" element={<IDGenerationForm />} />
            <Route path="/Certificate" element={<Certificate />} />
          </Routes>
      </Router>
  );
}

export default App;
