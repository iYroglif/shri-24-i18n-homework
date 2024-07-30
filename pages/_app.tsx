import type { AppProps } from "next/app";
import { IntlProvider } from "react-intl";
import "styles/globals.css";

import { Layout } from "@/components/layout";
import { DEFAULT_LOCALE } from "@/features/i18n/config";

export default function App({
    Component,
    pageProps,
    router,
}: AppProps<{ messages: Record<string, string> }>) {
    const { locale = DEFAULT_LOCALE } = router;
    const { messages } = pageProps;

    return (
        <IntlProvider locale={locale} messages={messages}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </IntlProvider>
    );
}
