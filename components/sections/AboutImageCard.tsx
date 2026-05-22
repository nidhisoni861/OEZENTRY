import Image from "next/image";

export default function AboutImageCard() {
  return (
    <div className="relative rounded-3xl overflow-hidden h-[480px] lg:h-[580px]">
      <Image
        src="/images/key-programming-car-service.jpeg"
        alt="Kfz-Service Diagnose"
        fill
        className="object-cover z-0"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#050608]/70 via-[#050608]/40 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_30%_40%,rgba(11,92,255,0.12)_0%,transparent_60%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[2] bg-gradient-to-t from-[#050608] to-transparent" />
    </div>
  );
}
