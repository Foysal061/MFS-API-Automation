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

## Test Cases Executed
    https://docs.google.com/spreadsheets/d/1NxFa7BF4CTkunjOhRn2tIRtdgotPcTV5/edit?usp=sharing&ouid=107282773794598265697&rtpof=true&sd=true

## How to run all the tests in Postman?
### Import the collections into Postman and run:
     https://www.getpostman.com/collections/c32a31892589cef48426
## Or follow this postman documentation:
    https://documenter.getpostman.com/view/8218050/2s83f7FDFD
## Postman Reports:
### Postman Interface
![PostmanInterface](https://user-images.githubusercontent.com/48391584/192663550-1c65a827-e5e1-4249-801e-2271592501b4.png)

### Report summary
![PostmanSummary](https://user-images.githubusercontent.com/48391584/192663613-4ca1439f-abfa-4123-9c2b-a6201be1e85f.png)

### Report details
![PostmanDetail-1](https://user-images.githubusercontent.com/48391584/192663677-1294c6a7-17b6-455b-9a84-81ac8b3432ae.png)
![PostmanDetail-2](https://user-images.githubusercontent.com/48391584/192663699-a888e61f-ab12-402f-8858-ac415a08e2ce.png)
![PostmanDetail-3](https://user-images.githubusercontent.com/48391584/192663710-40433a87-5d1d-46c0-8f33-abd6748ac4e0.png)

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
![Terminal_Interface](https://user-images.githubusercontent.com/48391584/192663802-9f4f2663-1ee7-497b-a719-a68c6d168644.png)

#### Newman Report
![Summary](https://user-images.githubusercontent.com/48391584/192663820-155d1f93-4f06-47de-9619-893ba1f6e0b0.png)

![Total_Request](https://user-images.githubusercontent.com/48391584/192663835-8ddc1f9e-9ee6-408a-a2b3-e7e9b4ad0247.png)
