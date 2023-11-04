import { pool } from "@/libs/db";
import { ApiResponse } from "@/libs/response";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, { params }: any) {
    const response = new ApiResponse();

    try {
        const { isComplete } = await request.json();

        const updateResult = await pool.query(
            "UPDATE tasks SET isComplete = ? WHERE id = ?",
            [isComplete ? 1 : 0, params.id]
        );

        const updateResultJSON = JSON.parse(JSON.stringify(updateResult));
        const affectedRows = updateResultJSON?.affectedRows ?? 0;

        if (affectedRows > 0) {
            const result = await pool.query(
                "SELECT * FROM tasks WHERE id = ?",
                params.id
            );

            response.update(200, "update completion successfully", result);

            return NextResponse.json(response.get());
        } else {
            throw Error("task can't updated completion");
        }
    } catch (e) {
        console.log(e);
        return NextResponse.json(response.get());
    }
}
