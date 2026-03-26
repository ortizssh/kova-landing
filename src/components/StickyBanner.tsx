"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export default function StickyBanner() {
  const { t } = useI18n();
  const [dismissed, setDismissed] = useState(false);

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 30, stiffness: 300, delay: 2 }}
          className="fixed bottom-0 left-0 right-0 z-50 safe-area-bottom"
        >
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-white/10">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
              {/* Text */}
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <span className="hidden sm:inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 shrink-0">
                  <span className="text-base">⚡</span>
                </span>
                <p className="text-white text-xs sm:text-sm font-medium truncate">
                  <span className="text-primary font-bold">{t("banner.highlight")}</span>
                  {" "}{t("banner.text")}
                </p>
              </div>

              {/* CTA + Close */}
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="https://app.heykova.io/register"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap"
                >
                  {t("banner.cta")}
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setDismissed(true)}
                  className="w-7 h-7 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-3.5 h-3.5 text-white/50" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
