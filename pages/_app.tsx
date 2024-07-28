import type { AppProps } from "next/app";
import { IntlProvider } from "react-intl";
import "styles/globals.css";

import { Layout } from "@/components/layout";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <IntlProvider locale="ru">
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </IntlProvider>
    );
}
