
// ตั้งค่าคกกี้เวลาหมดอายุ
export const setCookies = (name, value, minutes) => {
    const data = new Date();
    data.setTime(data.getTime() + (minutes * 60 *1000));
    const expires = `expries=${data.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
    // name=value: กำหนดชื่อและค่า
    // expires=...: วันหมดอายุ
    // path=/: cookie นี้ใช้ได้ทั้งเว็บไซต์ ทุกหน้า
}



// รับค่าคุกกี้ตามชื่อ
export const getCookies = (name) => {

    // สร้างตัวแปร nameEqual เป็น string ที่ใช้สำหรับค้นหา cookie
    // เช่น ถ้า name = "username" → nameEQ = "username="
    const nameEqual = name + "=";
    const cookieArray = document.cookie.split(';');
    // อ่านค่าทั้งหมดจากDocument.cookie แล้วsplit(';') เพื่อแยกคุกกี้เป็น Array ทีละตัว

    // for วนลูปเพื่อเช็ค cookie ทีละตัว
    for (let i = 0 ; i < cookieArray.length; i++){
        let cookie = cookieArray[i];
        // กำหนดตัวแปล cookie แค่ละตัวที่ลูปมา

        while (cookie.charAt(0) === '') cookie = cookie.substring(1, cookie.length);
        // whilt ลบช่องว่าง ด้านหน้าข้อความออก

        if(cookie.indexOf(nameEqual) === 0 ) return cookie.substring(nameEqual.length, cookie.length);
        //เช็คว่า cookie นี้เริ่มต้นด้วย nameEqual ไหม ถ้าใช่แปลว่าคือ cookie ที่ต้องการหา
        // ตัดข้อความข้างหน้าของ valua ออก
    }
    return null;
};