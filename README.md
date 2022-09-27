# MFS Customer API Automation with Postman
### IDE used
    Postman
    Visual Studio Code
### The definition of the Customers APIs are given in the following link:
    https://roadtosdet.com/step-by-step-testing-with-postman/

### Listing the APIs below that I have used for my testing:

|Method|                        Url	                                    | Decription	|Sample Valid Request Body|
|------|-------------------------------------------------------------------|--------------|------------------------|
| POST |https://customer-test-api.herokuapp.com/customer/api/v1/login      |User login |  JSON     |
| GET  |https://customer-test-api.herokuapp.com/customer/api/v1/list       |Get customer list |	 VOID  |
| GET  |https://customer-test-api.herokuapp.com/customer/api/v1/get/{{id}} |Get customer by ID | VOID   |
| POST |https://customer-test-api.herokuapp.com/customer/api/v1/create	|  Add new customer | JSON    |
| PUT  |https://customer-test-api.herokuapp.com/customer/api/v1/update/{{id}} |  Update customer information | JSON   |
| DEL  |https://customer-test-api.herokuapp.com/customer/api/v1/delete/{{id}} |Delete customer | VOID   |


## How to run all the tests in Postman?
### Import the collections into Postman and run:
     https://www.getpostman.com/collections/c32a31892589cef48426
### Or follow this documentation:
    https://documenter.getpostman.com/view/8218050/2s83f7FDFD
## Reports in Postman?
### Postman Interface
    PostmanInterface.png
### Report summary
    PostmanSummary.png
### Report details
    PostmanDetail-1.png
    PostmanDetail-2.png
    PostmanDetail-3.png
## Report in newman?
#### 1. Create a folder in your directory and open the folder in Visual Studio Code.
#### Run this command
    npm init -y
    npm i newman
#### 1. Create a "collection" (folder name can be variaable) folder into your project folder.
#### 2. Export the postman collection into "collection" folder and name it as "collection.json". Do not forget to persist all the variables before export.
#### Now run this command:
    npx newman run .\colllection\collection.json
#### Terminal Report
    Terminal_Interface.png
#### Newman Report
    Summary.png
    Total_Request.png
    