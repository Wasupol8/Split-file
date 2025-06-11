// password ห้ามน้อบกว่า 6
export const validPassword = (password) => {
    return password && password.length>= 6;
}



// ตรวจสอบว่า ค่าที่ส่งเข้ามาไม่ว่างเปล่า
export const isNotEmpty = (value) => {
    return value && value.length > 0 ;
}




export const validateLogin = (email, password) => {
    if(!isNotEmpty(email) || !isNotEmpty(password)){
        console.log('Email or password is empty');
        alert('กรอกข้อมูลให้ครบ');
        return false;
    }

    if(!validPassword(password)){
        console.log('Password is too short');
        alert('รหัสผ่านขั้นต่ำ 6 ตัว');
        return false;
    }
    
    return true;
}