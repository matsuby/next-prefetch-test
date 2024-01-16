import { MyLink2, MyLink3 } from "@/components/my-link";
import { Link } from "@chakra-ui/next-js";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Menu isOpen={isOpen}>
        <MenuButton
          as={MyLink3}
          href="/fuga"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          <Text>fuga</Text>
        </MenuButton>
        {isOpen && (
          <MenuList mt="-10px" onMouseEnter={onOpen} onMouseLeave={onClose}>
            <MenuItem as={MyLink3} href="/xyz">
              <Text>xyz</Text>
            </MenuItem>
          </MenuList>
        )}
      </Menu>
      <Menu>
        <MenuButton as={MyLink3} href="/hoge">
          hoge
        </MenuButton>
      </Menu>
      <Menu>
        <MyLink3 as={MenuButton} href="/piyo" prefetch={!isPreview}>
          piyo
        </MyLink3>
      </Menu>
    </>
  );
}
