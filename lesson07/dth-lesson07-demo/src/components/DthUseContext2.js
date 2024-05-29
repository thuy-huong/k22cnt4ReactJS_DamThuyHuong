import React, { useContext } from 'react'
import { ThemeContext } from './DthUsseContext'

export default function DthUseContext2() {
    const theme = useContext(ThemeContext)
  return (
    <div className={theme}>
      <h2>DthUseContext2</h2>
      <p>
        <b>2210900028</b>
        <b>Đàm Thúy hường</b>
        <b>K22CNT4</b>
      </p>
    </div>
  )
}
