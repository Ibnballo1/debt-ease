// "use client";

// import Link from "next/link";
// // import Image from "next/image";
// import { Button } from "~/components/ui/button";

// export default function Home() {
//   return (
//     <main className="flex h-screen w-screen">
//       {/* LEFT */}
//       <div className="md:flex flex-1/2 bg-custom-primary text-white flex-col items-center hidden justify-center">
//         <h1 className="font-semibold text-4xl ">DebtEase</h1>
//         <p className="text-lg">A platform for managing and reducing debt</p>
//       </div>
//       <div className="flex flex-col justify-center px-4 items-center flex-1/2 bg-custom-background gap-2">
//         <div className="flex flex-col items-center justify-center gap-2 mb-2">
//           <h1 className="md:hidden font-semibold text-4xl ">DebtEase</h1>
//           <p className="text-lg text-center">
//             Stay organized and keep track of your financial obligations
//           </p>
//         </div>
//         <Button
//           variant="link"
//           className="bg-custom-primary text-white hover:no-underline hover:bg-custom-hover w-full md:w-1/2"
//         >
//           <Link href="/sign-in" className="hover:no-underline">
//             Login
//           </Link>
//         </Button>
//         <Button
//           variant="link"
//           className="bg-custom-primary text-white hover:no-underline hover:bg-custom-hover w-full md:w-1/2"
//         >
//           <Link href="/sign-up" className="hover:no-underline">
//             Register
//           </Link>
//         </Button>
//       </div>
//     </main>
//   );
// }

import Link from "next/link";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { CheckCircle, DollarSign, TrendingDown, Users } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-custom-background">
      {/* Header */}
      <header className="border-b border-custom bg-card sticky top-0 z-50">
        <div className="container mx-auto container-mobile py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-custom-text font-serif">
            DebtEase
          </h1>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link href="/sign-in">
              <Button
                variant="outline"
                size="sm"
                className="focus-ring bg-transparent"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button
                size="sm"
                className="bg-custom-primary hover:bg-custom-hover text-white focus-ring"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <section className="px-4 py-12 sm:py-20 lg:py-24">
        <div className="container mx-auto container-mobile text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-custom-text font-serif">
            Take Control of Your Debt
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-[#1a1a1a] leading-relaxed">
            DebtEase helps you track, manage, and eliminate your debts with
            powerful tools and insights. Start your journey to financial freedom
            today.
          </p>
          <Link href="/signup">
            <Button
              size="lg"
              className="bg-custom-primary hover:bg-custom-hover text-lg px-8 py-4 focus-ring transition-smooth"
            >
              Start Managing Your Debt
            </Button>
          </Link>
        </div>
      </section>

      <section className="px-4 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto container-mobile">
          <h3 className="text-3xl font-bold text-center mb-12 text-custom-text font-serif">
            Everything You Need to Manage Debt
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="card-hover transition-smooth bg-custom-primary text-white">
              <CardHeader className="text-center">
                <DollarSign className="h-12 w-12 mx-auto mb-4" />
                <CardTitle className="font-serif">Track All Debts</CardTitle>
              </CardHeader>
              <CardContent className="">
                <CardDescription className="text-white text-center">
                  Monitor all your debts in one place with detailed tracking of
                  balances, interest rates, and payment schedules.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover transition-smooth bg-custom-primary text-white">
              <CardHeader className="text-center">
                <TrendingDown className="h-12 w-12 mx-auto mb-4" />
                <CardTitle className="font-serif">Payment Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white text-center">
                  Create strategic payment plans to minimize interest and pay
                  off debts faster with our smart algorithms.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover transition-smooth bg-custom-primary text-white">
              <CardHeader className="text-center">
                <CheckCircle className="h-12 w-12 mx-auto mb-4" />
                <CardTitle className="font-serif">Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white text-center">
                  Visualize your debt reduction progress with charts and
                  milestones to stay motivated on your journey.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover transition-smooth bg-custom-primary text-white">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4" />
                <CardTitle className="font-serif">Categories & Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white text-center">
                  Organize your debts by type, creditor, or custom categories
                  for better insights and management.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-12 sm:py-16 lg:py-20 bg-card">
        <div className="container mx-auto container-mobile text-center">
          <h3 className="text-3xl font-bold mb-6 text-custom-text font-serif">
            Ready to Become Debt-Free?
          </h3>
          <p className="text-lg mb-8 max-w-xl mx-auto text-custom-text">
            Join thousands of users who have successfully managed and eliminated
            their debt with DebtEase.
          </p>
          <Link href="/signup">
            <Button
              size="lg"
              className="bg-custom-primary hover:bg-custom-hover text-lg px-8 py-4 focus-ring transition-smooth"
            >
              Create Your Free Account
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-custom bg-background">
        <div className="container mx-auto container-mobile text-center">
          <p className="text-[#1a1a1a]">
            © 2024 DebtEase. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
