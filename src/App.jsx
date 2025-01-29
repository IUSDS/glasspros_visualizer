import react from 'react';
import backgroundImage from './assets/backgrounds/bg.png';
import { Welcome,PickYourView,Shower,FramelessShowerColor,WithFrameShowerColor,FramelessShowerStyle,FramelessFinal,WithFrameShowerStyle,WithFrameFinal,Windows } from './pages';
import { Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <div className="overflow-x-hidden bg-cover bg-center h-screen flex font-cardo justify-center items-center"
    style={{
      background: `radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,188,212,1) 100%)`,
    }}
    >
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/pick_your_view' element={<PickYourView />} />
        <Route path='/showers' element={<Shower />} />
        <Route path='/showers/frameless' element={<FramelessShowerColor />} />
        <Route path='/showers/frameless/style' element={<FramelessShowerStyle />} />
        <Route path='/showers/frameless/final' element={<FramelessFinal />} />
        <Route path='/showers/withframe' element={<WithFrameShowerColor />} />
        <Route path='/showers/withframe/style' element={<WithFrameShowerStyle />} />
        <Route path='/showers/withframe/final' element={<WithFrameFinal />} />
        <Route path='/windows' element={<Windows />} />
      </Routes>
    </div>
  );
}

export default App;