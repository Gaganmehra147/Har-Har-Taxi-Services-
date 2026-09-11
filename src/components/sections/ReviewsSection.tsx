import React from "react";
import { REAL_REVIEWS, BUSINESS_CONFIG } from "@/data/business";
import { Star, ExternalLink } from "lucide-react";

export default function ReviewsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative transition-colors" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-3 sm:gap-4">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-zinc-100 dark:bg-zinc-850 text-zinc-900 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 mb-2.5">
              Genuine Feedback
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 dark:text-white font-display">
              What Our Customers Say
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-base mt-2 max-w-2xl">
              Authentic reviews from families, tourists, and corporate executives who travel with Har Har Taxi Services in Jabalpur.
            </p>
          </div>

          <a
            href={BUSINESS_CONFIG.googleBusinessProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-750 transition-colors shrink-0 self-start md:self-auto shadow-sm"
          >
            <span>View All Google Reviews</span>
            <ExternalLink className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {REAL_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="glass-panel rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium">
                    {rev.date}
                  </span>
                </div>

                <p className="text-xs text-zinc-900 dark:text-white font-bold mb-2">
                  {rev.trip}
                </p>

                <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-zinc-950 dark:text-white font-display">
                    {rev.author}
                  </h4>
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400">Verified Traveller</span>
                </div>
                <div className="w-6 h-6 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-[10px] font-black flex items-center justify-center">
                  G
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
