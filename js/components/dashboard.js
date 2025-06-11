import { getCookies } from "../utils/cookies.js";



export const checkAuth = () => {
    const userId = getCookies('userId');
    const userName = localStorage.getItem('userName')

    if (!userId || !userName){
        window.location.href = 'index.html';
        return false
    }
    return true
}

export const loadUserData = () => {
    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('userEmail');
    const userRole = localStorage.getItem('userRole');

    document.getElementById('welcomeMessage').textContent = `ยินดีต้อนรับ, ${userName}!`;
    document.getElementById('userEmail').textContent = userEmail;
    document.getElementById('userName').textContent = userName;
    document.getElementById('userRole').textContent = userRole;
};


export const initDashboard = () => {
    if (checkAuth()) {
        loadUserData();
    }
}