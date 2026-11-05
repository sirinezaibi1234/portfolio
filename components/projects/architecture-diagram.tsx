import { type FC } from "react";

/**
 * Honest stand-in for a screenshot: the real pipeline of the project, drawn
 * from `Project.architecture`. Swap in a screenshot via `Project.image`.
 */
export const ArchitectureDiagram: FC<{ steps: string[]; label: string }> = ({
  steps,
  label,
}) => (
  <ol
    aria-label={`${label} architecture`}
    className="relative z-10 flex h-full flex-col justify-center gap-2 px-6 py-14 md:px-12"
  >
    {steps.map((step, index) => (
      <li key={step} className="flex flex-col items-center gap-2">
        <div className="flex w-full max-w-md items-center gap-4 rounded-2xl border border-white/15 bg-black/40 px-5 py-3 backdrop-blur-md">
          <span className="font-mono text-xs text-glow">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-sm font-medium text-white md:text-base">
            {step}
          </span>
        </div>
        {index < steps.length - 1 && (
          <span
            aria-hidden
            className="block h-4 w-px bg-gradient-to-b from-glow/70 to-transparent"
          />
        )}
      </li>
    ))}
  </ol>
);
