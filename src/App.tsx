/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-14 17:27:57
 * @LastEditors: zch
 * @LastEditTime: 2022-04-15 14:27:11
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import LikeButton from './components/LikeButton';
import MouseTrack from './components/MouseTrack';
import useMousePositon from './Hooks/useMousePosotion';
import useURLLoader from './Hooks/useULLoaders';

interface IShowResult {
  message: string,
  status: string
}
function App() {
  // const positions = useMousePositon()
  const [ data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random')
  const dogResult = data as IShowResult
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        { loading ? <p>🐕 加载种</p> :
          <img src={dogResult && dogResult.message} alt='' />
        }
        <Hello></Hello>
        <LikeButton></LikeButton>
        <MouseTrack></MouseTrack>
        {/* <div>{positions.x}---{positions.y}</div> */}
      </header>
    </div>
  );
}

export default App;
