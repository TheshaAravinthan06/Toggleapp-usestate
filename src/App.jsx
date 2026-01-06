import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 gap-6">
      {/* <div className="bg-white p-6 rounded-xl shadow-lg text-center w-80"> */}
        <h1 className="text-2xl font-bold mb-4">
          Toggle Content App
        </h1>

        <button
          onClick={() => setShowContent(!showContent)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Toggle Content
        </button><br/>

        {/* Conditional Rendering */}
        {showContent && (
          <div className="mt-4 p-4 bg-blue-50 text-blue-800 rounded-lg">
            <p>
              🎉 Supriseeeeee!
            </p>
          </div>
        )}
      </div>
    // </div>
  );
}

export default App;
