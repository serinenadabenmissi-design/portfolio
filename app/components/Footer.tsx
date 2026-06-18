export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-red-muted/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Serine Benmissi. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Built with <span className="text-red-light">Next.js</span>, <span className="text-red-light">TypeScript</span> & <span className="text-red-light">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
