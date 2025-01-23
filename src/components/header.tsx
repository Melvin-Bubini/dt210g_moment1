 function Header( props : {title: string}) {
     const headerStyle: React.CSSProperties = {
         width: '100vw',
         height: '50vh',
         margin: '0',
         padding: '0',
         overflow: 'hidden',
         top: '0',
         zIndex: 1000,
       };

       const heroStyle: React.CSSProperties = {
         backgroundImage: "url('src/assets/basketballPic.jpg')",
         backgroundSize: 'cover',
         backgroundPosition: 'center center',
         backgroundRepeat: 'no-repeat',
         width: '100%',
         height: '100vh',
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         color: 'white',
         textAlign: 'center',
         margin: 0,
         padding: 0,
       };

       const overlayStyle: React.CSSProperties = {
         backgroundColor: '#80808099',
         borderRadius: '10px',
         padding: '1em',
       };

     return (
         <header style={headerStyle}>
             <div style={heroStyle}>
                 <div style={overlayStyle}>
                     <h1>{props.title}</h1>
                 </div>
             </div>
         </header>

     )
 }

 export default Header