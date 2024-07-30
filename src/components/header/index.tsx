import classNames from "classnames/bind";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";

import { LangSelect } from "@/components/lang-select";

import styles from "./styles.module.css";

const cx = classNames.bind(styles);

export const Header = () => {
    const { pathname } = useRouter();

    return (
        <header className={cx("header")}>
            <LangSelect />

            <nav>
                {[
                    {
                        href: "/",
                        text: <FormattedMessage id="header.main" defaultMessage="Главная" />,
                    },
                    {
                        href: "/buy-tickets",
                        text: (
                            <FormattedMessage
                                id="header.buyTickets"
                                defaultMessage="Купить билеты"
                            />
                        ),
                    },
                    {
                        href: "/program",
                        text: <FormattedMessage id="header.program" defaultMessage="Программа" />,
                    },
                ].map(({ href, text }) => (
                    <Link key={href} href={href}>
                        <a
                            className={cx("navigation__link", {
                                navigation__link_active: pathname === href,
                            })}
                        >
                            {text}
                        </a>
                    </Link>
                ))}
            </nav>
        </header>
    );
};
