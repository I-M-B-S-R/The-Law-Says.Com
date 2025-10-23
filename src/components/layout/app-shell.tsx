"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Bot, Library, Gavel, Menu } from "lucide-react";

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/logo";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "AI Guidance", icon: Bot },
    { href: "#", label: "Law Lookup", icon: Library },
    { href: "#", label: "Case Law", icon: Gavel },
  ];

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <Logo className="size-8 text-sidebar-primary" />
            <span className="text-lg font-semibold font-headline text-sidebar-foreground">Legal Compass</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href + item.label}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href && item.href !== "#"}
                  disabled={item.href === "#"}
                  tooltip={{ children: item.label }}
                >
                  <NextLink href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </NextLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          {/* User profile or settings can be added here */}
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b bg-background/95 px-4 sticky top-0 z-30 backdrop-blur-xl md:px-6">
          <SidebarTrigger className="md:hidden">
            <Menu />
          </SidebarTrigger>
          <div className="flex-1">
            <h1 className="text-xl font-semibold font-headline hidden md:block">
              The-Law-Says.Com
            </h1>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
