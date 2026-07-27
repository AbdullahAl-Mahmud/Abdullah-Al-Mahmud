interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
}

export function SectionHeading({ index, eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <p className="eyebrow"><span>{index}</span>{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </header>
  );
}
