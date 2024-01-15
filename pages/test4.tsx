import { MyLink2 } from "@/components/my-link";
import { Link } from "@chakra-ui/next-js";
import { Menu, MenuButton } from "@chakra-ui/react";
import type { InferGetStaticPropsType } from "next";

export function getStaticProps({ preview }: any) {
  return {
    props: {
      isPreview: !!preview,
    },
  };
}

export default function Test4Page({
  isPreview,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Menu>
        <MenuButton as={MyLink2} href="/fuga">
          fuga
        </MenuButton>
      </Menu>
      <Menu>
        <MenuButton>
          <MyLink2 href="/hoge">hoge</MyLink2>
        </MenuButton>
      </Menu>
      <Menu>
        <MenuButton
          as={Link}
          href="/piyo"
          prefetch={isPreview ? false : undefined}
        >
          piyo
        </MenuButton>
      </Menu>
    </>
  );
}
