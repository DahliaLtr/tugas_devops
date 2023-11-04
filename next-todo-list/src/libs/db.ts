import mysql from "serverless-mysql";

export const pool = mysql({
    config: {
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: parseInt(process.env?.DB_PORT ?? "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        insecureAuth: true,
    },
});
