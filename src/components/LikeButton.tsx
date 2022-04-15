/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-14 17:48:28
 * @LastEditors: zch
 * @LastEditTime: 2022-04-15 15:50:19
 */
import React, { useEffect, useRef, useState, useContext } from "react";
// import useMousePositon from "../Hooks/useMousePosotion";
import { ThemeContext } from "../App";

const LikeButton: React.FC = (props) => {
  const [like, setLike] = useState(0)
  const likeRef = useRef(0)
  const didMountRef = useRef(false)
  const domRef = useRef<HTMLInputElement>(null)
  // const positions = useMousePositon()
  const theme = useContext(ThemeContext)
  const style = {
    background: theme.background,
    color: theme.color
  }
  useEffect(() => {
    if(didMountRef.current) {
      console.log('this is updated');
    } else {
      didMountRef.current = true
    }
  })
  useEffect(() => {
    if(domRef && domRef.current) {
      domRef.current.focus()
    }
  })
  function handleClick() {
    setTimeout(() => {
      alert('clicked on' + like + likeRef.current)
    }, 1000)
  }
  return <>
  <input type='text' ref={domRef}></input>
    <button style={style} onClick={() => {setLike(like+ 1); likeRef.current++}}>{ like }</button>
    {/* <div>{positions.x}-{positions.y}</div> */}
    <button onClick={handleClick}>Alert</button>
  </>
}

export default LikeButton