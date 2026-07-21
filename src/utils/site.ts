export const siteName = "Dr. Pavel Yarmak, MD, FRCSC";

export const navigationLinks = [
  // { label: "Home", href: "/" },
  // { label: "About", href: "/about" },
  // { label: "Services", href: "/services" },
  // { label: "Patient Information", href: "/patient-information" },
  // { label: "Contact", href: "/contact" },
];

export const legalLinks = [
  // { label: "Privacy", href: "/privacy" },
  // { label: "Terms", href: "/terms" },
];

const externalLinkPattern = /^(?:[a-z]+:)?\/\//i;
const trimSlashes = (value: string) => value.replace(/^\/+|\/+$/g, "");

export const withBase = (path = "/") => {
  if (
    externalLinkPattern.test(path) ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const trimmedPath = trimSlashes(path);
  const isFilePath = /\.[a-z0-9]+$/i.test(trimmedPath.split("/").pop() ?? "");

  if (!trimmedPath) {
    return normalizedBase;
  }

  return isFilePath
    ? `${normalizedBase}${trimmedPath}`
    : `${normalizedBase}${trimmedPath}/`;
};

export const toRoutePath = (pathname: string) => {
  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base === "/" ? "/" : base.replace(/\/+$/, "");
  let nextPath = pathname || "/";

  if (normalizedBase !== "/" && nextPath.startsWith(normalizedBase)) {
    nextPath = nextPath.slice(normalizedBase.length) || "/";
  }

  if (!nextPath.startsWith("/")) {
    nextPath = `/${nextPath}`;
  }

  nextPath = nextPath.replace(/\/index\.html$/, "/").replace(/\/+$/, "");

  return nextPath || "/";
};
