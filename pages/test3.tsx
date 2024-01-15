import { Box } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

export default function Test3Page() {
  return (
    <Box as={Link} href="/links/piyo" prefetch={false}>
      piyo
    </Box>
  );
}
