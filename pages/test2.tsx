import { Link } from "@chakra-ui/next-js";

export default function Test2Page() {
  return (
    <Link href="/links/hoge" prefetch={false}>
      hoge
    </Link>
  );
}
