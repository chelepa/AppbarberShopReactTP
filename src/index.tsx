import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthenticationProvider } from './contexts/Authentication/AuthenticationProvider';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <AuthenticationProvider>
        <App />
    </AuthenticationProvider>
  // </React.StrictMode>
);