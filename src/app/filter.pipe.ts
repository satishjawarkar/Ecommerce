import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterText',
  
})
export class FilterPipe implements PipeTransform {

  transform(value : any[] , searchproduct:any,propName:string): any[] {
   const result:any =[]
   if(!value || searchproduct==='' ||propName===''){
       return value;
   }
    value.forEach((a:any)=>{
        if(a[propName].trim().toLowerCase().includes(searchproduct.toLowerCase())){
            result.push(a);
        }
    });
    return result;
  }

}
