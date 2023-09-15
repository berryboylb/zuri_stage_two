import express, { Request, Response } from "express";
import request from "supertest";
import app from "../index";
import logger from "../utils/logger";

describe("Post Endpoints", () => {
  it("should create a new person", async () => {
    try {
      const res = await request(app).post("/api").send({
        fullName: "Mark Essien",
        email: "markessien3@test.com",
        phoneNumber: "+2349071077744",
        age: 20,
      });

      // Assert the response status code
      // expect(res.statusCode).toEqual(200);

      // Assert that the response body contains a "data" property
      expect(res.body).toHaveProperty("data");
    } catch (error) {
      logger.error(error);
      throw error; // Rethrow the error to fail the test
    }
  });
});

describe("Put Endpoints", () => {
  it("should update a new person", async () => {
    try {
      const res = await request(app).put("/api/65044c877d52c0f6d8c4db30").send({
        age: 30,
      });

      // Assert the response status code
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("data");
    } catch (error) {
      logger.error(error);
      throw error; // Rethrow the error to fail the test
    }
  });
});

describe("get Endpoints", () => {
  it("should get a person record", async () => {
    try {
      const res = await request(app).get("/api/65044c877d52c0f6d8c4db30");
      // Assert the response status code
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("data");
    } catch (error) {
      logger.error(error);
      throw error; // Rethrow the error to fail the test
    }
  });
});

describe("delete Endpoints", () => {
  it("should delete a person record", async () => {
    try {
      const res = await request(app).delete("/api/65044c877d52c0f6d8c4db30");
      // Assert the response status code
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("data");
    } catch (error) {
      logger.error(error);
      throw error; // Rethrow the error to fail the test
    }
  });
});
