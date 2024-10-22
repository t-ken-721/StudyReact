import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const shincodeinfo = {
  name: "shincode",
  age: 24,
};

const ShinCodeContext = createContext(shincodeinfo);

createRoot(document.getElementById('root')).render(
  <ShinCodeContext.Provider value={shincodeinfo}>
  <StrictMode>
    <App />
  </StrictMode>
  </ShinCodeContext.Provider>
)

export default ShinCodeContext;
