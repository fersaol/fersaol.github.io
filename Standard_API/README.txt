This is a standard api meant to fit different webapps with minor changes. In order to achieve this goal 
the api has fixed parts, they are the different components that do not change while using the app, and 
variable parts that are the components that need to be adapted to the specific web app. The list of these 
different components are the following:

- CONSTANT:
	- node.js
	- express.js
	- postgres
	- middleware
	- http methods
	- mapping routes function
VARIABLE:
	- routes
	- method functions
	- ports
	- routes variables
	- .env file

questions:
JWT_SECRET,what is it used for?, 
is it a constant variable or does it change for every user, if it is meant to be a user variable?
I have thought that we could use a function that maps the database schema and collects all the 
possible routes in it so we can obtein quickly all the routes to configure the api's methods.