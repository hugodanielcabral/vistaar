import request from "supertest";
import app from "../../app";

describe("Province Controllers", () => {
  describe("GET /api/province", () => {
    test("should return status 200 and JSON content", async () => {
      await request(app)
        .get("/api/province")
        .expect("Content-Type", /json/)
        .expect(200);
    });

    test("should return an array of provinces with expected properties", async () => {
      const response = await request(app)
        .get("/api/province")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body[0]).toHaveProperty("province_id");
      expect(response.body[0]).toHaveProperty("name");
    });
  });

  describe("GET /api/province/:id", () => {
    test("should return status 200 for a valid province ID", async () => {
      await request(app)
        .get("/api/province/24")
        .expect("Content-Type", /json/)
        .expect(200);
    });

    test("should return Tucumán province when ID is 24", async () => {
      const province_id = 24;
      const expectedProvinceName = "Tucumán";

      const response = await request(app)
        .get(`/api/province/${province_id}`)
        .expect("Content-Type", /json/)
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBe(1);
      expect(response.body[0]).toHaveProperty("province_id", province_id);
      expect(response.body[0]).toHaveProperty("name", expectedProvinceName);
    });

    test("should return 404 when province doesn't exist", async () => {
      await request(app)
        .get("/api/province/999")
        .expect("Content-Type", /json/)
        .expect(404);
    });

    test("should return 400 for invalid ID format", async () => {
      await request(app)
        .get("/api/province/abc")
        .expect("Content-Type", /json/)
        .expect(400);
    });
  });
});
