import SeoTags, { SeoTagsProps } from "@/client/components/seo-meta";
import { Box } from "@chakra-ui/react";

export type PageLayoutProps = {
  children: React.ReactNode;
  containerProps?: React.ComponentProps<typeof Box>;
} & SeoTagsProps;

export default function PageLayout({ children, ...rest }: PageLayoutProps) {
  return (
    <>
      <SeoTags {...rest} />
      <Box>{children}</Box>
    </>
  );
}
