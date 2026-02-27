import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  FileText,
  CheckCircle2,
  AlertTriangle,
  ShieldAlert,
  FileSearch,
  Map,
  Clock,
  ArrowRight,
  XCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const applications = [
  {
    id: "APP-2024-891",
    type: "Waterfront Construction",
    applicant: "Lekki Marine Dev Ltd",
    date: "2024-10-24",
    risk: "High",
    status: "Pending Review",
    score: 82,
  },
  {
    id: "APP-2024-890",
    type: "Jetty License Renewal",
    applicant: "Oceanic Logistics",
    date: "2024-10-23",
    risk: "Low",
    status: "Pending Review",
    score: 15,
  },
  {
    id: "APP-2024-889",
    type: "Dredging Permit",
    applicant: "SandCorp Nigeria",
    date: "2024-10-23",
    risk: "Medium",
    status: "Pending Review",
    score: 45,
  },
];

export default function OfficerPortal() {
  const [selectedApp, setSelectedApp] = useState(applications[0]);

  return (
    <DashboardLayout title="Officer Processing Portal">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 h-[calc(100vh-8rem)]">
        {/* Task Queue */}
        <Card className="col-span-1 flex flex-col overflow-hidden">
          <CardHeader className="border-b border-slate-100 pb-4 bg-slate-50/50">
            <CardTitle className="text-lg flex items-center justify-between">
              Approval Queue
              <Badge variant="secondary">12 Pending</Badge>
            </CardTitle>
            <CardDescription>Smart Routing Workflow Engine</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-0">
            <div className="divide-y divide-slate-100">
              {applications.map((app) => (
                <button
                  key={app.id}
                  onClick={() => setSelectedApp(app)}
                  className={`w-full text-left p-4 transition-colors hover:bg-slate-50 ${selectedApp.id === app.id ? "bg-indigo-50/50 border-l-4 border-indigo-500" : "border-l-4 border-transparent"}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-xs font-semibold text-slate-500">
                      {app.id}
                    </span>
                    <Badge
                      variant={
                        app.risk === "High"
                          ? "destructive"
                          : app.risk === "Medium"
                            ? "warning"
                            : "success"
                      }
                    >
                      {app.risk} Risk
                    </Badge>
                  </div>
                  <h4 className="font-medium text-slate-900 text-sm">
                    {app.type}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">{app.applicant}</p>
                  <div className="flex items-center gap-2 mt-3 text-xs text-slate-400">
                    <Clock size={12} />
                    SLA: 2 days remaining
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Application Details & AI Analysis */}
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-6 overflow-y-auto pb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedApp.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Header Info */}
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">
                        {selectedApp.type}
                      </CardTitle>
                      <CardDescription className="text-base mt-1">
                        {selectedApp.applicant} • {selectedApp.id}
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Map size={16} className="mr-2" /> View GIS Map
                      </Button>
                      <Button size="sm">Approve & Sign</Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* AI Risk Scoring */}
                <Card className="border-red-200 bg-red-50/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-bold text-red-900 flex items-center gap-2 uppercase tracking-wider">
                      <ShieldAlert size={16} className="text-red-500" />
                      AI Risk Scoring System
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-end gap-4 mb-6">
                      <div className="text-5xl font-black text-red-600 tracking-tighter">
                        {selectedApp.score}
                      </div>
                      <div className="text-sm font-medium text-red-800 mb-1">
                        / 100 Risk Score
                      </div>
                    </div>

                    <div className="space-y-3">
                      <RiskFactor
                        label="Location Sensitivity (GIS)"
                        value="High"
                        desc="Proposed site is within 50m of protected mangroves."
                      />
                      <RiskFactor
                        label="Applicant History"
                        value="Flagged"
                        desc="Previous company director associated with revoked license."
                      />
                      <RiskFactor
                        label="Project Scale"
                        value="Medium"
                        desc="Standard commercial jetty dimensions."
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* AI Document Intelligence */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-bold text-slate-900 flex items-center gap-2 uppercase tracking-wider">
                      <FileSearch size={16} className="text-indigo-500" />
                      Document Intelligence Engine
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mt-2">
                      <DocCheck
                        status="pass"
                        name="Corporate Affairs Commission (CAC)"
                        detail="Verified via API. Hash matched."
                      />
                      <DocCheck
                        status="pass"
                        name="Environmental Impact Assessment"
                        detail="OCR extracted. Dates valid."
                      />
                      <DocCheck
                        status="fail"
                        name="Tax Clearance Certificate"
                        detail="Suspicious formatting detected. Possible forgery."
                      />
                      <DocCheck
                        status="warn"
                        name="Engineering Drawings"
                        detail="Missing structural engineer seal."
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="bg-slate-50 border-t border-slate-100 py-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-indigo-600 border-indigo-200 hover:bg-indigo-50"
                    >
                      Run Deep OCR Scan
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Smart Routing */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-bold uppercase tracking-wider">
                    Smart Routing Workflow
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between relative">
                    <div className="absolute left-0 top-1/2 w-full h-0.5 bg-slate-200 -z-10 -translate-y-1/2"></div>

                    <WorkflowStep
                      status="completed"
                      name="Document Intake"
                      dept="Citizen Portal"
                      date="Oct 24, 09:00"
                    />
                    <WorkflowStep
                      status="completed"
                      name="AI Pre-Screen"
                      dept="System"
                      date="Oct 24, 09:05"
                    />
                    <WorkflowStep
                      status="current"
                      name="Technical Review"
                      dept="Engineering"
                      date="Pending"
                    />
                    <WorkflowStep
                      status="pending"
                      name="Legal Clearance"
                      dept="Legal Dept"
                      date="-"
                    />
                    <WorkflowStep
                      status="pending"
                      name="Final Approval"
                      dept="Director"
                      date="-"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </DashboardLayout>
  );
}

function RiskFactor({ label, value, desc }: any) {
  return (
    <div className="flex flex-col gap-1 border-b border-red-100 pb-2 last:border-0 last:pb-0">
      <div className="flex justify-between items-center">
        <span className="text-xs font-semibold text-red-900">{label}</span>
        <Badge
          variant={
            value === "High" || value === "Flagged"
              ? "destructive"
              : "secondary"
          }
          className="text-[10px] px-1.5 py-0 h-4"
        >
          {value}
        </Badge>
      </div>
      <span className="text-xs text-red-700/80">{desc}</span>
    </div>
  );
}

function DocCheck({ status, name, detail }: any) {
  const icons = {
    pass: <CheckCircle2 size={16} className="text-emerald-500 mt-0.5" />,
    fail: <XCircle size={16} className="text-red-500 mt-0.5" />,
    warn: <AlertTriangle size={16} className="text-amber-500 mt-0.5" />,
  };

  return (
    <div className="flex items-start gap-3">
      {icons[status as keyof typeof icons]}
      <div>
        <p className="text-sm font-medium text-slate-900 leading-none">
          {name}
        </p>
        <p className="text-xs text-slate-500 mt-1">{detail}</p>
      </div>
    </div>
  );
}

function WorkflowStep({ status, name, dept, date }: any) {
  const styles = {
    completed: "bg-emerald-500 text-white ring-emerald-100",
    current: "bg-indigo-600 text-white ring-indigo-100 ring-4",
    pending: "bg-slate-200 text-slate-400 ring-slate-50",
  };

  return (
    <div className="flex flex-col items-center gap-2 bg-white px-2">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ring-4 ${styles[status as keyof typeof styles]}`}
      >
        {status === "completed" ? (
          <CheckCircle2 size={16} />
        ) : status === "current" ? (
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        ) : null}
      </div>
      <div className="text-center">
        <p
          className={`text-xs font-bold ${status === "pending" ? "text-slate-400" : "text-slate-900"}`}
        >
          {name}
        </p>
        <p className="text-[10px] text-slate-500">{dept}</p>
        <p className="text-[10px] text-slate-400 mt-1 font-mono">{date}</p>
      </div>
    </div>
  );
}
