import { certificates } from "@/data/certificates";
import { CommandDefinition } from "../types";

export const certificatesCommand: CommandDefinition = {
    name: "certificates",
    description: "Display certificates and credentials",
    run: () => {
        if (!certificates || certificates.length === 0) return "No certificates found.";
        return certificates.map((c) => `${c.title} - Issued by ${c.issuer} (${c.issueDate})`).join("\n");
    },
};