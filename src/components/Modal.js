import { useRef } from "react";
import styles from "./modal.module.scss";


function Modal({children, title, root}) {

    const ref = useRef(null);

    function handleClick() {
        ref.current.classList.add(styles.fadeOut);
        ref.current.addEventListener("animationend", () => {
            root.unmount();
            document.querySelector("#modal").remove();
        },{once: true});
    }


    return (
        <div ref={ref} className={styles.modalContainer}>
            <div className={styles.modalView}>
                <div className={styles.modalHeader}>
                    <div>{title}</div>
                    <div>
                        <button onClick={handleClick} className={styles.closeButton}>X</button>
                    </div>
                </div>
                <div className={styles.modalContent}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;