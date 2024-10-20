import React, { useState } from 'react';
import WorkoutCard from './components/WorkoutCard';
import BackgroundSelector from './components/BackgroundSelector';
import ShareButton from './components/ShareButton';
import BackgroundPattern from './components/BackgroundPattern';


function App() {
  const [selectedBackground, setSelectedBackground] = useState('blue');
  const [scalingFactor, setScalingFactor] = useState(1);
  const gify = 'https://i.giphy.com/media/LCaswiXhSmUb9aV4dV/giphy.gif';

  return (
    <div 
      className="min-h-screen bg-gray-900 flex flex-col items-center justify-between p-4 sm:p-10 overflow-hidden relative pixel6-container"
      style={{ '--scaling-factor': scalingFactor } as React.CSSProperties}
    >
      <BackgroundPattern imgurl={gify} />
      <div className="w-full max-w-md flex-grow flex flex-col justify-center relative z-10 pixel6-workout-card">
        <WorkoutCard
          weight={3280.0}
          equivalent={57}
          equivalentItem="Angels"
          duration="1h 11m"
          exercises={4}
          records={3}
          backgroundColor={selectedBackground}
          opacity={10}
          imgurl={gify}
        />
      </div>
      <div className="w-full max-w-md relative z-10">
        <BackgroundSelector
          selectedBackground={selectedBackground}
          onSelectBackground={setSelectedBackground}
          className="pixel6-background-selector"
        />
        <ShareButton className="pixel6-share-button" />
      </div>
    </div>
  );
}

export default App;