/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-15 11:30:06
 * @LastEditors: zch
 * @LastEditTime: 2022-04-15 13:28:38
 */
import React, { useEffect, useState } from "react";

// 自定义hook
const useMousePositon = () => {
  const [positions, setPositions] = useState({x:0,y:0})
  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setPositions({x: e.clientX, y: e.clientY})
    }
    document.addEventListener('mousemove', updateMouse)

    return () => {
      document.removeEventListener('mousemove', updateMouse)
    }
  }, [])
  return positions
}

export default useMousePositon