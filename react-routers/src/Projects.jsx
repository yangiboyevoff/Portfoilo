import { useEffect, useState } from "react";

function Clock(){
    
    const [kun, setkun]= useState(new Date().toLocaleDateString())
    
    useEffect(()=>{
        const interval2=setInterval(()=>{
            setkun(new Date().toLocaleDateString())
            // console.log("vaqt yangilandi")
        },1000);
        return () => clearInterval(interval2)
    }, [])
    
    const [vaqt, setVaqt]= useState(new Date().toLocaleTimeString())

    useEffect(()=>{
        const interval=setInterval(()=>{
            setVaqt(new Date().toLocaleTimeString())
            // console.log("vaqt yangilandi")
        },1000);
        return () => clearInterval(interval)
    }, [])
    
function rcolor() {
        const cant = document.querySelector('#cant');
        const matn = document.querySelector('#matn');
        const soat = document.querySelector('#soat');
        const kun = document.querySelector('#kun');

        const v = Math.floor(Math.random() * 150) + 100; 
        let color1 ='#000000'
        let color2 = `rgb(${v}, ${v}, ${v})`; 
        cant.style.backgroundColor= color2;
        cant.style.boxShadow = `0 0 40px ${color2}`;
        matn.style.color = color1;
        soat.style.color = color1;
        kun.style.color = color1;
    }
    
    return(
        <div id="cant" style={{
            textAlign:"center",
            marginTop:"10px",
            padding:"20px",
            background:"#ffffff",
            color:"white",
            borderRadius:"15px",
            display:"inline-block"
        }}>
            <h1 id="matn">Hozirgi vaqt</h1>
            <h2 id="soat" style={{fontSize:"58px", color:"#000000", fontWeight:"700"}}>{vaqt}</h2>
            <h2 id="kun"  style={{fontSize:"58px", color:"#000000", fontWeight:"700"}}>{kun}</h2>
            <button onClick={rcolor}>Ranglar</button>
        </div>
    )
}
export default Clock;