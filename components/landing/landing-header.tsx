"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";
import { Calendar } from "lucide-react";
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

function LandingHeader() {
  const pathName = usePathname();
  const isPricingPage = pathName === "/pricing";
  return (
    <header className={`fixed top-0 ${isPricingPage ? "" : "z-50"} w-full border-b bg-white/80 backdrop-blur-sm dark:bg-zinc-950/80 `}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/"className="flex items-center gap-2" >
            <div className="flex size-9 items-center justify-center rounded-lg bg-blue-500">
              <Calendar className="size-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Slotify
            </span>
          </Link>
          <Link 
            href="/pricing" 
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Pricing
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Show when="signed-out">
            <SignInButton
              mode="modal"
              forceRedirectUrl="/availability"
              fallbackRedirectUrl="/availability"
            >
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton
              mode="modal"
              forceRedirectUrl="/availability"
              fallbackRedirectUrl="/availability"
            >
              <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                Get Started
              </Button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <Button asChild size="sm" variant="blue">
              <Link href="/availability">
                Dashboard
              </Link>
            </Button>
            <UserButton />
          </Show>
        </div>
      </div>
    </header>
  )
}

export default LandingHeader