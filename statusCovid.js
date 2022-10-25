function countCovidStatus(covidStatusArray) {
    if (covidStatusArray === null || covidStatusArray === undefined ) {
        return undefined
    }
    if (Object.entries(covidStatusArray).length === 0 ) {
        return {}       
    }
    // if (count.Object(covidStatusArray) === 0) {
    //     return { }   
    // }
    let po = 0
    let nh = 0
    let nr = 0
    for (const status of covidStatusArray) {
        switch (status) { //swtich ตรวจสอบด้วยเครื่องหมาย ===
            case 'negative and low risk':
                nr++
                break;
            case 'negative and high risk':
                nh++
                break;
            case 'positive':
                po++
                break;
        }
    }

    const covidStatus = {} //build output
    if (nr > 0) 
       covidStatus['negative and low risk'] = nr
    if (nh > 0) 
        covidStatus['negative and high risk'] = nh
    if (po > 0) 
        covidStatus['positive'] = po
    return covidStatus
}

console.log(countCovidStatus([
    'negative and low risk',
    'positive',
    'negative and low risk',
    'negative and high risk',
    'positive',
    'negative and low risk'
]));
console.log(countCovidStatus(['positive', 'negative and rowrisk', 'positive']));
console.log(countCovidStatus([
    'negative and low risk',
    'positive',
    'negative and high risk',
    'abnormal',
    'negative and high risk',
    'positive',
    'normal'
]));
console.log(countCovidStatus(['covid']));
console.log(countCovidStatus([]));
console.log(countCovidStatus(null));
console.log(countCovidStatus(undefined))


/* โจทย์ 
ข้อ 1. ให้เขียน Function ชื่อ countCovidStatus (covidStatusArray) เพื่อ return object ที่แสดงรายการสถานะที่แตกต่างกันและจำนวนคนที่อยู่ในสถานะนั้น 
โดยสถานะโควิดของทุกคนเก็บอยู่ในพารามิเตอร์ covidStatusArray ซึ่งมี 3 สถานะ ได้แก่ 'negative and low risk', 'negative and high risk', 'positive' (case sensitive)

กรณี covidStatusArray เป็น null หรือ undefined ให้คืนค่าเป็น undefined

กรณี covidStatusArray เป็น empty array [ ] ให้คืนเป็น empty object { }

กรณี covidStatusArray ปรากฎรายการที่ไม่ใช่สถานะโควิดที่กำหนด ไม่ต้องนับรายการนั้น และถ้าไม่มีรายการอื่นที่ต้องนับ ให้คืนเป็น empty object { }

ตัวอย่างเช่น

covidStatusArray = ['negative and low risk', 'positive', 'negative and low risk', 'negative and high risk', 'positive', 'negative and low risk' ] return { 'negative and low risk': 3, positive: 2, 'negative and high risk': 1}
covidStatusArray = ['positive', 'negative and low risk', 'positive' ] return { 'negative and low risk’: 1, 'positive' : 2}
covidStatusArray = ['negative and low risk', 'positive', 'negative and low risk', 'abnormal', 'negative and high risk', 'positive', ' normal' ] return { 'negative and low risk’: 2, positive: 2, 'negative and high risk': 1}
covidStatusArray = ['covid'] return { }
covidStatusArray = [ ] return { }
covidStatusArray = null return undefined
covidStatusArray = undefined return undefined
*/