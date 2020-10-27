# NewApp - First App using Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## The Idea

The idea of the first app is to make a customer's orders list which I can filter out by typing in a search bar.
To learn all that I can in Angular, I will try to also use Routing and services.

## Project Details

### Start Date
I'm starting on 06-10-2020
I will, if I remember, update my progress here as I go in order to keep a log of when I learnt what.

### Updates

<em>Date 6-10-2020</em>
End of Day

Created lots of Components and Modules
Used interfaces.
Added a few example customers which are being sent from one component to the customers list component.
Used @Input() and @Output() properties.
Used *ngIf, *ngFor and ngModule
Filter is functional.

<em>Date 7-10-2020 to 8-10-2020 (1.43AM)</em>
End of Day

Created a Service to fetch data of the customers locally.
~~Found a bug in my tutorial.
HttpClientModule needs to be imported in the app.module for this to work.
Spent a few hours figuring out what was wrong.~~
Nah, it was just my stupidity. Didn't notice the part when we had to include HttpClientModule in core.module.
Next up, Routing.

<em>Date 8-10-2020</em>
<em>5.00 pm</em>

Added another service - Sorter Service.
It sorts the table based on whatever property you click on.

<em>Date 26-10-2020</em>
After all the procrastination and things that came up....

Done with Routing using harcoded routerLinks = 'here' and dynamic \[routerLinks] = "\['here',something.idOrAnything]"

<em>Date 27-10-2020</em>
Built the Angular App.
Adding to Github pages.
It requires the following code.

```
npm install -g angular-cli-ghpages
ng build --prod --base-href "https://CrypticSocket.github.io/LearningAngular"
ngh --dir dist/NewApp
```

Github pages is ready!

<em>Project Complete</em>

### Work List
~~Create Modules~~
~~Create Components~~
~~Filter Box~~
~~Example Customers~~
~~Use Directives - ngIf, ngFor, ngModule~~
~~Use Interfaces~~
~~Use Services~~
~~Use Routing~~
Build
Github Pages!!!