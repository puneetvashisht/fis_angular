// imports required
import { Component } from "@angular/core";


// annotated as @component
@Component({
    selector: 'app-message',
    template: `
        <h1>Message component</h1>
    `
})

// class 
export class MessageComponent{

    // String text = "Good Afternoon!!"
    text: string = "Good Afternoon!!"
}