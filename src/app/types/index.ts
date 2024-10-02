import { user } from "@prisma/client";

export type SafeUser = Omit<
user,
"createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
};