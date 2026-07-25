import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { Mic, Table, Route, BarChart3, Gauge } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'WhatsApp AI Expense Tracker',
    tech: 'N8N • WhatsApp • Google Sheets',
    techColor: 'primary',
    description:
      'A voice-activated WhatsApp bot that utilizes Gemini AI to parse natural language or audio messages and automatically logs structured expense data into Google Sheets. Built with n8n for workflow orchestration.',
    features: [
      { icon: Mic, title: 'Voice Recognition', desc: 'Transcribes audio clips and extracts key information' },
      { icon: Table, title: 'Structured Logging', desc: 'Categorizes data into designated Google Sheets columns' },
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgAtbFYtfXzHW3vXYgQMcfvYe-i2bZUSjKFWva1LqNAe8LjXtRv8tEZaF_YSF_zQZ1MgkcHSXD85BEWR7Xp7b8ZBnvu3d_mVk9MTe-fCrConOuH3ETjSv6faZscPVQRh8dYCZb3kQh7LjcdgyW0x4Qrv7dwgsQBiYs3SIkBasE3GHbAiFmezvv1uvgl_J3uSG3GmdRmdKXi4uhCD3pe3mvnaP_Q6VOY8yq1tXW_qmwTZ3BKTq1GwsY3LafQkHRR4ZiCgk_BIM5C67c',
    workflow: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsqju10FEbMoG5-DXXSU2lagbY_Y7pVFBIGuClG5VTBBngJ3Dagpvc5FdPZByaiI5HccUpXqjJuty0vvX46QRH_YUpP5_SRJwxnD3175itarMvJ5CcnZkUw9an5e7Hwrn3xIwrNMxJfN_qM8SBNWf-sqmYkiaA0fIXkdQUVjBMNPUTcrYzbCD4gWV3gHQviffUeUcXUl_bSmvL0Trb6waXKiNJqzsCw3dcQolRwI4Gdw9KQfY-oeJdD233IDDZ9FSxT2q-ChuG-j0F',
  },
  {
    id: 2,
    title: 'Milk Delivery Route Optimization',
    tech: 'Python • N8N • Enterprise Logistics',
    techColor: 'secondary',
    description:
      'An enterprise-level system designed for high-density route planning. It manages capacity, driver allocation, and operational constraints across multiple growth scenarios. Built to scale from 400 to 5,000+ customers.',
    features: [
      { icon: Route, title: 'Route Planning', desc: 'Optimized multi-stop delivery sequences' },
      { icon: BarChart3, title: 'Capacity Modeling', desc: 'Predictive scaling across growth scenarios' },
      { icon: Gauge, title: 'Operational Risks', desc: 'Identifying bottlenecks in depots' },
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA28Lk4IakZDeQCioYU3GKsEpwr-jVpuH50OCsUX95gHkhjeuCsZg9gXUk8zVv7vWL6_6PXiMiSAQ1FP06JeSXL_jAJ1TvA7HWnF1zfryW9ZRItswua_JjME94CanoKID-yrSJfEMvT7XYmJcfjOa6WlYg1AGm4HFc-I676s7hiTl8c11vrVKegghAUWaE_6-D__4m-dHGW4pbysBsT8znMFeS4CrD5gtpma-3OrT29XlVnKM8_JshN5apG5vyiCLzNjGuAC_6yWpco',
    bento: [
      { title: 'Growth Scenarios', desc: 'Predictive capacity planning', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU5ilNe53mN50c10C0USI8TsQlfJSJmlIaaRiqdzuWuQAhHdD0HLL4YjJhQadQfdsHB9lsUJmI2hDSuH5d-r3BwBJRPDTO9O4qNbeZgO9_dL0RJpezIqkp5Kw2MEoCKrY01n43pw0_JOjBCgycQrXpv7OY_LUCH3xrPZKc4rUWXTRdJ63OfRSCRGoT5EDs5iIF5_3ZjkfmJ2_hGIFPTCMrP3hl0RbkoxRADvyRmcfHEIK6h0U4Iop5yPWOq515rPFEVH5Nw5y6bG_m', span: 'md:col-span-2' },
      { title: 'Operational Risks', desc: 'South Chennai depot analysis', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASPayAZUrzTUS1wt6VHn3wFdcpJYqltg9aXmXp59E4Jf5kai1RTAA-5Js2tSupPpgBaEhz5_t8XvvBO90Wiy78iJKjZF1qb6c-etymQv824vzHfdbGY9ShfZvd6FzBNKty06r1OEyswkC3aaLotQecl03hZxQJy1q8RkX157LoEe7kjjsGjvodB_-VaNCq3p1PR6DILfVUvY68OCF7FKtLgrHLE07g5f35_qNIIwEJl0meZn22i4MtG1e0-u79cuuNQ__hYXVmm6t4', span: '' },
      { title: 'Fleet Sizing', desc: 'Supervisor-to-rider ratios', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX3WXbKj7y-755yQyWEhq_FosCdvxRzyvTFszirOmFIE0wNOKRtUFmcr45I30yMYSmC8sbac1cugz5jjkDSVD2nWg7JdM4tBySqXV6jW3TMeKMSql9eFuv8tmZwvPXTf1FfDoRjdzlS44VJlAPWcxa7qXKvrCPZrF6iG3bWOg_Cs7mLBPs38neKcl-WtUlbEdmmd617kI-7gCngurJNKCm7JHXNKvz-eoje2SCk_lsQXKmMen5RtYLEE-pmNZPeuCFRpKIP6oUc6uL', span: '' },
    ],
  },
];

const techColorMap = {
  primary: 'text-primary',
  secondary: 'text-secondary',
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-32" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal className="text-center mb-24">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4 block">
            Portfolio
          </span>
          <h2
            id="projects-heading"
            className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text-primary"
          >
            Selected <span className="gradient-text">Case Studies</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-32">
          {projects.map((project, idx) => (
            <div key={project.id} className={idx === 1 ? 'mt-32' : ''}>
              {/* Main Project Block */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <ScrollReveal
                  direction={idx % 2 === 0 ? 'left' : 'right'}
                  className={`space-y-6 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}
                >
                  <span
                    className={`text-xs font-bold tracking-[0.25em] uppercase ${techColorMap[project.techColor]}`}
                  >
                    {project.tech}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
                    {project.title}
                  </h3>
                  <p className="text-base leading-relaxed text-text-secondary">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.features.map((f) => (
                      <span
                        key={f.title}
                        className={`inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-semibold ${techColorMap[project.techColor]}`}
                      >
                        <f.icon className="h-3.5 w-3.5" aria-hidden="true" />
                        {f.title}
                      </span>
                    ))}
                  </div>
                </ScrollReveal>

                <ScrollReveal
                  direction={idx % 2 === 0 ? 'right' : 'left'}
                  className={idx % 2 !== 0 ? 'lg:order-1' : ''}
                >
                  <div className="glass-card p-3 group overflow-hidden">
                    <div className="relative overflow-hidden rounded-2xl aspect-video">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        width={800}
                        height={450}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Secondary Info Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                <ScrollReveal delay={0.1}>
                  <div className="glass-card p-4 group overflow-hidden">
                    <div className="relative overflow-hidden rounded-2xl aspect-video">
                      <img
                        src={project.workflow}
                        alt={`${project.title} workflow diagram`}
                        width={800}
                        height={450}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="flex flex-col justify-center gap-8 p-2">
                    {project.features.map((f) => (
                      <div key={f.title} className="flex items-start gap-5">
                        <div className="mt-1 rounded-xl bg-primary/10 p-3 text-primary">
                          <f.icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <h4 className="font-display font-semibold text-lg text-text-primary">
                            {f.title}
                          </h4>
                          <p className="text-sm leading-relaxed text-text-muted mt-1">
                            {f.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              {/* Bento Grid for Project 2 */}
              {project.bento && (
                <ScrollReveal delay={0.2} className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {project.bento.map((item) => (
                      <div
                        key={item.title}
                        className={`glass-card p-5 ${item.span}`}
                      >
                        <div className="relative overflow-hidden rounded-xl border border-white/[0.06] mb-5 aspect-video">
                          <img
                            src={item.img}
                            alt={item.title}
                            width={400}
                            height={200}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          />
                        </div>
                        <h4 className="font-display font-semibold text-text-primary">
                          {item.title}
                        </h4>
                        <p className="text-sm text-text-muted mt-1">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
