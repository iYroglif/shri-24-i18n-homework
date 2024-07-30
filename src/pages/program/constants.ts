import { IntlShape } from "react-intl";
import evgeniyAntonovAvatar from "public/avatars/evgeniy-antonov.jpg";
import igorBobrovAvatar from "public/avatars/igor-bobrov.jpg";
import igorNafenovAvatar from "public/avatars/igor-nafenov.jpg";

export const getPresentations = (intl: IntlShape) => [
    {
        time: intl.formatTime(new Date(2024, 8, 21, 21, 40), { numberingSystem: "latn" }),
        avatar: igorBobrovAvatar,
        name: intl.formatMessage({
            id: "speaker.igorBobrov.name",
            defaultMessage: "Игорь Бобров",
        }),
        title: intl.formatMessage({
            id: "speaker.igorBobrov.title",
            defaultMessage: "CPO Alt IT",
        }),
        presentationTitle: intl.formatMessage({
            id: "speaker.igorBobrov.presentationTitle",
            defaultMessage:
                "«Международные вызовы и препятствия при разработке и запуске продуктов»",
        }),
        presentationDescription: intl.formatMessage({
            id: "speaker.igorBobrov.presentationDescription",
            defaultMessage:
                "Международные вызовы и препятствия при разработке и запуске продуктов включают культурные различия, локализацию и маркетинговые аспекты",
        }),
    },
    {
        time: intl.formatTime(new Date(2024, 8, 21, 22, 0), { numberingSystem: "latn" }),
        avatar: evgeniyAntonovAvatar,
        name: intl.formatMessage({
            id: "speaker.evgeniyAntonov.name",
            defaultMessage: "Евгений Антонов",
        }),
        title: intl.formatMessage({
            id: "speaker.evgeniyAntonov.title",
            defaultMessage: "CTO Alt IT",
        }),
        presentationTitle: intl.formatMessage({
            id: "speaker.evgeniyAntonov.presentationTitle",
            defaultMessage:
                "«Адаптация интерфейса под различные культурные и языковые особенности»",
        }),
        presentationDescription: intl.formatMessage({
            id: "speaker.evgeniyAntonov.presentationDescription",
            defaultMessage:
                "Адаптация интерфейса под различные культурные и языковые особенности включает в себя изменения, чтобы соответствовать предпочтениям и потребностям пользователей",
        }),
    },
    {
        time: intl.formatTime(new Date(2024, 8, 21, 22, 45), { numberingSystem: "latn" }),
        avatar: igorNafenovAvatar,
        name: intl.formatMessage({
            id: "speaker.igorNafenov.name",
            defaultMessage: "Игорь Нафенов",
        }),
        title: intl.formatMessage({
            id: "speaker.igorNafenov.title",
            defaultMessage: "Technical Cluster Lead Alt IT",
        }),
        presentationTitle: intl.formatMessage({
            id: "speaker.igorNafenov.presentationTitle",
            defaultMessage: "«Процессы разработки с учетом интернационализации и локализации»",
        }),
        presentationDescription: intl.formatMessage({
            id: "speaker.igorNafenov.presentationDescription",
            defaultMessage:
                "Интеграция процессов интернационализации и локализации в цикл разработки помогает снизить риски, улучшить качество продукта и повысить его конкурентоспособность",
        }),
    },
];
