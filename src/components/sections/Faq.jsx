"use client";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqData = [
  {
    question: "What's included in the branding design service?",
    answer:
      "Our branding design service includes a comprehensive brand discovery session, custom logo design with multiple concepts, a complete brand identity system (colors, typography, and imagery guidelines), and all the file formats you'll need for web and print.",
    value: "item-1",
  },
  {
    question: "How long does a typical website project take?",
    answer:
      "A typical website project takes between 4 to 8 weeks from start to finish. This timeline includes discovery, design, development, and launch. For more complex projects, the timeline may be extended.",
    value: "item-2",
  },
  {
    question: "Can I request custom features for Framer?",
    answer:
      "Absolutely. We can develop custom features and integrations for your Framer site. Just let us know your requirements, and we'll provide a tailored solution to meet your needs.",
    value: "item-3",
  },
  {
    question: "Are there any hidden costs beyond the listed pricing?",
    answer:
      "No, our pricing is transparent with no hidden costs. We provide a detailed proposal outlining all costs before we begin any work. Any additional services requested during the project will be discussed and approved by you first.",
    value: "item-4",
  },
  {
    question: "Do I need to prepare anything before we start?",
    answer:
      "It's helpful if you have a clear idea of your goals, target audience, and any design inspiration you admire. Providing content and branding guidelines early on also helps streamline the process. However, we can guide you through each step.",
    value: "item-5",
  },
  {
    question: "What if I need changes after the project is done?",
    answer:
      "We offer a post-launch support period to address any minor adjustments or bug fixes. For more significant changes or ongoing updates, we have flexible support and retainer packages available to ensure your site stays fresh and functional.",
    value: "item-6",
  },
];

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "bg-white rounded-[20px] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "group flex flex-1 items-center justify-between p-6 md:p-7 text-left text-[17px] md:text-[18px] font-semibold text-black transition-all hover:no-underline",
          className
        )}
        {...props}
      >
        {children}
        <div className="bg-[#f5f5f5] rounded-full w-9 h-9 flex items-center justify-center shrink-0 ml-4 transition-colors group-hover:bg-[#e5e5e5]">
          <Plus
            className="h-4 w-4 text-black transition-transform duration-300 group-data-[state=open]:rotate-45"
            strokeWidth={2.5}
          />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden text-[15px] md:text-[16px] data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("px-6 md:px-7 pb-6 md:pb-7 pt-0", className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export default function FaqSection() {
  return (
    <section className="bg-[#f7f7f7] py-20 md:py-28 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex flex-1 flex-col items-start gap-5 lg:max-w-[400px]">
            <p className="font-semibold uppercase tracking-widest text-red-600 text-[13px]">
              FAQs
            </p>
            <h2 className="font-bold text-black text-[40px] md:text-[48px] leading-[1.15]">
              Have questions?
            </h2>
            <p className="text-[#757575] text-[17px] md:text-[18px] leading-[1.6]">
              Here are some quick answers to the most common questions about our
              services, pricing, and how we work.
            </p>
          </div>
          <div className="flex-1">
            <Accordion
              type="single"
              collapsible
              className="flex w-full flex-col gap-4"
            >
              {faqData.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-[#757575] leading-[1.65]">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
