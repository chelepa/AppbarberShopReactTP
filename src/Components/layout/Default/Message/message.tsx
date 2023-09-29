import React from "react";
import styles from "./Message.module.css";
import { useEffect, useState } from "react";

function message({ msg, type }: { msg: string; type: string }) {
    const [visible, setVisible] = React.useState(false)

    useEffect(() => {
        if (!msg){
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 30000000)

        return () => clearTimeout(timer)

    }, [msg])

  return (<>
    {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
    )}
    </>)
}

export default message;
