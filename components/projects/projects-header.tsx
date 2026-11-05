import { type FC } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { padIndex } from "@/helpers/format-helpers";

export const ProjectsHeader: FC<{ total: number }> = ({ total }) => (
  <div className="c-space pt-24 md:pt-32">
    <SectionHeader
      eyebrow={`Selected Projects · ${padIndex(total)}`}
      title={
        <>
          AI systems <span className="text-gradient">built end to end.</span>
        </>
      }
      hint={["Scroll", "Pinned"]}
    />
  </div>
);
