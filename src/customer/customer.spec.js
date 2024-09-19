// src/customer/customer.spec.js
const request = require("supertest");
const app = require("../app");

describe("Customer API", () => {
  it("should add a new customer", async () => {
    const response = await request(app)
      .post("/customer")
      .send({ name: "John Doe" });
    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe("John Doe");
  });

  it("should retrieve customers", async () => {
    const response = await request(app).get("/customer");
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
