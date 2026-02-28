import { useCallback, useEffect, useRef, useState } from "react";
import { motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type WhyChooseItem = {
  title: string;
  text: string;
  image: string;
};

type WhyChooseCarouselProps = {
  items: WhyChooseItem[];
};

type SlideCardProps = {
  item: WhyChooseItem;
  index: number;
  activeIndex: number;
  totalCards: number;
};

const AUTOPLAY_DELAY = 3200;

const SlideCard = ({ item, index, activeIndex, totalCards }: SlideCardProps) => {
  let offset = index - activeIndex;
  if (offset > totalCards / 2) {
    offset -= totalCards;
  } else if (offset < -totalCards / 2) {
    offset += totalCards;
  }

  const isVisible = Math.abs(offset) <= 1;

  const animate = {
    x: `${offset * 58}%`,
    scale: offset === 0 ? 1 : 0.85,
    zIndex: totalCards - Math.abs(offset),
    opacity: isVisible ? 1 : 0,
    transition: { type: "spring" as const, stiffness: 260, damping: 30 },
  };

  return (
    <motion.article
      className="absolute h-[92%] w-[80%] max-w-[360px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:w-[42%] lg:w-[34%]"
      style={{ transformStyle: "preserve-3d" }}
      animate={animate}
      initial={false}
    >
      <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-black text-slate-900">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
      </div>
    </motion.article>
  );
};

const WhyChooseCarousel = ({ items }: WhyChooseCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToNext = useCallback(() => {
    setActiveIndex((previous) => (previous + 1) % items.length);
  }, [items.length]);

  const changeSlide = useCallback(
    (newIndex: number) => {
      const nextSafeIndex = (newIndex + items.length) % items.length;
      setActiveIndex(nextSafeIndex);
    },
    [items.length],
  );

  useEffect(() => {
    if (items.length <= 1 || isPaused) return;

    autoplayIntervalRef.current = setInterval(goToNext, AUTOPLAY_DELAY);

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [goToNext, isPaused, activeIndex, items.length]);

  const onDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const dragThreshold = 75;
    if (info.offset.x > dragThreshold) {
      changeSlide(activeIndex - 1);
    } else if (info.offset.x < -dragThreshold) {
      changeSlide(activeIndex + 1);
    }
  };

  if (items.length === 0) return null;

  return (
    <div
      className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full p-0">
        <div className="relative flex h-[360px] w-full items-center justify-center overflow-hidden md:h-[430px]">
          <motion.div
            className="flex h-full w-full items-center justify-center"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={onDragEnd}
          >
            {items.map((item, index) => (
              <SlideCard
                key={item.title}
                item={item}
                index={index}
                activeIndex={activeIndex}
                totalCards={items.length}
              />
            ))}
          </motion.div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => changeSlide(activeIndex - 1)}
            className="rounded-full border border-slate-300 bg-white p-2 text-slate-700 transition-colors hover:bg-slate-100"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="flex items-center justify-center gap-2">
            {items.map((_, index) => (
              <button
                key={`why-us-dot-${index}`}
                type="button"
                onClick={() => changeSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "w-6 bg-[#E6242A]" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => changeSlide(activeIndex + 1)}
            className="rounded-full border border-slate-300 bg-white p-2 text-slate-700 transition-colors hover:bg-slate-100"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseCarousel;