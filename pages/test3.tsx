import type { InferGetStaticPropsType } from "next";
import { MyLink1, MyLink2 } from "@/components/my-link";
import { Box } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

export function getStaticProps({ preview }: any) {
  return {
    props: {
      isPreview: !!preview,
    },
  };
}

export default function Test3Page({
  isPreview,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.info(`⚡️⚡️⚡️: isPreview=${isPreview}`);
  return (
    <>
      <Box as={MyLink1} href="/links/hoge">
        hoge
      </Box>
      <Box as={MyLink2} href="/links/fuga">
        fuga
      </Box>
      <MyLink2 href="/links/piyo">piyo</MyLink2>
      <Link
        href="/links/xyz"
        prefetch={isPreview ? undefined : false}
        data-is-preview={isPreview}
      >
        xyz
      </Link>
    </>
  );
}
