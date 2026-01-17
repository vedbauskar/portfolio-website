const socials = [
  { name: "Instagram", href: "https://www.instagram.com/vedbauskar/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/vedbauskar/" },
  { name: "GitHub", href: "https://github.com/vedbauskar" },
  { name: "Spotify", href: "https://open.spotify.com/user/5qdxsy6hrb99kdrzvf2gdfhem?si=3be2f3e785434f18" },
  { name: "Email", href: "mailto:ved.bauskar@gmail.com" },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-2 text-sm">
      {socials.map((social, index) => (
        <span key={social.name} className="flex items-center">
          <a
            href={social.href}
            className="social-link"
            target={social.href?.startsWith("mailto") ? undefined : "_blank"}
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
