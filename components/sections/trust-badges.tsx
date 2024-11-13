"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Award } from "lucide-react";

export function TrustBadges() {
  return (
    <section className="border-t bg-slate-50 py-12 dark:bg-transparent lg:py-24 w-full flex justify-center">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3"
        >
          <div className="flex flex-col items-center text-center">
            <Shield className="h-12 w-12 text-primary" />
            <h3 className="mt-4 font-semibold">SOC 2 Certified</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Independently audited security controls
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Lock className="h-12 w-12 text-primary" />
            <h3 className="mt-4 font-semibold">GDPR Compliant</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Full data privacy compliance
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Award className="h-12 w-12 text-primary" />
            <h3 className="mt-4 font-semibold">ISO 27001</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Certified information security
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-8"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
            alt="Visa"
            className="h-8 opacity-50"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
            alt="Mastercard"
            className="h-8 opacity-50"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="PayPal"
            className="h-8 opacity-50"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/57/Stripe_logo.svg"
            alt="Stripe"
            className="h-8 opacity-50"
          />
        </motion.div>
      </div>
    </section>
  );
}