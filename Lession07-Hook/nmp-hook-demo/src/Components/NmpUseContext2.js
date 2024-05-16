import React, { useContext } from 'react'
import { ThemeContext } from './NmpUseContex'

export default function NmpUseContext2() {
  const theme = useContext(ThemeContext);
    return (
    <div className={theme }>
      <h2>NmpUseContext2</h2>
      <p>
        <b>Msv:2210900141</b>
        <b>Họ và tên : Nguyễn Minh Phương</b>
        <i>K22CNT4</i>
      </p>
    </div>
  )
}
