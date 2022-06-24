 
 import styled from "styled-components"
 const Btnpr=styled.button`
 background-color:${({theme})=>(theme==="dark"?"white":"rgb(36,144,254)")};
 border:green 2px solid;
 color:white;
 cursor: pointer;
 margin-left: 5px;
 margin-right: 5px;
padding:5px;
 border-radius: 5px;
 &:hover{

 }
 `
 const Btnde=styled.button`
 background-color:transparent;
 color:black;
 cursor: pointer;
 margin-left: 5px;
 margin-right: 5px;
padding:5px;
//  border-radius: 5px;
 border:1px solid black;
 `
 const Btndas=styled.button`
 background-color:transparent;
 color:black;
 cursor: pointer;
 margin-left: 5px;
 margin-right: 5px;
padding:5px;
 border-radius: 5px;
 border:1px dashed black;
 `
 const Btnte=styled.button`
 background-color:transparent;
 color:black;
 cursor: pointer;
 margin-left: 5px;
 margin-right: 5px;
padding:5px;
 border-radius: 5px;
 border:none;
 `
 const Btnlink=styled.button`
 background-color:transparent;
 color:black;
 cursor: pointer;
 margin-left: 5px;
 margin-right: 5px;
padding:5px;
 border-radius: 5px;
 border:1px solid black;
 text-decoration:underline;
 color:rgb(69,132,188);
 font-size:large;
&:hover{
  font-weight: bolder;
}
 `



 export default function Home(){
      return(
        <>
    <Btnpr>
    Primary button
    </Btnpr>
<Btnde>
  Default Button
</Btnde>
<Btndas>
  Dashed Button
</Btndas>
<Btnte>
  Text Button
</Btnte>
<Btnlink>
  Link Button
</Btnlink>
        </>
      )
 }

  
  