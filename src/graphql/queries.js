/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($username: String!) {
    getUser(username: $username) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $username: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      username: $username
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getUserBoard = /* GraphQL */ `
  query GetUserBoard($username: String!) {
    getUserBoard(username: $username) {
      username
      board
      createdAt
      updatedAt
    }
  }
`;
export const listUserBoards = /* GraphQL */ `
  query ListUserBoards(
    $username: String
    $filter: ModelUserBoardFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserBoards(
      username: $username
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        username
        board
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
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
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $id: ID
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCompanies(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getJob = /* GraphQL */ `
  query GetJob($id: ID!) {
    getJob(id: $id) {
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
export const listJobs = /* GraphQL */ `
  query ListJobs(
    $id: ID
    $filter: ModelJobFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listJobs(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getApplication = /* GraphQL */ `
  query GetApplication($id: ID!) {
    getApplication(id: $id) {
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
export const listApplications = /* GraphQL */ `
  query ListApplications(
    $id: ID
    $filter: ModelApplicationFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listApplications(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        user {
          username
          email
          firstName
          LastName
          phoneNumber
          createdAt
          updatedAt
        }
        job {
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
  }
`;
