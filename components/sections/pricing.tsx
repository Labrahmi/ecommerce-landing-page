"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter",
    id: "tier-starter",
    price: "$29",
    description: "Perfect for small teams and startups",
    features: [
      "Up to 5 team members",
      "Basic analytics",
      "24/7 support",
      "API access",
      "Community forums",
    ],
    featured: false,
  },
  {
    name: "Pro",
    id: "tier-pro",
    price: "$79",
    description: "Ideal for growing businesses",
    features: [
      "Up to 20 team members",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Team training",
      "Custom integrations",
      "Audit logs",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited team members",
      "Enterprise analytics",
      "Dedicated support",
      "API access",
      "Team training",
      "Custom integrations",
      "Audit logs",
      "SLA guarantee",
      "Custom contracts",
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"
      >
        <h2 className="font-display text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Simple, transparent pricing
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Choose the perfect plan for your needs. All plans include a 14-day free
          trial.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-screen-lg gap-4 py-4 md:grid-cols-3 lg:gap-8">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              className={
                tier.featured
                  ? "relative border-primary"
                  : "relative border-border"
              }
            >
              {tier.featured && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="text-3xl font-bold">{tier.price}</div>
                <div>
                  {tier.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 py-1 text-muted-foreground"
                    >
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={tier.featured ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}