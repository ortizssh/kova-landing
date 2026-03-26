"use client";

import { useState, useEffect } from "react";
import { X, Zap, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export default function PromoPopup() {
  const { t } = useI18n();
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem("kova_popup_dismissed")) return;
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem("kova_popup_dismissed", "1");
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            onClick={dismiss}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[61] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden pointer-events-auto">
              {/* Top gradient bar */}
              <div className="h-1.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500" />

              {/* Close */}
              <button
                onClick={dismiss}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors cursor-pointer z-10"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>

              <div className="p-6 sm:p-8">
                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <motion.div
                    animate={{ rotate: [0, -8, 8, -4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/30"
                  >
                    <Zap className="w-8 h-8 text-white" fill="white" />
                  </motion.div>
                </div>

                {/* Badge */}
                <div className="flex justify-center mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    {t("popup.badge")}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-[1.75rem] font-bold text-center text-gray-900 mb-3 leading-tight">
                  {t("popup.title")}
                </h2>

                {/* Subtitle */}
                <p className="text-center text-gray-500 text-sm sm:text-base mb-6 leading-relaxed">
                  {t("popup.subtitle")}
                </p>

                {/* Benefits */}
                <div className="flex flex-col gap-2 mb-6">
                  {[t("popup.benefit1"), t("popup.benefit2"), t("popup.benefit3")].map((b, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      {b}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://app.heykova.io/register"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-semibold text-base hover:shadow-lg hover:shadow-primary/25 transition-all"
                >
                  {t("popup.cta")}
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Disclaimer */}
                <p className="text-center text-gray-400 text-xs mt-3">
                  {t("popup.disclaimer")}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
