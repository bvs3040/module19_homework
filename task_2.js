function fun(name, obj){
    return thereIsProperty = name in obj;
}    

let thereIsProperty;
const testPro = {
    d:"protoProperty"
}
const any = Object.create(testPro);
any.a = 8;
any.b = "string";
any.c = true;

fun('d', any);
console.log(thereIsProperty)
