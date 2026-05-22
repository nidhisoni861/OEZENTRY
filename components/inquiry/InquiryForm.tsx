"use client";

import { useState, useId } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Calendar, ChevronDown, Check } from "lucide-react";

const TIME_OPTIONS = [
  { value: "vormittags", label: "Vormittags (08:00 - 12:00 Uhr)" },
  { value: "mittags", label: "Mittags (12:00 - 14:00 Uhr)" },
  { value: "nachmittags", label: "Nachmittags (14:00 - 18:00 Uhr)" },
  { value: "vereinbarung", label: "Nach Vereinbarung" },
];

interface FormState {
  message: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  carModel: string;
  buildYear: string;
  wishDate: string;
  preferredTime: string;
  contactEmail: boolean;
  contactPhone: boolean;
  datenschutzAccepted: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  consent?: string;
  datenschutz?: string;
}

function InputField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#A0A7B3] block mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full bg-[#050608] border rounded-xl px-4 py-3.5 text-sm text-[#F5F7FA] placeholder:text-[#4A5060] focus:outline-none transition-colors ${
          error
            ? "border-red-500/60 focus:border-red-500"
            : "border-[#0B5CFF]/40 focus:border-[#0B5CFF]"
        }`}
      />
      {error && <p className="text-red-400 text-xs mt-1.5">{error}</p>}
    </div>
  );
}

function CheckboxField({
  checked,
  onChange,
  children,
  error,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  children: React.ReactNode;
  error?: string;
}) {
  const id = useId();
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="flex items-start gap-3 cursor-pointer group">
        <div
          className={`w-5 h-5 mt-0.5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
            checked
              ? "bg-[#0B5CFF] border-[#0B5CFF]"
              : "bg-[#050608] border-[#0B5CFF]/40 group-hover:border-[#0B5CFF]/70"
          }`}
        >
          {checked && <Check size={11} className="text-white" strokeWidth={3} />}
        </div>
        <span className="text-sm text-[#A0A7B3] leading-relaxed">{children}</span>
      </label>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      {error && <p className="text-red-400 text-xs ml-8">{error}</p>}
    </div>
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
    wishDate: "",
    preferredTime: "",
    contactEmail: false,
    contactPhone: false,
    datenschutzAccepted: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.firstName.trim()) e.firstName = "Pflichtfeld";
    if (!form.lastName.trim()) e.lastName = "Pflichtfeld";
    if (!form.email.trim()) e.email = "Pflichtfeld";
    if (!form.phone.trim()) e.phone = "Pflichtfeld";
    if (!form.contactEmail && !form.contactPhone)
      e.consent = "Bitte wähle mindestens eine Kontaktmethode aus.";
    if (!form.datenschutzAccepted)
      e.datenschutz = "Bitte akzeptiere die Datenschutzerklärung um fortzufahren.";
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
          <div className="rounded-3xl border border-white/[0.1] bg-[#0A0D14] p-6 sm:p-10 lg:p-14 shadow-2xl">

            {/* ── Heading ── */}
            <h1 className="text-xl sm:text-2xl font-black tracking-[0.08em] uppercase text-[#F5F7FA] mb-4">
              Deine Serviceanfrage an uns
            </h1>
            <p className="text-sm text-[#A0A7B3] leading-relaxed mb-8 max-w-2xl">
              Du benötigst Unterstützung bei der Schlüsselprogrammierung,
              Steuergeräte-Instandsetzung, Codierung oder Diagnose via Mercedes Xentry?
            </p>

            {/* ── Message textarea ── */}
            <div className="mb-10">
              <label className="text-sm text-[#A0A7B3] block mb-2">
                Beschreibe kurz dein Anliegen
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                placeholder="z.B. EZS defekt, Schlüssel verloren, VIN: WDC..."
                className="w-full bg-[#050608] border border-[#0B5CFF]/40 rounded-xl px-4 py-3.5 text-sm text-[#F5F7FA] placeholder:text-[#4A5060] resize-y focus:outline-none focus:border-[#0B5CFF] transition-colors"
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
                placeholder="z.B. Mercedes W212 E-Klasse"
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Date picker */}
              <div>
                <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#A0A7B3] block mb-2">
                  Wunchtag wählen
                </label>
                <div className="relative">
                  <Calendar
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A0A7B3] pointer-events-none z-10"
                  />
                  <input
                    type="date"
                    value={form.wishDate}
                    onChange={(e) => setForm({ ...form, wishDate: e.target.value })}
                    className="w-full bg-[#050608] border border-[#0B5CFF]/40 rounded-xl pl-11 pr-4 py-3.5 text-sm text-[#F5F7FA] focus:outline-none focus:border-[#0B5CFF] transition-colors appearance-none"
                    style={{ colorScheme: "dark" }}
                  />
                </div>
                <p className="text-xs text-[#4A5060] mt-2">
                  (Mehrfachauswahl oder individuelle Termine im Textfeld möglich)
                </p>
              </div>

              {/* Time select */}
              <div>
                <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#A0A7B3] block mb-2">
                  Bevorzugte Uhrzeit
                </label>
                <div className="relative">
                  <select
                    value={form.preferredTime}
                    onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                    className="w-full bg-[#050608] border border-[#0B5CFF]/40 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#0B5CFF] transition-colors appearance-none pr-10 cursor-pointer"
                    style={{
                      color: form.preferredTime ? "#F5F7FA" : "#4A5060",
                    }}
                  >
                    <option value="" style={{ color: "#4A5060", backgroundColor: "#050608" }}>
                      Bitte auswählen
                    </option>
                    {TIME_OPTIONS.map((opt) => (
                      <option
                        key={opt.value}
                        value={opt.value}
                        style={{ color: "#F5F7FA", backgroundColor: "#050608" }}
                      >
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A0A7B3] pointer-events-none"
                  />
                </div>
              </div>
            </div>

            <hr className="border-white/[0.08] my-10" />

            {/* ── Contact permissions ── */}
            <h2 className="text-xs font-black tracking-[0.2em] uppercase text-[#F5F7FA] mb-6">
              Informationen zur Kontaktaufnahme
            </h2>

            <div className="flex flex-col gap-4 mb-4">
              <CheckboxField
                checked={form.contactEmail}
                onChange={(v) => setForm({ ...form, contactEmail: v })}
              >
                Ich willige in die Kontaktaufnahme per E-Mail ein.
              </CheckboxField>
              <CheckboxField
                checked={form.contactPhone}
                onChange={(v) => setForm({ ...form, contactPhone: v })}
              >
                Ich willige in die Kontaktaufnahme per Telefon / WhatsApp ein.
              </CheckboxField>
            </div>

            {errors.consent && (
              <p className="text-red-400 text-sm mb-4">{errors.consent}</p>
            )}

            <div className="border-t border-white/[0.06] pt-6 mb-8">
              <CheckboxField
                checked={form.datenschutzAccepted}
                onChange={(v) => setForm({ ...form, datenschutzAccepted: v })}
                error={errors.datenschutz}
              >
                Ich habe die{" "}
                <Link
                  href="/datenschutz"
                  className="text-[#19B5FF] hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  Datenschutzerklärung
                </Link>{" "}
                gelesen und akzeptiere diese.*
              </CheckboxField>
            </div>

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
