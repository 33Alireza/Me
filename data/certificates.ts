import { CertificateItem } from "@/types/certificate";

export const certificates: readonly CertificateItem[] = [
  {
    id: "cupcake-6",
    title: "CupCake 6",
    issuer: "Part Software Group",
    issueDate: "November 30 2025 to feburary 6 2026",
    skills: ["kotlin", "compose", "git"],
  },
] as const;
