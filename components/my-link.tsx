import { Box } from "@chakra-ui/react";
import { Link, type LinkProps } from "@chakra-ui/next-js";
import { useRouter } from "next/router";

export function MyLink1({ children, href, ...props }: LinkProps) {
  const { isPreview } = useRouter();

  return (
    <Link
      href={href}
      prefetch={!!isPreview}
      {...props}
      data-my-isPreview={`${isPreview}`}
    >
      {children}
    </Link>
  );
}

export function MyLink2({ children, href, ...props }: LinkProps) {
  const { isPreview } = useRouter();
  console.info(`⭐️⭐️⭐️: isPreview=${isPreview}`);

  return isPreview ? (
    <Link href={href} prefetch={false} {...props}>
      {children}
    </Link>
  ) : (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
