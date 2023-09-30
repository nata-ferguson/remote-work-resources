export default function Footer() {
  const siteURL = window.location.href;
  return (
    <div className="footer">
      <p>
        Developed and maintained by
        <a href="mailto:dev.nferguson@gmail.com">Natasha Ferguson</a>
      </p>
      <div className="social-icons">
        {/* Facebook Icon and Share Link */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${siteURL}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-facebook"></i>
        </a>
        {/* Twitter Icon and Share Link */}
        <a
          href={`https://twitter.com/intent/tweet?url=${siteURL}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-twitter"></i>
        </a>
        {/* LinkedIn Icon and Share Link */}
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
