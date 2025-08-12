import React from 'react';

function LoadingSpinner() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '200px'
    }}>
      <img src="/loading.gif" alt="Loading..." width={400} height={400} />
    </div>
  );
}

export default LoadingSpinner;