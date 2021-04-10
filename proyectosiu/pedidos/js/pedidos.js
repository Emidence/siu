document.addEventListener( "DOMContentLoaded", function() {

    var hmbttn = document.getElementById("hmbttn");
    hmbttn.addEventListener("click", hmbttn_onclick);
    
    function hmbttn_onclick (e) {
        e.preventDefault();
        e.stopPropagation();
        var menu = document.getElementById("menu");
        menu.classList.toggle("hidden");
    }
    
    var emptyTextRegex  = /^\s*$/;
    var emailRegex      = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    var passwordRegex   = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,32})\S$/;

    var txtEmail            = document.getElementById( "txtEmail" );
    var txtPassword         = document.getElementById( "txtPassword" );
    var txtEmailError       = document.getElementById( "txtEmailError" );
    var formLogin           = document.getElementById( "formLogin" )
    var btnLogin            = document.getElementById( "btnLogin" );
    var txtEmailHasErrors   = true;
    var txtPassHasErrors    = true;

    txtEmail.addEventListener( "blur", function(e) {
        
        var value = e.target.value;
        
        if ( ! emailRegex.test(value) ) {
            txtEmail.classList.add( "error" );
            txtEmailError.classList.remove( "hidden" );
            txtEmailError.innerHTML = "Debe de ingresar un correo electrónico válido.";
            txtEmailHasErrors = true;
        } else {
            txtEmail.classList.remove( "error" );
            txtEmailError.classList.add( "hidden" );
            txtEmailError.innerHTML = "";
            txtEmailHasErrors = false;
        }
        
        enableBtn();
    });

    txtPassword.addEventListener( "blur", function(e) {
        
        var value = e.target.value;
        
        if ( ! passwordRegex.test(value) ) {
            txtPassword.classList.add( "error" );
            txtPasswordError.classList.remove( "hidden" );
            txtPasswordError.innerHTML = "Contraseña inválida.";
            txtPassHasErrors = true;
        } else {
            txtPassword.classList.remove( "error" );
            txtPasswordError.classList.add( "hidden" );
            txtPasswordError.innerHTML = "";
            txtPassHasErrors = false;
        }

        enableBtn();
    });

    function enableBtn() {

        if ( txtPassHasErrors || txtEmailHasErrors ) {

            btnLogin.setAttribute( "disabled", "true" );

        } else {

            btnLogin.removeAttribute( "disabled", "true" );
        }
    }
});