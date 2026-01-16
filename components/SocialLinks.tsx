const socials = [
  { name: "X", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "GitHub", href: "#" },
  { name: "Email", href: "mailto:your@email.com" },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-2 text-sm">
      {socials.map((social, index) => (
        <span key={social.name} className="flex items-center">
          <a
            href={social.href}
            className="social-link"
            target={social.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
          >
            {social.name}
          </a>
          {index < socials.length - 1 && (
            <span className="text-muted-foreground mx-2">\</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default SocialLinks;
