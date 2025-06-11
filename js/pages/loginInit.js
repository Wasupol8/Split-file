import { handFormSubmit } from "../services/auth.js";




const initializeApp = () => {
    
    const loginForm = document.getElementById('form-login')
    if (loginForm) {
        loginForm.addEventListener('submit', handFormSubmit)
    }

    console.log('เข้าสู่ระบบสำเร็จ')
}

document.addEventListener('DOMContentLoaded', initializeApp);