part -1 

we gonna opitimise our code in this chapter

let talk about concept of   Custom hooks

a imp topic for cse  SIngle responsibility principal

all component we creted are diff funct and those have single resp 
for example a Restaurentmenu will have only job to fetch menus 
Header have only job to display oonlt headrer
for eg resCard have info from parent as props and it snly show restauren cards 

this will be also good for test as we break code into small small pieceis so we test  evry small small piece make test cases for piece1 ,piece2 so now if we written test cases and we will able to catch the bug very easily by just testing the specificpiece 
and if code is big we have to check whole big that where is bug coming from
also one more adv is more component we have we can use it in different place i.i reusability

so this way our code is reusable , good maintability   and testable if we follow SRP

so here we gonna make our csustom hooks and by this we can optimise our app and make it more modular  


---

now lets make an hook that useOnlinetats will show user is online or not and if not then we will make them notify pls check you internet connection 

now we can also use this hook in header not only body this is reusing / or reusability of code 


---

now let us talk what iof we have 1000 component in our app now that is not 
parcel is bundler and imp thing is it can do bundling . it takes all our file and make it into one . in dist folder index.js is generated as it is one js file which will run 

YOU can see in the network tab with the js option and it will only show one file 

so it is good or bad just having one js file??

while we have big applicatin it may many fils and the size of this file will increase 

since putting all 10000 files in to one file is abig problem also having 1000 comp directly it will be also be a problem browser will make 1000 calls 

then what should we do?
__> code splitting , chunking , dynamic bundling ,lazy loading , on demad loading , dynamic import 
yes we should go for smaller bundles 

so how can we make smaller bundls >> there should be logical seperation for a bundle i.e a bundle have  enought code for a feature and then we can split into chunks 


now our app is not big enought but still lets assume that it also ahve grocerry so lets first create   groceeryy component 


now how can we make diff bundle  for it
for it we will use lazy loading   cuse it will not first load the code for grocerry 
only when we will go to grocerry app then only code  will be called 
this is provided by react by named import 

for this we don't have to import Grocerry we will load it by  funtion `lazy()`
```js
//this take call back funtion in which we will call import() and put the path of component 
const Grocery = lazy(()=>import("../components/Grocery"))
//this import() is not same as import statement one import 
```

this one line of code has lot of power in it . it can do many magicla things in our app

now we cannot have grocery code in that index file but now when we click grocery a new file is called in network layer named grocery also the dist folder has seperate file for it 

we should also use suspence has react is fast and will not find grocery before grocery is loded 

so we  should wrap it in suspence and give them a fall back and check this in slow network 