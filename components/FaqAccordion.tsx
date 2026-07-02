"use client";

import { useRef, useState } from "react";
import type { FaqItem } from "@/lib/site";

/** Barrierefreies FAQ-Akkordeon mit sanfter Höhenanimation. */
export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq">
      {items.map((item, i) => (
        <Item key={i} item={item} isOpen={open === i} onToggle={() => setOpen(open === i ? null : i)} index={i} />
      ))}
    </div>
  );
}

function Item({ item, isOpen, onToggle, index }: { item: FaqItem; isOpen: boolean; onToggle: () => void; index: number }) {
  const body = useRef<HTMLDivElement>(null);
  return (
    <div className="faq__item" data-open={isOpen}>
      <h3 style={{ margin: 0 }}>
        <button
          className="faq__q"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`faq-a-${index}`}
        >
          <span>{item.q}</span>
          <span className="faq__icon" aria-hidden>+</span>
        </button>
      </h3>
      <div
        className="faq__a"
        id={`faq-a-${index}`}
        style={{ maxHeight: isOpen ? `${body.current?.scrollHeight ?? 400}px` : 0 }}
      >
        <div className="faq__a-inner" ref={body}>{item.a}</div>
      </div>
    </div>
  );
}
