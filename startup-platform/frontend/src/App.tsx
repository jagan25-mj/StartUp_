import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AppRoutes from './routes/AppRoutes';
import axiosInstance from './api/axios';

function App() {
  const [healthStatus, setHealthStatus] = useState<string>('checking...');

  useEffect(() => {
    // Call health check on app load
    const checkHealth = async () => {
      try {
        const response = await axiosInstance.get('/health/');
        console.log('Health Check Response:', response.data);
        setHealthStatus(response.data.status);
      } catch (error) {
        console.error('Health check failed:', error);
        setHealthStatus('error - backend not running');
      }
    };

    checkHealth();
  }, []);

  return (
    <BrowserRouter>
      <div className="fixed top-0 right-0 p-2 text-xs bg-white border border-gray-300 rounded-bl z-50">
        <span className="font-semibold">Backend Status:</span>{' '}
        <span className={healthStatus === 'ok' ? 'text-green-600' : 'text-red-600'}>
          {healthStatus}
        </span>
      </div>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;