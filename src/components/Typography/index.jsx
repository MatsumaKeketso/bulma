import { Colours } from "../../assets/Colors";
import "./style.scss";
/**
 * Typography components consists of Heading, Subtitle and Body.
 * Heading and Subtitle takes "variants" for different sizes.
 * Body takes "size" for different sizes
 * Variants:
 * - Heading: is-1 to is-6
 * - Subtitle: is-1 to is-7
 *
 * Sizes
 * - Body: 12, 14, 16, 20 and 24
 */
export const Typography = {
  Heading: ({
    children,
    variant = "is-1",
    bold = true,
    color = Colours.shades.black,
    textAlign = "start",
  }) => {
    return (
      <p
        style={{ color: color, textAlign: textAlign }}
        className={`main-typography ${
          bold ? "bold" : null
        } heading--${variant}`}
      >
        {children}
      </p>
    );
  },
  Subtitle: ({ children, variant = "is-1", color = Colours.shades.black }) => {
    return (
      <p
        style={{ color: color }}
        className={`main-typography subtitle--${variant}`}
      >
        {children}
      </p>
    );
  },
  Body: ({
    children,
    size = "16",
    bold = false,
    color = Colours.shades.black,
  }) => {
    return (
      <p
        style={{ color: color }}
        className={`main-typography ${bold ? "bold" : null} body--${size}`}
      >
        {children}
      </p>
    );
  },
  Link: ({
    children,
    size = "16",
    bold = false,
    color = Colours.link.main,
    href,
    target = "_blank",
  }) => {
    return (
      <a
        href={href}
        target={target}
        style={{ color: color, textDecoration: "underline" }}
        className={`main-typography ${bold ? "bold" : null} body--${size}`}
      >
        {children}
      </a>
    );
  },
};
