import dbConnect from '../lib/dbConnect';
import { NextResponse } from "next/server";

async function example(){
    try {
        await dbConnect()
        console.log("DB connected successfully")
        return NextResponse.json({
            message: "MongoDB Connected Successfully"
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "MongoDB Connection Failed"
        },
        {status:500}
    )
    }
}

example()