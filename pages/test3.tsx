import { MyLink1, MyLink2 } from "@/components/my-link";
import { Box } from "@chakra-ui/react";

export default function Test3Page() {
  return (
    <>
      <Box as={MyLink1} href="/links/hoge">
        hoge
      </Box>
      <Box as={MyLink2} href="/links/fuga">
        fuga
      </Box>
      <MyLink2 href="/links/piyo">piyo</MyLink2>
    </>
  );
}
