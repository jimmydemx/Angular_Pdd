import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appAgo'
})
export class AgoPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(value){
        const seconds= Math.floor((+new Date()- +new Date())/1000);
        if(seconds<30){
        return("just now")
        }
        // interface intervals{
        //     [key:string]:any
        // }
        const intervals:{[key:string]:any}={
            year: 3600 * 24 * 365,
            month: 3600* 24 *30,
            Week: 3600*24*7,
            Day: 3600*24*1,
            hour:3600,
            minute:60,
            second:1
        }

        let counter=0;
        for(const unitName in intervals){
            if(intervals.hasOwnProperty(unitName)){
                const unitValue=intervals[unitName]
                counter= Math.floor(seconds/unitValue)
                if(counter>0){
                    return `${counter} ${unitName}前`
                }
                

            }

        }
    }

    return value;
  }

}
