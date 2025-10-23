
"use client";

import { ArrowRight, Languages, ScanLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <Card className="w-full max-w-sm overflow-hidden rounded-2xl border-2 border-primary/50 bg-black shadow-[0_0_20px_theme(colors.primary/0.5)]">
        <CardHeader className="bg-primary p-4">
          <h1 className="text-center font-headline text-2xl font-bold text-primary-foreground">
            The-Law-Says.Com
          </h1>
        </CardHeader>
        <CardContent className="p-4">
          <div className="relative aspect-square w-full rounded-md bg-white p-4">
            <Image
              src="https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=http://the-law-says.com"
              alt="QR Code for The-Law-Says.Com"
              width={500}
              height={500}
              className="h-full w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <ScanLine className="h-3/4 w-3/4 animate-pulse text-primary/50" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 p-4 pt-0">
          <Button
            asChild
            className="w-full bg-white text-black hover:bg-white/90"
          >
            <Link href="/guidance">
              Ask a Question
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button className="w-full">
            <Languages className="mr-2 h-4 w-4" />
            Translate
          </Button>

          <div className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} The-Law-Says.Com. All Rights Reserved.
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
