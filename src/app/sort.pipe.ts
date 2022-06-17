import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {
    transform(value: any, args?: any) {
        if (args === 'prodName') {
            return value.sort((a: any, b: any) => {
                if (a.name < b.name) {
                    return -1;
                } else if (a.name > b.name) {
                    return 1;
                } else {
                    return 0;
                }
            })
        } else if (args === 'price') {
            return value.sort((a: any, b: any) => {
                if (a.price < b.price) {
                    return -1;
                } else if (a.price > b.price) {
                    return 1;
                } else {
                    return 0;
                }
            })
        }
        return value;   
    }
}