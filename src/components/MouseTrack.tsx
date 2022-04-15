/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-15 10:43:40
 * @LastEditors: zch
 * @LastEditTime: 2022-04-15 13:32:02
 */
import React, { useEffect, useState } from "react";

const MouseTrack: React.FC = (props: any) => {
  const [obj, setObj] = useState({x: 0, y: 0})
  useEffect(() => {
    const update = (obj: any) => {
      console.log(obj);
      
      setObj({x: obj.x, y: obj.y})
    } 
    document.addEventListener('click', update)

    return () => {
      document.removeEventListener('click', update)
    }
  }, [])
  return (
  <div>
    <div>{obj.x}-{obj.y}</div>
  </div>
  )
}

export default MouseTrack