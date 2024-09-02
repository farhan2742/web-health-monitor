# Sprint 7 SkipQ Voyager Cohort 

In this sprint I used passport.js to create Json Web Token based authentication and authorization functionality of my application for both frontend and backend. I created the 
landing page, register page and login page using react and material ui. I also created a new users table and made the required modification to the backend to handle registeration 
login. Finally I updated all my cypress tests to account for authentication in my application and deployed the frontend on netlify instead of S3.

## Getting Started

These instructions will get you a copy of the project up and running on your cloud9 instance for development and testing
purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* AWS account
* TypeScript and NPM
* AWS CLI
* AWS SDK

### Installation

In order to properly setup your development environment and run this project follow the below steps

* Update the packages using following command
```bash
sudo apt update
npm install -g typescript
```
* Now update the python version used by the OS by updating the ~\.bashrc using Vim. Follow the below steps to complete it
```bash
vim ~\.bashrc
Press I to enter insert mode
Enter “alias cdk="npx aws-cdk"” at the end of the file.
Press ESC Key and enter :x to save and exit
source ~\.bashrc
```
* Update AWS CLI by running the following commands
```bash
Curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
Unzip awscliv2.zip
sudo ./aws/install
```
* Clone the Github repo using the below commands
```bash
	git clone <url of the forked repo>
```
* Install Requiremetns
```bash
npm install
```
* Compile to JS
```bash
npm run build
```

### Run project

Enter the following commands to run the project

```bash
npm start
```

### User Guide

#### Register

