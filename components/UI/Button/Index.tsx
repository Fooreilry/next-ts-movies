import { FC } from "react"
import styles from './Button.module.scss'

const Button:FC = () => {
  return (
    <div className={styles.button}>
         <button className="text-white ">Search</button>
    </div>
   
  )
}
export default Button