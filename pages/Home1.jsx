import React from 'react'

const Home = () => {
  const [branch, setBranch] = useState('main'); // default

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>🛠️ Current Git Branch</h2>
      <p>You're currently on the <strong>{branch}</strong> branch.</p>

      <button onClick={() => setBranch('main')}>Switch to Main</button>
      <button onClick={() => setBranch('developer')} style={{ marginLeft: '10px' }}>
        Switch to Developer
      </button>
    </div>
  );
}



export default Home
