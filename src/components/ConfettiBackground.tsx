import React from 'react';

const ConfettiBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 bg-blue-500 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `fall ${Math.random() * 5 + 3}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiBackground;