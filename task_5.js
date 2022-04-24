let powerConsumption = 0;

class Devices{
    constructor(type, power){
        this.type = type;   
        this.power = power;
        this.voltage = 220;
    } 
    condition = function(type){
        if ((Math.floor(Math.random() * 2) === 0)) {
            console.log(`${type} is "off" `)
        } else {
            console.log(`${type} is "on"`);
            powerConsumption = powerConsumption + this.power;
        } 
        return powerConsumption;
    }
}


class Irons extends Devices{
    constructor(type, name, power, soleMaterial){
        super(type, power);
        this.name = name;
        this.soleMaterial = soleMaterial;
    }
}
class Teapots extends Devices{
    constructor(type, name, power, boilTime){
        super(type, power);
        this.name = name;
        this.boilTime = boilTime;
    }
}


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