export default function Footer() {
  const siteURL = window.location.href;
  return (
    <div className="footer">
      <p>
        Developed and maintained by
        <a href="mailto:dev.nferguson@gmail.com">Natasha Ferguson</a>
      </p>
      <div className="social-icons">
        <p>Share</p>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${siteURL}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-facebook"></i>
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${siteURL}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-twitter"></i>
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${siteURL}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}
