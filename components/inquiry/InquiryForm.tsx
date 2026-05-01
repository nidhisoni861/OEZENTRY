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
      <label className="text-sm text-[#A0A7B3] block mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-[#050608] border rounded-xl px-4 py-3.5 text-sm text-[#F5F7FA] focus:outline-none transition-colors ${
          error
            ? "border-red-500/60 focus:border-red-500"
            : "border-[#0B5CFF]/40 focus:border-[#0B5CFF]"
        }`}
      />
      {error && <p className="text-red-400 text-xs mt-1.5">{error}</p>}
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
      className={`px-4 py-3 rounded-xl text-xs font-semibold border transition-all duration-150 text-left ${
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
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(11,92,255,0.09)_0%,transparent_65%)]" />
      </div>

      {/* Page content */}
      <div className="relative z-10 pt-[82px] pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mt-10 w-full">
          <div className="rounded-3xl border border-white/[0.1] bg-[#0A0D14] p-8 sm:p-10 lg:p-14 shadow-2xl">

            {/* ── Heading ── */}
            <h1 className="text-xl sm:text-2xl font-black tracking-[0.08em] uppercase text-[#F5F7FA] mb-4">
              Deine Serviceanfrage an uns
            </h1>
            <p className="text-sm text-[#A0A7B3] leading-relaxed mb-10 max-w-2xl">
              Du brauchst Hilfe bei Autoschlüssel-Programmierung,
              Steuergeräte-Instandsetzung, Mercedes Xentry, Codierung, Diagnose
              oder Softwareoptimierung? Beschreibe uns kurz dein Anliegen.{" "}
              Wir melden uns schnellstmöglich bei dir zurück.
            </p>

            {/* ── Message textarea ── */}
            <div className="mb-10">
              <label className="text-sm text-[#A0A7B3] block mb-2">
                Deine Nachricht...
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full bg-[#050608] border border-[#0B5CFF]/40 rounded-xl px-4 py-3.5 text-sm text-[#F5F7FA] resize-y focus:outline-none focus:border-[#0B5CFF] transition-colors"
              />
            </div>

            <hr className="border-white/[0.08] mb-10" />

            {/* ── Personal data ── */}
            <h2 className="text-xs font-black tracking-[0.2em] uppercase text-[#F5F7FA] mb-2">
              Persönliche Daten
            </h2>
            <p className="text-sm text-[#A0A7B3] mb-7">
              Für die Kontaktaufnahme benötigen wir deine Daten. Mit{" "}
              <span className="text-[#F5F7FA]">*</span> gekennzeichnete Eingaben
              sind Pflicht.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-1">
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

            <hr className="border-white/[0.08] my-10" />

            {/* ── Available times ── */}
            <h2 className="text-xs font-black tracking-[0.2em] uppercase text-[#F5F7FA] mb-2">
              Verfügbare Zeiten
            </h2>
            <p className="text-sm text-[#A0A7B3] mb-6">
              Bitte teile uns mit, an welchen Tagen und zu welchen Zeiten wir
              dich am besten erreichen können.
            </p>

            {/* Days */}
            <div className="flex flex-wrap gap-2.5 mb-3">
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
            <div className="flex flex-wrap gap-2.5 mb-3">
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

            <hr className="border-white/[0.08] my-10" />

            {/* ── Contact permissions ── */}
            <h2 className="text-xs font-black tracking-[0.2em] uppercase text-[#F5F7FA] mb-2">
              Informationen zur Kontaktaufnahme
            </h2>
            <p className="text-sm text-[#A0A7B3] mb-6">
              Wähle aus, wie du kontaktiert werden möchtest.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <ToggleButton
                active={form.contactEmail}
                onClick={() =>
                  setForm({ ...form, contactEmail: !form.contactEmail })
                }
                fullWidth
              >
                Ich willige in die Kontaktaufnahme per E-Mail ein
              </ToggleButton>
              <ToggleButton
                active={form.contactPhone}
                onClick={() =>
                  setForm({ ...form, contactPhone: !form.contactPhone })
                }
                fullWidth
              >
                Ich willige in die Kontaktaufnahme per Telefon / WhatsApp ein
              </ToggleButton>
            </div>

            {errors.consent && (
              <p className="text-red-400 text-sm mb-4">{errors.consent}</p>
            )}

            <p className="text-sm text-[#A0A7B3] mb-10">
              Bitte beachte auch unsere{" "}
              <a href="#" className="text-[#19B5FF] hover:underline">
                Hinweise zum Datenschutz
              </a>
              .
            </p>

            {/* ── Actions ── */}
            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => router.push("/")}
                className="w-full sm:w-auto text-sm font-bold tracking-[0.15em] uppercase text-[#0B5CFF] hover:text-[#19B5FF] transition-colors text-center py-3"
              >
                Abbruch
              </button>
              <button
                onClick={handleSubmit}
                className="w-full sm:w-auto px-10 py-4 rounded-full gradient-blue-bg text-white text-sm font-black tracking-[0.15em] uppercase hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
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
