import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Login",
  description: "Provide Credentials to Login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
