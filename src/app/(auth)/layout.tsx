export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {/* LEFT */}
      <div></div>
      {children}
    </main>
  );
}
