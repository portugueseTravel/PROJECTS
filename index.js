/**lets build our ID card */
/**tree areas
 * Introdution --Header
 * Link Buttons --Body 1
 * About and Interests -- Body 2
 * Social Logos -- Footer
 */

function Header() {
    return(
        <div className="header">
            <img className="image_perfil" src="./perfil_foto.jpg"></img>
            <h1 className="header_name">Nuno Abrantes</h1>
            <h2 className="header_profession">OT Engineer</h2>
            <h2 className="header_contact">Contact: 930456476</h2>
        </div>
    )
}

function Body1() {
    return(
        <div className="body1">
            <button className="button_linkdin"><i className="fa fa-linkedin-square"> </i>Linkdin</button>
            <button className="button_email"><i className="fa fa-envelope"></i>Email</button>
        </div>
    )
}

function Body2() {
    return(
        <div className="body2">
            <h2 className ="body2_about">About</h2>
            <h3 className ="body2_about_text">Hi! My name is Nuno and I love to pratice sports</h3>
            <h2 className ="body2_interess">Interests</h2>
            <h3 className ="body2_interess_text">I am interested in a remote job in web development area, that allows me geographic flexibility</h3>
        </div>
    )
}

function Footer() {
    return(
        <div className="footer">
            <i class="fa fa-twitter-square"></i>
            <i class="fa fa-facebook-square"></i>
            <i class="fa fa-instagram"></i>
            <i class="fa fa-github-square"></i>
            
        </div>
    )
}




function IdCard (){
    return (        
            <div className="container">
                        <Header />
                        <Body1 />
                        <Body2 />
                        <Footer />
                        
            </div>)
}
   

ReactDOM.render(<IdCard />, document.getElementById("root"));