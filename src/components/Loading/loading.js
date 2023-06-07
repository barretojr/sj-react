import React from 'react'
import Logo from '../Logo/logo'
import style from './loading.module.css'

export const Loading = () => {
  return (
    <div className={style.loading}>
      <Logo width={'200px'}/>
      <h1 className={style.text}>Carregando</h1>
    </div>
  )
}
