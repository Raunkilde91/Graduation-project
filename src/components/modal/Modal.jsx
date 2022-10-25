import React from 'react'


// CSS
import "../modal/modal.scss";

// Children SENDER NOGLE FUNKTIONER MED, FRA HVOR VI SKAL ÅBNE MODALEN AF
const Modal = ( { children } ) => {

    const toggleModal = () => {
        
        let target = document.querySelector("#modal");

        // Hvis den har en activeclass på elementet, så tilføjer den active, eller fjerner den hvis der ikke er.
        target.classList.toggle("active");
    }
    return (
        
            <div id="modal">
                <div className="togglemodal">




                    <button className="modalClose" onClick={toggleModal}>Close</button>

                    { children }

                </div>


            </div>
        
    )
}

export default Modal