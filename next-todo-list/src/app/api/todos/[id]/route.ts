import { pool } from "@/libs/db";
import { ApiResponse } from "@/libs/response";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
    const response = new ApiResponse();

    try {
        const result = await pool.query("SELECT * FROM tasks WHERE id = ?", [
            params.id,
        ]);

        response.update(200, "fetch a task data successfully", result);
        return NextResponse.json(response.get());
    } catch (e) {
        return NextResponse.json(response.get());
    }
}

export async function PUT(request: NextRequest, { params }: any) {
    const response = new ApiResponse();

    try {
        const { task } = await request.json();

        const updateResult = await pool.query(
            "UPDATE tasks SET task = ? WHERE id = ?",
            [task, params.id]
        );

        const updateResultJSON = JSON.parse(JSON.stringify(updateResult));
        const affectedRows = updateResultJSON?.affectedRows ?? 0;

        if (affectedRows > 0) {
            const result = await pool.query(
                "SELECT * FROM tasks WHERE id = ?",
                params.id
            );

            response.update(200, "update task successfully", result);

            return NextResponse.json(response.get());
        } else {
            throw Error("task can't updated");
        }
    } catch (e) {
        return NextResponse.json(response.get());
    }
}

export async function DELETE(request: NextRequest, { params }: any) {
    const response = new ApiResponse();

    try {
        await pool.query("DELETE FROM tasks WHERE id = ?", [params.id]);

        response.update(200, "delete task successfully");
        return NextResponse.json(response.get());
    } catch (e) {
        return NextResponse.json(response.get());
    }
}
