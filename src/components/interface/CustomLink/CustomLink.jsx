import Link from "@mui/material/Link";

const CustomLink = ({ href, children }) => (
  <Link
    href={href}
    underline="none"
    color="white"
    sx={{ fontWeight: "fontWeightHeavy" }}
  >
    {children}
  </Link>
);

export default CustomLink;
