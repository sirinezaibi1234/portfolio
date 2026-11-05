import { type FC } from "react";

/** A real link once `repo` is set; a clearly disabled button until then. */
export const RepoLink: FC<{ repo: string; className?: string }> = ({
  repo,
  className = "",
}) =>
  repo ? (
    <a
      href={repo}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-ghost ${className}`}
    >
      <span>GitHub</span>
      <span aria-hidden>↗</span>
    </a>
  ) : (
    <span
      role="link"
      aria-disabled="true"
      title="Repository link coming soon"
      className={`btn-ghost cursor-not-allowed opacity-60 hover:translate-y-0 ${className}`}
    >
      <span>GitHub</span>
      <span className="text-[10px] uppercase tracking-widest text-neutral-400">
        soon
      </span>
    </span>
  );
