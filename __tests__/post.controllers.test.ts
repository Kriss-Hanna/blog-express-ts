import request from "supertest";
import app from "../app";
import PostModel from "../src/models/post.models";

describe("Post Routes", () => {
  test("Should return all posts and return a 200 status code", async () => {
    /*  const posts = await PostModel.findAll(); */
    const date = new Date();

    const posts: PostModel = {
      id: "id n°1",
      title: "Post 1",
      imageurl: "Lorem ipsum",
      description: "Dolor sit amet",
      createdAt: date,
      updatedAt: date,
    };

    jest.spyOn(PostModel, "findAll").mockResolvedValue(posts);

    const res = await request(app).get("/posts");

    expect(res.status).toBe(200);
    expect(res.body).toEqual(posts);
  });

  it("should handle errors and return a 500 status code", async () => {
    jest
      .spyOn(PostModel, "findAll")
      .mockRejectedValue(new Error("Database error"));

    const res = await request(app).get("/posts");

    expect(res.status).toBe(500);
    expect(res.body).toEqual({ error: "Unable to get all posts." });
  });
});
