import classNames from "classnames/bind";
import { FC, SVGProps } from "react";

import styles from "./styles.module.css";

const cx = classNames.bind(styles);

interface IconWrapperProps extends SVGProps<SVGSVGElement> {
    Icon: FC<SVGProps<SVGElement>>;
    rtl?: boolean;
}

export const IconWrapper: FC<IconWrapperProps> = ({ Icon, className, rtl = false, ...props }) => (
    <Icon {...props} className={cx(className, { "icon-wrapper_rtl": rtl })} />
);
