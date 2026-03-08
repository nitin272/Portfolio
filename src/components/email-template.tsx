import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", backgroundColor: "#f5f5f5" }}>
    <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px" }}>
      <h1 style={{ color: "#333", marginBottom: "10px" }}>New Message from {fullName}</h1>
      <div style={{ marginBottom: "15px", color: "#666" }}>
        <strong>From:</strong> {email}
      </div>
      <div style={{ marginBottom: "15px", color: "#666" }}>
        <strong>Tag:</strong> <span style={{ backgroundColor: "#007bff", color: "#fff", padding: "4px 8px", borderRadius: "4px" }}>Client</span>
      </div>
      <div style={{ marginTop: "20px", borderTop: "1px solid #eee", paddingTop: "20px" }}>
        <h3 style={{ color: "#333", marginBottom: "10px" }}>Message:</h3>
        <p style={{ color: "#555", lineHeight: "1.6", whiteSpace: "pre-wrap" }}>{message}</p>
      </div>
    </div>
  </div>
);
