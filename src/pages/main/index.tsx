import classNames from "classnames/bind";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import map from "public/images/map.jpg";
import { useCallback, useMemo } from "react";
import { FormattedDate, FormattedMessage, useIntl } from "react-intl";
import Locale from "@formatjs/intl-locale";

import { Button } from "@/components/button";
import { HorizontalDivider } from "@/components/horizontal-divider";
import { SpeakerCard } from "@/components/speaker-card";
import { IconWrapper } from "@/components/icon-wrapper";
import BoxIcon from "@/icons/box.svg";
import ConfLogoIcon from "@/icons/conf-logo.svg";
import MagnifyingGlassIcon from "@/icons/magnifying-glass.svg";
import MapArrowIcon from "@/icons/map-arrow.svg";
import SatelliteIcon from "@/icons/satellite.svg";
import AltLogoIcon from "@/icons/alt-logo.svg";
import { CONFERENCE_DATE } from "@/shared/conference-date";
import { getWithTranslations } from "@/features/i18n";

import { getSpeakersData } from "./constants";
import styles from "./styles.module.css";

const cx = classNames.bind(styles);

const Main: NextPage = () => {
    const router = useRouter();
    const intl = useIntl();

    const speakersData = useMemo(() => getSpeakersData(intl), [intl]);

    const handleBuyTickets = useCallback(() => router.push("/buy-tickets"), [router]);

    const rtl = useMemo(
        () => new Locale(intl.locale).getTextInfo().direction === "rtl",
        [intl.locale]
    );

    return (
        <>
            <Head>
                <title>
                    {intl.formatMessage<string>(
                        {
                            id: "mainPage.title",
                            defaultMessage:
                                "Международная конференция по интернационализации и локализации - I&L–{year}",
                        },
                        {
                            year: intl.formatDate(CONFERENCE_DATE, {
                                year: "numeric",
                                numberingSystem: "latn",
                            }),
                        }
                    )}
                </title>
            </Head>

            <header className={cx("header")}>
                <h2 className={cx("header__title")}>
                    <FormattedMessage
                        id="mainPage.header.title1"
                        defaultMessage="Интернационализация"
                    />
                </h2>

                <div className={cx("header__container-wrapper")}>
                    <div className={cx("header__container")}>
                        <h2 className={cx("header__title", "header__container-title")}>
                            <FormattedMessage
                                id="mainPage.header.title2"
                                defaultMessage="Локализация"
                            />
                        </h2>
                        <h2 className={cx("header__title", "header__container-date")}>
                            <FormattedDate value={CONFERENCE_DATE} numberingSystem="latn" />
                        </h2>
                        <Button
                            className={cx("header__container-button")}
                            onClick={handleBuyTickets}
                        >
                            <FormattedMessage
                                id="mainPage.buyTickets"
                                defaultMessage="Купить билеты"
                            />
                        </Button>
                        <AltLogoIcon
                            className={cx("header__container-logo")}
                            data-testid="alt-logo"
                        />
                    </div>

                    <ConfLogoIcon className={cx("header__logo")} data-testid="conf-logo" />
                </div>
            </header>

            <section className={cx("section")}>
                <h1 className={cx("section__title")}>
                    <FormattedMessage
                        id="mainPage.section.title"
                        defaultMessage="<accent>I&L–{year}</accent> — {br} международная конференция по интернационализации и локализации для профессионалов в IT"
                        values={{
                            br: <br />,
                            accent: (text) => (
                                <span className={cx("section__title_accent")}>{text}</span>
                            ),
                            year: (
                                <FormattedDate
                                    value={CONFERENCE_DATE}
                                    year="numeric"
                                    numberingSystem="latn"
                                />
                            ),
                        }}
                    />
                </h1>

                <div className={cx("section__content")}>
                    <p className={cx("section__content-description")}>
                        <FormattedMessage
                            id="mainPage.section.description"
                            defaultMessage="Мы рады приветствовать вас на нашей конференции, где вы сможете поделиться своим опытом, узнать о последних тенденциях и лучших практиках в области интернационализации и локализации"
                        />
                    </p>

                    <HorizontalDivider className={cx("section__content-divider")} />
                </div>
            </section>

            <section className={cx("section")}>
                <h3 className={cx("section__title")}>
                    <FormattedMessage id="mainPage.speakers.title" defaultMessage="Спикеры" />
                </h3>

                <div className={cx("speakers", "section__content")}>
                    {speakersData.map(({ id, avatar, name, title, description }) => (
                        <SpeakerCard
                            key={id}
                            avatar={avatar}
                            name={name}
                            title={title}
                            description={description}
                        />
                    ))}
                </div>
            </section>

            <section className={cx("section")}>
                <h3 className={cx("section__title")}>
                    <FormattedMessage
                        id="mainPage.opportunities.title"
                        defaultMessage="Это отличная возможность, чтобы:"
                    />
                </h3>

                <div
                    className={cx("opportunities", "section__content")}
                    data-testid="opportunities-icons"
                >
                    {[
                        {
                            description: intl.formatMessage({
                                id: "mainPage.opportunities.methodologies",
                                defaultMessage: "Исследовать новые методологии",
                            }),
                            Icon: MagnifyingGlassIcon,
                            shouldRtlMigrate: false,
                        },
                        {
                            description: intl.formatMessage({
                                id: "mainPage.opportunities.problems",
                                defaultMessage:
                                    "Рассмотреть актуальные проблемы и поиски путей их решения",
                            }),
                            Icon: MapArrowIcon,
                            shouldRtlMigrate: true,
                        },
                        {
                            description: intl.formatMessage({
                                id: "mainPage.opportunities.innovations",
                                defaultMessage: "Получить опыт внедрения инновационных подходов",
                            }),
                            Icon: SatelliteIcon,
                            shouldRtlMigrate: true,
                        },
                        {
                            description: intl.formatMessage({
                                id: "mainPage.opportunities.practice",
                                defaultMessage: "Опробовать полученные знания на практике",
                            }),
                            Icon: BoxIcon,
                            shouldRtlMigrate: true,
                        },
                    ].map(({ description, Icon, shouldRtlMigrate }) => (
                        <div className={cx("opportunities__item")} key={description}>
                            <IconWrapper Icon={Icon} rtl={rtl && shouldRtlMigrate} />
                            <div className={cx("opportunities__item-description")}>
                                {description}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={cx("section")}>
                <h3 className={cx("section__title")}>
                    <FormattedMessage id="mainPage.venue.title" defaultMessage="Место проведения" />
                </h3>

                <div className={cx("section__content")}>
                    <p className={cx("section__content-address")}>
                        <FormattedMessage
                            id="mainPage.venue.address"
                            defaultMessage="Собираемся в офисе наших друзей: {br} Россия, Москва, улица Льва Толстого, 16"
                            values={{
                                br: <br />,
                            }}
                        />
                    </p>

                    <div className={cx("section__content-map")}>
                        <Image src={map} alt="Карта с обозначением места проведения" />
                    </div>

                    <Button className={cx("section__content-button")} onClick={handleBuyTickets}>
                        <FormattedMessage id="mainPage.buyTickets" defaultMessage="Купить билеты" />
                    </Button>
                </div>
            </section>
        </>
    );
};

export const MainPage = getWithTranslations(
    async (lang: string) => await import(`./lang/${lang}.json`)
)(Main);
