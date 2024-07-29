import classNames from "classnames/bind";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";

import DoneIcon from "@/icons/done.svg";
import EarthIcon from "@/icons/earth.svg";
import { getLanguage } from "@/features/i18n";

import styles from "./styles.module.css";
import { useClickOutside } from "./use-click-outside";

const cx = classNames.bind(styles);

const LANGUAGES: Record<string, string> = {
    ru: "Русский",
    en: "English",
    ar: "اَلْعَرَبِيَّةُ",
    es: "Español",
};

export const LangSelect = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { locale } = useIntl();
    const router = useRouter();

    const handleMenuClose = useCallback(() => {
        setShowMenu(false);
    }, []);

    const handleMenuToggle = useCallback(() => {
        setShowMenu((prevShowMenu) => !prevShowMenu);
    }, []);

    const langSelectRef = useClickOutside<HTMLDivElement>(handleMenuClose);

    const selectedLang = getLanguage(locale);

    return (
        <div className={cx("lang-select")} ref={langSelectRef}>
            <button
                className={cx("lang-select__button")}
                onClick={handleMenuToggle}
                data-testid="lang-select-button"
            >
                <span className={cx("lang-select__text")}>{LANGUAGES[selectedLang]}</span>
                <EarthIcon />
            </button>

            {showMenu && (
                <ul className={cx("lang-select__menu")} data-testid="lang-select-menu">
                    {Object.entries(LANGUAGES).map(([lang, langName]) => (
                        <li
                            className={cx("lang-select__menu-item")}
                            key={lang}
                            onClick={() => {
                                handleMenuClose();
                                router
                                    .push(router.asPath, router.asPath, { locale: lang })
                                    .then(() => router.reload());
                            }}
                        >
                            <span className={cx("lang-select__menu-item-text")}>{langName}</span>
                            {lang === selectedLang && <DoneIcon />}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
