import type { InferGetStaticPropsType } from "next";

export function getStaticProps() {
  return {
    props: {
      xyz: "xyz",
    },
    revalidate: 5,
  };
}

export default function XyzPage({
  xyz,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{xyz}</div>;
}
