import classNames from "classnames/bind";
import { FormattedDate, FormattedMessage } from "react-intl";

import TelegramIcon from "@/icons/telegram.svg";
import VkontakteIcon from "@/icons/vkontakte.svg";
import { BRAND_NAMES } from "@/shared/brand-names";

import styles from "./styles.module.css";

const cx = classNames.bind(styles);

export const Footer = () => (
    <footer className={cx("footer")}>
        <div className={cx("footer-content")}>
            <div>
                <div className={cx("footer-content__text")}>
                    <FormattedMessage
                        id="footer.errorReport"
                        defaultMessage="Если вы нашли ошибку, пожалуйста, <link>сообщите нам</link>"
                        values={{ link: (text) => <a href="#">{text}</a> }}
                    />
                </div>

                <div className={cx("footer-content__copyright")}>
                    <div className={cx("footer-content__text")}>
                        <FormattedMessage
                            id="footer.license"
                            defaultMessage="Все материалы доступны по лицензии <link1>CC BY-NC 3.0</link1> с обязательным указанием © ООО «<link2>{brand}</link2>»"
                            values={{
                                brand: BRAND_NAMES["ru"],
                                link1: (text) => <a href="#">{text}</a>,
                                link2: (text) => <a href="#">{text}</a>,
                            }}
                        />
                    </div>
                    <div className={cx("footer-content__text")}>
                        <FormattedMessage
                            id="footer.copyright"
                            defaultMessage="© {yearStart}–{yearEnd}, ООО «<link>{brand}</link>»"
                            values={{
                                brand: BRAND_NAMES["ru"],
                                link: (text) => <a href="#">{text}</a>,
                                yearStart: (
                                    <FormattedDate
                                        value={new Date(2019, 0)}
                                        year="numeric"
                                        numberingSystem="latn"
                                    />
                                ),
                                yearEnd: (
                                    <FormattedDate
                                        value={new Date(2024, 0)}
                                        year="numeric"
                                        numberingSystem="latn"
                                    />
                                ),
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className={cx("footer-content__social")}>
                <div className={cx("footer-content__text")}>
                    <FormattedMessage id="footer.subscribe" defaultMessage="Подпишитесь" />
                </div>

                <div className={cx("footer-content__social-links")} data-testid="social-icons">
                    {[TelegramIcon, VkontakteIcon].map((Icon, index) => (
                        <a key={index} href="#">
                            <Icon />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
);
