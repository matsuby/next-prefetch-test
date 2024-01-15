import { MyLink2, MyLink3 } from "@/components/my-link";
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
        <MenuButton as={MyLink3} href="/hoge">
          hoge
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
