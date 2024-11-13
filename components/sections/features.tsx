"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Cloud,
  Code2,
  Lock,
  RefreshCw,
  Zap,
} from "lucide-react";

const features = [
  {
    name: "Automated Scaling",
    description:
      "Automatically scale your infrastructure based on real-time demand and usage patterns.",
    icon: RefreshCw,
  },
  {
    name: "Advanced Analytics",
    description:
      "Get deep insights into your cloud performance with our advanced analytics dashboard.",
    icon: BarChart,
  },
  {
    name: "Cloud Native",
    description:
      "Built from the ground up to support modern cloud-native architectures and workflows.",
    icon: Cloud,
  },
  {
    name: "Enterprise Security",
    description:
      "Bank-grade security with end-to-end encryption and compliance certifications.",
    icon: Lock,
  },
  {
    name: "API Integration",
    description:
      "Seamlessly integrate with your existing tools through our comprehensive API.",
    icon: Code2,
  },
  {
    name: "Lightning Fast",
    description:
      "Optimized for performance with sub-second response times and minimal latency.",
    icon: Zap,
  },
];

export function Features() {
  return (
    <section id="features" className="features-gradient py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Powerful Features
          </h2>
          <p className="max-w-[85%] text-lg leading-relaxed text-muted-foreground">
            Everything you need to manage your cloud infrastructure with confidence
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border bg-background p-2"
            >
              <div className="flex h-[180px] flex-col justify-between rounded-xl p-6">
                <div className="rounded-lg bg-primary/10 p-3 w-fit group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">{feature.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}