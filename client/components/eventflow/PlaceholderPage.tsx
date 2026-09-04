import { Construction } from "lucide-react";

export function PlaceholderPage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-secondary/20 p-12 text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-blue">
        <Construction className="h-6 w-6" />
      </div>
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">{description}</p>
      <p className="mt-4 text-sm text-muted-foreground">
        Keep prompting to have EventFlow AI build out this page next.
      </p>
    </div>
  );
}
