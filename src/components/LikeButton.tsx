/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-14 17:48:28
 * @LastEditors: zch
 * @LastEditTime: 2022-04-14 17:54:55
 */
import React, { useState } from "react";

const LikeButton: React.FC = (props) => {
  const [like, setLike] = useState(0)
  return (<button onClick={() => {setLike(like+ 1)}}>
    { like }
  </button>)
}

export default LikeButton