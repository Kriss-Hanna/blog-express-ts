import request from "supertest";
import app from "../app";

describe("Post Routes", () => {
  test("Get all posts status code", async () => {
    const res = await request(app).get("/posts");
    expect(res.status).toBe(200);
  });
});
