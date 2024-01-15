import type { InferGetStaticPropsType } from "next";

export function getStaticProps() {
  return {
    props: {
      huga: "piyo",
    },
  };
}

export default function HugaPage({
  huga,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{huga}</div>;
}
