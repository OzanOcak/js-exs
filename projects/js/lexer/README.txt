1- DomContentLoaded event listener is added to document and input event listemner
 added to textarea, the event listener internally calls refreshOutput function

2- refresh output function recieve charecters one by one, query selector html element 
 and addChild it and pass prettyParse(returns html element) method as an argument

 
