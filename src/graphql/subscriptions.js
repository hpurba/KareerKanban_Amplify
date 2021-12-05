/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateUserBoard = /* GraphQL */ `
  subscription OnCreateUserBoard {
    onCreateUserBoard {
      username
      board
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserBoard = /* GraphQL */ `
  subscription OnUpdateUserBoard {
    onUpdateUserBoard {
      username
      board
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserBoard = /* GraphQL */ `
  subscription OnDeleteUserBoard {
    onDeleteUserBoard {
      username
      board
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany {
    onCreateCompany {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany {
    onUpdateCompany {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany {
    onDeleteCompany {
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
export const onCreateJob = /* GraphQL */ `
  subscription OnCreateJob {
    onCreateJob {
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
export const onUpdateJob = /* GraphQL */ `
  subscription OnUpdateJob {
    onUpdateJob {
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
export const onDeleteJob = /* GraphQL */ `
  subscription OnDeleteJob {
    onDeleteJob {
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
export const onCreateApplication = /* GraphQL */ `
  subscription OnCreateApplication {
    onCreateApplication {
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
export const onUpdateApplication = /* GraphQL */ `
  subscription OnUpdateApplication {
    onUpdateApplication {
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
export const onDeleteApplication = /* GraphQL */ `
  subscription OnDeleteApplication {
    onDeleteApplication {
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
