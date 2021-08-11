import { forwardRef } from 'react'
import s from './MyInput.module.css'

const MyInput = forwardRef( (props, ref) => {
  return(
    <input ref={ref} className={s.myInput} {...props}/>
  )
})
export default MyInput