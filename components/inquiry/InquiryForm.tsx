"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const DAYS = ["Mo", "Di", "Mi", "Do", "Fr"];
const TIMES = [
  "08:00–10:00",
  "10:00–12:00",
  "12:00–14:00",
  "14:00–16:00",
  "16:00–18:00",
];

interface FormState {
  message: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  carModel: string;
  buildYear: string;
  days: string[];
  times: string[];
  byAppointment: boolean;
  contactEmail: boolean;
  contactPhone: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  consent?: string;
}

function InputField({
  label,
  value,
  onChange,
  type = "text",
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="text-xs text-[#A0A7B3] block mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-[#050608] border rounded-xl px-4 py-3 text-sm text-[#F5F7FA] focus:outline-none transition-colors ${
          error
            ? "border-red-500/60 focus:border-red-500"
            : "border-[#0B5CFF]/40 focus:border-[#0B5CFF]"
        }`}
      />
      {error && <p className="text-red-400 text-[11px] mt-1">{error}</p>}
    </div>
  );
}

function ToggleButton({
  children,
  active,
  onClick,
  fullWidth = false,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  fullWidth?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all duration-150 ${
        fullWidth ? "w-full" : ""
      } ${
        active
          ? "bg-[#0B5CFF]/20 border-[#0B5CFF] text-[#19B5FF]"
          : "bg-transparent border-white/[0.15] text-[#A0A7B3] hover:border-[#0B5CFF]/50 hover:text-[#F5F7FA]"
      }`}
    >
      {children}
    </button>
  );
}

