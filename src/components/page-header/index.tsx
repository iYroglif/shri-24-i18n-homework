import classNames from "classnames/bind";
import { FC, ReactNode } from "react";
import { FormattedDate, FormattedMessage } from "react-intl";

import AltLogoIcon from "@/icons/alt-logo.svg";
import { CONFERENCE_DATE } from "@/shared/conference-date";

import styles from "./styles.module.css";

const cx = classNames.bind(styles);

interface PageHeaderProps {
    title: ReactNode;
}

export const PageHeader: FC<PageHeaderProps> = ({ title }) => (
    <header className={cx("header")}>
        <h1 className={cx("header__title")}>{title}</h1>

        <div className={cx("header__subtitle")}>
            <AltLogoIcon />
            <h2 className={cx("header__subtitle-text")}>
                <FormattedMessage
                    id="pageHeader.subtitle"
                    defaultMessage="I&L–{year}"
                    values={{
                        year: (
                            <FormattedDate
                                value={CONFERENCE_DATE}
                                year="numeric"
                                numberingSystem="latn"
                            />
                        ),
                    }}
                />
            </h2>
        </div>
    </header>
);
