// import { GalleryVerticalEnd } from "lucide-react";

// import { SignupForm } from "~/components/signup-form";

// export default function SignupPage() {
//   return (
//     <div className="bg-muted flex-1/2 flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
//       <div className="flex w-full max-w-sm flex-col gap-6">
//         <a href="#" className="flex items-center gap-2 self-center font-medium">
//           <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
//             <GalleryVerticalEnd className="size-4" />
//           </div>
//           DebtEase
//         </a>
//         <SignupForm />
//       </div>
//     </div>
//   );
// }

import Link from "next/link";
import { SignupForm } from "~/components/signup-form";

export default function SignupPage() {
  return (
    <div
      className="min-h-screen flex flex-1/2 items-center justify-center"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <div className="w-full max-w-md space-y-6 p-6">
        <SignupForm />

        <div className="text-center">
          <p style={{ color: "#555555" }}>
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-medium hover:underline"
              style={{ color: "#259672" }}
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
