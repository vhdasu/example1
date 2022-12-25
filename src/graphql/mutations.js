/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createStudents = /* GraphQL */ `
  mutation CreateStudents(
    $input: CreateStudentsInput!
    $condition: ModelStudentsConditionInput
  ) {
    createStudents(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateStudents = /* GraphQL */ `
  mutation UpdateStudents(
    $input: UpdateStudentsInput!
    $condition: ModelStudentsConditionInput
  ) {
    updateStudents(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteStudents = /* GraphQL */ `
  mutation DeleteStudents(
    $input: DeleteStudentsInput!
    $condition: ModelStudentsConditionInput
  ) {
    deleteStudents(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createEvents = /* GraphQL */ `
  mutation CreateEvents(
    $input: CreateEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    createEvents(input: $input, condition: $condition) {
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
export const updateEvents = /* GraphQL */ `
  mutation UpdateEvents(
    $input: UpdateEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    updateEvents(input: $input, condition: $condition) {
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
export const deleteEvents = /* GraphQL */ `
  mutation DeleteEvents(
    $input: DeleteEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    deleteEvents(input: $input, condition: $condition) {
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
export const createStudentEvents = /* GraphQL */ `
  mutation CreateStudentEvents(
    $input: CreateStudentEventsInput!
    $condition: ModelStudentEventsConditionInput
  ) {
    createStudentEvents(input: $input, condition: $condition) {
      id
      studentid
      eventcode
      createdAt
      updatedAt
    }
  }
`;
export const updateStudentEvents = /* GraphQL */ `
  mutation UpdateStudentEvents(
    $input: UpdateStudentEventsInput!
    $condition: ModelStudentEventsConditionInput
  ) {
    updateStudentEvents(input: $input, condition: $condition) {
      id
      studentid
      eventcode
      createdAt
      updatedAt
    }
  }
`;
export const deleteStudentEvents = /* GraphQL */ `
  mutation DeleteStudentEvents(
    $input: DeleteStudentEventsInput!
    $condition: ModelStudentEventsConditionInput
  ) {
    deleteStudentEvents(input: $input, condition: $condition) {
      id
      studentid
      eventcode
      createdAt
      updatedAt
    }
  }
`;
export const createAdministrators = /* GraphQL */ `
  mutation CreateAdministrators(
    $input: CreateAdministratorsInput!
    $condition: ModelAdministratorsConditionInput
  ) {
    createAdministrators(input: $input, condition: $condition) {
      id
      administratorname
      createdAt
      updatedAt
    }
  }
`;
export const updateAdministrators = /* GraphQL */ `
  mutation UpdateAdministrators(
    $input: UpdateAdministratorsInput!
    $condition: ModelAdministratorsConditionInput
  ) {
    updateAdministrators(input: $input, condition: $condition) {
      id
      administratorname
      createdAt
      updatedAt
    }
  }
`;
export const deleteAdministrators = /* GraphQL */ `
  mutation DeleteAdministrators(
    $input: DeleteAdministratorsInput!
    $condition: ModelAdministratorsConditionInput
  ) {
    deleteAdministrators(input: $input, condition: $condition) {
      id
      administratorname
      createdAt
      updatedAt
    }
  }
`;
