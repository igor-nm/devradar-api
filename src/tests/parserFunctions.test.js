import { stringAsArray } from "../services/parserFunctions";

test("should return a array from a string", () => {
    const string = "product 1, product 2";
    const mock = ["product 1", "product 2"];

    expect(stringAsArray(string)).toMatchObject(mock);
});
