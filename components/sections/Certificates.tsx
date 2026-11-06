import SectionHeader from "@/components/layout/SectionHeader";
import TechBadge from "@/components/ui/TechBadge";
import { certificates } from "@/data/certificates";
import { CertificateItem } from "@/types/certificate";
import Image from "next/image";

interface CertificateCardProps {
  certificate: CertificateItem;
  index: number;
}

export function CertificateCard({ certificate, index }: CertificateCardProps) {
  const formatIssueDate = (dateStr: string) => {
    if (dateStr.toLowerCase().includes("to")) {
      return "Nov 2025 – Feb 2026";
    }
    return dateStr;
  };

  return (
    <div
      className={`group bg-[var(--card)] border border-[var(--border)] hover:border-[var(--border-hover)] rounded-2xl overflow-hidden backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between p-6 sm:p-8 reveal reveal-delay-${(index % 3) + 1}`}
    >
      <div>
        {/* Certificate Image or Award Icon Placeholder */}
        {certificate.image && certificate.image !== "none" ? (
          <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden mb-6 bg-black/40 border border-[var(--border)] shadow-md">
            <Image
              src={certificate.image}
              alt={`${certificate.title} certificate`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ) : (
          <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden mb-6 bg-[var(--code-blue)]/5 border border-[var(--border)] flex flex-col items-center justify-center p-6 text-center shadow-inner">
            <div className="w-16 h-16 rounded-2xl bg-[var(--code-blue)]/10 border border-[var(--border)] flex items-center justify-center text-[var(--code-blue-light)] text-3xl mb-3 shadow-md group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-award"></i>
            </div>
            <span className="font-['Space_Mono',monospace] text-xs text-[var(--code-blue-light)] uppercase tracking-wider">
              {certificate.issuer}
            </span>
          </div>
        )}

        <div className="mb-3 flex items-center justify-between">
          <span className="font-['Space_Mono',monospace] text-xs text-[var(--code-blue-light)] tracking-wider">
            {formatIssueDate(certificate.issueDate)}
          </span>
          {certificate.credentialId && certificate.credentialId !== "none" && (
            <span className="font-['Space_Mono',monospace] text-[10px] uppercase tracking-wider bg-[var(--card)] border border-[var(--border)] text-[var(--text-muted)] px-3 py-1 rounded-full">
              ID: {certificate.credentialId}
            </span>
          )}
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text)] uppercase tracking-tight mb-2">
          {certificate.title}
        </h3>

        <p className="text-[var(--text-muted)] text-sm mb-6">
          Issued by{" "}
          <strong className="text-[var(--text)]">{certificate.issuer}</strong>
        </p>

        {/* Skill Badges */}
        {certificate.skills && certificate.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {certificate.skills.map((tagId: string) => (
              <TechBadge key={tagId} name={tagId} iconKey={tagId} />
            ))}
          </div>
        )}
      </div>

      {/* Action / Verify Button */}
      {certificate.credentialUrl && certificate.credentialUrl !== "none" && (
        <div className="pt-4 border-t border-[var(--border)]">
          <a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Verify ${certificate.title} certificate`}
            className="btn-primary py-2.5 px-4 text-xs w-full justify-center min-h-[44px] flex items-center gap-2"
          >
            <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>{" "}
            Verify credential
          </a>
        </div>
      )}
    </div>
  );
}

export default function Certificates() {
  if (!certificates || certificates.length === 0) return null;

  // Sort newest first at render time
  const sortedCertificates = [...certificates].reverse();

  return (
    <section
      id="certificates"
      className="section reveal"
      style={{ position: "relative", zIndex: 11 }}
    >
      <SectionHeader
        label="Achievements"
        title="Certificates &"
        highlight="Credentials"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {sortedCertificates.map((cert: CertificateItem, index: number) => (
          <CertificateCard key={cert.id} certificate={cert} index={index} />
        ))}
      </div>
    </section>
  );
}
