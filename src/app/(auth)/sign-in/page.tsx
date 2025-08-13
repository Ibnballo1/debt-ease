// import { GalleryVerticalEnd } from "lucide-react";

// import { LoginForm } from "~/components/login-form";

// export default function LoginPage() {
//   return (
//     <div className="bg-muted flex-1/2 flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
//       <div className="flex w-full max-w-sm flex-col gap-6">
//         <a href="#" className="flex items-center gap-2 self-center font-medium">
//           <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
//             <GalleryVerticalEnd className="size-4" />
//           </div>
//           DebtEase
//         </a>
//         <LoginForm />
//       </div>
//     </div>
//   );
// }

import Link from "next/link";
import { LoginForm } from "~/components/login-form";

export default function LoginPage() {
  return (
    <div
      className="min-h-screen flex flex-1/2 items-center justify-center"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <div className="w-full max-w-md space-y-6 p-6">
        <LoginForm />

        <div className="text-center">
          <p style={{ color: "#555555" }}>
            {"Don't have an account? "}
            <Link
              href="/signup"
              className="font-medium hover:underline"
              style={{ color: "#259672" }}
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
