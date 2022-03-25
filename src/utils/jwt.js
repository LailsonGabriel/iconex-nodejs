import jwt from "jsonwebtoken";

const SEGREDO = "segredinho";

const sign = (payload) =>
  jwt.sign(payload, SEGREDO, {
    algorithm: "HS256",
  });

const verify = (token) => jwt.verify(token, SEGREDO);

module.exports = { sign, verify };
