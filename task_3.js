let powerConsumption = 0;
function Devices(type, power){
    this.power = power,
    this.voltage = 220,
    this.type = type    
}
Devices.prototype.condition = function(type){
    if ((Math.floor(Math.random() * 2) === 0)) {
        console.log(`${type} is "off" `)
    } else {
        console.log(`${type} is "on"`);
        powerConsumption = powerConsumption + this.power;
    } 
    return powerConsumption;
}

function Irons(type, name, power, soleMaterial){
    this.type = type,
    this.name = name,
    this.power = power,
    this.soleMaterial = soleMaterial
};
function Teapots(type, name, power, boilTime){
    this.type = type,
    this.name = name,
    this.power = power,
    this.boilTime = boilTime
};

Irons.prototype = new Devices();
Teapots.prototype = new Devices();

const iron = new Irons ("Утюг", "Bosh", 3000, "teflon");
iron.specification = function(){
    for (let key in iron){
        if (typeof iron[key]!=="function"){
            console.log(key +"-"+ iron[key])
        }
    }
    return iron.condition(iron.type)
}

const teapot = new Teapots ("Чайник", "Skarlett", 1000, 2);
teapot.specification = function(){
    for (let key in teapot){
        if (typeof iron[key]!=="function"){
            console.log(key +"-"+ teapot[key])
        }
    }
    return teapot.condition(teapot.type)
}

iron.specification();
console.log("-----------------" );
teapot.specification();
console.log("-----------------" );
console.log("Нагрузка на сеть: "+powerConsumption+" Вт" );


