import React from 'react';

const Loader = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-primary/5'>
      <div className='flex flex-col items-center gap-4'>
        {/* Spinning circle */}
        <div className='w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin'></div>
        
        {/* Optional text */}
        <p className='text-primary font-medium text-sm'>Loading, please wait...</p>
      </div>
    </div>
  );
};

export default Loader;
