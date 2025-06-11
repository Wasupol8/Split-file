import { setCookies } from '../utils/cookies.js';
import { validateLogin } from '../utils/validation.js'
import { authenticateUser } from './userServices.js';


const fetchUsers = () => {
    return fetch('../data/users.json')
        .then(response => response.json())
        .then(data => data.users)
        .catch(error => {
            console.error('เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้:', error);
            return [];
        });
};




const saveUserSession = (user) => {
    setCookies( 'userId', user.id, 2 );

    localStorage.setItem( 'userEmail', user.email);
    localStorage.setItem( 'userName', user.name);
    localStorage.setItem( 'userRole', user.role);
};




export const handlelogin = (email, password) => {
    const loginBtn = document.getElementById('login')
        return authenticateUser (email, password)
        .then(user =>{
            if (user) {
                saveUserSession(user);
                sessionStorage.setItem('user', user.role);
                sessionStorage.setItem('userEmail', user.email);

                setTimeout(() => {
                    window.location.href = 'dashboard.html'
                }, 1000);
            } else{
                alert('อีเมลหรือรหัสผ่านไม่ถูกต้องลองอีกครั้ง', true)
            }
        })
        .catch(error =>{
            console.error('เกิดข้อผิดพลาดในการเข้าสู่ระบบ', error)
        })
};




export const handFormSubmit = (e) => {
    e.preventDefault();
    // ป้อวกันการรีเฟรชหน้า

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    // ดึงค่าจาก input ใช้ value เพื่อดึงค่าจากที่ผู้ใช้กรอก

    const isValid = validateLogin(email, password);
    // เรียกใช้ฟังชั่น validateLogin

    if (isValid){
        handlelogin(email, password);
    }
    else {
        alert('error')
    }
}