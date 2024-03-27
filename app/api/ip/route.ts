import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return Response.json({
    ip: req.ip,
    xForwardedFor: req.headers.get("X-Forwarded-For"),
  });
}
