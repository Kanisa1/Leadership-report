import React from 'react';
import Image from 'next/image';

const eventFeatures = [
  "Storytelling and healing dialogue sessions",
  "Performances and spoken word presentations",
  "Gala dinner and networking opportunities",
  "Recognition awards for refugee scholars",
  "Community outreach initiatives",
  "Collaboration with external partners and organizations",
];

const healingHighlights = [
  "Safe and supportive storytelling environment",
  "Student-led reflections and dialogue",
  "Emotional healing and peer support",
  "Strengthened community engagement",
  "Encouraged refugee visibility and belonging",
];

const galaHighlights = [
  { stat: "7", label: "Award recipients from African Leadership University" },
  { stat: "2", label: "Award recipients from the University of Rwanda" },
  { stat: "✓", label: "Participation from students, faculty, and partners" },
  { stat: "✓", label: "Partnership support from Solid Minds" },
  { stat: "✓", label: "Increased refugee visibility and recognition" },
];

const awardCategories = [
  "Leadership",
  "Academic Excellence",
  "Advocacy",
  "Entrepreneurship",
  "Community Impact",
  "Resilience",
];

export default function WorldRefugeeDay() {
  return (
    <div>
      {/* ── SECTION 04: World Refugee Day 2025 ── */}
      <section className="min-h-screen bg-blue-900 text-white flex flex-col justify-center px-8 py-16 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-700 opacity-30" />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-yellow-400 opacity-10" />

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          {/* Header */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-7xl font-extrabold text-blue-700 leading-none select-none">04</span>
            <div>
              <p className="text-yellow-400 uppercase tracking-widest text-xs font-semibold">Annual Report 2025–2026</p>
              <h2 className="text-3xl md:text-4xl font-extrabold">World Refugee Day 2025</h2>
            </div>
          </div>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mb-3" />
          <p className="text-yellow-300 italic text-lg font-medium mb-10">
            Theme: &ldquo;Voices of Resilience: A Healing Dinner Dialogue&rdquo;
          </p>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Text */}
            <div className="space-y-4 text-blue-100 text-base leading-relaxed">
              <p>
                World Refugee Day 2025 served as one of the most <strong className="text-white">impactful celebrations</strong> organized by the RDP community during the academic year.
              </p>
              <p>
                The event brought together refugee scholars, students from the University of Rwanda, faculty members, community partners, and members of the ALU community to celebrate resilience, identity, leadership, and healing.
              </p>
              <p>
                The celebration created a platform for refugee students to share their stories, connect with one another, and celebrate the strength and achievements of displaced communities.
              </p>
              <p className="font-semibold text-white">The event featured:</p>
              <ul className="space-y-2">
                {eventFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="text-blue-200 text-sm pt-2">
                The celebration reinforced the importance of community, visibility, and collective healing within refugee student spaces.
              </p>
            </div>

            {/* Image */}
            <div className="relative w-full h-72 md:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/kv.jpg"
                alt="World Refugee Day 2025"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/90 to-transparent px-5 py-4">
                <p className="text-white text-sm font-medium">World Refugee Day — ALU Rwanda, June 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 05: Healing Dinner Dialogue ── */}
      <section className="min-h-screen bg-white flex flex-col justify-center px-8 py-16 relative">
        <div className="absolute top-0 left-0 h-full w-2 bg-blue-900" />

        <div className="relative z-10 max-w-5xl mx-auto w-full pl-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-7xl font-extrabold text-blue-100 leading-none select-none">05</span>
            <div>
              <p className="text-yellow-500 uppercase tracking-widest text-xs font-semibold">World Refugee Day 2025</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">Healing Dinner Dialogue</h2>
            </div>
          </div>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
              <Image
                src="/images/story.jpg"
                alt="Healing Dinner Dialogue"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent px-5 py-4">
                <p className="text-white text-sm font-medium">Healing Dinner Dialogue — ALU Rwanda, 2025</p>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-4 text-gray-700 text-base leading-relaxed order-1 md:order-2">
              <p>
                The Healing Dinner Dialogue created a <strong className="text-blue-900">safe and reflective environment</strong> where refugee students openly shared lived experiences, challenges, journeys of resilience, and aspirations for the future.
              </p>
              <p>
                The session emphasized the importance of <span className="text-blue-700 font-semibold">storytelling as a tool for healing</span>, empowerment, emotional support, and connection.
              </p>
              <p>
                Students engaged in meaningful conversations around identity, belonging, displacement, leadership, and personal growth.
              </p>
              <p>
                The dialogue also strengthened peer support systems while encouraging empathy and community connection among participants.
              </p>

              {/* Key highlights */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mt-2">
                <p className="text-blue-900 font-bold mb-3 text-sm uppercase tracking-wide">Key Highlights</p>
                <ul className="space-y-2">
                  {healingHighlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 06: Gala Dinner & Awards Ceremony ── */}
      <section className="min-h-screen bg-gray-50 flex flex-col justify-center px-8 py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-40 -translate-y-1/2 translate-x-1/2" />

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-7xl font-extrabold text-blue-100 leading-none select-none">06</span>
            <div>
              <p className="text-yellow-500 uppercase tracking-widest text-xs font-semibold">World Refugee Day 2025</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">Gala Dinner &amp; Awards Ceremony</h2>
            </div>
          </div>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Text */}
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                The Gala Dinner &amp; Awards Ceremony celebrated refugee scholars for their <strong className="text-blue-900">resilience, leadership, academic excellence, advocacy, entrepreneurship, and community impact</strong>.
              </p>
              <p>
                The event brought together students, staff, faculty, alumni, and community partners in an atmosphere of celebration, recognition, and solidarity.
              </p>
              <p className="font-semibold text-blue-900">The ceremony featured:</p>
              <ul className="space-y-2 text-sm">
                {["Cultural performances", "Networking opportunities", "Dinner and community engagement", "Recognition awards", "Inspirational speeches and reflections"].map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm">
                The event reinforced the importance of celebrating refugee excellence and highlighting positive stories of transformation and achievement.
              </p>
            </div>

            {/* Stats + Image */}
            <div className="space-y-4">
              <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/awards.jpg"
                  alt="Gala Dinner Awards"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent px-5 py-3">
                  <p className="text-white text-sm font-medium">Gala Dinner &amp; Awards — ALU Rwanda, 2025</p>
                </div>
              </div>
              <div className="bg-blue-900 rounded-2xl p-5">
                <p className="text-yellow-400 font-bold mb-4 text-sm uppercase tracking-wide">Key Highlights</p>
                <ul className="space-y-3">
                  {galaHighlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-yellow-400 font-extrabold text-lg w-8 text-center shrink-0">{h.stat}</span>
                      <span className="text-blue-100 text-sm">{h.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 07: Recognition of Refugee Scholars ── */}
      <section className="min-h-screen bg-blue-900 text-white flex flex-col justify-center px-8 py-16 relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-blue-700 opacity-30" />

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-7xl font-extrabold text-blue-700 leading-none select-none">07</span>
            <div>
              <p className="text-yellow-400 uppercase tracking-widest text-xs font-semibold">World Refugee Day 2025</p>
              <h2 className="text-3xl md:text-4xl font-extrabold">Recognition of Refugee Scholars</h2>
            </div>
          </div>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div className="space-y-4 text-blue-100 text-base leading-relaxed">
              <p>
                A special recognition segment was organized to celebrate refugee scholars who demonstrated exceptional <strong className="text-white">resilience, leadership, innovation, advocacy, and commitment to community impact</strong>.
              </p>
              <p>
                The recognition ceremony highlighted the importance of acknowledging refugee excellence while creating motivation and inspiration for students within the community.
              </p>
              <p className="font-semibold text-white">Awards were presented in the following categories:</p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {awardCategories.map((cat) => (
                  <div key={cat} className="bg-blue-800 border border-blue-600 rounded-xl px-4 py-3 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                    <span className="text-sm font-semibold text-white">{cat}</span>
                  </div>
                ))}
              </div>

              <p className="text-blue-300 text-sm pt-2">
                The recognition initiative reinforced the community&apos;s commitment to celebrating refugee leadership and achievement.
              </p>
            </div>

            {/* Image */}
            <div className="relative w-full h-72 md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/IMG-20250619-WA0351.jpg"
                alt="Recognition of Refugee Scholars"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/90 to-transparent px-5 py-4">
                <p className="text-white text-sm font-medium">Recognition Ceremony — ALU Rwanda, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 08: Community Outreach – Nyabiheke Refugee Camp ── */}
      <section className="min-h-screen bg-white flex flex-col justify-center px-8 py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-2 bg-blue-900" />
        <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-50 rounded-full opacity-60 -translate-y-1/2 translate-x-1/2" />

        <div className="relative z-10 max-w-5xl mx-auto w-full pl-6">
          {/* Header */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-7xl font-extrabold text-blue-100 leading-none select-none">08</span>
            <div>
              <p className="text-yellow-500 uppercase tracking-widest text-xs font-semibold">World Refugee Day 2025 · 19 June 2025</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">Community Outreach Initiative</h2>
              <p className="text-blue-600 font-semibold text-lg">Nyabiheke Refugee Camp</p>
            </div>
          </div>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mb-10" />

          {/* Participants banner */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { num: "14", label: "Students from ALU" },
              { num: "14", label: "Students from University of Rwanda" },
              { num: "2", label: "Staff from Solid Minds" },
            ].map((p) => (
              <div key={p.label} className="bg-blue-900 text-white rounded-2xl p-5 text-center shadow">
                <p className="text-4xl font-extrabold text-yellow-400 mb-1">{p.num}</p>
                <p className="text-sm text-blue-200">{p.label}</p>
              </div>
            ))}
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Text */}
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                As part of the World Refugee Day 2025 celebrations, the RDP community organized a community outreach initiative at <strong className="text-blue-900">Nyabiheke Refugee Camp</strong> in collaboration with Solid Minds and ALU-Mastercard Foundation.
              </p>
              <p>
                The initiative focused on supporting refugee learners through the distribution of educational and hygiene materials while also engaging students through mentorship and motivational conversations.
              </p>
              <p>
                The outreach reflected the community&apos;s commitment to <span className="text-blue-700 font-semibold">giving back</span> and supporting vulnerable learners within refugee communities.
              </p>

              {/* Activities */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                <p className="text-blue-900 font-bold mb-3 text-sm uppercase tracking-wide">Outreach Activities</p>
                <ul className="space-y-2">
                  {[
                    "Distribution of school bags",
                    "Provision of books and educational materials",
                    "Distribution of sanitary pads",
                    "Community engagement and mentorship sessions",
                    "Encouragement and motivational discussions with learners",
                  ].map((a, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div className="bg-blue-900 rounded-2xl p-5">
                <p className="text-yellow-400 font-bold mb-3 text-sm uppercase tracking-wide">Outreach Impact</p>
                <ul className="space-y-2">
                  {[
                    "30 learners supported",
                    "Increased access to educational materials",
                    "Strengthened community solidarity and inclusion",
                    "Encouraged educational motivation among refugee learners",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-blue-100">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-500 text-sm italic">
                &ldquo;Empowerment begins when communities invest in each other&apos;s futures.&rdquo;
              </p>
            </div>

            {/* Images */}
            <div className="grid grid-cols-1 gap-4">
              <div className="relative w-full h-52 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/giveback.jpg"
                  alt="Nyabiheke Outreach"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative w-full h-36 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/images/givenack 2.jpg"
                    alt="Nyabiheke Outreach 2"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="relative w-full h-36 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/images/giveback 3.jpeg"
                    alt="Nyabiheke Outreach 3"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl px-4 py-3 text-center">
                <p className="text-blue-700 text-xs font-medium">Nyabiheke Refugee Camp — 19 June 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY: World Refugee Day @ALU ── */}
      <section className="bg-blue-900 py-16 px-8 md:px-20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="text-yellow-400 font-bold text-sm tracking-widest uppercase mb-2">Photo Gallery</p>
              <h2 className="text-3xl md:text-4xl font-black text-white">World Refugee Day @ALU</h2>
              <div className="h-1 w-16 bg-yellow-400 mt-3" />
            </div>
            <a
              href="https://www.flickr.com/photos/200220459@N06/albums/72177720327002951/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-print inline-flex items-center gap-2 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900 font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 text-sm whitespace-nowrap"
            >
              View Full Album on Flickr
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { src: "https://live.staticflickr.com/65535/54603637871_00c8bf8685_h.jpg", alt: "World Refugee Day — ALU Rwanda 1", tall: true },
              { src: "https://live.staticflickr.com/65535/54603853128_fd37c68828_h.jpg", alt: "World Refugee Day — ALU Rwanda 2", tall: false },
              { src: "https://live.staticflickr.com/65535/54603853108_8c296ce1e3_h.jpg", alt: "World Refugee Day — ALU Rwanda 3", tall: false },
              { src: "https://live.staticflickr.com/65535/54603939455_561c6ece16_h.jpg", alt: "World Refugee Day — ALU Rwanda 4", tall: false },
              { src: "https://live.staticflickr.com/65535/54603828749_dc836116fc_h.jpg", alt: "World Refugee Day — ALU Rwanda 5", tall: true },
              { src: "https://live.staticflickr.com/65535/54603828714_2d69d718d4_h.jpg", alt: "World Refugee Day — ALU Rwanda 6", tall: false },
              { src: "/images/myc.jpg", alt: "World Refugee Day — ALU Rwanda 7 (local)", tall: false },
              { src: "https://live.staticflickr.com/65535/54603939760_06c086ebf9_h.jpg", alt: "World Refugee Day — ALU Rwanda 8", tall: false },
            ].map((photo, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl shadow-lg group ${photo.tall ? "row-span-2" : ""}`}
                style={{ height: photo.tall ? "360px" : "170px" }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/30 transition-all duration-300" />
              </div>
            ))}
          </div>

          {/* Footer note */}
          <p className="text-blue-300 text-xs text-center mt-6">
            Photos by Solid Minds Counselling Clinic · Flickr Album — World Refugee Day @ALU (107 photos)
          </p>
        </div>
      </section>
    </div>
  );
}
