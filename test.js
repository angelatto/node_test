var i;
for(i = 1; i < 4; i ++){
    for(j = 1; j < 10; j++){
        console.log(i +" * "+ j + "=" + i*j);
    }
}

function Clazz(msg){
    this.name = 'i an class';
    this.message = msg;

    message2 = 'find me';
    this.print = function(){
        console.log(message2);
    }
}

var myClazz = new Clazz('GOOD TO SEE U!');
console.log(myClazz.message);
myClazz.print();