import BreadCumb from "@/app/Components/Common/BreadCumb";
import ContactPageForm from "@/app/Components/Contact/ContactPageForm";

const CONTACT = [
  {
    icon: "bi-envelope",
    label: "Email",
    value: "admin@groupbuyseotool.us",
    href: "mailto:admin@groupbuyseotool.us",
  },
  {
    icon: "bi-whatsapp",
    label: "WhatsApp",
    value: "+1 (520) 563-6362",
    href: "https://wa.me/15205636362",
  },
  {
    icon: "bi-skype",
    label: "Skype",
    value: "seogroupbuy.support",
    href: "skype:seogroupbuy.support?chat",
  },
];

const page = () => {
  return (
    <div>
      <BreadCumb Title="Contact Us" />

      <section className="bz-section white">
        <div className="bz-container">
          <div className="bz-center">
            <p className="bz-eyebrow">Support</p>
            <h2 className="bz-h2">Talk to the Toolstap team</h2>
            <p className="bz-lead center">
              Questions about plans, access, or billing? Reach us by email,
              WhatsApp, or Skype — or send a message below.
            </p>
          </div>

          <div className="bz-contact-info-grid">
            {CONTACT.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="bz-contact-info-card"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <div className="ico">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <span className="label">{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>

          <div className="bz-contact-layout">
            <div>
              <h3 className="bz-contact-form-title">Send a message</h3>
              <p className="bz-lead" style={{ marginBottom: 24 }}>
                Tell us which tools you need or describe the issue. We typically
                reply within one business day.
              </p>
              <ContactPageForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
