import { Box } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

export default function Home() {
  return (
    <>
      <Box mb="200px">NEXT-PREFETCH-TEST</Box>
      <Link href="/test1">test1</Link>
      <Link href="/test2">test2</Link>
      <Link href="/test3">test3</Link>
    </>
  );
}
