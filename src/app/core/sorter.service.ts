import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SorterService {

  constructor() { }

  direction : number = 1;
  property = null;

  sort(collection : any[], prop : any)
  {
    this.direction = this.property === prop ? this.direction * -1 : 1;
    this.property = prop;
    console.log(this.direction)
    collection.sort((a : any, b : any) =>
    {
      let aVal, bVal;

      if(prop.indexOf('.') > -1)
      {
        aVal = this.resolveProperty(prop, a)
        bVal = this.resolveProperty(prop, b)
      }
      else
      {
        aVal = a[prop]
        bVal = b[prop]
      }

      if(typeof(aVal) == 'string')
      {
        aVal = aVal.trim().toUpperCase()
        bVal = bVal.trim().toUpperCase()
      }

      if(aVal == bVal)
      {
        return 0;
      }
      else if(aVal < bVal)
      {
        return this.direction * -1;
      }
      else{
        return this.direction * 1;
      }
    })
  }

  resolveProperty(path : string, obj : any)
  {
    path.split('.').reduce((prev, curr) =>
    {
      return prev ? prev[curr] : undefined
    }, obj||self)
  }
}
