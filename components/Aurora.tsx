"use client";

/**
 * Slowly-drifting animated aurora blob background.
 * Place inside a relative parent with `overflow-hidden`.
 */
export default function Aurora({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <div className="absolute -left-1/3 top-0 h-[60%] w-[80%] rounded-full bg-accent-violet/15 blur-[120px] animate-[auroraA_18s_ease-in-out_infinite_alternate]" />
      <div className="absolute right-[-15%] top-[20%] h-[55%] w-[60%] rounded-full bg-accent-cyan/15 blur-[120px] animate-[auroraB_22s_ease-in-out_infinite_alternate]" />
      <div className="absolute left-1/4 bottom-[-15%] h-[50%] w-[60%] rounded-full bg-accent-blue/12 blur-[120px] animate-[auroraC_26s_ease-in-out_infinite_alternate]" />
      <style jsx>{`
        @keyframes auroraA {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(8%, 6%) scale(1.15);
          }
        }
        @keyframes auroraB {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(-10%, 4%) scale(1.2);
          }
        }
        @keyframes auroraC {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(6%, -8%) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
