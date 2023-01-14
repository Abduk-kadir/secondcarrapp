let name='jack';
age=24;
techs=['React','Node','Javascript'];
function knowsTech(tech){
    console.log('in knows function',tech)
    return techs.find(elem=>elem==tech)?true:false
}

module.exports={name,age,techs};
module.exports.hello='hello'
module.exports.funs={knowsTech}

//module.exports.data={name,age,techs};
//module.exports.function={knowsTech}
    




