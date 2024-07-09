import {ITestData} from '../interface';
import {Request} from 'firebase-functions/v2/https';

export const HandlerTestData: ITestData<any, any>[] = [
  {
    testName: 'Should not throw an error if the request method is allowed',
    inputData: {
      request: {method: 'GET'} as Request,
      allowedMethods: ['GET', 'POST']},
    expectedData: {message: false},
  },
  {
    testName: 'Should throw an error if the request method is not allowed',
    inputData: {
      request: {
        method: 'DELETE'} as Request,
      allowedMethods: ['GET', 'POST'],
    },
    expectedData: {message: 'Method Not Allowed'},
  },
  {
    testName: 'Should throw an error if the request method is an empty string and not allowed',
    inputData: {
      request: {method: ''} as Request,
      allowedMethods: ['GET', 'POST'],
    },
    expectedData: {message: 'Method Not Allowed'},
  },
  {
    testName: 'Should throw an error if the data is empty',
    inputData: {
      request: {method: 'GET'} as Request,
      allowedMethods: [],
    },
    expectedData: {message: 'Allowed methods cannot be empty'},
  },
  {
    testName: 'Should throw an error if the data is undefined',
    inputData: {
      request: {} as Request,
      allowedMethods: ['GET']},
    expectedData: {
      message: 'Request method is not a string',
    },
  },
];
