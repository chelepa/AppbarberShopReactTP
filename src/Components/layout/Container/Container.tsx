import styles from './Container.module.css'
import * as React from "react";

export interface LayoutProps  {
   [x: string]: any; 
   children: React.ReactNode
}

function Container(props: LayoutProps)  {
  return (
    <div className={`${styles.container} ${styles[props.customClass]}`}>
      {props.children}
    </div>
  )
}

export default Container