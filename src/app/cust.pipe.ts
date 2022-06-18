import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'custpipe'
})
export class custPipe implements PipeTransform{
    transform(value:any) {
        // console.log(value)
        return value.toUpperCase()
        
    }

}