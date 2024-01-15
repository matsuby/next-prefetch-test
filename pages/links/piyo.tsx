import type { InferGetStaticPropsType } from "next"

export function getStaticProps() {
  return {
    props: {
      piyo: "piyo"
    }
  }
}

export default function PiyoPage({piyo}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{piyo}</div>
}