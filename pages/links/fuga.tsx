import type { InferGetStaticPropsType } from "next";

export function getStaticProps() {
  return {
    props: {
      fuga: "fuga",
    },
    // revalidate: 15,
  };
}

export default function FugaPage({
  fuga,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{fuga}</div>;
}
