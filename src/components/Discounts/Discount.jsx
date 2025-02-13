import React from 'react'
import './discount.css'

const Discount = () => {
    return (
        <>
            <div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "30vh" }}>
                    <h2>Զեղչ</h2>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ backgroundColor: "#F1F3FD", width: "800px", height: "400px" }}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <h2>Ընտրի՛ր նվեր սիրելիներիդ համար</h2>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <p style={{ marginTop: "10px" }}>Մենք կօգնենք քեզ գտնել ամենահամապատասխան նվերը</p>
                        </div>
                        <div >

                            <div className='but'>
                                <strong>Ընտրել առիթը</strong>

                            </div>
                            <div>
                                <button class="custom-select__option custom-select__option--value custom-select__option--select" type="button">Ընտրել</button>
                            </div>
                            <div className='but'>
                                <strong>Ու՞մ համար է նվերը</strong>

                            </div>
                            <div>
                                <button class="custom-select__option custom-select__option--value custom-select__option--select" type="button">Ընտրել</button>
                            </div>
                            <div></div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Discount