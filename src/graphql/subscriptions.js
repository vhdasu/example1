/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStudents = /* GraphQL */ `
  subscription OnCreateStudents($filter: ModelSubscriptionStudentsFilterInput) {
    onCreateStudents(filter: $filter) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStudents = /* GraphQL */ `
  subscription OnUpdateStudents($filter: ModelSubscriptionStudentsFilterInput) {
    onUpdateStudents(filter: $filter) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStudents = /* GraphQL */ `
  subscription OnDeleteStudents($filter: ModelSubscriptionStudentsFilterInput) {
    onDeleteStudents(filter: $filter) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEvents = /* GraphQL */ `
  subscription OnCreateEvents($filter: ModelSubscriptionEventsFilterInput) {
    onCreateEvents(filter: $filter) {
      id
      eventname
      eventcode
      eventpoints
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEvents = /* GraphQL */ `
  subscription OnUpdateEvents($filter: ModelSubscriptionEventsFilterInput) {
    onUpdateEvents(filter: $filter) {
      id
      eventname
      eventcode
      eventpoints
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEvents = /* GraphQL */ `
  subscription OnDeleteEvents($filter: ModelSubscriptionEventsFilterInput) {
    onDeleteEvents(filter: $filter) {
      id
      eventname
      eventcode
      eventpoints
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStudentEvents = /* GraphQL */ `
  subscription OnCreateStudentEvents(
    $filter: ModelSubscriptionStudentEventsFilterInput
  ) {
    onCreateStudentEvents(filter: $filter) {
      id
      studentid
      eventcode
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStudentEvents = /* GraphQL */ `
  subscription OnUpdateStudentEvents(
    $filter: ModelSubscriptionStudentEventsFilterInput
  ) {
    onUpdateStudentEvents(filter: $filter) {
      id
      studentid
      eventcode
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStudentEvents = /* GraphQL */ `
  subscription OnDeleteStudentEvents(
    $filter: ModelSubscriptionStudentEventsFilterInput
  ) {
    onDeleteStudentEvents(filter: $filter) {
      id
      studentid
      eventcode
      createdAt
      updatedAt
    }
  }
`;
