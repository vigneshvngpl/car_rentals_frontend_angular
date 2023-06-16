import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allVehicle:any=[],vehiclenme:string,name:string): any {

    const result:any=[]
    if(!allVehicle||vehiclenme==''||name==''){
      return allVehicle
    }
    else{
      allVehicle.forEach((item:any)=>{
        if(item[name].trim().toLowerCase().includes(vehiclenme.trim().toLowerCase())){
          result.push(item)
        }
      })
    }
    return result;
  }

}
