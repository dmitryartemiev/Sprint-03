'use strict'

function getFormattedDate(funcArg){

    return ( getCorrcctDate(funcArg) + '.' +
    getCorrcctMonth(funcArg) + '.' +
    funcArg.getFullYear() +
    ' ' + getCorrcctHours(funcArg)
     +':'+ getCorrcctMinutes(funcArg) + ' ' +
    getCorrectDay(funcArg));

    function getCorrcctDate(funcArg){
        let x = funcArg.getDate()
        if((String(x)).length == 1){
           return x = '0' + x;
        }
        return x;
    }
    function getCorrcctMonth(funcArg){
        let x = funcArg.getMonth()
        if((String(x)).length == 1){
           return x = '0' + (x+1);
        }
        return x + 1;
    }
    function getCorrcctHours(funcArg){
        let x = funcArg.getHours()
        if((String(x)).length == 1){
           return x = '0' + x;
        }
        return x ;
    }
    function getCorrcctMinutes(funcArg){
        let x = funcArg.getMinutes()
        if((String(x)).length == 1){
           return x = '0' + x;
        }
        return x ;
    }

     function getCorrectDay(funcArg){
         let x = funcArg.getDay()
         switch (x) {
             case 0 : return 'Sunday'
             case 1 : return 'Monday'
             case 2 : return 'Tuesday'
             case 3 : return 'Wednesday'
             case 4 : return 'Thursday'
             case 5 : return 'Friday'
             case 6 : return 'Saturday'
             default: return ''
         }

        }

}

const date0 = new Date(1993, 11, 1);
const date1 = new Date(1998, 0, -33);
const date2 = new Date('42 03:24:00');

console.log(getFormattedDate(date0));
console.log(getFormattedDate(date1));
console.log(getFormattedDate(date2));
