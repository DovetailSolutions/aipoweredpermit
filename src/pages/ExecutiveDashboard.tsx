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
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";
import {
  AlertTriangle,
  TrendingUp,
  Activity,
  FileCheck,
  ShieldAlert,
  MapPin,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const revenueData = [
  { name: "Jan", actual: 4000, expected: 4200 },
  { name: "Feb", actual: 3000, expected: 3500 },
  { name: "Mar", actual: 5000, expected: 4800 },
  { name: "Apr", actual: 4500, expected: 4600 },
  { name: "May", actual: 6000, expected: 5500 },
  { name: "Jun", actual: 7000, expected: 6800 },
];

const permitTypes = [
  { name: "Construction", value: 400 },
  { name: "Jetty License", value: 300 },
  { name: "Dredging", value: 200 },
  { name: "Commercial", value: 278 },
  { name: "Clearance", value: 189 },
];

export default function ExecutiveDashboard() {
  return (
    <DashboardLayout title="Executive Dashboard">
      <div className="grid gap-6">
        {/* Top KPIs */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <KpiCard
            title="Total Active Permits"
            value="1,248"
            trend="+12%"
            icon={FileCheck}
            color="text-emerald-600"
            bg="bg-emerald-100"
          />
          <KpiCard
            title="Revenue Collected (YTD)"
            value="₦4.2B"
            trend="+8.4%"
            icon={TrendingUp}
            color="text-indigo-600"
            bg="bg-indigo-100"
          />
          <KpiCard
            title="Expired Permits"
            value="142"
            trend="-3%"
            icon={AlertCircle}
            color="text-amber-600"
            bg="bg-amber-100"
          />
          <KpiCard
            title="Illegal Operations Flagged"
            value="38"
            trend="+14%"
            icon={ShieldAlert}
            color="text-red-600"
            bg="bg-red-100"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Revenue Chart */}
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle>Revenue Assurance vs Expected</CardTitle>
              <CardDescription>
                AI-driven gap detection across all permit tiers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={revenueData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="colorActual"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#4f46e5"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#4f46e5"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#e2e8f0"
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#64748b", fontSize: 12 }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#64748b", fontSize: 12 }}
                      tickFormatter={(value) => `₦${value}M`}
                    />
                    <Tooltip
                      contentStyle={{
                        borderRadius: "8px",
                        border: "1px solid #e2e8f0",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="actual"
                      stroke="#4f46e5"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorActual)"
                      name="Actual Revenue"
                    />
                    <Area
                      type="monotone"
                      dataKey="expected"
                      stroke="#94a3b8"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      fill="none"
                      name="Expected Revenue"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* AI Insights Panel */}
          <Card className="bg-slate-900 text-white">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Activity className="text-indigo-400" size={20} />
                <CardTitle className="text-white">
                  AI Intelligence Engine
                </CardTitle>
              </div>
              <CardDescription className="text-slate-400">
                Real-time predictive insights
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <InsightItem
                type="warning"
                title="Suspicious Approval Pattern"
                desc="Zone 4 shows 3x faster approvals for dredging permits compared to historical average."
              />
              <InsightItem
                type="danger"
                title="Revenue Deviation Alert"
                desc="Expected renewal revenue from Marina district is down 18% this quarter."
              />
              <InsightItem
                type="info"
                title="Enforcement Focus Suggested"
                desc="High probability of illegal sand mining detected in Sector B based on satellite imagery."
              />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Permit Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Active Permits by Type</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={permitTypes}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      horizontal={false}
                      stroke="#e2e8f0"
                    />
                    <XAxis
                      type="number"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#64748b", fontSize: 12 }}
                    />
                    <YAxis
                      dataKey="name"
                      type="category"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#475569", fontSize: 12, fontWeight: 500 }}
                    />
                    <Tooltip
                      cursor={{ fill: "#f1f5f9" }}
                      contentStyle={{
                        borderRadius: "8px",
                        border: "none",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                      }}
                    />
                    <Bar
                      dataKey="value"
                      fill="#0ea5e9"
                      radius={[0, 4, 4, 0]}
                      barSize={24}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Recent Violations Table */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Enforcement Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-4 py-3 font-medium">ID</th>
                      <th className="px-4 py-3 font-medium">Location</th>
                      <th className="px-4 py-3 font-medium">Violation</th>
                      <th className="px-4 py-3 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-mono text-slate-600">
                        V-8921
                      </td>
                      <td className="px-4 py-3 flex items-center gap-2">
                        <MapPin size={14} className="text-slate-400" /> Lekki
                        Phase 1
                      </td>
                      <td className="px-4 py-3">Unlicensed Jetty</td>
                      <td className="px-4 py-3">
                        <Badge variant="destructive">Sealed</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-mono text-slate-600">
                        V-8920
                      </td>
                      <td className="px-4 py-3 flex items-center gap-2">
                        <MapPin size={14} className="text-slate-400" /> Badagry
                        Creek
                      </td>
                      <td className="px-4 py-3">Expired Dredging</td>
                      <td className="px-4 py-3">
                        <Badge variant="warning">Notice Served</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-mono text-slate-600">
                        V-8919
                      </td>
                      <td className="px-4 py-3 flex items-center gap-2">
                        <MapPin size={14} className="text-slate-400" /> Victoria
                        Island
                      </td>
                      <td className="px-4 py-3">Shoreline Encroachment</td>
                      <td className="px-4 py-3">
                        <Badge variant="destructive">Fined</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-mono text-slate-600">
                        V-8918
                      </td>
                      <td className="px-4 py-3 flex items-center gap-2">
                        <MapPin size={14} className="text-slate-400" /> Epe
                        Marina
                      </td>
                      <td className="px-4 py-3">Fake Document</td>
                      <td className="px-4 py-3">
                        <Badge variant="destructive">Arrested</Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

function KpiCard({ title, value, trend, icon: Icon, color, bg }: any) {
  const isPositive = trend.startsWith("+");
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl ${bg} ${color}`}
          >
            <Icon size={24} />
          </div>
          <div
            className={`flex items-center gap-1 text-sm font-medium ${isPositive ? "text-emerald-600" : "text-red-600"}`}
          >
            {trend}
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <h4 className="text-3xl font-bold text-slate-900 mt-1">{value}</h4>
        </div>
      </CardContent>
    </Card>
  );
}

function InsightItem({ type, title, desc }: any) {
  const colors = {
    warning: "border-amber-500/30 bg-amber-500/10 text-amber-200",
    danger: "border-red-500/30 bg-red-500/10 text-red-200",
    info: "border-indigo-500/30 bg-indigo-500/10 text-indigo-200",
  };

  const icons = {
    warning: <AlertTriangle size={16} className="text-amber-400" />,
    danger: <ShieldAlert size={16} className="text-red-400" />,
    info: <Activity size={16} className="text-indigo-400" />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`rounded-lg border p-4 ${colors[type as keyof typeof colors]}`}
    >
      <div className="flex items-center gap-2 font-semibold mb-1">
        {icons[type as keyof typeof icons]}
        <span className="text-sm">{title}</span>
      </div>
      <p className="text-xs opacity-80 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
