"use client";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-screen">
      {/* LEFT */}
      <div className="md:flex flex-1/2 bg-custom-primary text-white flex-col items-center hidden justify-center">
        <h1 className="font-semibold text-4xl ">DebtEase</h1>
        <p className="text-lg">A platform for managing and reducing debt</p>
      </div>
      {children}
    </main>
  );
}
