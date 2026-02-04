"use server";
import { neon } from "@neondatabase/serverless";

export async function CreateUser(
  userName: string,
  password: string,
  email: string,
) {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set 🫵😂");
  }
  const sql = neon(process.env.DATABASE_URL);

  const hashedPassword = await hashPassword(password);

  async function hashPassword(password: string) {
    try {
      const result = await sql`
            SELECT crypt(${password}, gen_salt('md5')) AS hash;
            `;
      return result[0].hash;
    } catch (error) {
      console.error(error);
      return {
        message: "Error hashing password",
      };
    }
  }

  try {
    await sql`
        INSERT INTO users(
        username,
        hashed_password,
        email,
        created_at,
        updated_at,
        is_verified
        )
        VALUES (
        ${userName},
        ${hashedPassword},
        ${email},
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP,
        'False'
        )
        `;
  } catch (error) {
    console.error(error);
    return {
      message: "Error inserting user into database",
    };
  }
}
