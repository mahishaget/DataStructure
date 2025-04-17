'use strict';
const restaurants={
    name:'Classico Italiano',
    Location:'Via Angelo Tavanti 23, Firenze, Italy',
    categories:['Italian','Pizzeria','Vegetarian','Orange Juice'],
    starterMenu:['Facciuttta','Brushetta','Garlic Bread','Caprese Salad'],
    mainMenu:['Pizza','pasta','Restauarnt','Risotto'],
    openingHours:{
        thu:
        {open:12,
            close:22
        },
        fri:
        {open:11,
            close:23
        },
        sat:
        {open:0,
        close:24
        },
},
    order:function(starterIndex,mainIndex){
        return [this.starterMenu[starterIndex],
        this.mainMenu[mainIndex]];
    },

};
const arr=[2,3,4];
const a=arr[0];
const b=arr[1];
const c=arr[2];
const[x,y,z ]=arr;
console.log(x,y,z);
console.log(arr);
let [main, ,secondry]= restaurants.categories;
console.log(main, secondry);
const temp = main;
main= secondry;
secondry=temp;
console.log(main);
console.log(secondry);

const [sarter,mainCourse]=restaurants.order(2,0);
console.log(sarter,mainCourse);
//Nested Destructuring
const nested =[2,4,[5,6]];
// const [i, ,j] =nested;
const [i, ,[j,k]]=nested;
console.log(i,j,k);
const[p=1,q=1,r=1]=[8,9];
console.log(p,q,r);
console.log(p,q,r);
const { name,openingHours,categories}=restaurants;
console.log(name,openingHours,categories);
console.log(restaurants);
console.log(name,openingHours,categories);
const{name:restaurantsName,openingHours:hours,categories:tags}=restaurants;
console.log(restaurantsName,hours,tags);
const {menu=[],starterMenu: starters=[]}=restaurants;
console.log(menu,starters);