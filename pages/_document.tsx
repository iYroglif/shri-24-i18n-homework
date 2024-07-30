import Locale from "@formatjs/intl-locale";
import { Html, Head, Main, NextScript, DocumentProps } from "next/document";

import { DEFAULT_LOCALE } from "@/features/i18n";

export default function Document({ locale = DEFAULT_LOCALE }: DocumentProps) {
    const intl = new Locale(locale);
    const { direction } = intl.getTextInfo();

    return (
        <Html lang={intl.language} dir={direction}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
