import { IntlShape } from "react-intl";
import evgeniyAntonovAvatar from "public/avatars/evgeniy-antonov.jpg";
import igorBobrovAvatar from "public/avatars/igor-bobrov.jpg";
import igorNafenovAvatar from "public/avatars/igor-nafenov.jpg";

export const getSpeakersData = (intl: IntlShape) => [
    {
        id: 1,
        avatar: igorBobrovAvatar,
        name: intl.formatMessage({ id: "speaker.igorBobrov.name", defaultMessage: "Игорь Бобров" }),
        title: intl.formatMessage({ id: "speaker.igorBobrov.title", defaultMessage: "CPO Alt IT" }),
        description: intl.formatMessage(
            {
                id: "speaker.igorBobrov.description",
                defaultMessage:
                    "Присоединился к Alt в {year} году после окончания университета. Начал свою карьеру с разработки программного обеспечения и за несколько лет продвинулся от стажера до CPO",
            },
            {
                year: intl.formatDate(new Date(2015, 0), {
                    year: "numeric",
                    numberingSystem: "latn",
                }),
            }
        ),
    },
    {
        id: 2,
        avatar: evgeniyAntonovAvatar,
        name: intl.formatMessage({
            id: "speaker.evgeniyAntonov.name",
            defaultMessage: "Евгений Антонов",
        }),
        title: intl.formatMessage({
            id: "speaker.evgeniyAntonov.title",
            defaultMessage: "CTO Alt IT",
        }),
        description: intl.formatMessage(
            {
                id: "speaker.evgeniyAntonov.description",
                defaultMessage:
                    "Присоединился к Alt после окончания университета в {year} году. Он был частью команды разработки, которая изучала инновационные методы локализации интерфейсов для различных культур",
            },
            {
                year: intl.formatDate(new Date(2018, 0), {
                    year: "numeric",
                    numberingSystem: "latn",
                }),
            }
        ),
    },
    {
        id: 3,
        avatar: igorNafenovAvatar,
        name: intl.formatMessage({
            id: "speaker.igorNafenov.name",
            defaultMessage: "Игорь Нафенов",
        }),
        title: intl.formatMessage({
            id: "speaker.igorNafenov.title",
            defaultMessage: "Technical Cluster Lead Alt IT",
        }),
        description: intl.formatMessage(
            {
                id: "speaker.igorNafenov.description",
                defaultMessage:
                    "Присоединился к Alt в {year} году как старший разработчик. Провел исследования в области интернационализации веб-сайтов, что способствовало успешной адаптации продуктов к различным языкам и культурам",
            },
            {
                year: intl.formatDate(new Date(2010, 0), {
                    year: "numeric",
                    numberingSystem: "latn",
                }),
            }
        ),
    },
];
