import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import pg from 'pg';


export async function GET (req:NextRequest, res: NextResponse){
    const { userId } : { userId: string | null } = auth();
    const { Pool } = pg;
    const pool = new Pool({
        connectionString: process.env.POSTGRES_URL
    });
    const client = await pool.connect();

    try {
        const { rows } = await client.query('SELECT * FROM "Order" WHERE userId = $1', [userId]);
        return  NextResponse.json(rows);
    } catch (error){
        console.error("Error fetching orders:", error);
        throw error;
    } finally {
        client.release();
    }



}