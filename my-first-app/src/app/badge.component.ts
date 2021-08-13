import { Component, Input } from "@angular/core";


@Component({
    selector: 'app-badge',
    templateUrl: './badge.component.html'
})
export class BadgeComponent{

    @Input('title') caption : string = 'Votes'
    count: number = 0

    incrementCount(){
        console.log('on click event, current count is : ' + this.count);
        this.count++
    }

}