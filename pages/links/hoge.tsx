import type { InferGetStaticPropsType } from "next";

export function getStaticProps() {
  return {
    props: {
      hoge: "hoge",
    },
    revalidate: 5,
  };
}

export default function HogePage({
  hoge,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{hoge}</div>;
}
