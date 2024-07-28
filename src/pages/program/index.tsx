import classNames from "classnames/bind";
import Head from "next/head";
import Image from "next/image";
import { Fragment, useMemo } from "react";
import { FormattedMessage, FormattedTime, useIntl } from "react-intl";

import { HorizontalDivider } from "@/components/horizontal-divider";
import { PageHeader } from "@/components/page-header";
import { CONFERENCE_DATE } from "@/shared/conference-date";

import { getPresentations } from "./constants";
import styles from "./styles.module.css";

const cx = classNames.bind(styles);

export const ProgramPage = () => {
    const intl = useIntl();

    const presentations = useMemo(() => getPresentations(intl), [intl]);

    return (
        <>
            <Head>
                <title>
                    {intl.formatMessage<string>(
                        {
                            id: "programPage.title",
                            defaultMessage: "Программа - I&L–{year}",
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

            <PageHeader
                title={<FormattedMessage id="programPage.header" defaultMessage="Программа" />}
            />

            <section className={cx("program")}>
                <div className={cx("program__text")}>
                    <FormattedTime value={new Date(2024, 8, 21, 21, 30)} numberingSystem="latn" />
                </div>
                <div className={cx("program__text", "program__text_registration")}>
                    <FormattedMessage
                        id="programPage.registration"
                        defaultMessage="Регистрация в офлайне"
                    />
                </div>

                <HorizontalDivider className={cx("program__divider")} />

                {presentations.map(
                    ({ time, avatar, name, title, presentationTitle, presentationDescription }) => (
                        <Fragment key={presentationTitle}>
                            <div className={cx("program__text")}>{time}</div>

                            <div className={cx("program__card")}>
                                <Image
                                    className={cx("program__card-avatar")}
                                    src={avatar}
                                    height={170}
                                    width={170}
                                    alt={name}
                                />
                                <div className={cx("program__card-text")}>{name}</div>
                                <div className={cx("program__card-text")}>{title}</div>
                            </div>

                            <div>
                                <div className={cx("program__text")}>{presentationTitle}</div>
                                <div className={cx("program__description")}>
                                    {presentationDescription}
                                </div>
                            </div>
                        </Fragment>
                    )
                )}
            </section>
        </>
    );
};
