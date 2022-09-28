# MFS Customer API Automation with Postman
### IDE used
    Postman
    Visual Studio Code
### The definition of the Customers APIs are given in the following link:
    https://roadtosdet.com/step-by-step-testing-with-postman/

### Listing the APIs below that I have used for my testing:
![192659400-e791a6b0-04fd-4c04-8d25-bc12c9f76ab2](https://user-images.githubusercontent.com/48391584/192659689-5d5f6db4-b134-4449-be96-da45d5fdfa76.png)


|Method|                        Url	                                    | Decription	|Sample Valid Request Body|
|------|-------------------------------------------------------------------|--------------|------------------------|
| POST |https://customer-test-api.herokuapp.com/customer/api/v1/login      |User login |  JSON     |
| GET  |https://customer-test-api.herokuapp.com/customer/api/v1/list       |Get customer list |	 VOID  |
| GET  |https://customer-test-api.herokuapp.com/customer/api/v1/get/{{id}} |Get customer by ID | VOID   |
| POST |https://customer-test-api.herokuapp.com/customer/api/v1/create	|  Add new customer | JSON    |
| PUT  |https://customer-test-api.herokuapp.com/customer/api/v1/update/{{id}} |  Update customer information | JSON   |
| DEL  |https://customer-test-api.herokuapp.com/customer/api/v1/delete/{{id}} |Delete customer | VOID   |

## Test Cases Executed!

    https://docs.google.com/spreadsheets/d/1NxFa7BF4CTkunjOhRn2tIRtdgotPcTV5/edit?usp=sharing&ouid=107282773794598265697&rtpof=true&sd=true

## How to run all the tests in Postman?
### Import the collections into Postman and run:
     https://www.getpostman.com/collections/c32a31892589cef48426
### Or follow this documentation:
    https://documenter.getpostman.com/view/8218050/2s83f7FDFD
## Reports in Postman?
### Postman Interface
![PostmanDetail-1](https://github.com/Foysal061/MFS-API-Automation/blob/main/images/PostmanDetail-2.png)
    
### Report summary
    https://drive.google.com/drive/folders/1A4c0di2W3xFEG1amhl2ZVAl6UEcCgw94
### Report details
    PostmanDetail-1.png
    PostmanDetail-2.png
    PostmanDetail-3.png

![PostmanDetail-2](https://user-images.githubusercontent.com/48391584/192659947-0d4ee53a-db62-44db-98c7-ddad2068f2aa.png)

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
