import { Link } from "react-router-dom";
import {
  ShieldAlert,
  BarChart3,
  User,
  Map,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-indigo-500/30">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/waterfront/1920/1080?blur=4')] bg-cover bg-center opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 sm:pt-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
              Ministry of Waterfront & Infrastructure Development
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            AI-Powered Digital Permit & Revenue Assurance System
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Enterprise-grade governance infrastructure. Digitize waterfront
            permits, automate compliance with AI, and eliminate revenue leakages
            through predictive analytics.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          <PortalCard
            title="Citizen Portal"
            description="Apply for permits, track status, and manage renewals securely."
            icon={User}
            href="/citizen"
            color="bg-emerald-500/10 text-emerald-400 ring-emerald-500/20"
          />
          <PortalCard
            title="Officer Portal"
            description="Smart routing, AI document intelligence, and risk scoring."
            icon={ShieldAlert}
            href="/officer"
            color="bg-amber-500/10 text-amber-400 ring-amber-500/20"
          />
          <PortalCard
            title="Executive Dashboard"
            description="Revenue analytics, compliance heatmaps, and AI insights."
            icon={BarChart3}
            href="/executive"
            color="bg-indigo-500/10 text-indigo-400 ring-indigo-500/20"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 flex justify-center gap-6"
        >
          <Link
            to="/blueprint"
            className="group flex items-center gap-2 text-sm font-semibold leading-6 text-slate-300 hover:text-white transition-colors"
          >
            <BookOpen
              size={18}
              className="text-slate-500 group-hover:text-white transition-colors"
            />
            View System Blueprint & Architecture
            <ArrowRight
              size={16}
              className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all"
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

function PortalCard({ title, description, icon: Icon, href, color }: any) {
  return (
    <Link
      to={href}
      className="group relative flex flex-col items-start justify-between rounded-2xl bg-slate-900/50 p-8 ring-1 ring-white/10 transition-all hover:bg-slate-800/50 hover:ring-white/20"
    >
      <div className="flex items-center gap-4">
        <div className={`rounded-lg p-2 ring-1 ring-inset ${color}`}>
          <Icon size={24} />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-400">{description}</p>
      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-indigo-400 opacity-0 transition-opacity group-hover:opacity-100">
        Enter Portal <ArrowRight size={16} />
      </div>
    </Link>
  );
}
