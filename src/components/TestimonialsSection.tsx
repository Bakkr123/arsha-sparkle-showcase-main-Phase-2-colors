type Review = {
  quote: string;
  name: string;
  business: string;
};

const defaultReviews: Review[] = [
  {
    quote:
      "Sergio did an awesome job with rebranding my company. Design and web setup looked exactly as requested.",
    name: "Joe Vickar",
    business: "J and J Bear Snow",
  },
  {
    quote:
      "Friendly and professional from concept to final output. We are very happy with the result and our new brand image.",
    name: "Tony Neto",
    business: "Striking Concrete",
  },
  {
    quote:
      "Bananas Creative pulled me through from old to new and handled all details with care and quality.",
    name: "Sergei Todrin",
    business: "Mountain Lion Drywall",
  },
  {
    quote:
      "The process was clear, fast and the final visuals elevated our contracting business immediately.",
    name: "Paul Wilson",
    business: "Stripped Electrical",
  },
];

type TestimonialsSectionProps = {
  title?: string;
  reviews?: Review[];
};

const TestimonialsSection = ({ title = "What our clients are saying", reviews = defaultReviews }: TestimonialsSectionProps) => (
  <section className="bg-[#e6242a] py-16 text-white sm:py-20">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <h3 className="text-center text-3xl font-black sm:text-4xl md:text-5xl">{title}</h3>
      <div className="mt-10 grid gap-6 md:grid-cols-2 md:mt-12">
        {reviews.map((review) => (
          <article key={review.name} className="rounded-2xl bg-white p-6 text-slate-800 shadow-xl">
            <p className="text-[#1d52a1]">*****</p>
            <p className="mt-4 italic leading-relaxed">{review.quote}</p>
            <div className="mt-6">
              <p className="font-black">{review.name}</p>
              <p className="text-sm text-slate-500">{review.business}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
