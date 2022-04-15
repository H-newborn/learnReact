/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-14 17:30:16
 * @LastEditors: zch
 * @LastEditTime: 2022-04-14 17:42:14
 */
import React from 'react'

interface HelloMessage {
  message?: string
}
const Hello: React.FC<HelloMessage> = (props) => {
  return (
    <h2>{props.message}</h2>
  )
}
Hello.defaultProps = {
  message: 'Hello feidong'
}

export default Hello