import classNames from "classnames/bind";
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { FormattedMessage, FormattedNumber, useIntl } from "react-intl";

import { Button } from "@/components/button";
import { HorizontalDivider } from "@/components/horizontal-divider";
import { PageHeader } from "@/components/page-header";
import { Ticket } from "@/components/ticket";
import { CONFERENCE_DATE } from "@/shared/conference-date";

import styles from "./styles.module.css";

const cx = classNames.bind(styles);

export const BuyTicketsPage: NextPage = () => {
    const [selectedPrice, setSelectedPrice] = useState(2500);
    const [ticketCount, setTicketCount] = useState(1);
    const intl = useIntl();

    const totalPrice = selectedPrice * ticketCount;

    return (
        <>
            <Head>
                <title>
                    {intl.formatMessage<string>(
                        {
                            id: "buyTicketsPage.title",
                            defaultMessage: "Купить билеты - I&L–{year}",
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
                title={
                    <FormattedMessage
                        id="buyTicketsPage.buyTickets"
                        defaultMessage="Купить билеты"
                    />
                }
            />

            <form className={cx("form")}>
                <HorizontalDivider />

                <fieldset className={cx("form__tickets")}>
                    <div className={cx("form__label")}>
                        <FormattedMessage
                            id="buyTicketsPage.chooseTicketType"
                            defaultMessage="Выберите тип билета"
                        />
                    </div>
                    <div className={cx("form__tickets-wrapper")}>
                        <Ticket
                            id="ticket-default"
                            title={
                                <FormattedMessage
                                    id="buyTicketsPage.defaultTicket"
                                    defaultMessage="Входной билет {br} {price}"
                                    values={{
                                        br: <br />,
                                        price: (
                                            <FormattedNumber
                                                value={2500}
                                                style="currency"
                                                currency="RUB"
                                                numberingSystem="latn"
                                            />
                                        ),
                                    }}
                                />
                            }
                            price={2500}
                            description={
                                <FormattedMessage
                                    id="buyTicketsPage.defaultTicketDescription"
                                    defaultMessage="Простой входной билет предоставляет доступ на мероприятие и является вашим пропуском на конференцию"
                                />
                            }
                            defaultChecked
                            onChange={setSelectedPrice}
                        />

                        <Ticket
                            vip
                            id="ticket-vip"
                            title={
                                <FormattedMessage
                                    id="buyTicketsPage.vipTicket"
                                    defaultMessage="VIP посещение {br} {price}"
                                    values={{
                                        br: <br />,
                                        price: (
                                            <FormattedNumber
                                                value={15000}
                                                style="currency"
                                                currency="RUB"
                                                numberingSystem="latn"
                                            />
                                        ),
                                    }}
                                />
                            }
                            price={15000}
                            description={
                                <FormattedMessage
                                    id="buyTicketsPage.vipTicketDescription"
                                    defaultMessage="Получите дополнительный доступ к закрытым дискуссиям, личным встречам с ведущими экспертами"
                                />
                            }
                            onChange={setSelectedPrice}
                        />
                    </div>
                </fieldset>

                <fieldset className={cx("form__inputs")}>
                    <label className={cx("form__inputs-label")}>
                        <div className={cx("form__label")}>
                            <FormattedMessage
                                id="buyTicketsPage.name"
                                defaultMessage="Имя и фамилия"
                            />
                        </div>
                        <input
                            className={cx("form__input")}
                            type="text"
                            placeholder={intl.formatMessage({
                                id: "buyTicketsPage.namePlaceholder",
                                defaultMessage: "Введите имя и фамилию",
                            })}
                        />
                    </label>

                    <label className={cx("form__inputs-label")}>
                        <div className={cx("form__label")}>
                            <FormattedMessage
                                id="buyTicketsPage.email"
                                defaultMessage="Электронная почта"
                            />
                        </div>
                        <input
                            className={cx("form__input")}
                            type="email"
                            placeholder="example@example.com"
                        />
                    </label>

                    <label className={cx("form__inputs-label")}>
                        <div className={cx("form__label")}>
                            <FormattedMessage
                                id="buyTicketsPage.phoneNumber"
                                defaultMessage="Номер телефона"
                            />
                        </div>
                        <input className={cx("form__input", "form__input_phone")} type="tel" />
                    </label>

                    <div className={cx("form__inputs-label")}>
                        <div className={cx("form__label")}>
                            <FormattedMessage
                                id="buyTicketsPage.ticketCount"
                                defaultMessage="Количество билетов"
                            />
                        </div>
                        <div>
                            {[1, 2, 3, 4, 5, 6].map((count) => (
                                <div className={cx("form__tickets-count")} key={count}>
                                    <input
                                        className={cx("form__tickets-count-input")}
                                        type="radio"
                                        name="tickets"
                                        id={`tickets_${count}`}
                                        checked={count === ticketCount}
                                        onChange={() => setTicketCount(count)}
                                    />
                                    <label htmlFor={`tickets_${count}`}>{count}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </fieldset>

                <div className={cx("form__submit")}>
                    <Button type="button">
                        <FormattedMessage
                            id="buyTicketsPage.pay"
                            defaultMessage="Оплатить {totalPrice}"
                            values={{
                                totalPrice: (
                                    <FormattedNumber
                                        value={totalPrice}
                                        style="currency"
                                        currency="RUB"
                                        numberingSystem="latn"
                                    />
                                ),
                            }}
                        />
                    </Button>
                    <div className={cx("form__submit-description")}>
                        <FormattedMessage
                            id="buyTicketsPage.agreement"
                            defaultMessage="Нажимая «Оплатить», вы соглашаетесь с условиями приобретения и офертой"
                        />
                    </div>
                </div>
            </form>
        </>
    );
};
