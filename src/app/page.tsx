import { LegalGuidanceTool } from "@/components/legal-guidance-tool";

export default function Home() {
  return (
    <div className="w-full">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary tracking-tight">
          Welcome to Legal Compass
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Understand your rights and obligations. Our mission is to provide comprehensive, quick-reference legal information from official sources.
        </p>
      </section>

      <LegalGuidanceTool />
    </div>
  );
}
