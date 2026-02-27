import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Database,
  Server,
  Cpu,
  ShieldCheck,
  Layers,
  Workflow,
  GitMerge,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Blueprint() {
  return (
    <DashboardLayout title="System Blueprint & Architecture">
      <div className="max-w-5xl mx-auto space-y-8 pb-12">
        {/* Executive Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="bg-slate-900 text-white border-slate-800">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                Strategic Overview
              </CardTitle>
              <CardDescription className="text-slate-400 text-base">
                "The real asset in this system is not the permit workflow. It’s
                the data gravity."
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                This blueprint outlines the enterprise-grade infrastructure for
                the Ministry of Waterfront & Infrastructure Development. By
                shifting from a reactive regulator to a predictive controller,
                the Ministry will eliminate manual processing, reduce revenue
                leakages, and enable AI-driven risk scoring.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <ShieldCheck className="text-emerald-400 mb-2" />
                  <h4 className="font-semibold text-white">
                    Corruption-Resistant
                  </h4>
                  <p className="text-sm mt-1">
                    Immutable audit logs, AI document validation, and
                    multi-level approval matrices.
                  </p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <Cpu className="text-indigo-400 mb-2" />
                  <h4 className="font-semibold text-white">AI-Driven</h4>
                  <p className="text-sm mt-1">
                    Predictive compliance, fake document detection, and dynamic
                    risk scoring.
                  </p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <Database className="text-amber-400 mb-2" />
                  <h4 className="font-semibold text-white">Revenue-Focused</h4>
                  <p className="text-sm mt-1">
                    Automated fee calculation, gap detection, and location-tier
                    dynamic pricing.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* System Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Server className="text-indigo-600" /> System Architecture
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <ArchLayer
                  title="Frontend (Presentation Layer)"
                  tech="React 19 / Vite / Tailwind CSS"
                  desc="Responsive SPAs for Citizen, Officer, and Executive portals. Optimized for mobile enforcement."
                />
                <ArchLayer
                  title="API Gateway & Routing"
                  tech="Express.js / Node.js"
                  desc="RESTful APIs with JWT authentication, rate limiting, and request validation."
                />
                <ArchLayer
                  title="AI Intelligence Engine"
                  tech="Python FastAPI / Gemini API"
                  desc="Handles OCR, document validation, risk scoring, and predictive revenue analytics."
                />
                <ArchLayer
                  title="Data Persistence"
                  tech="PostgreSQL + PostGIS"
                  desc="Relational data storage with spatial extensions for waterfront mapping and geo-tagging."
                />
                <ArchLayer
                  title="Infrastructure"
                  tech="Google Cloud Run / Kubernetes"
                  desc="Containerized microservices, auto-scaling, and high availability deployment."
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Database Schema */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Database className="text-indigo-600" /> Core Database Schema (ERD
            Outline)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SchemaTable
              name="Users"
              fields={[
                "id (UUID)",
                "role (Enum: Citizen, Officer, Exec)",
                "kyc_status (Boolean)",
                "auth_hash (String)",
              ]}
            />
            <SchemaTable
              name="Applications"
              fields={[
                "id (UUID)",
                "user_id (FK)",
                "type (Enum)",
                "status (Enum)",
                "risk_score (Int)",
                "documents (JSONB)",
              ]}
            />
            <SchemaTable
              name="Permits"
              fields={[
                "id (UUID)",
                "application_id (FK)",
                "qr_hash (String)",
                "issue_date (Date)",
                "expiry_date (Date)",
                "status (Enum)",
              ]}
            />
            <SchemaTable
              name="GIS_Locations"
              fields={[
                "id (UUID)",
                "permit_id (FK)",
                "coordinates (Point)",
                "tier (Enum: Premium, Standard)",
              ]}
            />
            <SchemaTable
              name="Payments"
              fields={[
                "id (UUID)",
                "application_id (FK)",
                "amount (Decimal)",
                "status (Enum)",
                "gateway_ref (String)",
              ]}
            />
            <SchemaTable
              name="Violations"
              fields={[
                "id (UUID)",
                "permit_id (FK, Nullable)",
                "officer_id (FK)",
                "type (String)",
                "fine_amount (Decimal)",
                "status (Enum)",
              ]}
            />
          </div>
        </motion.div>

        {/* AI Workflow Logic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Workflow className="text-indigo-600" /> AI Workflow Logic
          </h2>
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="border-l-2 border-indigo-200 pl-4 pb-4">
                <h4 className="font-semibold text-slate-900">
                  1. Document Intake & OCR
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  Applicant uploads PDFs. AI extracts text, validates dates, and
                  checks for missing signatures. Forged documents flagged via
                  metadata analysis.
                </p>
              </div>
              <div className="border-l-2 border-indigo-400 pl-4 pb-4">
                <h4 className="font-semibold text-slate-900">
                  2. Risk Scoring (0-100)
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  Calculated based on: GIS location sensitivity (e.g., near
                  protected zones), applicant history (previous violations), and
                  project scale. Score &gt; 70 auto-escalates to Director level.
                </p>
              </div>
              <div className="border-l-2 border-indigo-600 pl-4 pb-4">
                <h4 className="font-semibold text-slate-900">
                  3. Smart Routing
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  Low-risk renewals auto-approved. Medium/High risk routed to
                  Engineering → Environment → Legal based on permit type. SLA
                  timers trigger auto-reminders.
                </p>
              </div>
              <div className="border-l-2 border-indigo-800 pl-4">
                <h4 className="font-semibold text-slate-900">
                  4. Revenue Assurance
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  AI predicts expected revenue based on active permits and
                  historical renewal rates. Deviations &gt; 10% trigger alerts
                  on the Executive Dashboard.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Deployment Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Layers className="text-indigo-600" /> 12-Month Rollout Strategy
          </h2>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-100">
                <RoadmapPhase
                  phase="Phase 1 (Months 1-3): Core Digitization"
                  items={[
                    "Citizen Portal MVP",
                    "Basic Officer Routing",
                    "Payment Gateway Integration",
                    "Digital Permit Generation",
                  ]}
                />
                <RoadmapPhase
                  phase="Phase 2 (Months 4-6): AI & Intelligence"
                  items={[
                    "OCR Document Validation",
                    "Risk Scoring Engine",
                    "Executive Dashboard V1",
                    "Automated Renewals",
                  ]}
                />
                <RoadmapPhase
                  phase="Phase 3 (Months 7-9): Spatial & Enforcement"
                  items={[
                    "GIS Mapping Integration",
                    "Mobile Enforcement App",
                    "Illegal Structure Heatmaps",
                    "Location-Tier Pricing",
                  ]}
                />
                <RoadmapPhase
                  phase="Phase 4 (Months 10-12): Optimization & Scale"
                  items={[
                    "Predictive Revenue Analytics",
                    "Multi-State Expansion Capability",
                    "Blockchain Hash Verification",
                    "Full Audit Compliance",
                  ]}
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}

function ArchLayer({ title, tech, desc }: any) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-4 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
      <div className="sm:w-1/3">
        <h4 className="font-semibold text-slate-900">{title}</h4>
        <Badge variant="secondary" className="mt-1 font-mono text-xs">
          {tech}
        </Badge>
      </div>
      <div className="sm:w-2/3 text-sm text-slate-600 leading-relaxed">
        {desc}
      </div>
    </div>
  );
}

function SchemaTable({ name, fields }: any) {
  return (
    <Card className="border-slate-200 shadow-none">
      <CardHeader className="bg-slate-50 py-3 border-b border-slate-100">
        <CardTitle className="text-sm font-mono text-indigo-700">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <ul className="space-y-1">
          {fields.map((f: string, i: number) => (
            <li
              key={i}
              className="text-xs font-mono text-slate-600 flex items-center gap-2"
            >
              <div className="w-1 h-1 rounded-full bg-slate-300" />
              {f}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function RoadmapPhase({ phase, items }: any) {
  return (
    <div className="p-6 hover:bg-slate-50 transition-colors">
      <h4 className="font-bold text-slate-900 mb-3">{phase}</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {items.map((item: string, i: number) => (
          <div
            key={i}
            className="flex items-center gap-2 text-sm text-slate-600"
          >
            <CheckCircle2 size={14} className="text-emerald-500" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
