import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.setPreviewData({});
  res.end("Preview mode enabled");
}
