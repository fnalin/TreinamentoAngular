import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    //transform(value: any, args?: any) { assinatura da interface
    // transform(value: string, args?: any) {
    //     if(!value)
    //         return null;

    //         return value.substr(0,50) + '...';
    // }

    //transform(value: string, limit?: number) {
    transform(value: string, limit?: number) {
        debugger;
        if (!value)
            return null;

        let actualLimit = (limit) ? limit : 50;

        return value.trim().substr(0, actualLimit) + '...';
    }
}