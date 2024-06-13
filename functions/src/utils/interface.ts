export interface IResponse {
    status: number;
    message: string;
    data: string | object | Array<unknown> | null;
}

export interface ITestData<T, U> {
    testName: string;
    inputData: T;
    expectedData: U;
}
