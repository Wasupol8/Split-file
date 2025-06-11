export const fecthUser = () =>{
    return fetch('/data/users.json')
        .then(response => response.json())
        .then(data => data.users)
        .catch(error => {
            console.error('เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้:', error);
            return [];
        });
}


// fecthUser().then(users => {
//     console.log(users)
// });


// ฟังชั่นรับ email & password จากผู้ใข้
export const authenticateUser = (email,password) => {
    return fecthUser()
    // เรียกใช้ฟังชั่น fecthUser() ดึงข้อมูลผู้ใช้จากjson

    .then(users => {
        return users.find(users => users.email === email && users.password === password);
    });
    // ตรวจสอบว่าข้อมูลที่ผู้ใช้กรอกมาตรงกับ .json มั้ย 
};