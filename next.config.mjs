const {
    default: { supportedLanguages },
} = await import("./package.json", {
    assert: { type: "json" },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
    i18n: {
        locales: ["default", ...supportedLanguages],
        defaultLocale: "default",
        localeDetection: false,
    },
};

export default nextConfig;
