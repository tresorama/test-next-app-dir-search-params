import { Counter } from "./counter";

export const AppShell = ({ children }: Readonly<{ children: React.ReactNode; }>) => (
  <div className="flex flex-col min-h-screen">
    <header className="p-4 border-b border-slate-300 flex justify-between">
      <Counter />
      <div>
        <a href="/">Home (forced)</a>
      </div>
    </header>
    <main className="p-8">
      {children}
    </main>
  </div>
);