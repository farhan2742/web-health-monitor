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
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
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
cdk synth
cdk deploy
```

### Testing

Enter the following commands to test the project

```bash
cd ./Voyager/farhan/sprint6
npm run tests
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