##### Click on "Register" button
![alt text](https://github.com/farhan2022skipq/Voyager/blob/main/farhan/sprint7/frontend/src/img/tutorial/register2.PNG)
##### Type the required data
![alt text](https://github.com/farhan2022skipq/Voyager/blob/main/farhan/sprint7/frontend/src/img/tutorial/register3.PNG)
##### Click on Sign Up
![alt text](https://github.com/farhan2022skipq/Voyager/blob/main/farhan/sprint7/frontend/src/img/tutorial/register4.PNG)
##### DONE
![alt text](https://github.com/farhan2022skipq/Voyager/blob/main/farhan/sprint7/frontend/src/img/tutorial/register5.PNG)

#### Login

##### Click on "Login" button
![alt text](https://github.com/farhan2022skipq/Voyager/blob/main/farhan/sprint7/frontend/src/img/tutorial/login2.PNG)
##### Type the required data
![alt text](https://github.com/farhan2022skipq/Voyager/blob/main/farhan/sprint7/frontend/src/img/tutorial/login3.PNG)
##### Click on Sign In
![alt text](https://github.com/farhan2022skipq/Voyager/blob/main/farhan/sprint7/frontend/src/img/tutorial/login4.PNG)
##### DONE
![alt text](https://github.com/farhan2022skipq/Voyager/blob/main/farhan/sprint7/frontend/src/img/tutorial/login5.PNG)

#### Add new URL to DB

##### Click on "Add New URL" button
![alt text](https://github.com/farhan2022skipq/Voyager/blob/main/farhan/sprint7/frontend/src/img/tutorial/add1.PNG)
##### Type a valid URL in the text box. i.e 'http://www.example.com'
![alt text](https://github.com/farhan2022skipq/Voyager/blob/main/farhan/sprint7/frontend/src/img/tutorial/add2.PNG)
##### Click on submit
![alt text](https://github.com/farhan2022skipq/Voyager/blob/main/farhan/sprint7/frontend/src/img/tutorial/add3.PNG)
##### DONE
![alt text](https://github.com/farhan2022skipq/Voyager/blob/main/farhan/sprint7/frontend/src/img/tutorial/add4.PNG)

#### Edit a URL in DB

##### Find the URL that you want to change in the Table
![alt text](https://github.com/farhan2022skipq/Voyager/blob/main/farhan/sprint7/frontend/src/img/tutorial/edit1.PNG)
##### Click on "EDIT" button in the URL row
![alt text](https://github.com/farhan2022skipq/Voyager/blob/main/farhan/sprint7/frontend/src/img/tutorial/edit2.PNG)
##### Type a valid URL in the text box. i.e 'http://www.example.com'
![alt text](https://github.com/farhan2022skipq/Voyager/blob/main/farhan/sprint7/frontend/src/img/tutorial/edit3.PNG)
##### Click on submit
![alt text](https://github.com/farhan2022skipq/Voyager/blob/main/farhan/sprint7/frontend/src/img/tutorial/edit4.PNG)
##### DONE
![alt text](https://github.com/farhan2022skipq/Voyager/blob/main/farhan/sprint7/frontend/src/img/tutorial/edit5.PNG)

#### Delete a URL from DB

##### Find the URL that you want to change in the Table
![alt text](https://github.com/farhan2022skipq/Voyager/blob/main/farhan/sprint7/frontend/src/img/tutorial/delete1.PNG)
##### Click on "DELETE" button in the URL row
![alt text](https://github.com/farhan2022skipq/Voyager/blob/main/farhan/sprint7/frontend/src/img/tutorial/delete2.PNG)
##### DONE
![alt text](https://github.com/farhan2022skipq/Voyager/blob/main/farhan/sprint7/frontend/src/img/tutorial/delete3.PNG)

#### View Sub Urls of one of the URLs in DB

##### Find the URL that you want to view Sub-URLs of
![alt text](https://github.com/farhan2022skipq/Voyager/blob/main/farhan/sprint7/frontend/src/img/tutorial/suburl1.PNG)
##### Click on "VIEW Sub-URLs" button in the URL row
![alt text](https://github.com/farhan2022skipq/Voyager/blob/main/farhan/sprint7/frontend/src/img/tutorial/suburl2.PNG)
##### DONE
![alt text](https://github.com/farhan2022skipq/Voyager/blob/main/farhan/sprint7/frontend/src/img/tutorial/suburl3.PNG)

#### View Availbility and Latency Stats of a URL in DB
##### Find the URL that you want to view availability and latency stats of
![alt text](https://github.com/farhan2022skipq/Voyager/blob/main/farhan/sprint7/frontend/src/img/tutorial/stats1.PNG)
##### Click on "VIEW Stats" button in the URL row
![alt text](https://github.com/farhan2022skipq/Voyager/blob/main/farhan/sprint7/frontend/src/img/tutorial/stats2.PNG)
##### DONE
![alt text](https://github.com/farhan2022skipq/Voyager/blob/main/farhan/sprint7/frontend/src/img/tutorial/stats3.PNG)

#### Logout

##### Click on "Logout" button on the top right cornor of the navbar
![alt text](https://github.com/farhan2022skipq/Voyager/blob/main/farhan/sprint7/frontend/src/img/tutorial/logout2.PNG)
##### Type the required data
![alt text](https://github.com/farhan2022skipq/Voyager/blob/main/farhan/sprint7/frontend/src/img/tutorial/logout3.PNG)
##### Click on Sign In

### Testing

Enter the following commands to test the project

```bash
npm run cypress
```

## Built With

* [AWS Cloud9 ](https://aws.amazon.com/cloud9/) - Used to setup a virtual development environment on the cloud
* [AWS CloudFormation](https://aws.amazon.com/cloudformation/) - Used to setup the need infrastructure using code (IaS)
* [AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/home.html) - SDK for AWS
* [AWS CLI](https://aws.amazon.com/cli/) - To deploy the stack in the cloud
* [AWS Lambda](https://aws.amazon.com/lambda/) - To store files in the cloud
* [AWS S3](https://aws.amazon.com/s3/) - To store files in the cloud
* [AWS CloudWatch](https://aws.amazon.com/cloudwatch/) - To monitor different metrics and set alarms on them
* [AWS SNS](https://aws.amazon.com/sns/) - To send notifiations when a CloudWatch Alarm is triggered
* [AWS DynamoDB](https://aws.amazon.com/dynamodb/) - To log records of the alarms
* [AWS CodeBuild](https://aws.amazon.com/codebuild/) - To automate application building
* [AWS CodePipeline](https://aws.amazon.com/codepipeline/) - To create pipeline for the application
* [AWS CodeDeploy](https://aws.amazon.com/codedeploy/) - To automate application deployment
* [AWS API Gateway](https://aws.amazon.com/api-gateway/) - To interact with our server
* [NodeJS](https://nodejs.org/en/) - JS runtime
* [Express JS](https://expressjs.com/) - JS serverside framework
* [MongoDB](https://www.mongodb.com/) - NOSQL Database
* [Jest](https://jestjs.io/) - JS Testing Library
* [Cypress](https://www.cypress.io/) - JS Testing Library
* [TypeScript](https://www.typescriptlang.org/) - Programming Language
* [React JS](https://reactjs.org/) - Frontend Framework
* [Meterial UI](https://mui.com/) - Frontend UI Framework
* [D3](https://d3js.org/) - Data Visualization Library
* [HighCharts](https://www.highcharts.com/) - Chart Library
* [Passport.js](https://www.passportjs.org/) - Authentication library
* [AWS SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html) - API to interact with AWS Services
* [Netlify](https://www.netlify.com/) - For Frontend deployment
* [Github](https://github.com/) - For Version Control

## Deployed on

* Frontend: Netlify
* Backend: AWS

## Authors

* [Farhan Kiyani](https://github.com/farhan2742)