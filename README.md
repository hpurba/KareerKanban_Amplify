# ABOUT KAREER KANBAN
KareerKanban is a personal job application management platform. It is intended to help your job search by managing the progress of your many job applications.
The management of the job applications are done in a kanban style. Each card on the kanban "board" is a job application. Each column which the card(s) is under indicates the progress of that job application. Each job application card holds further information of the job application such as: Job type, expected salary/compensation, company, recruiter contact, personal notes, next interview, offer, etc.

# Getting Started Guide (by Hikaru Purba)
To get started, clone this project. Execute the following commands to run locally:
```sh
yarn install

yarn build

yarn start
```

If you are having trouble, consider doing this:
```sh
yarn cache clean
```
Then remove the following:
- .cache
- node_modules
- yarn.lock


# GraphQL Schema Path
/Users/hikarupurba/Code/KareerKanban_Amplify/amplify/backend/api/KareerKanbanAPI/schema.graphql
Example Schema:
type Todo @model {
  id: ID!
  name: String!
  description: String
}


# Amplify helpful commands
```sh
amplify update auth
amplify pull
amplify push
amplify update
amplify pull --appId d2f7ycgor9x0lb --envName main
amplify publish
amplify hosting add
```

# Deleting an environment
Use this command to delete an app envirnment from the aws cli.
These are instructions for installing the AWS CLI: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
```sh
aws amplify delete-backend-environment --app-id d2f7ycgor9x0lb --environment-name main
```

# BELOW ARE ORIGINAL README.md INSTRUCTIONS FOR NEW PROJECTS
Disregard the following unless you want to learn the setup of a project like this.

# Gatsby Auth starter with AWS Amplify

This auth starter implements a basic authentication flow for signing up signing in users as well as protected client side routing using [AWS Amplify](https://amplify.aws). Auth features:
- User sign up
- User sign in
- Multi-factor Authentication
- User sign-out

![Gatsby Amplify](src/images/gatby-auth.gif)

# Deploy to the Amplify console

Click the button to deploy a fullstack app in your AWS account:

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/aws-samples/aws-amplify-gatsby-auth)

You can now continuously deploy changes to your frontend or backend and Amplify Console will automatically deploy those changes.

<!-- <img src="https://github.com/swaminator/gatsby-auth-starter-aws-amplify/blob/master/src/images/amplify-console.gif" width="800"/> -->
![Amplify Console](src/images/amplify-console.gif)


# Run locally

1. Create the project

```sh
gatsby new gatsby-amplify-auth https://github.com/dabit3/gatsby-auth-starter-aws-amplify
```

2. Change into the new directory

```sh
cd gatsby-amplify-auth
```

3. Change into the new directory

```sh
yarn
# or
npm install
```

4. Install & configure the AWS Amplify CLI.

```sh
npm install -g @aws-amplify/cli

amplify configure
```

> To see a video of how to configure the CLI, click [here](https://www.youtube.com/watch?v=fWbM5DLh25U)

5. Create a new AWS Amplify Project

```
amplify init
```

> Here, walk through the following steps:

- Enter a name for the project __YOURPROJECTNAME__
- Enter a name for the environment __master__
- Choose your default editor: __Visual Studio Code__ (or your editor of choice)
- Choose the type of app that you're building __javascript__
- What javascript framework are you using __react__
- Source Directory Path: __src__
- Distribution Directory Path: __public__
- Build Command: __npm run-script build__
- Start Command: __npm run-script develop__

6. Push the updated project configuration to AWS. It will deploy a CloudFormation template that has an Amazon Cognito resource that enables user authentication.

```sh
amplify push
```

7. Then you can run it by:
```sh
gatsby develop
```

### License

This library is licensed under the MIT-0 License. See the LICENSE file.
