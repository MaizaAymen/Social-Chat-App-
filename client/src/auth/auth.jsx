import React from "react";
import "./auth.css";


const Auth=()=>{
    /*===== FOCUS =====*/
const inputs = document.querySelectorAll(".form__input")

/*=== Add focus ===*/
function addfocus(){
    let parent = this.parentNode.parentNode
    parent.classList.add("focus")
}

/*=== Remove focus ===*/
function remfocus(){
    let parent = this.parentNode.parentNode
    if(this.value === ""){
        parent.classList.remove("focus")
    }
}

/*=== To call function===*/
inputs.forEach(input=>{
    input.addEventListener("focus",addfocus)
    input.addEventListener("blur",remfocus)
})
    return(
        <div class="l-form">
        <div class="shape1"></div>
        <div class="shape2"></div>

        <div class="form">
            <img src="assets\authentication.svg" alt="" class="form__img"/>

            <form action="" class="form__content">
                <h1 class="form__title">Welcome</h1>

                <div class="form__div form__div-one">
                    <div class="form__icon">
                        <i class='bx bx-user-circle'></i>
                    </div>

                    <div class="form__div-input">
                        <label for="" class="form__label">Username</label>
                        <input type="text" class="form__input"/>
                    </div>
                </div>

                <div class="form__div">
                    <div class="form__icon">
                        <i class='bx bx-lock' ></i>
                    </div>

                    <div class="form__div-input">
                        <label for="" class="form__label">Password</label>
                        <input type="password" class="form__input"/>
                    </div>
                </div>
                <a href="#" class="form__forgot">Forgot Password?</a>

                <input type="submit" class="form__button" value="Login"/>

                <div class="form__social">
                    <span class="form__social-text">Our login with</span>

                    <a href="#" class="form__social-icon"><i class='bx bxl-facebook' ></i></a>
                    <a href="#" class="form__social-icon"><i class='bx bxl-google' ></i></a>
                    <a href="#" class="form__social-icon"><i class='bx bxl-instagram' ></i></a>
                </div>
            </form>
        </div>

    </div>
    );
};
export default Auth;