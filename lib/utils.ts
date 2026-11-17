import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatPhone(phone: string): string {
    return phone;
}

export function formatPhoneDisplay(phone: string): string {
    const cleaned = phone.replace(/\D/g, "");
    if (cleaned.length === 11) {
        return `${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
    }
    return phone;
}