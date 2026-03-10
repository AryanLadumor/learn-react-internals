part-1
so here we gonna know the prop realing leran it from docs
now we are gonna learn reactcontext a imp thing provided by react to manage our data

think of data which is requredd every where--> loggen in user so we need this thing all over and passing it with prop will be hard
another eg --> theme light or dark
so we hold all this data in context and then we provide it every where this is solution for props deling

we have fetch data in header and about us page with this congtext
both are consumed in a different way

now what if we want to change the context or modify

so now we will use context provider which it can change the value we give it in provider
implemented in App Layout

```jsx
<UserContext.Provider value={{ loggedInUser: userName }}>
  {" "}
  {/* //! here the value of looggedIn user will be changedto Aryan in and provided in  Whole app */}
  <div className="app">
    <Header />
    <Outlet />
  </div>
</UserContext.Provider>
```

```jsx
<div className="app">

  <UserContext.Provider value={{ loggedInUser: userName }}>
    {/* //! here the value of looggedIn user will be changedto Aryan  and  will only be be provided in header */}
    <Header />
  </UserContext.Provider>

    {/*Here the value will be DefaultUser outside the context provider*/}
  <Outlet />
</div>
```


```jsx
<div className="app">
    //Here value will be Default User
  <UserContext.Provider value={{ loggedInUser: userName }}>
    {/* //! here the value of looggedIn user will be changedto Aryan  and  will only be be provided in header */}
    <Header />
  </UserContext.Provider>

   <UserContext.Provider value={{ loggedInUser: "Aum " }}>
    {/* //! here the value of looggedIn user will be changed to Aum  and  will only be be provided in header */}
  <Outlet />
  </UserContext.Provider>

</div>
```



Now let make user input box and chage data accoding to the input box i
so we can also pass setUsername funtionn and use it every where like we did it in contactus page

nextChapter --< redux>
for mid size app context is great also in large app but redux is become a commo pattern 
and redux is scalable 

1 : 11 : 40-45