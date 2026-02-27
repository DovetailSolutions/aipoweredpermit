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
  Plus,
  UploadCloud,
  CreditCard,
  CheckCircle2,
  QrCode,
  Download,
  Clock,
  ArrowRight,
  Map,
} from "lucide-react";
import { motion } from "framer-motion";

export default function CitizenPortal() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <DashboardLayout title="Citizen Portal">
      <div className="flex gap-4 border-b border-slate-200 mb-6">
        <TabButton
          active={activeTab === "dashboard"}
          onClick={() => setActiveTab("dashboard")}
        >
          My Permits & Applications
        </TabButton>
        <TabButton
          active={activeTab === "apply"}
          onClick={() => setActiveTab("apply")}
        >
          Apply for New Permit
        </TabButton>
        <TabButton
          active={activeTab === "renewals"}
          onClick={() => setActiveTab("renewals")}
        >
          Renewals & Payments
        </TabButton>
      </div>

      {activeTab === "dashboard" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-slate-900">
              Active Permits
            </h2>
            <Button size="sm" onClick={() => setActiveTab("apply")}>
              <Plus size={16} className="mr-2" /> New Application
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PermitCard
              type="Jetty License"
              id="MWID-JL-2023-089"
              expiry="2024-12-31"
              status="Active"
              location="Lekki Phase 1"
            />
            <PermitCard
              type="Dredging Permit"
              id="MWID-DP-2024-012"
              expiry="2024-06-30"
              status="Expiring Soon"
              location="Badagry Creek"
            />
          </div>

          <h2 className="text-lg font-semibold text-slate-900 mt-10">
            Application Tracking
          </h2>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-100">
                <ApplicationRow
                  id="APP-2024-891"
                  type="Waterfront Construction"
                  date="2024-10-24"
                  status="In Review"
                  step="Technical Evaluation"
                />
                <ApplicationRow
                  id="APP-2024-850"
                  type="Commercial Activity"
                  date="2024-10-15"
                  status="Awaiting Payment"
                  step="Fee Calculation Complete"
                  action="Pay Now"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {activeTab === "apply" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-3xl mx-auto"
        >
          <Card>
            <CardHeader>
              <CardTitle>New Permit Application</CardTitle>
              <CardDescription>
                Dynamic form with AI document validation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-900">
                  Permit Type
                </label>
                <select className="w-full h-10 rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                  <option>Waterfront Construction Permit</option>
                  <option>Jetty and Landing License</option>
                  <option>Dredging and Sand Mining Permit</option>
                  <option>Floating Structure Approval</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-900">
                    Project Name
                  </label>
                  <input
                    type="text"
                    className="w-full h-10 rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    placeholder="e.g. Marina Extension"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-900">
                    Location Coordinates (GIS)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="w-full h-10 rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      placeholder="Lat, Long"
                    />
                    <Button variant="outline" size="icon">
                      <Map size={16} />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="text-sm font-semibold text-slate-900">
                  Required Documents (AI Validated)
                </h3>

                <UploadZone
                  title="Corporate Affairs Commission (CAC) Certificate"
                  status="uploaded"
                />
                <UploadZone
                  title="Environmental Impact Assessment (EIA)"
                  status="pending"
                />
                <UploadZone
                  title="Engineering Drawings (Stamped)"
                  status="pending"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t border-slate-100 pt-6">
              <Button variant="ghost">Save Draft</Button>
              <Button>
                Submit Application <ArrowRight size={16} className="ml-2" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      )}
    </DashboardLayout>
  );
}

function TabButton({ active, children, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`pb-3 text-sm font-medium border-b-2 transition-colors ${active ? "border-indigo-600 text-indigo-600" : "border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300"}`}
    >
      {children}
    </button>
  );
}

function PermitCard({ type, id, expiry, status, location }: any) {
  return (
    <Card className="relative overflow-hidden group">
      <div
        className={`absolute top-0 left-0 w-1 h-full ${status === "Active" ? "bg-emerald-500" : "bg-amber-500"}`}
      />
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant={status === "Active" ? "success" : "warning"}>
            {status}
          </Badge>
          <QrCode
            size={24}
            className="text-slate-300 group-hover:text-indigo-500 transition-colors cursor-pointer"
          />
        </div>
        <CardTitle className="text-lg mt-2">{type}</CardTitle>
        <CardDescription className="font-mono text-xs">{id}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-slate-600 mt-2">
          <p>
            <span className="font-medium text-slate-900">Location:</span>{" "}
            {location}
          </p>
          <p>
            <span className="font-medium text-slate-900">Expires:</span>{" "}
            {expiry}
          </p>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="outline" size="sm" className="w-full">
          <Download size={14} className="mr-2" /> Download Digital Permit
        </Button>
      </CardFooter>
    </Card>
  );
}

function ApplicationRow({ id, type, date, status, step, action }: any) {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
          <FileText size={20} />
        </div>
        <div>
          <p className="font-medium text-slate-900 text-sm">{type}</p>
          <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
            <span className="font-mono">{id}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock size={12} /> {date}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium text-slate-900">{status}</p>
          <p className="text-xs text-slate-500">{step}</p>
        </div>
        {action ? (
          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
            <CreditCard size={14} className="mr-2" /> {action}
          </Button>
        ) : (
          <Button variant="outline" size="sm">
            View Details
          </Button>
        )}
      </div>
    </div>
  );
}

function UploadZone({ title, status }: any) {
  return (
    <div
      className={`border-2 border-dashed rounded-lg p-4 flex items-center justify-between transition-colors ${status === "uploaded" ? "border-emerald-200 bg-emerald-50/50" : "border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/30"}`}
    >
      <div className="flex items-center gap-3">
        {status === "uploaded" ? (
          <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
            <CheckCircle2 size={16} />
          </div>
        ) : (
          <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
            <UploadCloud size={16} />
          </div>
        )}
        <div>
          <p className="text-sm font-medium text-slate-900">{title}</p>
          <p className="text-xs text-slate-500">
            {status === "uploaded"
              ? "AI Validated • 2.4MB PDF"
              : "PDF, JPG up to 10MB"}
          </p>
        </div>
      </div>
      {status !== "uploaded" && (
        <Button variant="outline" size="sm">
          Browse
        </Button>
      )}
    </div>
  );
}
