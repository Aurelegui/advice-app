import React, { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  // Set states, store window size and api data
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [posts, setPosts] = useState([]);

  // Function with api call using Axios
  const getData = async () => {
    await axios
      .get('https://api.adviceslip.com/advice')
      .then((result) => {
        setPosts(result.data.slip);
      }).catch((error) => {
        console.log(error);
      })
  }

  // Built-in React hook useEffect to run getData function and have size of window on mount
  useEffect(() => {
    getData();
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };

  }, []);

  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }

  return (
    <div className='container h-screen flex items-center justify-center'>
      <div className="card w-auto shadow-xl image-full m-10">
        <div className="card-body max-w-lg gap-6 items-center">
          <h2 className="card-title text-sm">ADVICE #{posts.id}</h2>
          <p className="font-extrabold text-xl text-center">"{posts.advice}"</p>
          {windowSize.innerWidth >= 513 ? <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" /><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>
            : <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" /><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>}
          <div className="card-actions justify-center">
            <button className="btn btn-primary -bottom-7 absolute rounded-full" onClick={getData}>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
