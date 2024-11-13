"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, BarChart2, Cloud, Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-24 sm:pb-24 sm:pt-32">
      <div className="hero-gradient absolute inset-0" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="font-display bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
            Cloud Management{" "}
            <span className="text-primary">Made Simple</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-muted-foreground">
            Streamline your cloud infrastructure with our intuitive platform.
            Deploy, manage, and scale with confidence.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Live Demo
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-16 max-w-6xl"
        >
          <div className="relative">
            <div className="relative rounded-2xl border bg-card p-8 shadow-2xl">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div className="flex items-center space-x-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Cloud className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Cloud Native</h3>
                    <p className="text-sm text-muted-foreground">
                      Built for modern infrastructure
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <BarChart2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Real-time Analytics</h3>
                    <p className="text-sm text-muted-foreground">
                      Monitor performance instantly
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Enterprise Security</h3>
                    <p className="text-sm text-muted-foreground">
                      Bank-grade protection
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}