# Background

This project has been built to illustrate a design supplied by the client on Figma.

# Server Requirements

* This project runs best on an Apache server in order to execute the PHP backend scripts.

# Languages and Frameworks
1. Typescript
2. PHP
3. ReactJS
4. SQLite
5. Bootstrap 5
6. Jquery 3

# Running the project
* Clone or download and unzip all the project files inside the html/www folder of your Apache server.
* Create a virtual host to avoid CORS on some of the files.
* Access the virtual host via your browser and everything should start working as expected.

------------------

# Reason behing CSS Framework

I choose Bootstrap because it is a common CSS framework which handle reponsiveness out of the box.

# Any issues experienced

* I had built the solution using Boostrap, HTML, Jquery and completely missed the part where I need to use ReactJS instead.
* As a result I now have the Request for demo page in both ReactJS and normal HTML. All form validations done separately and working.
* Using standalone ReactJS is a pain. I learned quite a lot when trying to brings the components together.

# Done differently

* I would have added better response messages and error handling.

# Request for demo

* The request.html page is built in Boostrap and Jquery.
* The react-request.html page is built with ReactJS.