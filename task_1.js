function fun(obj){
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key +':'+ obj[key]); 
        }   
    }    
}

const testPro = {
    d:"protoProperty"
}
const any = Object.create(testPro);
any.a = 8;
any.b = "string";
any.c = 9;

fun(any);
