import { pool } from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";
import { ApiResponse } from "@/libs/response";

const API_URL = process.env.API_URL;

export async function GET() {
    const response = new ApiResponse();
    try {
        const result = await pool.query("SELECT * FROM tasks ORDER BY id DESC");

        response.update(200, "Fetch all task successfully", result);

        return NextResponse.json(response.get());
    } catch (error: any) {
        response.updateStatus(StatusCodes.BAD_REQUEST, error.message);
        console.log(error);
        return NextResponse.json(response.get(), {
            status: StatusCodes.BAD_REQUEST,
        });
    }
}

export async function POST(request: NextRequest) {
    const response = new ApiResponse();

    try {
        const { task } = await request.json();

        // Insert data to database
        const insertResult = await pool.query(
            "INSERT INTO tasks SET task = ?",
            task
        );

        // Read data by ID for return
        const insertResultJSON = JSON.parse(JSON.stringify(insertResult));
        const affectedRows = insertResultJSON?.affectedRows ?? 0;
        const insertId = insertResultJSON?.insertId ?? -1;
        console.log(affectedRows, insertId);

        // Validate task have been inserted and insert id greater than 0
        if (affectedRows > 0 && insertId > 0) {
            // Read data by ID
            const result = await pool.query(
                "SELECT * FROM tasks WHERE id = ?",
                insertId
            );

            response.update(200, "Create a new task successfully", result);

            return NextResponse.json(response.get());
        } else {
            throw Error("task can't insert to database");
        }
    } catch (error: any) {
        response.updateStatus(StatusCodes.BAD_REQUEST, error.message);

        return NextResponse.json(response.get(), {
            status: StatusCodes.BAD_REQUEST,
        });
    }
}
