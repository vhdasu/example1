/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudents = /* GraphQL */ `
  query GetStudents($id: ID!) {
    getStudents(id: $id) {
      id
      name
      grade
      firstname
      lastname
      createdAt
      updatedAt
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        grade
        firstname
        lastname
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEvents = /* GraphQL */ `
  query GetEvents($id: ID!) {
    getEvents(id: $id) {
      id
      adminid
      eventname
      eventcode
      eventpoints
      createdAt
      updatedAt
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        adminid
        eventname
        eventcode
        eventpoints
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudentEvents = /* GraphQL */ `
  query GetStudentEvents($id: ID!) {
    getStudentEvents(id: $id) {
      id
      studentid
      eventcode
      createdAt
      updatedAt
    }
  }
`;
export const listStudentEvents = /* GraphQL */ `
  query ListStudentEvents(
    $filter: ModelStudentEventsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        studentid
        eventcode
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAdministrators = /* GraphQL */ `
  query GetAdministrators($id: ID!) {
    getAdministrators(id: $id) {
      id
      administratorname
      createdAt
      updatedAt
    }
  }
`;
export const listAdministrators = /* GraphQL */ `
  query ListAdministrators(
    $filter: ModelAdministratorsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdministrators(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        administratorname
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
