type ArrowIconProps = { direction?: "up-right" | "down" | "up" };

export function ArrowIcon({ direction = "up-right" }: ArrowIconProps) {
  const paths = {
    "up-right": "M5 19 19 5 M7 5h12v12",
    down: "M12 4v16 M5 13l7 7 7-7",
    up: "M12 20V4 M5 11l7-7 7 7",
  };

  return (
    <svg aria-hidden="true" focusable="false" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", flexShrink: 0, verticalAlign: "-0.12em" }}>
      <path d={paths[direction]} />
    </svg>
  );
}
