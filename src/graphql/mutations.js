/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      username
      email
      firstName
      LastName
      phoneNumber
      applications {
        items {
          id
          submittedDate
          nextInterviewDate
          personalNotes
          createdAt
          updatedAt
          userApplicationsId
          applicationJobId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      username
      email
      firstName
      LastName
      phoneNumber
      applications {
        items {
          id
          submittedDate
          nextInterviewDate
          personalNotes
          createdAt
          updatedAt
          userApplicationsId
          applicationJobId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      username
      email
      firstName
      LastName
      phoneNumber
      applications {
        items {
          id
          submittedDate
          nextInterviewDate
          personalNotes
          createdAt
          updatedAt
          userApplicationsId
          applicationJobId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUserBoard = /* GraphQL */ `
  mutation CreateUserBoard(
    $input: CreateUserBoardInput!
    $condition: ModelUserBoardConditionInput
  ) {
    createUserBoard(input: $input, condition: $condition) {
      username
      board
      createdAt
      updatedAt
    }
  }
`;
export const updateUserBoard = /* GraphQL */ `
  mutation UpdateUserBoard(
    $input: UpdateUserBoardInput!
    $condition: ModelUserBoardConditionInput
  ) {
    updateUserBoard(input: $input, condition: $condition) {
      username
      board
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserBoard = /* GraphQL */ `
  mutation DeleteUserBoard(
    $input: DeleteUserBoardInput!
    $condition: ModelUserBoardConditionInput
  ) {
    deleteUserBoard(input: $input, condition: $condition) {
      username
      board
      createdAt
      updatedAt
    }
  }
`;
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
      id
      isOfficial
      name
      logoURL
      locationHQ
      description
      numEmployees
      jobs {
        items {
          id
          creatorUsername
          creatorType
          title
          description
          type
          location
          publishedDate
          payRange
          payType
          createdAt
          updatedAt
          companyJobsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
      id
      isOfficial
      name
      logoURL
      locationHQ
      description
      numEmployees
      jobs {
        items {
          id
          creatorUsername
          creatorType
          title
          description
          type
          location
          publishedDate
          payRange
          payType
          createdAt
          updatedAt
          companyJobsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
      id
      isOfficial
      name
      logoURL
      locationHQ
      description
      numEmployees
      jobs {
        items {
          id
          creatorUsername
          creatorType
          title
          description
          type
          location
          publishedDate
          payRange
          payType
          createdAt
          updatedAt
          companyJobsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createJob = /* GraphQL */ `
  mutation CreateJob(
    $input: CreateJobInput!
    $condition: ModelJobConditionInput
  ) {
    createJob(input: $input, condition: $condition) {
      id
      company {
        id
        isOfficial
        name
        logoURL
        locationHQ
        description
        numEmployees
        jobs {
          nextToken
        }
        createdAt
        updatedAt
      }
      creatorUsername
      creatorType
      title
      description
      type
      location
      publishedDate
      payRange
      payType
      createdAt
      updatedAt
      companyJobsId
    }
  }
`;
export const updateJob = /* GraphQL */ `
  mutation UpdateJob(
    $input: UpdateJobInput!
    $condition: ModelJobConditionInput
  ) {
    updateJob(input: $input, condition: $condition) {
      id
      company {
        id
        isOfficial
        name
        logoURL
        locationHQ
        description
        numEmployees
        jobs {
          nextToken
        }
        createdAt
        updatedAt
      }
      creatorUsername
      creatorType
      title
      description
      type
      location
      publishedDate
      payRange
      payType
      createdAt
      updatedAt
      companyJobsId
    }
  }
`;
export const deleteJob = /* GraphQL */ `
  mutation DeleteJob(
    $input: DeleteJobInput!
    $condition: ModelJobConditionInput
  ) {
    deleteJob(input: $input, condition: $condition) {
      id
      company {
        id
        isOfficial
        name
        logoURL
        locationHQ
        description
        numEmployees
        jobs {
          nextToken
        }
        createdAt
        updatedAt
      }
      creatorUsername
      creatorType
      title
      description
      type
      location
      publishedDate
      payRange
      payType
      createdAt
      updatedAt
      companyJobsId
    }
  }
`;
export const createApplication = /* GraphQL */ `
  mutation CreateApplication(
    $input: CreateApplicationInput!
    $condition: ModelApplicationConditionInput
  ) {
    createApplication(input: $input, condition: $condition) {
      id
      user {
        username
        email
        firstName
        LastName
        phoneNumber
        applications {
          nextToken
        }
        createdAt
        updatedAt
      }
      job {
        id
        company {
          id
          isOfficial
          name
          logoURL
          locationHQ
          description
          numEmployees
          createdAt
          updatedAt
        }
        creatorUsername
        creatorType
        title
        description
        type
        location
        publishedDate
        payRange
        payType
        createdAt
        updatedAt
        companyJobsId
      }
      submittedDate
      nextInterviewDate
      personalNotes
      createdAt
      updatedAt
      userApplicationsId
      applicationJobId
    }
  }
`;
export const updateApplication = /* GraphQL */ `
  mutation UpdateApplication(
    $input: UpdateApplicationInput!
    $condition: ModelApplicationConditionInput
  ) {
    updateApplication(input: $input, condition: $condition) {
      id
      user {
        username
        email
        firstName
        LastName
        phoneNumber
        applications {
          nextToken
        }
        createdAt
        updatedAt
      }
      job {
        id
        company {
          id
          isOfficial
          name
          logoURL
          locationHQ
          description
          numEmployees
          createdAt
          updatedAt
        }
        creatorUsername
        creatorType
        title
        description
        type
        location
        publishedDate
        payRange
        payType
        createdAt
        updatedAt
        companyJobsId
      }
      submittedDate
      nextInterviewDate
      personalNotes
      createdAt
      updatedAt
      userApplicationsId
      applicationJobId
    }
  }
`;
export const deleteApplication = /* GraphQL */ `
  mutation DeleteApplication(
    $input: DeleteApplicationInput!
    $condition: ModelApplicationConditionInput
  ) {
    deleteApplication(input: $input, condition: $condition) {
      id
      user {
        username
        email
        firstName
        LastName
        phoneNumber
        applications {
          nextToken
        }
        createdAt
        updatedAt
      }
      job {
        id
        company {
          id
          isOfficial
          name
          logoURL
          locationHQ
          description
          numEmployees
          createdAt
          updatedAt
        }
        creatorUsername
        creatorType
        title
        description
        type
        location
        publishedDate
        payRange
        payType
        createdAt
        updatedAt
        companyJobsId
      }
      submittedDate
      nextInterviewDate
      personalNotes
      createdAt
      updatedAt
      userApplicationsId
      applicationJobId
    }
  }
`;
