const express = require("express");
const request = require("supertest");
const app = express();


app.get('/', (req, res) => {
    res.send(`Hello ${req.query.name}`);
});


test("test express js", async () => {
    const response = await request(app)
        .get('/')
        .query({ name: 'john' });
    expect(response.text).toBe("Hello john");
});