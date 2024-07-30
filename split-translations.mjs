import path from "node:path";
import fs from "node:fs/promises";

const PAGE_TRANSLATION_KEYS = {
    main: [
        "footer.copyright",
        "footer.errorReport",
        "footer.license",
        "footer.subscribe",
        "header.buyTickets",
        "header.main",
        "header.program",
        "mainPage.buyTickets",
        "mainPage.header.title1",
        "mainPage.header.title2",
        "mainPage.opportunities.innovations",
        "mainPage.opportunities.methodologies",
        "mainPage.opportunities.practice",
        "mainPage.opportunities.problems",
        "mainPage.opportunities.title",
        "mainPage.section.description",
        "mainPage.section.title",
        "mainPage.speakers.title",
        "mainPage.title",
        "mainPage.venue.address",
        "mainPage.venue.mapAlt",
        "mainPage.venue.title",
        "speaker.evgeniyAntonov.description",
        "speaker.evgeniyAntonov.name",
        "speaker.evgeniyAntonov.title",
        "speaker.igorBobrov.description",
        "speaker.igorBobrov.name",
        "speaker.igorBobrov.title",
        "speaker.igorNafenov.description",
        "speaker.igorNafenov.name",
        "speaker.igorNafenov.title",
    ],
    "buy-tickets": [
        "buyTicketsPage.agreement",
        "buyTicketsPage.buyTickets",
        "buyTicketsPage.chooseTicketType",
        "buyTicketsPage.defaultTicket",
        "buyTicketsPage.defaultTicketDescription",
        "buyTicketsPage.email",
        "buyTicketsPage.name",
        "buyTicketsPage.namePlaceholder",
        "buyTicketsPage.pay",
        "buyTicketsPage.phoneNumber",
        "buyTicketsPage.ticketCount",
        "buyTicketsPage.title",
        "buyTicketsPage.vipTicket",
        "buyTicketsPage.vipTicketDescription",
        "footer.copyright",
        "footer.errorReport",
        "footer.license",
        "footer.subscribe",
        "header.buyTickets",
        "header.main",
        "header.program",
        "pageHeader.subtitle",
    ],
    program: [
        "footer.copyright",
        "footer.errorReport",
        "footer.license",
        "footer.subscribe",
        "header.buyTickets",
        "header.main",
        "header.program",
        "pageHeader.subtitle",
        "programPage.header",
        "programPage.registration",
        "programPage.title",
        "speaker.evgeniyAntonov.name",
        "speaker.evgeniyAntonov.presentationDescription",
        "speaker.evgeniyAntonov.presentationTitle",
        "speaker.evgeniyAntonov.title",
        "speaker.igorBobrov.name",
        "speaker.igorBobrov.presentationDescription",
        "speaker.igorBobrov.presentationTitle",
        "speaker.igorBobrov.title",
        "speaker.igorNafenov.name",
        "speaker.igorNafenov.presentationDescription",
        "speaker.igorNafenov.presentationTitle",
        "speaker.igorNafenov.title",
    ],
};

const PAGES = [
    "src/pages/program/index.tsx",
    "src/pages/main/index.tsx",
    "src/pages/buy-tickets/index.tsx",
];

const {
    default: { supportedLanguages },
} = await import("./package.json", {
    assert: { type: "json" },
});

const { default: translations } = await import("./translations.json", {
    assert: { type: "json" },
});

for (const page of PAGES) {
    const pageDir = path.dirname(page);
    const pageName = path.basename(pageDir);
    const langDir = path.resolve(pageDir, "lang");
    const translationKeys = PAGE_TRANSLATION_KEYS[pageName];

    await fs.mkdir(langDir, { recursive: true });

    for (const lang of supportedLanguages) {
        const langFile = path.resolve(langDir, `${lang}.json`);
        const pageLangTranslations = {};

        for (const key of translationKeys) {
            pageLangTranslations[key] = translations[key][lang];
        }

        await fs.writeFile(langFile, JSON.stringify(pageLangTranslations, null, 4), "utf8");
    }
}
