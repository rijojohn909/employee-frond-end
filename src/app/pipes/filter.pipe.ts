import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allemployees:[], searchKey:string, propName:string): any {
    const result:any=[]
    if(!allemployees || searchKey=='' || propName==''){
      return allemployees
    }
    allemployees.forEach((employee:any)=>{
      if(employee[propName].trim().toLowerCase().includes(searchKey.toLowerCase())){
        result.push(employee)
      }
    })


    return result;
  }
  }