export default function InquiryForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>({
    message: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    carModel: "",
    buildYear: "",
    days: [],
    times: [],
    byAppointment: false,
    contactEmail: false,
    contactPhone: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const toggleList = (key: "days" | "times", value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));
  };

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.firstName.trim()) e.firstName = "Pflichtfeld";
    if (!form.lastName.trim()) e.lastName = "Pflichtfeld";
    if (!form.email.trim()) e.email = "Pflichtfeld";
    if (!form.phone.trim()) e.phone = "Pflichtfeld";
    if (!form.contactEmail && !form.contactPhone)
      e.consent = "Bitte wähle mindestens eine Kontaktmethode aus.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      router.push("/anfrage/danke");
    }
  };

  return (
    <div className="min-h-screen bg-[#050608]">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(11,92,255,0.09)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 pt-[82px] pb-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto mt-10">
          <div className="rounded-3xl border border-white/[0.1] bg-[#0A0D14] p-7 sm:p-10 shadow-2xl">

            {/* ── Form heading ── */}
            <h1 className="text-lg sm:text-xl font-black tracking-[0.08em] uppercase text-[#F5F7FA] mb-3">
              Deine Serviceanfrage an uns
            </h1>
            <p className="text-sm text-[#A0A7B3] leading-relaxed mb-8">
              Du brauchst Hilfe bei Autoschlüssel-Programmierung,
              Steuergeräte-Instandsetzung, Mercedes Xentry, Codierung, Diagnose
              oder Softwareoptimierung? Beschreibe uns kurz dein Anliegen.{" "}
              Wir melden uns schnellstmöglich bei dir zurück.
            </p>

            {/* ── Message ── */}
            <div className="mb-8">
              <label className="text-xs text-[#A0A7B3] block mb-1.5">
                Deine Nachricht...
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full bg-[#050608] border border-[#0B5CFF]/40 rounded-xl px-4 py-3 text-sm text-[#F5F7FA] resize-y focus:outline-none focus:border-[#0B5CFF] transition-colors"
              />
            </div>

            <hr className="border-white/[0.08] mb-8" />

            {/* ── Personal data ── */}
            <h2 className="text-[11px] font-black tracking-[0.18em] uppercase text-[#F5F7FA] mb-1">
              Persönliche Daten
            </h2>
            <p className="text-xs text-[#A0A7B3] mb-6">
              Für die Kontaktaufnahme benötigen wir deine Daten. Mit{" "}
              <span className="text-[#F5F7FA]">*</span> gekennzeichnete Eingaben
              sind Pflicht.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-2">
              <InputField
                label="Vorname*"
                value={form.firstName}
                onChange={(v) => setForm({ ...form, firstName: v })}
                error={errors.firstName}
              />
              <InputField
                label="Nachname*"
                value={form.lastName}
                onChange={(v) => setForm({ ...form, lastName: v })}
                error={errors.lastName}
              />
              <InputField
                label="E-Mail-Adresse*"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                error={errors.email}
              />
              <InputField
                label="Rufnummer*"
                type="tel"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
                error={errors.phone}
              />
              <InputField
                label="Fahrzeugmarke / Modell"
                value={form.carModel}
                onChange={(v) => setForm({ ...form, carModel: v })}
              />
              <InputField
                label="Baujahr"
                value={form.buildYear}
                onChange={(v) => setForm({ ...form, buildYear: v })}
              />
            </div>

            <hr className="border-white/[0.08] my-8" />

            {/* ── Available times ── */}
            <h2 className="text-[11px] font-black tracking-[0.18em] uppercase text-[#F5F7FA] mb-1">
              Verfügbare Zeiten
            </h2>
            <p className="text-xs text-[#A0A7B3] mb-5">
              Bitte teile uns mit, an welchen Tagen und zu welchen Zeiten wir
              dich am besten erreichen können.
            </p>

            {/* Days */}
            <div className="flex flex-wrap gap-2 mb-3">
              {DAYS.map((day) => (
                <ToggleButton
                  key={day}
                  active={form.days.includes(day)}
                  onClick={() => toggleList("days", day)}
                >
                  {day}
                </ToggleButton>
              ))}
            </div>

            {/* Times */}
            <div className="flex flex-wrap gap-2 mb-3">
              {TIMES.map((time) => (
                <ToggleButton
                  key={time}
                  active={form.times.includes(time)}
                  onClick={() => toggleList("times", time)}
                >
                  {time}
                </ToggleButton>
              ))}
            </div>

            {/* Nach Vereinbarung — full width */}
            <ToggleButton
              active={form.byAppointment}
              onClick={() =>
                setForm({ ...form, byAppointment: !form.byAppointment })
              }
              fullWidth
            >
              Nach Vereinbarung
            </ToggleButton>

            <hr className="border-white/[0.08] my-8" />

            {/* ── Contact permissions ── */}
            <h2 className="text-[11px] font-black tracking-[0.18em] uppercase text-[#F5F7FA] mb-1">
              Informationen zur Kontaktaufnahme
            </h2>
            <p className="text-xs text-[#A0A7B3] mb-5">
              Wähle aus, wie du kontaktiert werden möchtest.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <ToggleButton
                active={form.contactEmail}
                onClick={() =>
                  setForm({ ...form, contactEmail: !form.contactEmail })
                }
              >
                Ich willige in die Kontaktaufnahme per E-Mail ein
              </ToggleButton>
              <ToggleButton
                active={form.contactPhone}
                onClick={() =>
                  setForm({ ...form, contactPhone: !form.contactPhone })
                }
              >
                Ich willige in die Kontaktaufnahme per Telefon / WhatsApp ein
              </ToggleButton>
            </div>

            {errors.consent && (
              <p className="text-red-400 text-xs mb-4">{errors.consent}</p>
            )}

            <p className="text-xs text-[#A0A7B3] mb-8">
              Bitte beachte auch unsere{" "}
              <a href="#" className="text-[#19B5FF] hover:underline">
                Hinweise zum Datenschutz
              </a>
              .
            </p>

            {/* ── Actions ── */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => router.push("/")}
                className="text-xs font-bold tracking-[0.15em] uppercase text-[#0B5CFF] hover:text-[#19B5FF] transition-colors"
              >
                Abbruch
              </button>
              <button
                onClick={handleSubmit}
                className="px-8 py-3.5 rounded-full gradient-blue-bg text-white text-xs font-black tracking-[0.15em] uppercase hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Absenden
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
