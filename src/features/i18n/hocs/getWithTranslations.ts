import { NextPage } from "next";

import { DEFAULT_LOCALE } from "../config";
import { getLanguage } from "../utils";

type TranslationsGetter = (locale: string) => Promise<{ default: Record<string, string> }>;

export const getWithTranslations =
    (getTranslations: TranslationsGetter) => (WrappedPage: NextPage) => {
        const getWrappedPageInitialProps = WrappedPage.getInitialProps;

        WrappedPage.getInitialProps = async (ctx) => {
            const pageProps = await getWrappedPageInitialProps?.(ctx);

            const { locale = DEFAULT_LOCALE } = ctx;
            const language = getLanguage(locale);
            const { default: messages } = await getTranslations(language);

            return { ...pageProps, messages };
        };

        WrappedPage.displayName = `withTranslations(${WrappedPage.displayName ?? "Anonymous"})`;

        return WrappedPage;
    };
