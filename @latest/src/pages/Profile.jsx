import { useState,useEffect } from "react";



export default function Profile(){


    return(

    <>
        <div style={{display:"flex"}}>
            <div style={{border:"2px solid black", padding:10, flex:"1 1 200px", width:275,height:300, float:"left"}}>
                <h3>My Sports</h3>
            </div>
            <div style={{border:"2px solid black", padding:10, flex:"1 1 200px", width:275,height:300, float:"left"}}>
                <h3>My Products</h3>
            </div>


        </div>
    
    </>
    )
}