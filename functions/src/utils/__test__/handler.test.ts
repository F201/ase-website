import {sanitizeRequestMethod} from "../handler";
import { HandlerTestData } from "./testData";


describe("[UNIT] - sanitizeRequestMethod", () => {
    test.each(HandlerTestData)("$testName", async ({inputData, expectedData}) => {
        const {request, allowedMethods} = inputData;
        const {message} = expectedData;

        if (message) {
            await expect(sanitizeRequestMethod(request, allowedMethods)).rejects.toThrow(message);
        } else {
            await expect(sanitizeRequestMethod(request, allowedMethods)).resolves.not.toThrow();
        }
    });
});
