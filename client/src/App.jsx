import { DeckProvider } from './context/DeckContext';
import DeckEngine from './components/deck/DeckEngine';
import LoadingScreen from './components/common/LoadingScreen';
import { useState, useEffect } from 'react';

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { setTimeout(() => setLoading(false), 1800); }, []);
  
  if (loading) return <LoadingScreen />;
  
  return (
    <DeckProvider>
      <DeckEngine />
    </DeckProvider>
  );
}
