import Image from "next/image";

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
             <div className="headerpage">
                   <div className="menu">
                       <ul> <li><a className="home" href="#">início</a></li>
                            <li><a href="#">funcionalidades</a></li>
                            <li><a href="#">para o futuro</a></li>
                            <li><a href="#">sobre</a></li>
                       </ul>
                   </div>
                   <button className="login">Login</button>
             </div>
             <div className="cointainer_1">
                   <h1> </h1>
             </div>
    </body>
    </html>
  );
}
