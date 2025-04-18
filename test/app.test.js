const request = require("supertest");
const { app, server, name } = require("../app");

describe("GET /", () => {
  it("should return 200 status and the correct message", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe(`Welcome to shopyfy ${name}`);
  });
});

afterAll(() => {
  server.close();
});
