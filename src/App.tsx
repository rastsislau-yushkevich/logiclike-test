import './App.scss';
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Tabs from './components/Tabs';
import Topics from './components/Courses';

export const TabContext = React.createContext({
  active: 'Все темы',
  setActive: (tab: any) => {}
});
const queryClient = new QueryClient();

function App() {
  const [active, setActive] = useState('Все темы')

  return (
    <TabContext.Provider value={{active, setActive}}>
      <QueryClientProvider client={queryClient}>
        <div className='App'>
          <Tabs />
          <Topics />
        </div>
      </QueryClientProvider>
    </TabContext.Provider>
  );
}

export default App;
