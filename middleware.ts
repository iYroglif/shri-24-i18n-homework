import Locale from "@formatjs/intl-locale";
import acceptLanguageParser from "accept-language-parser";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import packageJson from "package.json";

import { DEFAULT_LOCALE } from "@/features/i18n/config";

const PUBLIC_FILE = /\.(.*)$/;
const LANG_COOKIE = "i18n-l10n-conf-lang";

const supportedLanguages = new Set(packageJson.supportedLanguages);

const isIgnoredPath = (pathname: string) =>
    pathname.startsWith("/_next") || pathname.includes("/api/") || PUBLIC_FILE.test(pathname);

export function middleware({ nextUrl, cookies, headers, url }: NextRequest) {
    if (isIgnoredPath(nextUrl.pathname)) {
        return;
    }

    if (nextUrl.locale !== "default") {
        return;
    }

    let pathname: string;

    try {
        const [, potentialLocale, ...pathnameParts] = nextUrl.pathname.split("/");

        new Locale(potentialLocale);

        pathname = `/${pathnameParts.join("/")}`;
    } catch {
        pathname = nextUrl.pathname;
    }

    const cookieLanguage = cookies.get(LANG_COOKIE);
    if (cookieLanguage && supportedLanguages.has(cookieLanguage)) {
        return NextResponse.redirect(
            new URL(`/${cookieLanguage}${pathname}${nextUrl.search}`, url)
        );
    }

    const acceptLanguage = headers.get("Accept-Language");
    if (acceptLanguage) {
        const parsedLanguages = acceptLanguageParser.parse(acceptLanguage);
        const language = parsedLanguages.find(({ code }) => supportedLanguages.has(code))?.code;

        if (language) {
            const response = NextResponse.redirect(
                new URL(`/${language}${pathname}${nextUrl.search}`, url)
            );

            response.cookies.set(LANG_COOKIE, language);
            return response;
        }
    }

    return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}${pathname}${nextUrl.search}`, url));
}
