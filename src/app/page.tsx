"use client"

import Image from "next/image";
function click(){

const butt = document.getElementById('loginb')
if(butt != null){



 
  butt.style.width = '120px';
  butt.style.height = '40px';
  butt.style.top = '405px';
  butt.style.transform = 'transition: 0.2s';



  setTimeout(() => {
    
    butt.style.width = '150px';
    butt.style.height = '45px';
    butt.style.top = '400px';
  butt.style.transform = 'transition: 0.3s';

  }, 100);
 
  
  
  




/*
setTimeout( butt.style.width = '150px', 1000);
  setTimeout( butt.style.height = '45px', 1000);*/ 
 

}

}
export default function Home() {
  return (
    <html lang="en">
    <head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Name_app</title>
             
    </head>
    <body>
    <div className="top_app">
                   <h2 className="nameapp">Nome_App</h2>
                   {/* <img className="logo" src{logo}/>
                                  aqui será colocada a logo do app */}
             </div>
             <button id="loginb"className="login_1" onClick={click}>Login</button>
             <div className="login">
                 <div className="cointainer_1">
                     <h1> </h1>
                     <div className="form">
                           <input type="text" id="token" ></input>
                     </div>
                 </div>
                 
             </div>
           
         
    </body>
    </html>
  );
}
