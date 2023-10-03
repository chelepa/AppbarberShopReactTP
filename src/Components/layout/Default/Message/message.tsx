import React from "react";
import styles from "./Message.module.css";
import { useEffect} from "react";

function Message({ msg, type }: { msg: string; type: string }) {
    const [visible, setVisible] = React.useState({})

    useEffect(() => {
        if (!msg){
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)

    }, [msg])

  return (<>
    {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
    )}
    </>)
}

export default Message;
