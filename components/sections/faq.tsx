"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does CloudFlow handle data security?",
    answer:
      "CloudFlow implements bank-grade security measures including end-to-end encryption, regular security audits, and compliance with industry standards like SOC 2 and GDPR.",
  },
  {
    question: "Can I integrate CloudFlow with my existing tools?",
    answer:
      "Yes, CloudFlow offers extensive API support and pre-built integrations with popular tools and services. Our API documentation provides detailed guidance for custom integrations.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We provide 24/7 support through multiple channels including email, chat, and phone. Enterprise customers get dedicated support managers and priority response times.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 14-day free trial on all plans. No credit card is required to start your trial, and you can upgrade or cancel at any time.",
  },
  {
    question: "How does pricing work for larger teams?",
    answer:
      "Our pricing is based on team size and feature requirements. For larger teams, we offer custom enterprise pricing with additional features and dedicated support.",
  },
];

export function FAQ() {
  return (
    <section className="container py-12 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"
      >
        <h2 className="font-display text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Frequently Asked Questions
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Find answers to common questions about CloudFlow
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto max-w-[58rem] pt-12"
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}