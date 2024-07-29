import type { AppProps } from "next/app";
import { IntlProvider } from "react-intl";
import "styles/globals.css";

import { Layout } from "@/components/layout";
import { DEFAULT_LOCALE } from "@/features/i18n/config";

export default function App({ Component, pageProps, router }: AppProps) {
    const { locale = DEFAULT_LOCALE } = router;

    return (
        <IntlProvider locale={locale}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </IntlProvider>
    );
}
