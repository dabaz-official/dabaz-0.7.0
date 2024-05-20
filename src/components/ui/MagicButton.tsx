import React from "react";

const MagicButton = ({
  title, icon, position, handleClick, classes
}: {
  title: string,
  icon?: React.ReactNode,
  position?: string,
  handleClick?: () => void,
  classes?: string
}) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950/80 px-4 py-2 text-white backdrop-blur-3xl transition active:transition-none duration-200 text-md gap-2 hover:bg-slate-950/30 ${classes}`}>
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  )
};

export default MagicButton;