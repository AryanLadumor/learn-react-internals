part-1
->Higher Order Components
    funtion that take a comp and return a comp
    i.e. that function enchancing that comp nad re turn it  b g

    now we will build that one free dlivery tag in our card

part-2 uncontrolled and controled components / lifting the state uo
react application has 2 layers --> 1. UI layer 2.data Layer  and UI layer is powered by data layer
UI layes mostly consist of jsx
data layer ->  props ,local variable state  , curly braces
if we know how to manage our data then our app will be very perfomance

now we will create acoordian for it

part-3
Lifitng up the state
making accodian advance i.e if any accodian open then remaning will close 
so 1st install react devv extensoion and watch the data and ui layer 
now the thing is all categories have their own state(showItem) and to make one open and every other close , we ca't do it in same component because a component can't have excess to state of sibling component so three fore state of those component should be lifted up i.e. control will be given to their parent
here MenuItem have control itself but we will give this control to their parents to control all of the category
so no wour component become controlled component cus it state is handled by the parent now 
this is what controlled and uncontrolled component mean , so restaurentcategory is controlled component 