"use client";

import React, { useState, useEffect } from "react";
import { Enquiry, EnquiryStatus } from "@/types";
import { projectsData } from "@/config/projects";
import { formatDate } from "@/lib/utils";
import {
  Lock,
  LogOut,
  Search,
  Filter,
  CheckCircle,
  Clock,
  AlertCircle,
  ChevronRight,
  ExternalLink,
  MessageSquareCode,
  Eye,
  RefreshCw,
  FolderGit2,
  Shield,
  Layers,
  Database,
  Calendar,
  X,
  UserCheck,
} from "lucide-react";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [adminKey, setAdminKey] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  // Dashboard Data State
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"enquiries" | "projects" | "system">("enquiries");
  
  // Filters & Search
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [serviceFilter, setServiceFilter] = useState<string>("all");

  // Selected Enquiry for Details Modal
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [updatingStatus, setUpdatingStatus] = useState(false);

  // Check auth on load
  useEffect(() => {
    const initAuth = async () => {
      try {
        const res = await fetch("/api/auth/admin");
        if (res.ok) {
          setIsAuthenticated(true);
          // fetch enquiries
          try {
            const eqRes = await fetch("/api/enquiries");
            if (eqRes.ok) {
              const data = await eqRes.json();
              setEnquiries(data.enquiries || []);
            }
          } catch {
            // handle error
          }
        } else {
          setIsAuthenticated(false);
        }
      } catch {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    initAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch("/api/auth/admin");
      if (res.ok) {
        setIsAuthenticated(true);
        fetchEnquiries();
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoggingIn(true);
    setLoginError("");

    try {
      const res = await fetch("/api/auth/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: adminKey }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Authentication failed");
      }

      setIsAuthenticated(true);
      fetchEnquiries();
    } catch (err: any) {
      setLoginError(err.message || "Invalid Admin Secret Key");
    } finally {
      setLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/admin", { method: "DELETE" });
    } finally {
      setIsAuthenticated(false);
      setEnquiries([]);
    }
  };

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/enquiries");
      if (res.ok) {
        const data = await res.json();
        setEnquiries(data.enquiries || []);
      }
    } catch (err) {
      console.error("Failed to fetch enquiries:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (id: string, newStatus: EnquiryStatus) => {
    setUpdatingStatus(true);
    try {
      const res = await fetch(`/api/enquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        setEnquiries((prev) =>
          prev.map((e) => (e.id === id ? { ...e, status: newStatus } : e))
        );
        if (selectedEnquiry && selectedEnquiry.id === id) {
          setSelectedEnquiry({ ...selectedEnquiry, status: newStatus });
        }
      }
    } catch (err) {
      console.error("Failed to update status:", err);
    } finally {
      setUpdatingStatus(false);
    }
  };

  // Metrics
  const totalEnquiries = enquiries.length;
  const newEnquiries = enquiries.filter((e) => e.status === "new").length;
  const inProgressEnquiries = enquiries.filter((e) => e.status === "in-progress").length;
  const completedEnquiries = enquiries.filter((e) => e.status === "completed").length;

  // Filtered List
  const filteredEnquiries = enquiries.filter((item) => {
    const matchesSearch =
      item.full_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.enquiry_number?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.whatsapp_number?.includes(searchQuery);

    const matchesStatus = statusFilter === "all" || item.status === statusFilter;
    const matchesService = serviceFilter === "all" || item.service_required === serviceFilter;

    return matchesSearch && matchesStatus && matchesService;
  });

  // 1. Loading state
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center text-slate-400">
        <RefreshCw className="w-6 h-6 animate-spin text-purple-400" />
      </div>
    );
  }

  // 2. Authentication Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center container mx-auto px-4">
        <div className="w-full max-w-md rounded-3xl bg-[#0D1127] border border-purple-500/30 p-8 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mx-auto">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-black text-white">VISION VERSE24</h1>
            <p className="text-xs text-slate-400">
              Admin Portal Security Authentication
            </p>
          </div>

          {loginError && (
            <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Admin Secret Key
              </label>
              <input
                type="password"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                placeholder="Enter ADMIN_SECRET_KEY"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#080B1C] border border-slate-800 text-sm text-white focus:outline-none focus:border-purple-400"
              />
            </div>

            <button
              type="submit"
              disabled={loggingIn}
              className="w-full py-3.5 px-6 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:to-pink-500 shadow-glow-sm transition-all disabled:opacity-50"
            >
              {loggingIn ? "Verifying Credentials..." : "Authenticate & Access"}
            </button>
          </form>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-[11px] text-slate-400 text-center">
            Note: The default dev secret key is set in <code className="text-purple-300">.env.local</code>.
          </div>
        </div>
      </div>
    );
  }

  // 3. Authenticated Dashboard View
  return (
    <div className="min-h-screen pt-28 pb-20 container mx-auto px-4 md:px-6 space-y-8">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
              Operational Session Active
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
            Vision Verse24 Administration
          </h1>
          <p className="text-xs text-slate-400">
            Real-time client enquiries, project status, and service catalogue operations
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchEnquiries}
            className="p-2.5 rounded-xl bg-[#111633] border border-purple-500/20 text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            title="Refresh Data"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-rose-400 bg-rose-500/10 border border-rose-500/20 hover:bg-rose-500/20 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-[#0D1127] border border-purple-500/20 space-y-1">
          <div className="text-xs font-semibold text-slate-400">Total Enquiries</div>
          <div className="text-2xl font-black text-white">{totalEnquiries}</div>
          <div className="text-[10px] text-slate-500">Database recorded</div>
        </div>

        <div className="p-5 rounded-2xl bg-[#0D1127] border border-blue-500/30 space-y-1 relative overflow-hidden">
          <div className="text-xs font-semibold text-blue-400 flex items-center justify-between">
            <span>New Enquiries</span>
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
          </div>
          <div className="text-2xl font-black text-white">{newEnquiries}</div>
          <div className="text-[10px] text-blue-300">Awaiting contact</div>
        </div>

        <div className="p-5 rounded-2xl bg-[#0D1127] border border-amber-500/20 space-y-1">
          <div className="text-xs font-semibold text-amber-400">In Progress</div>
          <div className="text-2xl font-black text-white">{inProgressEnquiries}</div>
          <div className="text-[10px] text-slate-500">Active development</div>
        </div>

        <div className="p-5 rounded-2xl bg-[#0D1127] border border-emerald-500/20 space-y-1">
          <div className="text-xs font-semibold text-emerald-400">Completed</div>
          <div className="text-2xl font-black text-white">{completedEnquiries}</div>
          <div className="text-[10px] text-slate-500">Delivered & launched</div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-slate-800 space-x-2 text-xs font-bold">
        {[
          { key: "enquiries", label: `Enquiries (${enquiries.length})`, icon: MessageSquareCode },
          { key: "projects", label: `Projects (${projectsData.length})`, icon: FolderGit2 },
          { key: "system", label: "Infrastructure & DB", icon: Database },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`flex items-center gap-2 py-3 px-4 rounded-t-xl transition-all ${
                activeTab === tab.key
                  ? "bg-[#111633] text-white border-t-2 border-purple-500 border-x border-slate-800"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: ENQUIRIES */}
      {activeTab === "enquiries" && (
        <div className="space-y-6">
          {/* Search & Filter Bar */}
          <div className="p-4 rounded-2xl bg-[#0D1127] border border-purple-500/20 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by ID, name, email or phone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#080B1C] border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Filter className="w-3.5 h-3.5 text-purple-400" />
                <span>Status:</span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-2.5 py-1.5 rounded-lg bg-[#080B1C] border border-slate-800 text-xs text-white focus:outline-none"
                >
                  <option value="all">All Statuses</option>
                  <option value="new">New</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-300">
                <span>Service:</span>
                <select
                  value={serviceFilter}
                  onChange={(e) => setServiceFilter(e.target.value)}
                  className="px-2.5 py-1.5 rounded-lg bg-[#080B1C] border border-slate-800 text-xs text-white focus:outline-none max-w-[150px]"
                >
                  <option value="all">All Services</option>
                  <option value="Resume Build">Resume Build</option>
                  <option value="Portfolio Website">Portfolio Website</option>
                  <option value="College Project">College Project</option>
                  <option value="Training & Learn">Training & Learn</option>
                  <option value="Business Website">Business Website</option>
                  <option value="E-commerce Website">E-commerce</option>
                </select>
              </div>
            </div>
          </div>

          {/* Enquiries Table */}
          <div className="rounded-3xl bg-[#0D1127] border border-purple-500/20 overflow-hidden shadow-2xl">
            {filteredEnquiries.length === 0 ? (
              <div className="p-12 text-center text-slate-400 space-y-2">
                <MessageSquareCode className="w-10 h-10 mx-auto text-slate-600" />
                <p className="text-sm font-semibold text-white">No enquiries match your search.</p>
                <p className="text-xs">
                  {enquiries.length === 0
                    ? "No enquiries received yet. Try submitting a test from the Contact page!"
                    : "Try clearing your filters."}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#080B1C] text-slate-400 border-b border-slate-800 uppercase tracking-wider text-[10px]">
                    <tr>
                      <th className="py-3.5 px-4 font-semibold">Enquiry ID</th>
                      <th className="py-3.5 px-4 font-semibold">Customer</th>
                      <th className="py-3.5 px-4 font-semibold">Service & Budget</th>
                      <th className="py-3.5 px-4 font-semibold">Contact Preference</th>
                      <th className="py-3.5 px-4 font-semibold">Status</th>
                      <th className="py-3.5 px-4 font-semibold">Date</th>
                      <th className="py-3.5 px-4 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-200">
                    {filteredEnquiries.map((item) => (
                      <tr key={item.id} className="hover:bg-white/5 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-purple-400">
                          {item.enquiry_number}
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-bold text-white">{item.full_name}</div>
                          <div className="text-[11px] text-slate-400">{item.whatsapp_number}</div>
                          <div className="text-[11px] text-slate-500 truncate max-w-[140px]">
                            {item.email}
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-cyan-300">{item.service_required}</div>
                          <div className="text-[11px] text-slate-400">{item.budget}</div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                            {item.contact_preference}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <select
                            value={item.status}
                            onChange={(e) =>
                              handleUpdateStatus(item.id, e.target.value as EnquiryStatus)
                            }
                            disabled={updatingStatus}
                            className={`px-2.5 py-1 rounded-full text-[11px] font-bold border focus:outline-none cursor-pointer ${
                              item.status === "new"
                                ? "bg-blue-500/20 text-blue-300 border-blue-500/40"
                                : item.status === "in-progress"
                                ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                                : item.status === "completed"
                                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                                : "bg-slate-700/50 text-slate-400 border-slate-600"
                            }`}
                          >
                            <option value="new" className="bg-[#080B1C] text-white">New</option>
                            <option value="in-progress" className="bg-[#080B1C] text-white">In Progress</option>
                            <option value="completed" className="bg-[#080B1C] text-white">Completed</option>
                            <option value="cancelled" className="bg-[#080B1C] text-white">Cancelled</option>
                          </select>
                        </td>
                        <td className="py-3.5 px-4 text-slate-400 text-[11px] whitespace-nowrap">
                          {formatDate(item.created_at)}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => setSelectedEnquiry(item)}
                              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                              title="Inspect Details"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <a
                              href={`https://wa.me/${item.whatsapp_number.replace(/\D/g, "")}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 transition-colors border border-emerald-500/20"
                              title="Chat Customer on WhatsApp"
                            >
                              <MessageSquareCode className="w-4 h-4" />
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: PROJECTS */}
      {activeTab === "projects" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">Configured Agency Projects</h3>
            <span className="text-xs text-slate-400 font-mono">
              Source: src/config/projects.ts
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="p-5 rounded-2xl bg-[#0D1127] border border-purple-500/20 flex items-start justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-cyan-400">{project.category}</span>
                    {project.featured && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-black">
                        Featured
                      </span>
                    )}
                  </div>
                  <h4 className="text-base font-bold text-white">{project.title}</h4>
                  <p className="text-xs text-slate-400 line-clamp-2">{project.description}</p>
                  <div className="text-[11px] text-slate-500 font-mono pt-1">
                    Slug: /projects/{project.slug}
                  </div>
                </div>

                <div className="flex flex-col gap-2 shrink-0">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1"
                    >
                      <span>Live</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}


      {/* TAB 4: SYSTEM & INFRASTRUCTURE */}
      {activeTab === "system" && (
        <div className="space-y-6 max-w-4xl">
          <div className="p-6 rounded-3xl bg-[#0D1127] border border-purple-500/20 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span>Production Architecture Verification</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[#080B1C] border border-slate-800 space-y-1">
                <div className="text-slate-400 font-semibold">Hosting Target</div>
                <div className="text-white font-bold">Vercel Serverless Edge</div>
                <div className="text-[10px] text-emerald-400">Active Build Profile</div>
              </div>

              <div className="p-4 rounded-xl bg-[#080B1C] border border-slate-800 space-y-1">
                <div className="text-slate-400 font-semibold">Database Engine</div>
                <div className="text-white font-bold">Supabase PostgreSQL + RLS</div>
                <div className="text-[10px] text-purple-400">Local fallback active if unconfigured</div>
              </div>

              <div className="p-4 rounded-xl bg-[#080B1C] border border-slate-800 space-y-1">
                <div className="text-slate-400 font-semibold">Owner WhatsApp Number</div>
                <div className="text-white font-bold font-mono">919392438853</div>
                <div className="text-[10px] text-slate-400">Environment bound</div>
              </div>

              <div className="p-4 rounded-xl bg-[#080B1C] border border-slate-800 space-y-1">
                <div className="text-slate-400 font-semibold">Enquiry ID Generator</div>
                <div className="text-white font-bold font-mono">VV-YYYY-XXXX</div>
                <div className="text-[10px] text-emerald-400">Sequential & Collision Safe</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ENQUIRY DETAILS MODAL */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-2xl rounded-3xl bg-[#0D1127] border border-purple-500/40 p-6 md:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-purple-400 font-bold">
                  {selectedEnquiry.enquiry_number}
                </span>
                <h3 className="text-xl font-bold text-white">{selectedEnquiry.full_name}</h3>
              </div>
              <button
                onClick={() => setSelectedEnquiry(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-[#080B1C] border border-slate-800">
                <span className="text-slate-500 block">WhatsApp Number:</span>
                <span className="text-white font-mono font-semibold">{selectedEnquiry.whatsapp_number}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#080B1C] border border-slate-800">
                <span className="text-slate-500 block">Email Address:</span>
                <span className="text-white font-semibold">{selectedEnquiry.email}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#080B1C] border border-slate-800">
                <span className="text-slate-500 block">Customer Type:</span>
                <span className="text-cyan-400 font-semibold">{selectedEnquiry.customer_type}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#080B1C] border border-slate-800">
                <span className="text-slate-500 block">Service Required:</span>
                <span className="text-purple-400 font-semibold">{selectedEnquiry.service_required}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#080B1C] border border-slate-800">
                <span className="text-slate-500 block">Budget Tier:</span>
                <span className="text-emerald-400 font-semibold">{selectedEnquiry.budget}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#080B1C] border border-slate-800">
                <span className="text-slate-500 block">Preferred Contact:</span>
                <span className="text-white font-semibold">{selectedEnquiry.contact_preference}</span>
              </div>
            </div>

            {selectedEnquiry.delivery_date && (
              <div className="text-xs p-3 rounded-xl bg-[#080B1C] border border-slate-800">
                <span className="text-slate-500 block">Expected Delivery Target:</span>
                <span className="text-white">{selectedEnquiry.delivery_date}</span>
              </div>
            )}

            {selectedEnquiry.reference_url && (
              <div className="text-xs p-3 rounded-xl bg-[#080B1C] border border-slate-800">
                <span className="text-slate-500 block">Reference Link:</span>
                <a
                  href={selectedEnquiry.reference_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline break-all"
                >
                  {selectedEnquiry.reference_url}
                </a>
              </div>
            )}

            <div className="text-xs space-y-1">
              <span className="text-slate-400 font-semibold">Project Description:</span>
              <div className="p-4 rounded-xl bg-[#080B1C] border border-slate-800 text-slate-200 whitespace-pre-wrap leading-relaxed">
                {selectedEnquiry.project_description}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-800">
              <div className="text-[11px] text-slate-500">
                Submitted on {formatDate(selectedEnquiry.created_at)}
              </div>
              <a
                href={`https://wa.me/${selectedEnquiry.whatsapp_number.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-black bg-emerald-400 hover:bg-emerald-300 transition-colors"
              >
                <MessageSquareCode className="w-4 h-4" />
                <span>Open Chat with Client</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
