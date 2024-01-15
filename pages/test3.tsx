import { Box } from "@chakra-ui/react";
import { Link, type LinkProps } from "@chakra-ui/next-js";
import { useRouter } from "next/router";

export default function Test3Page() {
  return (
    <Box as={MyLink} href="/links/piyo">
      piyo
    </Box>
  );
}

function MyLink({ children, href, ...props }: LinkProps) {
  const { isPreview } = useRouter();

  return (
    <Link href={href} prefetch={!!isPreview} {...props}>
      {children}
    </Link>
  );
}
