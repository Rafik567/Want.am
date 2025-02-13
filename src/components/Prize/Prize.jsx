import React from 'react'
import { prize } from '../../DataBase'
const Prize = () => {
    return (
        <>
            <div >
                <div >
                    <div style={{ marginLeft: "700px", marginTop: "50px" }}>
                        <img src='https://want.am/wp-content/uploads/2024/11/gift-top.svg' /><br />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div style={{  display:"flex" , justifyContent:"center", alignItems:"center",  backgroundColor: "pink", width: "50vw", height: "40vh",gap:"60px" }}>
                            {prize.map((item) => (
                                <div key={item.id} >
                                    <p>{item.text}</p>
                                    <img src={item.image} alt={item.text} style={{width:"120px", height:"200px"}} />

                                </div>
                            ))}
                        </div>
                        

                    </div>
                </div>

            </div>
            
        </>
    )
}

export default Prize