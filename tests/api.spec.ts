import { test, expect } from "@playwright/test";
import exp from "constants";

test("GET API Request", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users/2");
  expect(response.status()).toBe(200);

  const text = await response.text();
  expect(text).toContain("Janet");
});

test("POST API Request", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users", {
    data: {
      name: "morpheus",
      job: "leader",
    },
  });

  expect(response.status()).toBe(201);

  const text = await response.text();
  expect(text).toContain("morpheus");
});
