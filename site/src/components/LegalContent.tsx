import { type PortableTextBlock } from "next-sanity";
import PortableText from "@/src/components/PortableText";
import { LegalContent as LegalContentType } from "@/sanity.types";

type LegalContentProps = {
  block: LegalContentType;
  index: number;
};

export default function LegalContent({ block }: LegalContentProps) {
  return (
    <div className="container mx-auto py-4 px-4 md:px-6 lg:px-8 max-w-4xl">
      {block?.content?.length && (
        <PortableText
          className="legal-content"
          value={block.content as PortableTextBlock[]}
        />
      )}
    </div>
  );
}